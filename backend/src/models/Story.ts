import { Collection, Db } from "mongodb";

export interface Comment {
  writtenBy: string;
  content: string;
}

export interface Story {
  name: string;
  likes: number;
  comments: Comment[];
}

export const initialStories: Story[] = [
  { name: "Atomic-habits", likes: 0, comments: [] },
  { name: "Power-of-now", likes: 0, comments: [] },
  { name: "Thinking-fast-and-slow", likes: 0, comments: [] },
  { name: "Seven-habits", likes: 0, comments: [] },
  { name: "Mindset", likes: 0, comments: [] },
  { name: "Switch", likes: 0, comments: [] },
];

export class StoryModel {
  private collection: Collection<Story>;

  constructor(db: Db) {
    this.collection = db.collection<Story>("stories");
  }

  async findByName(name: string): Promise<Story | null> {
    return await this.collection.findOne({ name });
  }

  async incrementLikes(name: string): Promise<Story | null> {
    const result = await this.collection.findOneAndUpdate(
      { name },
      { $inc: { likes: 1 } },
      { returnDocument: "after" }
    );
    return result;
  }

  async addComment(name: string, comment: Comment): Promise<Story | null> {
    const result = await this.collection.findOneAndUpdate(
      { name },
      { $push: { comments: comment } },
      { returnDocument: "after" }
    );
    return result;
  }
}
