import { redirect } from "next/navigation";
import clientPromise from "@/lib/mongodb";

export default async function Page({ params }) {
  const shorturl = (await params).shorturl;

  const client = await clientPromise;
  const db = client.db("shortly");
  const collection = db.collection("url");

  const doc = await collection.findOne({ shorturl: shorturl });
  if (doc) {
    await collection.updateOne({ shorturl: shorturl }, { $inc: { clicks: 1 } });
    redirect(doc.url);
  } else {
    redirect(`${process.env.NEXT_PUBLIC_HOST}/page_not_found`);
  }

  return <div>My Post: {url}</div>;
}
