"use client";

import Link from "next/link";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card"
import { Copy, ExternalLink, LinkIcon, Scissors, Share2 } from "lucide-react"

type Link = { original: string; short: string };

const Shorten = () => {
    const [url, setUrl] = useState("");
    const [shortUrl, setShortUrl] = useState("");
    const [links, setLinks] = useState<Link[]>([]);


    const generate = () => {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
            url: url,
            shorturl: shortUrl,
        });

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow" as RequestRedirect,
        };

        fetch("/api/generate", requestOptions)
            .then((response) => response.json())
            .then((result) => {
                const generatedLink = `${process.env.NEXT_PUBLIC_HOST}/${result.shortUrl}`;

                // Add the new link to the table
                setLinks((prevLinks) => [...prevLinks, { original: url, short: generatedLink }]);

                // Reset input fields
                setUrl("");
                setShortUrl("");
            })
            .catch((error) => console.error(error));
    };

    const copyToClipboard = async (text: string) => {
        try {
            await navigator.clipboard.writeText(text);
        } catch (err) {
            console.error("Failed to copy:", err);
        }
    };

    const steps = [
        {
            icon: <LinkIcon className="h-8 w-8 text-purple-500" />,
            title: "Paste your long URL",
            description: "Enter the long URL you want to shorten into our easy-to-use form.",
        },
        {
            icon: <Scissors className="h-8 w-8 text-purple-500" />,
            title: "Customize (Optional)",
            description: "Enter a custom alias to make your short link more memorable.",
        },
        {
            icon: <Share2 className="h-8 w-8 text-purple-500" />,
            title: "Generate and Share",
            description: "Click to generate your short URL, then copy and share it confidently.",
        },
    ]

    return (
        <>
            <div className="sm:mx-auto mx-4 max-w-md bg-white shadow-xl border border-gray-200 my-16 p-8 rounded-xl flex flex-col gap-6">
                <h1 className="font-extrabold text-3xl text-purple-700 text-center">Shorten Your URL</h1>
                <p className="text-gray-600 text-center">Create easy-to-share short links</p>

                <div className="flex flex-col gap-4">
                    <input
                        type="text"
                        value={url}
                        className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                        placeholder="Enter your URL"
                        onChange={(e) => setUrl(e.target.value)}
                    />

                    <input
                        type="text"
                        value={shortUrl}
                        className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                        placeholder="Custom alias (optional)"
                        onChange={(e) => setShortUrl(e.target.value)}
                    />

                    <button
                        onClick={generate}
                        className="bg-purple-600 hover:bg-purple-700 transition-all duration-300 rounded-lg shadow-lg py-3 font-bold text-white text-lg"
                    >
                        Generate Short URL
                    </button>
                </div>

                {/* Display Table if Links Exist */}
                {links.length > 0 && (
                    <div className="mt-6">
                        <h2 className="text-lg font-bold text-purple-700 text-center mb-4">Generated Links</h2>
                        <div className="overflow-x-auto">
                            <table className="w-full border border-gray-300 rounded-lg overflow-hidden shadow-lg">
                                <thead className="bg-purple-700 text-white">
                                    <tr>
                                        <th className="py-3 px-6 text-left">Short URL</th>
                                        <th className="py-3 px-6 text-left">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white">
                                    {links.map((link, index) => (
                                        <tr key={index} className="border-b border-gray-200 hover:bg-gray-100 transition-all">
                                            <td className="py-3 px-6 flex items-center gap-2">
                                                <Link
                                                    target="_blank"
                                                    href={link.short}
                                                    className="text-purple-600 font-medium flex items-center gap-1 hover:text-purple-800 transition-all"
                                                >
                                                    {link.short}
                                                    <ExternalLink className="h-4 w-4" />
                                                </Link>
                                            </td>
                                            <td className="py-3 px-3">
                                                <div className="flex gap-2">
                                                    <Button
                                                        variant="outline"
                                                        size="sm"
                                                        className="flex items-center gap-2 border-gray-400 hover:bg-gray-200"
                                                        onClick={() => copyToClipboard(link.short)}
                                                    >
                                                        <Copy className="h-4 w-4" />
                                                        Copy
                                                    </Button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                )}
            </div>

            <section id="how-it-works">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-2xl font-bold text-center text-purple-700 mb-8">How It Works</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {steps.map((step, index) => (
                            <Card key={index} className="flex flex-col items-center text-center p-6">
                                {step.icon}
                                <h3 className="text-lg font-semibold my-2">{step.title}</h3>
                                <p className="text-gray-600">{step.description}</p>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Shorten;
