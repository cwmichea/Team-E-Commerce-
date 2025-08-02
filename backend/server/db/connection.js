const { MongoClient, ServerApiVersion } = require("mongodb");
require("dotenv").config();

const uri = process.env.MONGO_URI;
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    },
});

let db;

const connectToDatabase = async () => {
    try{
        await client.connect();
        db = client.db("sample_mflix");
        // Test the connection
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    // } finally {
    //     await client.close();
    //     console.log("MongoDB connection closed");
    };
}

const getDB = () => {
    if (!db) {
        throw new Error("❌ DB not initialized. Did you forget to call connectToDB()?");
    };
    return db;
}

module.exports = {
    connectToDatabase,
    getDB
};
