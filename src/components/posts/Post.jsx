import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setId, setModal } from "../../lib/slices/postSlice";

const Post = ({ post }) => {
 
  const dispatch = useDispatch();
  const { isModal } = useSelector((state) => state.posts);
  function clickHandler(id) {
    if (isModal === false) {
      dispatch(setModal(true));
    } else {
      dispatch(setModal(false));
    }
    dispatch(setId(id));
  }
  return (
    <div
      onClick={() => clickHandler(post.id)}
      className="border px-5 py-4 flex flex-col gap-4 container hover:shadow-2xl"
    >
      <h1 className="text-3xl/[100%] ">{post.title}</h1>
      <p className="text-[#857878] text-nowrap overflow-hidden w-full text-ellipsis">
        {post.body}
      </p>
      <div className="flex gap-1">
        {post.tags.map((t, index) => {
          return (
            <p key={index}>
              #<a className="text-blue-800">{t}</a>
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default Post;
