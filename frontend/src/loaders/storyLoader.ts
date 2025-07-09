import axios from "axios";
import type { LoaderFunctionArgs } from "react-router";

export async function storyLoader({ params }: LoaderFunctionArgs) {
  try {
    const response = await axios.get(`/api/stories/${params.name}`);
    const { likes, comments } = response.data;
    return { likes, comments };
  } catch (error) {
    console.log("Error loading story data", error);
    return { likes: 0, comments: [] };
  }
}
