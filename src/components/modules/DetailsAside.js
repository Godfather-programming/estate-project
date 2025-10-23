import React from "react";

import styles from "./DetailsAside.module.scss";
import { MdRealEstateAgent } from "react-icons/md";
import { AiOutlinePhone } from "react-icons/ai";
import { PiShareNetwork } from "react-icons/pi";
// import { MdOutlineApartment } from "react-icons/md";
// import { BsFillHouseHeartFill } from "react-icons/bs";
// import { FaStore } from "react-icons/fa";
// import { PiOfficeChairFill } from "react-icons/pi";
import { FaCalendarCheck } from "react-icons/fa6";
import { icons } from "src/constants/constantData";

function DetailsAside({
  intendedProfile: {
    firm,
    phoneNumber,
    category,
    article,
    price,
    constructionDate,
  },
}) {
  // console.log(intendedProfile);
  // const { firm, phoneNumber, category, article, price, constructionDate } =
  //   intendedProfile;

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
          <span>{icons[category]}</span> <span> {article} </span>
        </div>
        <p> {price} تومان </p>
        <div className={styles.Date}>
          <span>
            {" "}
            <FaCalendarCheck size={18} color="#0500ff" />{" "}
          </span>
          <span> {constructionDate} </span>
        </div>
      </div>
    </div>
  );
}

export default DetailsAside;
