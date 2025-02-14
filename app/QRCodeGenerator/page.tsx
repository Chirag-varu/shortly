'use client'

import { useState } from 'react';
import axios from 'axios';
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Download, QrCode } from "lucide-react"

const QRCodeGenerator = () => {
    const [url, setUrl] = useState('');
    const [qrCode, setQrCode] = useState('');
    const [isLoading, setIsLoading] = useState(false)

    const generateQRCode = async () => {
        setIsLoading(true);
        if (!url.trim()) return;

        try {
            const response = await axios.get('/api/generate-qr', {
                params: { url },
            });
            setQrCode(response.data.qrCode);
        } catch (error) {
            console.error('Error generating QR Code:', error);
        } finally {
            setIsLoading(false);
        }
    };

    const downloadQRCode = () => {
        const link = document.createElement("a");
        link.href = qrCode;
        link.download = "QRCode.png";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    const qrCodeSteps = [
        {
            number: "01",
            title: "Enter Your URL",
            description: "Paste the URL that you want to generate a QR code for in the input field.",
        },
        {
            number: "02",
            title: 'Click "Generate QR Code"',
            description: "Press the button, and we will instantly generate a scannable QR code for you.",
        },
        {
            number: "03",
            title: "Scan or Download",
            description: "Scan the QR code directly or download it to share effortlessly.",
        },
    ];


    return (
        <>
            <div className="sm:mx-auto max-w-md bg-white shadow-xl border border-gray-200 my-16 p-8 rounded-xl flex flex-col gap-6 mx-4">
                <h1 className="text-purple-700 text-center font-extrabold text-3xl">QR Code Generator</h1>
                <input
                    type="text"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    placeholder="Enter Your URL"
                    className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                <button onClick={generateQRCode} className="bg-purple-600 hover:bg-purple-700 transition-all duration-300 rounded-lg shadow-lg py-3 font-bold text-white text-lg">
                    {isLoading ? "Generating..." : "Generate QR Code"}
                </button>
                {qrCode && (
                    <div className="flex flex-col items-center mt-6 gap-4">
                        {/* QR Code Image */}
                        <img src={qrCode} alt="QR Code" className="shadow-lg border border-gray-300 rounded-lg" />

                        {/* Download Button */}
                        <Button onClick={downloadQRCode} variant="outline" className="w-full">
                            <Download className="mr-2 h-4 w-4" /> Download QR Code
                        </Button>
                    </div>
                )}

            </div>

            <section id="how-it-works" className="py-10">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-2xl font-bold text-center text-purple-700 mb-8">How It Works</h2>
                    <div className="grid md:grid-cols-3 gap-8 mx-4 sm:mx-auto">
                        {qrCodeSteps.map((step, index) => (
                            <Card key={index} className="flex flex-col items-center text-center p-6">
                                <QrCode className="h-12 w-12 text-purple-500 mb-4" />
                                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                                <p className="text-gray-600">{step.description}</p>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default QRCodeGenerator;
