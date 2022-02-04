import React, { useEffect, useRef, useState } from "react";

const TextAreaAutoResize = () => {
  const [text, setText] = useState("");
  const textAreaRef = useRef(null);
  const [textAreaHeight, setTextAreaHeight] = useState("auto");
  const [parentHeight, setParentHeight] = useState("auto");

  const handleChange = (e) => {
    setTextAreaHeight("");
    setParentHeight(`${textAreaRef?.current?.scrollHeight}px`);
    setText(e.target.value);
  };

  useEffect(() => {
    setTextAreaHeight(`${textAreaRef?.current?.scrollHeight}px`);
    setParentHeight(`${textAreaRef?.current?.scrollHeight}px`);
  }, [text]);

  return (
    <div className="p-5" style={{ minHeight: parentHeight }}>
      <textarea
        className="transition-all overflow-hidden w-full max-w-[400px] p-5 rounded-lg border border-gray-300 focus:border-blue-300 resize-none"
        placeholder="Please enter your content ...."
        value={text}
        ref={textAreaRef}
        style={{
          height: textAreaHeight,
        }}
        onChange={handleChange}
      ></textarea>
    </div>
  );
};

export default TextAreaAutoResize;
