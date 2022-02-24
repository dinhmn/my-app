import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import useHover from "../hooks/useHover";
const TooltipResult = ({ children, text }) => {
  const { hovered, nodeRef } = useHover();
  const [coords, setCoords] = useState({});
  const handleHover = (e) => {
    setCoords(e.target.getBoundingClientRect());
  };
  return (
    <div className="">
      {hovered && <TooltipContent coords={coords}>{children}</TooltipContent>}
      <span
        className="font-semibold cursor-pointer"
        ref={nodeRef}
        onMouseOver={handleHover}
      >
        {text}
      </span>
    </div>
  );
};

function TooltipContent({ children, coords }) {
  return ReactDOM.createPortal(
    <p
      className="absolute inline-block p-3 text-white -translate-y-full bg-black rounded-xl max-w-[200px] -translate-x-4"
      style={{
        top: coords.top - coords.height / 2 + window.screenY,
        left: coords.left + coords.width / 2,
      }}
    >
      {children}
    </p>,
    document.querySelector("body")
  );
}

export default TooltipResult;
