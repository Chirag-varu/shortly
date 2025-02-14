import QRCode from 'qrcode';

export async function GET(req) {
    const { searchParams } = new URL(req.url);
    const url = searchParams.get('url');

    if (!url) {
        return new Response(JSON.stringify({ error: "Valid URL is required" }), {
            status: 400,
            headers: { "Content-Type": "application/json" },
        });
    }

    try {
        const qrCodeDataURL = await QRCode.toDataURL(url);
        return new Response(JSON.stringify({ qrCode: qrCodeDataURL }), {
            status: 200,
            headers: { "Content-Type": "application/json" },
        });
    } catch (error) {
        return new Response(JSON.stringify({ error: "QR Code generation failed" }), {
            status: 500,
            headers: { "Content-Type": "application/json" },
        });
    }
}
