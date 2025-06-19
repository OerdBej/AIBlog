interface Comment {
  writtenBy: string;
  content: string;
}

export default function StoryComments({ comments }: { comments: Comment[] }) {
  return (
    <section className="self-center w-full text-white lg:max-w-3xl space-y-6">
      <h3 className="text-2xl font-bold">Comments</h3>

      {comments.map((comment) => (
        <div
          key={comment.content}
          className="space-y-2 border-l-2 border-amber-200 pl-4 py-2"
        >
          <h4 className="text-amber-200">{comment.writtenBy}</h4>
          <h4 className="text-gray-300">{comment.content}</h4>
        </div>
      ))}
    </section>
  );
}
