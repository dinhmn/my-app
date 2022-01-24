import React from "react";
// const student = {
//     name: 'Mai Ngoc Dinh',
//     age: 21
// }
// => const {name, age} = student
// student === props

const Cell = ({ value, onClick, className }) => {
  //   const Cell = ({ value, onClick }) => {} === const Cell = (props) => {}

  // Object destructuring

  return (
    <div className={`game-cell ${className}`} onClick={onClick}>
      {value}
    </div>
  );
};

export default Cell;
