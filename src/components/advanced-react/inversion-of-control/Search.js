import React from "react";
import { useDropdown } from "./dropdown-context";

const Search = (props) => {
  const { onChange, inputPlaceholder } = useDropdown();
  return (
    <div className="p-2">
      <input
        type="text"
        placeholder={inputPlaceholder}
        className="w-full p-4 border border-gray-200 rounded outline-none"
        onChange={onChange}
      />
    </div>
  );
};

export default Search;
