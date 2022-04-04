import React from "react";
import { useCount } from "./count-text";

const Count = () => {
  const { count } = useCount();
  return (
    <span className="flex items-center justify-center flex-1 text-3xl font-medium">
      {count}
    </span>
  );
};

export default Count;
