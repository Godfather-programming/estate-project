import React from "react";

import styles from "./DetailsAside.module.scss";
import { MdRealEstateAgent } from "react-icons/md";
import { AiOutlinePhone } from "react-icons/ai";
import { PiShareNetwork } from "react-icons/pi";
import { MdOutlineApartment } from "react-icons/md";
import { BsFillHouseHeartFill } from "react-icons/bs";
import { FaStore } from "react-icons/fa";
import { PiOfficeChairFill } from "react-icons/pi";

function DetailsAside({ data, setData }) {
  console.log(data);
  const { firm, phoneNumber, category, article, price } = data;
  // console.log(category)
  return (
    <div className={styles.container}>
      <div className={styles.estate}>
        <span>
          {" "}
          <MdRealEstateAgent size={40} color="#0500ff" />{" "}
        </span>
        <p> املاک {firm} </p>
        <div className={styles.phoneNumber}>
          {" "}
          <span>
            {" "}
            <AiOutlinePhone size={18} />{" "}
          </span>{" "}
          <span> {phoneNumber} </span>{" "}
        </div>
      </div>

      <div className={styles.sharing}>
        <span>
          {" "}
          <PiShareNetwork size={18} color="#0500ff" />{" "}
        </span>
        <span> اشتراک گذاری </span>
      </div>

      <div className={styles.specifications}>
        <div className={styles.category}>
          {" "}
          <span>
            {category === "آپارتمان" ? (
              <MdOutlineApartment size={20} color="#0500ff" />
            ) : null}
            {category === "ویلا" ? (
              <BsFillHouseHeartFill size={20} color="#0500ff" />
            ) : null}
            {category === "مغازه" ? (
              <FaStore size={20} color="#0500ff" />
            ) : null}
            {category === "دفتر" ? (
              <PiOfficeChairFill size={20} color="#0500ff" />
            ) : null}
          </span>{" "}
          <span> {article} </span>
        </div>
        <p> {price} </p>
      </div>
    </div>
  );
}

export default DetailsAside;
