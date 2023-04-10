import React from "react";
import { useLoaderData } from "react-router-dom";
import Blog from "../Blog/Blog";
import "./Blogs.css";

const Blogs = () => {
  const blogs = useLoaderData();
  return (
    <div>
      <div className="text-white font-bold text-center text-3xl my-6">Blog</div>

      <div className="blogs">
        {blogs.map((blog) => (
          <Blog key={blog.id} blog={blog}></Blog>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
