import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;

let client;
let clientPromise;

if (!process.env.MONGODB_URI) {
  throw new Error("Add Mongo URI to .env.local");
}

if (process.env.NODE_ENV === "development") {
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, {
      tls: true, // Enable TLS/SSL
      tlsInsecure: false, // Ensure valid certificates are required
      minDHSize: 1024, // Minimum Diffie-Hellman key size (security)
      serverSelectionTimeoutMS: 5000, // Wait 5s before failing
      connectTimeoutMS: 10000, // Connection timeout
      retryWrites: true,
    });
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  client = new MongoClient(uri);
  clientPromise = client.connect();
}

export default clientPromise;
