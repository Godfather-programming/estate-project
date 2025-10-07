"use client"

import React, { useState } from "react";

import styles from "@/modules/BuyResidentialAside.module.scss";
import { LuTypeOutline } from "react-icons/lu";


function BuyResidentialAside({data, setData}) {
  const [inforamtion, setInformation] = useState(data)
  // setInformation(data)
  // console.log(inforamtion)
  const categoryHandler = (e) => {
    // setData(inforamtion)
    setInformation(data)
    const {tagName, innerText} = e.target
    if(tagName !== "LI") return
    if(inforamtion) {

      if(innerText === "همه") {
        setData(inforamtion)
        
      } else {
        const newData = inforamtion.filter(item => item.category === innerText)
        console.log(newData)
        setData(newData)
        
      }
    }
  }
  return (
    <div className={styles.container}>
      {/* <div> */}
      <p className={styles.category}>
        {" "}
        <span>
          {" "}
          <LuTypeOutline color="#0500ff" size={18} />{" "}
        </span>
        <span> دسته بندی </span>
      </p>
      {/* </div> */}
      <ul className={styles.types} onClick={categoryHandler}>
        <li> همه </li>
        <li> ویلا </li>
        <li> آپارتمان </li>
        <li> دفتر </li>
        <li> مغازه </li>
      </ul>
    </div>
  );
}

export default BuyResidentialAside;
