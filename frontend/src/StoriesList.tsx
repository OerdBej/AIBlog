import { Link } from "react-router";

interface Story {
  name: string;
  title: string;
  content: string[];
}

//props are objects so interface
interface StoriesProps {
  stories: Story[];
}

export default function StoriesList({ stories }: StoriesProps) {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6">
      {stories.map((story) => (
        <div>
          <h3>{story.title}</h3>
          {/* content is a key with value of array that holds string. iterate over,get the first paragraph and limit by characters */}
          <p>{story.content[0].substring(0, 100) + "..."}</p>
          <Link to={`/stories/${story.name}`}>Read More</Link>
        </div>
      ))}
    </section>
  );
}
