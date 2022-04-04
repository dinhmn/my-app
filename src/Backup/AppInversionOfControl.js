import React, { useState } from "react";
import "./App.css";
import Counter from "./components/advanced-react/control-props/Counter";
import { Dropdown } from "./components/advanced-react/inversion-of-control";
import useCounter from "./components/advanced-react/state-reducer/useCounter";

const options = [
  { title: "Frontend Developer" },
  { title: "Backend Developer" },
  { title: "Fullstack Developer" },
];

function App() {
  // const [count, setCount] = useState(5);
  // const handleCountChange = (newCount) => {
  //   if (newCount > 10) setCount(0);
  //   else setCount(newCount);
  // };
  const userReducer = (state, action) => {
    switch (action.type) {
      case "decrement":
        return {
          count: state.count - 5,
        };

      default:
        return useCounter.reducer(state, action);
    }
  };
  const { count, handleDecrement, handleIncrement } = useCounter(
    {
      initial: 0,
    },
    userReducer
  );
  const [job, setJob] = useState("");
  const [filter, setFilter] = useState("");
  const handleSelect = (newJob) => {
    setJob(newJob);
  };
  return (
    <div className="p-10 w-full max-w-[600px] mx-auto">
      {/* <Counter value={count} onChange={handleCountChange}></Counter> */}
      <Counter
        count={count}
        handleIncrement={handleIncrement}
        handleDecrement={handleDecrement}
      ></Counter>
      {/* <Dropdown
        options={options}
        placeholder="Please select an option"
        inputPlaceholder="Search your job..."
        visibleIconCheck
      ></Dropdown> */}
      <Dropdown
        placeholder={`${job || "Select your job"}`}
        inputPlaceholder="Search your jobs..."
        onClick={handleSelect}
        onChange={(e) => setFilter(e.target.value)}
      >
        <div className="border-gray-300 rounded options">
          {options.map((option) => (
            <Dropdown.Option key={option.title}>
              <span>{option.title}</span>
              <Dropdown.IconCheck></Dropdown.IconCheck>
            </Dropdown.Option>
          ))}
          <Dropdown.Search></Dropdown.Search>
        </div>
      </Dropdown>
    </div>
  );
}

export default App;
