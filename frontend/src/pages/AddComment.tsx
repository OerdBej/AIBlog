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
        className="flex flex-col gap-8 self-center w-full text-white lg:max-w-3xl my-8"
        onSubmit={handleCommenting}
      >
        <h3 className="text-2xl font-bold mb-4">here comment</h3>
        <label
          className="flex flex-col text-xl gap-2 focus-within:text-[#FF6500] focus-within:font-bold mb-8"
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
      </form>
    </>
  );
}
