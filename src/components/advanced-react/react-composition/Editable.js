import React, { useState } from "react";
import useToggle from "./useToggle";

const Editable = () => {
  const { value: edit, handleToggleValue: handleToggleEdit } = useToggle();

  return (
    <div>
      {edit && (
        <input type="text" className="p-3 border rounded-md border-gray" />
      )}
      <button onClick={handleToggleEdit}>Open edit</button>
    </div>
  );
};

export default Editable;
