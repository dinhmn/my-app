import React, { useState } from "react";
import useHandleChange from "../../hooks/useHandleChange";

const Form = () => {
  // const [fullname, setFullname] = useState("");
  // const [message, setMessage] = useState("");
  // const [country, setCountry] = useState("");
  // const handleChange = (e) => {
  //   setFullname(e.target.value);
  // };
  // const handleTextareaChange = (e) => {
  //   setMessage(e.target.value);
  // };
  // const handleSelectChange = (e) => {
  //   setCountry(e.target.value);
  // };
  const { values, handleChange } = useHandleChange({
    fullname: "",
    email: "",
    hobby: false,
  });
  // Formik + Yup vs React hook form
  // regex
  const [nameError, setNameError] = useState("");
  const handleSubmitForm = (e) => {
    e.preventDefault();
    if (values.fullname === "") {
      setNameError("Your fullname is empty");
    } else {
      setNameError("");
    }
  };
  return (
    <div>
      <form
        className="flex gap-x-3"
        autoComplete="off"
        onSubmit={handleSubmitForm}
      >
        <div>
          <input
            type="text"
            name="fullname"
            className="w-full max-w-[300px] p-3 border border-gray-200 rounded-lg"
            placeholder="Enter your name"
            onChange={handleChange}
          />
          {nameError}
        </div>
        <input
          type="email"
          name="email"
          className="w-full max-w-[300px] p-3 border border-gray-200 rounded-lg"
          placeholder="Enter your email address"
          onChange={handleChange}
        />
        {/* <input type="checkbox" name="hobby" onChange={handleChange} /> */}
        <button type="submit" className="p-3 rounded-lg text-white bg-blue-500">
          Submit
        </button>
      </form>
      {/* <textarea
        className="w-full max-w-[300px] p-3 border border-gray-200 rounded-lg"
        placeholder="Enter your name"
        name="message"
        onChange={handleTextareaChange}
      ></textarea>
      <select name="country" onChange={handleSelectChange}>
        <option value="vietname">VN</option>
        <option value="use">USA</option>
        <option value="japan">JAPAN</option>
      </select> */}
    </div>
  );
};

export default Form;
