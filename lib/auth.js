
import { betterAuth } from "better-auth";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { nextCookies } from "better-auth/next-js";
import { MongoClient } from "mongodb";

const mongoUri = process.env.MONGODB_URI;

if (!mongoUri) {
  throw new Error("MONGODB_URI is missing from .env.local");
}

const globalForMongo = globalThis;

const client =
  globalForMongo._mongoClient || new MongoClient(mongoUri);

if (process.env.NODE_ENV !== "production") {
  globalForMongo._mongoClient = client;
}

const database = client.db("bazardor");

const socialProviders = {};

if (
  process.env.GOOGLE_CLIENT_ID &&
  process.env.GOOGLE_CLIENT_SECRET
) {
  socialProviders.google = {
    clientId: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  };
}

if (
  process.env.GITHUB_CLIENT_ID &&
  process.env.GITHUB_CLIENT_SECRET
) {
  socialProviders.github = {
    clientId: process.env.GITHUB_CLIENT_ID,
    clientSecret: process.env.GITHUB_CLIENT_SECRET,
  };
}


export const auth = betterAuth({
  database: mongodbAdapter(database),
  emailAndPassword: {
    enabled: true,
    autoSignIn: false,
  },
  socialProviders,
  plugins: [nextCookies()],
});