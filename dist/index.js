import "dotenv/config";
import express from 'express'; // ⬅️ NEW
import { ApolloServer } from "apollo-server-express"; // ⬅️ CHANGED
import mongoose from "mongoose";
import cors from 'cors'; // ⬅️ NEW
import typeDefs from "./schema/schema.js";
import resolvers from "./graphql/resolvers/index.js";
const MONGODB_URI = process.env.MONGODB_URI;
const PORT = process.env.PORT || 4000;
// const FRONTEND_URL_PROD = 'https://agency-beta-kohl.vercel.app/'; // Your Vercel URL
// const FRONTEND_URL_DEV = 'http://localhost:3000';
async function startServer() {
    if (!MONGODB_URI) {
        throw new Error("MONGODB_URI environment variable is not defined.");
    }
    await mongoose.connect(MONGODB_URI);
    console.log("✅ Connected to MongoDB");
    const app = express(); // ⬅️ Initialize Express
    // 1. Configure CORS Middleware
    // DANGEROUS CODE - DO NOT USE THIS IN PRODUCTION IF YOU NEED AUTHENTICATION
    app.use(cors({
        origin: '*', // Allows all origins
        credentials: false // Must be false or omitted when origin is '*'
    }));
    const server = new ApolloServer({
        typeDefs,
        resolvers,
    });
    await server.start(); // ⬅️ Start Apollo Server
    // 2. Apply Apollo Middleware to a specific path
    server.applyMiddleware({ app, path: '/graphql' });
    app.listen(PORT, () => {
        console.log(`🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`);
        console.log(`The official endpoint on Render is at: ${server.graphqlPath}`);
    });
}
startServer().catch((err) => console.error(err));
