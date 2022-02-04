import React, { useEffect, useRef, useState } from "react";

const initialState = {
  text: "",
  textAreaHeight: "auto",
  parentHeight: "auto",
};
const resizeReducer = (state, action) => {
  switch (action.type) {
    case "SET_TEXT": {
      return { ...state, text: action.payload };
    }
    case "SET_TEXTAREAHEIGHT": {
      return { ...state, textAreaHeight: action.payload };
    }
    case "SET_PARENTHEIGHT": {
      return { ...state, parentHeight: action.payload };
    }
    default:
      break;
  }
};

const TextAreaAutoResizeWithReducer = () => {
  const [state, dispatch] = React.useReducer(resizeReducer, initialState);
  // const [text, setText] = useState("");
  const textAreaRef = useRef(null);
  // const [textAreaHeight, setTextAreaHeight] = useState("auto");
  // const [parentHeight, setParentHeight] = useState("auto");

  const handleChange = (e) => {
    try {
      dispatch({
        type: "SET_TEXTAREAHEIGHT",
        payload: "",
      });
      // setTextAreaHeight("");
      dispatch({
        type: "SET_PARENTHEIGHT",
        payload: `${textAreaRef?.current?.scrollHeight}px`,
      });
      // setParentHeight(`${textAreaRef?.current?.scrollHeight}px`);
      dispatch({
        type: "SET_TEXT",
        payload: e.target.value,
      });
      //setText(e.target.value);
    } catch (error) {
      dispatch({
        type: "SET_TEXTAREAHEIGHT",
        payload: "auto",
      });
      // setTextAreaHeight("");
      dispatch({
        type: "SET_PARENTHEIGHT",
        payload: "auto",
      });
    }
  };

  useEffect(() => {
    try {
      dispatch({
        type: "SET_TEXTAREAHEIGHT",
        payload: `${textAreaRef?.current?.scrollHeight}px`,
      });
      // setTextAreaHeight("");
      dispatch({
        type: "SET_PARENTHEIGHT",
        payload: `${textAreaRef?.current?.scrollHeight}px`,
      });
    } catch (error) {
      dispatch({
        type: "SET_TEXTAREAHEIGHT",
        payload: "auto",
      });
      // setTextAreaHeight("");
      dispatch({
        type: "SET_PARENTHEIGHT",
        payload: "auto",
      });
    }
    // setTextAreaHeight(`${textAreaRef?.current?.scrollHeight}px`);
    // setParentHeight(`${textAreaRef?.current?.scrollHeight}px`);
  }, [state.text]);

  return (
    <div className="p-5" style={{ minHeight: state.parentHeight }}>
      <textarea
        className="transition-all overflow-hidden w-full max-w-[400px] p-5 rounded-lg border border-gray-300 focus:border-blue-300 resize-none"
        placeholder="Please enter your content ...."
        defaultValue={state.text}
        ref={textAreaRef}
        style={{
          height: state.textAreaHeight,
        }}
        onChange={handleChange}
      ></textarea>
    </div>
  );
};

export default TextAreaAutoResizeWithReducer;
