"use client";

import React, { useEffect, useState } from "react";

import styles from "@/modules/MyAdvPart.module.scss";
import Profile from "@/models/Profile";
import { MdOutlineApartment } from "react-icons/md";
import { FiArrowLeftCircle } from "react-icons/fi";
import { MdOutlinePlace } from "react-icons/md";
import { FiEdit } from "react-icons/fi";
import { AiOutlineDelete } from "react-icons/ai";
import { e2p, sp } from "@/utils/replaceNumber";
import DeleteButton from "@/elements/DeleteButton";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";
import connectDB from "@/utils/connectDB";
import Link from "next/link";

function MyAdvPart({ data, setData }) {
  const router = useRouter();
  // const [data, setData] = useState([]);
  // const [type, setType] = useState(true)
  // const fetchData = async () => {
  //   const res = await fetch("/api/profile");
  //   const inforamtion = await res.json();
  //   console.log(inforamtion)
  //   setData(inforamtion.profiles)
  // };
  // useEffect(() => {
  //  fetchData()
  // }, []);

  const deleteHandler = async (e, item) => {
    // e.preventDefault()
    const res = await fetch(`/api/profile/delete/${item._id}`, {
      method: "Delete",
      body: JSON.stringify(item._id),
      headers: { "Content-Type": "application/json" },
    });
    const information = await res.json();
    if (res.status === 200) {
      toast.success(information.message.toString());
      const newData = data.filter((x) => x._id !== item._id);
      setData(newData);
    } else {
      toast.error(information.error.toString());
    }
  };
  return (
    <div className={styles.container}>
      {data ? (
        data?.map((item) => (
          <div className={styles.wrapper} key={item._id}>
            <div className={styles.adv}>
              <div className={styles.type}>
                {" "}
                <span className={styles.icon}>
                  {" "}
                  <MdOutlineApartment size={20} color="#0500ff" />{" "}
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
                <button className={styles.edit}>
              <Link href={`/dashbord/my-adv/edit/${item._id}`}>
                  {" "}
                  ویرایش <FiEdit size={18} />{" "}
              </Link>
                </button>
              <button
                className={styles.delete}
                onClick={(e) => deleteHandler(e, item)}
              >
                {" "}
                حذف آگهی <AiOutlineDelete size={18} />{" "}
              </button>
              {/* <DeleteButton item={item} deleteHandler={deleteHandler}/> */}
            </div>
          </div>
        ))
      ) : (
        <div className={styles.none}>
          <p> هیچ آگهی ثبت نکرده اید </p>
        </div>
      )}
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
