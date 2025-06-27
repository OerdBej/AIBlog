import express, { Express } from "express";
import { connectToDatabase } from "./config/database";
import { StoryModel } from "./models/Story";
import { StoryPresenter } from "./presenters/StoryPresenter";
import { createStoryRouter } from "./routes/storyRoutes";

const app: Express = express();
app.use(express.json()); //user sended a obj so we handle it

// Connect to MongoDB before starting the server
connectToDatabase()
  .then((db) => {
    // Initialize models and presenters
    const storyModel = new StoryModel(db);
    const storyPresenter = new StoryPresenter(storyModel);
    
    // Set up routes
    const storyRouter = createStoryRouter(storyPresenter);
    app.use("/api/stories", storyRouter);
    
    app.listen(3000, () => {
      console.log("Server is up BRO");
      console.log("MongoDB connection established");
    });
  })
  .catch((err) => {
    console.error("Failed to connect to MongoDB:", err);
  });
