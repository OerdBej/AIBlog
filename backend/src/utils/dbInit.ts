import { Db } from "mongodb";
import { initialStories, Story } from "../models/Story";

export async function initializeDatabase(db: Db): Promise<void> {
  const storiesCollection = db.collection<Story>("stories");
  
  // Check if collection is empty
  const count = await storiesCollection.countDocuments();
  
  if (count === 0) {
    console.log("Initializing database with sample stories...");
    await storiesCollection.insertMany(initialStories);
    console.log(`${initialStories.length} stories added to the database.`);
  } else {
    console.log(`Database already contains ${count} stories.`);
  }
}
