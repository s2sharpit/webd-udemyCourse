const { MongoClient } = require("mongodb");

// Connection URI
const uri = "mongodb://localhost:27017";

// Create a new MongoClient
const client = new MongoClient(uri);

async function run() {
  try {
    // Connect the client to the server (optional starting in v4.7)
    await client.connect();

    // Establish and verify connection
    await client.db("admin").command({ ping: 1 });
    console.log("Connected successfully to server");

    //Create a Databse
    const db = client.db("fruitsDB");

    const fruits = db.collection("fruits");
    // // create a document to insert
    // const docs = [
    //   { name: "Apple", score: 8, review: "Great fruit" },
    //   { name: "Orange", score: 6, review: "Kinda sour" },
    //   { name: "Banana", score: 9, review: "Great stuff!" }
    // ];
    // // this option prevents additional documents from being inserted if one fails
    // const options = { ordered: true };
    // const result = await fruits.insertMany(docs, options);
    // console.log(`${result.insertedCount} documents were inserted`);


    //To show FRUITS
    const showFruits = await fruits.find({}).toArray();
    console.log(showFruits);
    
  } finally {
    await client.close();
  }
}
run().catch(console.dir);
