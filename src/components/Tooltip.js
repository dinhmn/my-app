import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
const Tooltip = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(false);
    return setShow(false);
  }, []);
  console.log(show);
  return ReactDOM.createPortal(
    <div className="block text-center">
      <h3
        className={`inline px-8 py-3 text-white bg-gray-600 ${
          show ? "" : "opacity-0 invisible"
        }`}
      >
        Lorem ipsum dolor sit amet
      </h3>
      <p
        className="p-4 cursor-pointer"
        onMouseOver={() => {
          setShow(true);
        }}
      >
        Hover
      </p>
    </div>,
    document.querySelector("body")
  );
};

export default Tooltip;
