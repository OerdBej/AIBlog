import { useState } from "react";

interface CommentStoryProp {
  commentStory: ({
    nameText,
    contentText,
  }: {
    nameText: string;
    contentText: string;
  }) => void;
}

export default function AddComment({ commentStory }: CommentStoryProp) {
  const [nameText, setNameText] = useState("");
  const [contentText, setContentText] = useState("");

  const handleCommenting = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!nameText || !contentText) return;
    commentStory({ nameText, contentText });
    setNameText("");
    setContentText("");
  };

  return (
    <>
      <form
        className="flex flex-col self-center w-full text-white lg:max-w-3xl my-8 gap-7"
        onSubmit={handleCommenting}
      >
        <h3 className="text-2xl font-bold mb-4">here comment</h3>
        <label
          className="flex flex-col text-xl gap-2 focus-within:text-[#FF6500] focus-within:font-bold  "
          htmlFor="name"
        >
          Name
          <input
            className="border-b border-gray-300 focus:border-[#bc9c41] outline-none"
            type="text"
            id="name"
            value={nameText}
            onChange={(e) => setNameText(e.target.value)}
            required
          />
        </label>
        <label
          className="flex flex-col text-xl gap-2 focus-within:text-[#FF6500] focus-within:font-bold  "
          htmlFor="comment"
        >
          Comment
          <input
            className="border-b border-gray-300 focus:border-[#bc9c41] outline-none"
            type="text"
            id="comment"
            value={contentText}
            onChange={(e) => setContentText(e.target.value)}
            required
          />
        </label>
        {/* click for button */}
        <button
          className="text-white bg-amber-600 px-4 py-3 rounded text-xl"
          type="submit"
        >
          Add Comment Bro
        </button>
      </form>
    </>
  );
}
