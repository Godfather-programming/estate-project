import React from "react";

import styles from "@/AddAdvPart/Specification.module.scss";
import Input from "@/elements/Input";

function Specifiation({ data, changeHandler }) {
  return (
    <>
      <Input
        label="عنوان آگهی"
        type="text"
        name="article"
        value={data.article}
        changeHandler={changeHandler}
      />
      <div className={styles.explanations}>
        <label htmlFor="explain"> توضیحات </label>
        <textarea
          name="explanations"
          id="explain"
          value={data.explanations}
          onChange={changeHandler}
        ></textarea>
      </div>
      <Input
        label="آدرس"
        type="text"
        name="address"
        value={data.address}
        changeHandler={changeHandler}
      />
      <Input
        label="شماره تماس"
        type="number"
        name="phoneNumber"
        value={data.phoneNumber}
        changeHandler={changeHandler}
      />
      <Input
        label="قیمت(تومان)"
        type="number"
        name="price"
        value={data.price}
        changeHandler={changeHandler}
      />
      <Input
        label="بنگاه"
        type="text"
        name="firm"
        value={data.firm}
        changeHandler={changeHandler}
      />
    </>
  );
}

export default Specifiation;
