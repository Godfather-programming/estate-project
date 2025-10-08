"use client"

import React, { useState } from "react";

import styles from "@/modules/BuyResidentialAside.module.scss";
import { LuTypeOutline } from "react-icons/lu";


function BuyResidentialAside({data, setData}) {
  const [information, setInformation] = useState(data)
  const categoryHandler = (e) => {
    const {tagName, innerText} = e.target
    console.log({tagName, innerText})
    if(tagName !== "LI") return
  
    if(innerText === "همه") {
      setData(information)
    } else {
      const newData = information.filter(item => item.category === innerText)
      setData(newData)
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

// const [inforamtion, setInformation] = useState(data)
// console.log({data})
// console.log({inforamtion})
// const categoryHandler = (e) => {
//   setData(inforamtion)
//   const {tagName, innerText} = e.target
//   if(tagName !== "LI") return

//     if(innerText === "همه") {
//       setData(inforamtion)
      
//     } else {
//       const newData = inforamtion.filter(item => item.category === innerText)
//       console.log({newData})
//       setData(newData)
//     }
//   }