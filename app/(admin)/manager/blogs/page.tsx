import Link from "next/link";
import React from "react";

const BlogPage = () => {
  return (
    <div className="flex flex-col gap-1">
      <p>BlogPage</p>
      <Link href="/manager/blogs/create">create</Link>
      <Link href="/manager/blogs/123123/edit">edit</Link>
    </div>
  );
};

export default BlogPage;
