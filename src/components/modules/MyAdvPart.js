// "use client";

// import React, { useEffect, useState } from "react";

import styles from "@/modules/MyAdvPart.module.scss";
import Profile from "@/models/Profile";
import { MdOutlineApartment } from "react-icons/md";
import { FiArrowLeftCircle } from "react-icons/fi";
import { MdOutlinePlace } from "react-icons/md";
import { BsFillHouseHeartFill } from "react-icons/bs";
import { FaStore } from "react-icons/fa";
import { PiOfficeChairFill } from "react-icons/pi";
import { FiEdit } from "react-icons/fi";
import { AiOutlineDelete } from "react-icons/ai";
import { e2p, sp } from "@/utils/replaceNumber";
import DeleteButton from "@/elements/DeleteButton";
import toast, { Toaster } from "react-hot-toast";
import connectDB from "@/utils/connectDB";
import Link from "next/link";
// import Loader from "./Loader";
import { icons } from "@/constants/icons";

function MyAdvPart({ profiles }) {


  return (
    <div className={styles.container}>
      {profiles.map((item) => (
            <div className={styles.wrapper} key={item._id}>
              <div className={styles.adv}>
                <div className={styles.type}>
                  {" "}
                  <span className={styles.icon}>
                    {icons[item.category]}
                  </span>{" "}
                  <Link href={`/buy-residential/details/${item._id}`}>
                    <span className={styles.visit}>
                      {" "}
                      <span> مشاهده آگهی </span>
                      <span>
                        {" "}
                        <FiArrowLeftCircle size={18} />{" "}
                      </span>{" "}
                    </span>{" "}
                  </Link>
                </div>
                <p> {item.article} </p>
                <div className={styles.place}>
                  <span>
                    {" "}
                    <MdOutlinePlace size={18} />{" "}
                  </span>
                  <span>{item.address}</span>
                </div>
                <p> {sp(item.price)} تومان </p>
              </div>

              <div className={styles.buttons}>
                <Link href={`/dashbord/my-adv/edit/${item._id}`}>
                  <button className={styles.edit}>
                    <span> ویرایش </span>
                    <span>
                      {" "}
                      <FiEdit size={18} />{" "}
                    </span>
                  </button>
                </Link>

                <DeleteButton
                  type={"آگهی من"}
                  item={item}
                  toast={toast}
                  // profiles={profiles}
                  // setData={setData}
                />
              </div>
            </div>
          ))
  }

      {!profiles.length ? (
        <div className={styles.none}>
          <p> هیچ آگهی ثبت نکرده اید </p>
        </div>
      ) : null}
      <Toaster />
    </div>
  );
}

export default MyAdvPart;

// const profiles = await Profile.find();
// console.log(profiles);
// const number = sp(profiles[0].price);
// console.log(number);

// const deleteHandler = async (item) => {
//   const desiredItem = await Profile.deleteOne({ _id: item._id });
//   console.log(desiredItem);
// };
