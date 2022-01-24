import React, { useState } from "react";

const Counter = () => {
  // stale state
  const [count, setCount] = useState(0);
  const handleIncrement = () => {
    setTimeout(function delay() {
      // Sử dụng callback
      setCount((prev) => prev + 1);
    }, 1000);
  };

  return (
    <div className="handleIncrement" onClick={handleIncrement}>
      Increment {count}
    </div>
  );
};

export default Counter;
