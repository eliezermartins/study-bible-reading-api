import { MongoClient } from "mongodb";

export default async function dbConnect(connectionString) {
    let mongoClient;

    try {
        mongoClient = await MongoClient.connect(connectionString, { tlsAllowInvalidCertificates: true });
        await mongoClient.connect();
        console.log("Connected to MongoDB Atlas successfully!");

        return mongoClient;
    } catch (error) {
        console.log("Failed to connect to the database!", error);
        process.exit();
    }
}