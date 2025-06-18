import axios from "axios";
import type { LoaderFunctionArgs } from "react-router";

export async function storyLoader({ params }: LoaderFunctionArgs) {
  const response = await axios.get(`/api/stories/${params.name}`);
  const { likes, comments } = response.data;
  return { likes, comments };
}
