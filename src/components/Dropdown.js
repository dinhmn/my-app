import React from "react";
import useClickOutSide from "../hooks/useClickOutSide";

const Dropdown = () => {
  const { show, nodeRef: dropDownRef, setShow } = useClickOutSide();
  return (
    <div className="relative w-full max-w-[400px]" ref={dropDownRef}>
      <div
        className="p-5 border-gray-200 border-gray-200 rounded-lg w-full cursor-pointer"
        onClick={() => setShow(!show)}
      >
        Selected
      </div>
      {show && (
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
