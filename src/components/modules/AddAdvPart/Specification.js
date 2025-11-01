import React from "react";

import styles from "@/AddAdvPart/Specification.module.scss";
import Input from "@/elements/Input";

function Specifiation({ data, setData, changeHandler }) {
  const { article, explanations, address, phoneNumber, price, firm, SEO } =
    data;

  const changeSEOHandler = (e) => {
    const { name, value } = e.target;
    console.log({name,value})

    const newSeo = {...data.SEO, [name]: value}

    // newSeo[name] = value

    setData({...data, SEO: newSeo})

  };
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
      {/* {SEO.map((item) => ( */}
        <div className={styles.seo}>
          <p> اطلاعات SEO</p>
          <Input
            label="عنوان SEO"
            type="text"
            name="title"
            value={SEO.title}
            changeHandler={changeSEOHandler}
          />
          <Input
            label="توضیحات SEO"
            type="text"
            name="description"
            value={SEO.description}
            changeHandler={changeSEOHandler}
          />
          <Input
            label="شماره تلفن SEO"
            type="number"
            name="phoneCall"
            value={SEO.phoneCall}
            changeHandler={changeSEOHandler}
          />
        </div>
      {/* ))} */}
    </>
  );
}

export default Specifiation;
