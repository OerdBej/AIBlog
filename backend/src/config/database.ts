import { Db, MongoClient, ServerApiVersion } from "mongodb";

let db: Db;

export async function connectToDatabase(): Promise<Db> {
  if (db) return db;

  const uri = "mongodb://127.0.0.1:27017";
  const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    },
  });

  await client.connect();
  db = client.db("mern-journal");
  
  return db;
}
