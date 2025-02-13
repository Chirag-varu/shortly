import clientPromise from "@/lib/mongodb";

export async function GET(req, { params }) {
  const client = await clientPromise;
  const db = client.db("shortly");
  const collection = db.collection("url");

  const { slug } = await params;
  if (!slug) {
    return new Response(JSON.stringify({ error: "Slug is required" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }
  const url = await collection.findOne({ shorturl: slug });

  if (!url) {
    return new Response(JSON.stringify({ error: "URL not found" }), {
      status: 404,
      headers: { "Content-Type": "application/json" },
    });
  }

  return new Response(JSON.stringify({ clicks: url.clicks }), { 
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
