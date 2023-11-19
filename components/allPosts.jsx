import React from "react";
import Post from "./post.jsx";
import { allPosts } from "../Constants/index.js";

export default function AllPosts() {
  return (
    <div>
      {allPosts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
}
