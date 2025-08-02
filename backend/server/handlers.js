// const { MongoClient } = require("mongodb");
// require("dotenv").config();
// const { MONGO_URI, TEST_TOKEN} = process.env;

// const client = new MongoClient(MONGO_URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// });

// const call = async (req, res) => {
//     try {
//         await client.connect();
//         // base de datos se llama sample_mflix
//         // collection se llama users
//         const db = client.db("sample_mflix");
//         const collection = db.collection("users");

//         // Example operation: find all documents in the collection
//         const documents = await collection.find({}).toArray();
        
//         res.status(200).json(documents);
//     } catch (error) {
//         console.error("Error during database operation:", error);
//         res.status(500).json({ error: "Internal Server Error" });
//     } finally {
//         await client.close();
//     }
// };
// module.exports = {
//     call
// };
const { getDB } = require("./db/connection");

const call = async (req, res) => {
    try {
        const db = getDB();
        const collection = db.collection("users");

        const documents = await collection.find({}).toArray();
        res.status(200).json(documents);
    } catch (error) {
        console.error("Error during database operation:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

module.exports = { call };