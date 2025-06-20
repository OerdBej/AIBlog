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
  const [commentText, setCommentText] = useState("");
  return (
    <>
      <h3>for the comment</h3>
    </>
  );
}
