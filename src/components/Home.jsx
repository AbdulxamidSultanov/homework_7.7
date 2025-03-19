import React from "react";
import { useGetAllQuery } from "../lib/apiSlice/postsApi";
import Error from "./tools/Error";
import Loader from "./tools/Loader";
import PostContainer from "./posts/PostContainer";

const Home = () => {
  const { data, error, isLoading } = useGetAllQuery();
  return (
    <div className="shadow container mx-auto flex flex-col">
      <div className="self-end">
        <input
          type="text"
          className="border border-[#ccc] my-4 mr-5 py-1 px-2 rounded-2xl outline-0 text-[#141414]"
          placeholder="Search from title"
        />
        <input
          type="text"
          className="border border-[#ccc] my-4 mr-5 py-1 px-2 rounded-2xl  outline-0  text-[#141414]"
          placeholder="Search from tags"
        />
      </div>
      {error ? (
        <Error error={error} />
      ) : isLoading ? (
        <Loader />
      ) : (
        <PostContainer posts={data.posts} />
      )}
    </div>
  );
};

export default Home;
