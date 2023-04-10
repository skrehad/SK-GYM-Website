import React from "react";
import "./Blog.css";

const Blog = (props) => {
  const { img, blogTitle, blogDescription, writer, time } = props.blog;
  // console.log(props.blog);
  return (
    <div>
      <div className="blogCard shadow-2xl  m-auto my-8 max-w-sm rounded overflow-hidden">
        <img className="w-full" src={img} alt="Sunset in the mountains" />
        <div className="px-6 py-4">
          <div className="font-bold text-white text-center text-3xl mb-4">
            {blogTitle}
          </div>
          <p className="description">{blogDescription}</p>
        </div>
        <div className="mb-4 cardFooter text-white">
          <p className=" ml-4 text-center">Writer - {writer}</p>
          <p className="mr-4 text-center">Date - {time}</p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
