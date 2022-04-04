import React, { useCallback, useMemo, useState } from "react";

import "./App.css";
import Count from "./components/advanced-react/performance/Count";

function App() {
  const [filter, setFilter] = useState("");
  const caculate = useCallback(() => setFilter(""), [setFilter]);
  const data = useMemo(
    () => ({
      success: false,
    }),
    []
  );
  return (
    <div>
      <input
        type="text"
        className="p-3 border border-gray-300 rounded"
        onChange={(e) => setFilter(e.target.value)}
      />
      <Count caculate={caculate} data={data}></Count>
    </div>
  );
}

export default App;
