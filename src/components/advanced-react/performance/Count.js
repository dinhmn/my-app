import React, { useRef, useState } from "react";
// React.memo

const Count = React.memo(({ caculate, data }) => {
  const [count, setCount] = useState(0);
  const renderRef = useRef(0);
  return (
    <div>
      <div>Count: {count}</div>
      <div>Render: {renderRef.current++}</div>
      <button
        className="p-3 text-white rounded bg-blue"
        onClick={() => setCount((c) => c + 1)}
      >
        Increment
      </button>
    </div>
  );
});

export default Count;
