import { useLoaderData, useParams } from "react-router";
import stories from "../data/content";

interface Story {
  likes: number;
  comments: { writtenBy: string; content: string }[];
}

export default function StoryPage() {
  const { name } = useParams();
  const { likes, comments }: Story = useLoaderData();

  const story = stories.find((story) => story.name === name)!;

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
      <p className="text-3xl bg-red-700"> {likes}</p>
    </>
  );
}
