import dns from "node:dns"
dns.setServers(['8.8.8.8','8.8.4.4'])

import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "@better-auth/mongo-adapter";

const client = new MongoClient(process.env.MONGO_URI);
if (process.env.NODE_ENV !== "production") {
  globalThis._mongoClient = client;
}
const db = client.db("dragon-news");
export const auth = betterAuth({
  database: mongodbAdapter(db, {
    client,
  }),
    emailAndPassword: { 
    enabled: true, 
  },
});