import React, { useState } from "react";

const HandleValue = () => {
  return <Input render={(value) => <DisplayValue value={value} />}></Input>;
  //   <Input>{(value) => <DisplayValue value={value} />}</Input>
};

const Input = (props) => {
  const [value, setValue] = useState();
  return (
    <>
      <input
        type="text"
        id=""
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="p-3 rounded-md border border-gray-500 w-full max-w-[500px]"
      />
      {props.render(value)}
      {typeof props.children === "function" ? props.children(value) : null}
      {/* {props.children(value)} */}
    </>
  );
};

const DisplayValue = ({ value }) => {
  return <span className="text-3xl font-bold text-blue-500">{value}</span>;
};

export default HandleValue;
