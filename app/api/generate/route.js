import clientPromise from "@/lib/mongodb";
import { customAlphabet } from "nanoid";

export async function POST(request) {
  try {
    const body = await request.json();
    const client = await clientPromise;
    const db = client.db("shortly");
    const collection = db.collection("url");

    let shorturl = body.shorturl?.trim();

    if (shorturl) {
      // Check if the provided short URL already exists
      const existingUrl = await collection.findOne({ shorturl });
      if (existingUrl) {
        return Response.json(
          { success: false, error: true, message: "Short URL already exists!" },
          { status: 400 }
        );
      }
    } else {
      // Generate a unique short URL
      const nanoid = customAlphabet(
        "ABCDEFGHJKLMNPQRSTUVWXYZabcdefghjkmnpqrstuvwxyz0123456789",
        5
      );
      do {
        shorturl = nanoid();
        var existingUrl = await collection.findOne({ shorturl });
      } while (existingUrl); // Regenerate if duplicate is found
    }

    // Insert the URL into the database
    await collection.insertOne({ url: body.url, shorturl, clicks: 0 });

    return Response.json(
      {
        success: true,
        error: false,
        message: "URL Generated Successfully",
        shortUrl: shorturl,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error in URL shortening:", error);
    return Response.json(
      { success: false, error: true, message: "Server Error" },
      { status: 500 }
    );
  }
}
