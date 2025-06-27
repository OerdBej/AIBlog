import express, { Request, Response, Router } from "express";
import { StoryPresenter } from "../presenters/StoryPresenter";

export function createStoryRouter(storyPresenter: StoryPresenter): Router {
  const router = express.Router();

  // Get story by name
  router.get("/:name", async (req: Request, res: Response) => {
    const { name } = req.params;
    const story = await storyPresenter.getStoryByName(name);
    res.json(story);
  });

  // Increment likes for a story
  router.post("/:name/likes", async (req: Request, res: Response) => {
    const { name } = req.params;
    const updatedStory = await storyPresenter.incrementLikes(name);
    res.json(updatedStory);
  });

  // Add a comment to a story
  router.post("/:name/comments", async (req: Request, res: Response) => {
    const { name } = req.params;
    const { writtenBy, content } = req.body;
    const updatedStory = await storyPresenter.addComment(name, writtenBy, content);
    res.json(updatedStory);
  });

  return router;
}
