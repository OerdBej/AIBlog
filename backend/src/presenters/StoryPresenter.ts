import { Comment, Story, StoryModel } from "../models/Story";

export class StoryPresenter {
  private storyModel: StoryModel;

  constructor(storyModel: StoryModel) {
    this.storyModel = storyModel;
  }

  async getStoryByName(name: string): Promise<Story | null> {
    return await this.storyModel.findByName(name);
  }

  async incrementLikes(name: string): Promise<Story | null> {
    return await this.storyModel.incrementLikes(name);
  }

  async addComment(name: string, writtenBy: string, content: string): Promise<Story | null> {
    const comment: Comment = { writtenBy, content };
    return await this.storyModel.addComment(name, comment);
  }
}
