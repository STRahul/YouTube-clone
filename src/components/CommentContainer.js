import React from "react";
import parse from 'html-react-parser';

const Comment = ({ comment }) => {
  const { snippet } = comment;
  return (
    <div className="flex bg-gray-200 p-3 rounded-lg m-1">
      <img
        className="w-12 h-12 rounded-full my-3"
        alt="user"
        src={
          snippet?.authorProfileImageUrl
            ? snippet?.authorProfileImageUrl
            : "https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
        }
      />
      <div className="ml-3 overflow-hidden">
        <p className="font-bold text-xl md:text-3xl">
          {snippet?.authorDisplayName}
        </p>
        <p className="[&>a]:text-blue-700">{parse(snippet?.textDisplay)}</p>
      </div>
    </div>
  );
};

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
        <div className="ml-5 border border-l-black">
          <CommentsList comments={comment?.replies?.comments} rep={true} />
        </div>
      )}
    </div>
  ));
};

const CommentContainer = ({ comments, error }) => {
  if (error)
    return (
      <p className="my-5 text-3xl font-bold">
        Could not fetch Comments.
      </p>
    );
  if (!comments || comments?.length === 0) return null;
  return (
    <div>
      <h1 className="font-bold text-3xl m-2 p-2">Comments:</h1>
      <CommentsList comments={comments} rep={false} />
    </div>
  );
};

export default CommentContainer;
