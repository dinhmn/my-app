import React from "react";
import { useAccordion } from "./accordion-context";

const AccordionHeader = ({ children }) => {
  const { show, handleToggleShow } = useAccordion();
  return (
    <div>
      <div
        className="flex items-center p-4 border border-gray-200 rounded-lg cursor-pointer header"
        onClick={handleToggleShow}
      >
        <span>{children}</span> {show ? <span>-</span> : <span>+</span>}
      </div>
    </div>
  );
};

export default AccordionHeader;
