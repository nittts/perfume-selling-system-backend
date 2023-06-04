import { MongoClient } from "mongodb";

const uri = process.env.DB_MONGO || "";

const mongo = new MongoClient(uri);

mongo.connect();

const mongoDatabase = mongo.db("perfume-selling-mongo");

async function runTestMongo() {
  try {
    const movies = mongoDatabase.collection("movies");
    // Query for a movie that has the title 'Back to the Future'
    const query = { title: "Back to the Future" };
    const movie = await movies.findOne(query);
    console.log("Connected to Mongo!");
  } finally {
    // Ensures that the client will close when you finish/error
    await mongo.close();
  }
}

export { mongoDatabase, runTestMongo };
