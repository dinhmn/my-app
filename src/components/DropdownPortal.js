import React, { useState } from "react";
import useClickOutSide from "../hooks/useClickOutSide";
import ReactDOM from "react-dom";

const DropdownPortal = () => {
  const { show, nodeRef: dropDownRef, setShow } = useClickOutSide();
  const [coords, setCoords] = useState({});

  const handleClick = (e) => {
    setCoords(dropDownRef.current.getBoundingClientRect());
    setShow(!show);
  };
  return (
    <div className="relative w-full max-w-[400px]" ref={dropDownRef}>
      <div
        className="w-full p-5 border-gray-200 rounded-lg cursor-pointer"
        onClick={handleClick}
      >
        Selected
      </div>
      {show && <DropdownList coords={coords}></DropdownList>}
    </div>
  );
};

function DropdownList({ coords }) {
  return ReactDOM.createPortal(
    <div
      className="p-5 border border-gray-200 rounded-lg absolute top-100% left-0 w-full bg-white"
      style={{
        left: coords.left,
        top: coords.top + coords.height + window.screenY,
        width: coords.width,
      }}
    >
      <div className="p-5 cursor-pointer">Javascript</div>
      <div className="p-5 cursor-pointer">ReactJs</div>
      <div className="p-5 cursor-pointer">VueJs</div>
    </div>,
    document.querySelector("body")
  );
}

export default DropdownPortal;
