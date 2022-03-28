import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

const BlogPage = () => {
  const [searchParam, setSearchParam] = useSearchParams();
  console.log(searchParam.get("search"));
  useEffect(() => {
    setSearchParam({ search: "evondev" });
  }, []);
  return <div>Blog Page</div>;
};

export default BlogPage;
