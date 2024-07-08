import Comment from "./Comment";

const CommentsList = ({ comments, rep }) => {
  return comments?.map((comment) => (
    <div key={comment.id}>
      <>
        {!rep ? (
          <Comment comment={comment.snippet.topLevelComment} />
        ) : (
          <Comment comment={comment} />
        )}
      </>
      {comment.snippet.totalReplyCount > 0 && (
        <div className="ml-10">
          <CommentsList comments={comment?.replies?.comments} rep={true} />
        </div>
      )}
    </div>
  ));
};

const CommentContainer = ({ comments, error }) => {
  if (error)
    return (
      <p className="my-5 text-2xl font-bold">
        Could not fetch Comments.
      </p>
    );
  if (!comments || comments?.length === 0) return null;
  return (
    <div>
      <h1 className="font-bold text-2xl m-2 p-2">Comments</h1>
      <CommentsList comments={comments} rep={false} />
    </div>
  );
};

export default CommentContainer;
