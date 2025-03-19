import React from "react";
import Post from "./Post";

const PostContainer = ({ posts }) => {
  return (
    <div className="py-4 px-10 flex flex-col items-center justify-center gap-4">
      {posts != undefined && posts.length > 0 ? (
        posts.map((post) => {
          return <Post key={post.id} post={post} />;
        })
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default PostContainer;
