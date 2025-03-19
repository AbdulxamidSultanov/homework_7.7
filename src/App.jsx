import * as React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/Header";
import { useSelector } from "react-redux";
import PostModal from "./components/posts/PostModal";

function App() {
  const { isModal } = useSelector((state) => state.posts);
  return (
    <>
      {isModal != false && <PostModal />}
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
