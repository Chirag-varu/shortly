"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FaSadTear } from "react-icons/fa";

export default function page_not_found() {
    return (
        <div className="flex flex-col items-center justify-center h-96 text-center">
            <FaSadTear className="text-6xl text-gray-600 mb-4" />
            <h1 className="text-4xl font-bold mb-2">404 - Page Not Found</h1>
            <p className="text-gray-500 mb-6">Sorry, the page you are looking for does not exist.</p>
            <Link href="/">
                <Button className="bg-purple-600 text-white px-4 py-2 hover:bg-purple-800 rounded-lg">Go Home</Button>
            </Link>
        </div>
    );
}
