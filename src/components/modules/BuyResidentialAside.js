"use client";

import React, { useEffect, useState } from "react";

import styles from "@/modules/BuyResidentialAside.module.scss";
import { LuTypeOutline } from "react-icons/lu";
import { info } from "sass";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { queries } from "src/constants/constantData";

function BuyResidentialAside() {

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
      <ul className={styles.types}>
        <Link href="/buy-residential">
          <li> همه </li>
        </Link>

        {queries.map((query) => (
          <Link
            href={{
              pathname: "buy-residential",
              query: { category: Object.keys(query) },
            }}
            key={Object.keys(query)}
          >
            <li> {Object.values(query)} </li>
          </Link>
        ))}

        {/* <Link href="/buy-residential?category=آپارتمان">
          {" "}
          <li> آپارتمان </li>{" "}
        </Link>
        <Link href="/buy-residential?category=دفتر">
          {" "}
          <li> دفتر </li>{" "}
        </Link>
        <Link href="/buy-residential?category=مغازه">
          {" "}
          <li> مغازه </li>{" "}
        </Link> */}
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
