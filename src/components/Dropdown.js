import React, { useEffect, useRef, useState } from "react";

const Dropdown = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickDropdown(e) {
      if (!dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setShowDropdown(false);
      }
    }
    document.addEventListener("click", handleClickDropdown);
    return () => {
      document.removeEventListener("click", handleClickDropdown);
    };
  }, []);

  return (
    <div className="relative w-full max-w-[400px]" ref={dropdownRef}>
      <div
        className="p-5 border-gray-200 border-gray-200 rounded-lg w-full cursor-pointer"
        onClick={() => setShowDropdown(!showDropdown)}
      >
        Selected
      </div>
      {showDropdown && (
        <div className="p-5 border border-gray-200 rounded-lg absolute top-100% left-0 w-full bg-white">
          <div className="p-5 cursor-pointer">Javascript</div>
          <div className="p-5 cursor-pointer">ReactJs</div>
          <div className="p-5 cursor-pointer">VueJs</div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
