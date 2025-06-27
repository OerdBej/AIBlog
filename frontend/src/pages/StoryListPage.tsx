import StoriesList from "../components/stories/StoriesList";
import stories from "../data/content";

const StoryListPage = () => {
  return (
    <>
      <StoriesList stories={stories} />
    </>
  );
};

export default StoryListPage;
