import { useLoaderData, useParams } from "react-router";
import stories from "../data/content";
import axios from "axios";
import { useState } from "react";
import StoryComments from "../components/stories/StoryComments";
import AddComment from "./AddComment";
import useUserAccount from "../hooks/useUserAccount"; // <-- import the hook

interface Story {
  likes: number;
  comments: { writtenBy: string; content: string }[];
}

export default function StoryPage() {
  const { name } = useParams();
  const { likes: firstLikes, comments: initialComments }: Story =
    useLoaderData();
  const [likes, setLikes] = useState(firstLikes);
  const [comments, setComments] = useState(initialComments);
  const story = stories.find((story) => story.name === name)!;

  const { user } = useUserAccount(); // <-- get user

  async function likeStory() {
    const response = await axios.post(`/api/stories/${name}/likes`);
    const updatedData = response.data;
    setLikes(updatedData.likes);
  }

  async function commentStory({
    nameText,
    contentText,
  }: {
    nameText: string;
    contentText: string;
  }) {
    const response = await axios.post(`/api/stories/${name}/comments`, {
      writtenBy: nameText,
      content: contentText,
    });
    const updatedData = response.data;
    setComments(updatedData.comments);
  }
  return (
    <>
      <h1 className="text-center text-white text-3xl font-bold">
        {story.title}
      </h1>

      <section className="flex flex-col gap-3 lg:max-w-3xl lg:max-auto text-white">
        {story.content.map((item) => (
          <p className="text-xl" key={item}>
            {item}
          </p>
        ))}
      </section>
      <section className="space-y-6 self-center w-full text-white lg:max-w-3xl">
        <p className="text-left text-[#FF6599]">
          {likes} {likes === 1 ? "Like" : "Likes"}
        </p>
        {user && (
          <button
            className="text-white border border-[#FF6599 px-4 py-2 rounded]"
            onClick={likeStory}
          >
            Like Story
          </button>
        )}
      </section>
      {user ? (
        <AddComment commentStory={commentStory} />
      ) : (
        <p className="text-white text-center mt-4">
          Please log in to add a comment.
        </p>
      )}
      <StoryComments comments={comments} />
    </>
  );
}
