import React, { useState } from "react";

const Dropdown = ({
  options,
  placeholder,
  visibleIconCheck = false,
  inputPlaceholder,
  visibleSearch = false,
  onChange = () => {},
}) => {
  const [show, setShow] = useState(false);
  const handleToggleDropdown = () => {
    setShow(!show);
  };
  return (
    <div className="relative inline-block w-full max-w-[300px]">
      <div
        className="flex items-center justify-center p-4 border border-gray-300 rounded cursor-pointer placeholder"
        onClick={handleToggleDropdown}
      >
        {placeholder}
      </div>
      {show && (
        <div className="border-gray-300 rounded options">
          {visibleSearch && (
            <div className="p-2">
              <input
                type="text"
                placeholder={inputPlaceholder}
                className="w-full p-4 border border-gray-200 rounded outline-none"
                onChange={onChange}
              />
            </div>
          )}
          {options &&
            options.length > 0 &&
            options.map((option) => (
              <div
                className="flex items-center justify-between p-4 cursor-pointer option-item"
                key={option.title}
                onClick={option.onClick}
              >
                <span>{option.title}</span>
                {visibleIconCheck && (
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                    ></path>
                  </svg>
                )}
              </div>
            ))}
          {/* <div className="p-4 cursor-pointer option-item">Backend</div>
          <div className="p-4 cursor-pointer option-item">Fullstack</div> */}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
