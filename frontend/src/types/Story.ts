import type { Comment } from "./Comment";

export interface Story {
  name: string;
  title: string;
  content: string[];
  likes?: number;
  comments?: Comment[];
}
