import { MongoClient } from "mongodb";

const uri = process.env.DB_MONGO || "";

const mongo = new MongoClient(uri);

mongo.connect();

const mongoDatabase = mongo.db("perfume-selling-mongo");

export { mongoDatabase };
