import { Link } from "react-router";

interface Story {
  name: string;
  title: string;
  content: string[];
}

interface StoriesProps {
  stories: Story[];
}

export default function StoriesList({ stories }: StoriesProps) {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6">
      {stories.map((story) => (
        <div
          key={story.name}
          className="bg-[#309898] text-white px-4 py-6 flex flex-col gap-y-4 rounded"
        >
          <h3 className="font-bold text-xl">{story.title}</h3>
          {/* content is a key with value of array that holds string. iterate over,get the first paragraph and limit by characters */}
          <p>{story.content[0].substring(0, 100) + "..."}</p>
          <Link
            className="text-lg px-2 py-1.5 bg-[#1E3E62] rounded-2xl self-start"
            to={`/stories/${story.name}`}
          >
            Read More
          </Link>
        </div>
      ))}
    </section>
  );
}
