import React from "react";

import styles from "@/AddAdvPart/Amenities.module.scss";
import { AiOutlineDelete } from "react-icons/ai";
import { MdOutlineAddToPhotos } from "react-icons/md";

function Rules({ data, setData }) {
  const changeRulesHandler = (e, index) => {
    e.preventDefault();
    const { value } = e.target;
    const newRules = [...data.rules];
    newRules[index].sentence = value;
    setData({ ...data, rules: newRules });
  };

  const deleteRulesHandler = (e, index) => {
    e.preventDefault();
    const eliminatedRule = data.rules.splice(index, 1);
    setData({ ...data });
    console.log(data.rules);
  };
  const addRulesHandler = (e) => {
    e.preventDefault();
    setData({ ...data, rules: [...data.rules, { sentence: "" }] });
  };
  return (
    <div className={styles.facilities}>
      <p> قوانین </p>
      {data.rules?.map((item, index) => (
        <div className={styles.options} key={index}>
          <input
            type="text"
            className={styles.option}
            value={item.sentence}
            onChange={(e) => changeRulesHandler(e, index)}
          />
          <button
            className={styles.delete}
            onClick={(e) => deleteRulesHandler(e, index)}
          >
            <span> حذف </span> <AiOutlineDelete size={18} />
          </button>
        </div>
      ))}
      <button onClick={addRulesHandler}>
        {" "}
        افزودن <MdOutlineAddToPhotos size={18} />{" "}
      </button>
    </div>
  );
}

export default Rules;
