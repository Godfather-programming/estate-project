// "use client"

import React from "react";
import styles from "@/modules/BuyResidentialMain.module.scss";
import toast, { Toaster } from "react-hot-toast";
import { MdOutlineApartment } from "react-icons/md";
import { BsFillHouseHeartFill } from "react-icons/bs";
import { FaStore } from "react-icons/fa";
import { PiOfficeChairFill } from "react-icons/pi";
import { MdOutlinePlace } from "react-icons/md";
import { FiArrowLeftCircle } from "react-icons/fi";
import { sp } from "@/utils/replaceNumber";
import Link from "next/link";

function BuyResidnetialMain({ data, setData }) {
  // console.log(data);
  return (
    <div className={styles.container}>
      {data.map((item) => (
        <div className={styles.wrapper} key={item._id}>
          <span className={styles.icon}>
            {item.category === "ویلا" ? <BsFillHouseHeartFill /> : null}
            {item.category === "آپارتمان" ? <MdOutlineApartment /> : null}
            {item.category === "مغازه" ? <FaStore /> : null}
            {item.category === "دفتر" ? <PiOfficeChairFill /> : null}
          </span>
          <p className={styles.article}> {item.article} </p>
          <div className={styles.place}>
            <span>
              {" "}
              <MdOutlinePlace size={20} />{" "}
            </span>
            <span> {item.address} </span>
          </div>
          <p className={styles.price}> {item.price} تومان </p>
          <Link
            href={`/buy-residential/details/${item._id}`}
            className={styles.visit}
          >
            <span> مشاهده آگهی </span>
            <span>
              {" "}
              <FiArrowLeftCircle size={20} />{" "}
            </span>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default BuyResidnetialMain;
