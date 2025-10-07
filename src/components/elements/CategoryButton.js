import React from "react";
import { centerStyle } from "src/constants/constantData";

function CategoryButton({type, category, changeHandler }) {
  return (
    <div style={centerStyle}>
      <label htmlFor={type}> {type} </label>
      <input
        type="radio"
        id={type}
        name="category"
        value={type}
        checked={category === type}
        // onChange={(e) => changeHandler(e)} equals with line 15
        onChange={changeHandler}
      />
    </div>
  );
}

export default CategoryButton;
