import React, { useState } from "react";
import { useGetByIdQuery } from "../../lib/apiSlice/postsApi";
import { useDispatch, useSelector } from "react-redux";
import { setModal } from "../../lib/slices/postSlice";

const PostModal = () => {
  const { postId } = useSelector((state) => state.posts);
  const { data } = useGetByIdQuery(postId);
  let [like, setLike] = useState(data?.reactions?.likes);
  let [disLike, setDisLike] = useState(data?.reactions?.dislikes);
  const dispatch = useDispatch();
  function handleCloseModal() {
    dispatch(setModal(false));
  }
  function handleLike() {
    setLike(like++);
  }
  function handleDisLike() {
    setDisLike(disLike++);
  }
  return (
    <div
      onClick={handleCloseModal}
      className="fixed bg-black/50 bottom-0 left-0 w-full h-screen flex items-center justify-center transition-opacity delay-300"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-1/2 flex-col flex items-start gap-4 justify-center bg-white px-10 py-10"
      >
        <h1 className="text-3xl/[100%]">{data?.title}</h1>
        <p className="text-[#857878]">{data?.body}</p>
        <div className="flex gap-1">
          {data?.tags.map((t, index) => {
            return (
              <p key={index}>
                #<a className="text-blue-800">{t}</a>
              </p>
            );
          })}
        </div>
        <div className="flex items-center justify-center gap-4">
          {like && (
            <button onClick={handleLike} className="pointer">
              <i className=" fa-regular  fa-thumbs-up"></i>
              {like}
            </button>
          )}
          {disLike && (
            <button onClick={handleDisLike} className="pointer">
              <i className=" fa-regular  fa-thumbs-down"></i>
              {disLike}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default PostModal;
