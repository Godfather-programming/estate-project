"use client";

import React, { useEffect, useState } from "react";

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
import { useRouter } from "next/navigation";
import connectDB from "@/utils/connectDB";
import Link from "next/link";

function MyAdvPart({ data, setData }) {
  // const router = useRouter();
  // console.log({empty})
  console.log({data})
  console.log(data.category)
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
      method: "DELETE",
      body: JSON.stringify({id: item._id, userId: item.userId}),
      headers: { "Content-Type": "application/json" },
    });
    const information = await res.json();
    if (res.status === 200) {
      toast.success(information.message);
      const newData = data.filter((x) => x._id !== item._id);
      setData(newData);
    } else {
      toast.error(information.error);
    }
  };

  const icons = {
    ویلا: <BsFillHouseHeartFill size={20} color="#0500ff"/>,
    آپارتمان: <MdOutlineApartment size={20} color="#0500ff"/>,
    مغازه: <FaStore size={20} color="#0500ff"/>,
    دفتر: <PiOfficeChairFill size={20} color="#0500ff"/>,
  }
  return (
    <div className={styles.container}>
      {data ? (
        data?.map((item) => (
          <div className={styles.wrapper} key={item._id}>
            <div className={styles.adv}>
              <div className={styles.type}>
                {" "}
                <span className={styles.icon}>
                  {/* {" "}
                  <MdOutlineApartment  />{" "} */}
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
              <p> {item.price} تومان </p>
            </div>

            <div className={styles.buttons}>
              <Link href={`/dashbord/my-adv/edit/${item._id}`}>
                <button className={styles.edit}>
                  <span> ویرایش </span>
                  <span> <FiEdit size={18} /> </span> 
                </button>
              </Link>
              <button
                className={styles.delete}
                onClick={(e) => deleteHandler(e, item)}
              >
                <span> حذف آگهی </span>
                <span> <AiOutlineDelete size={18} /> </span>
              </button>
              {/* <DeleteButton item={item} deleteHandler={deleteHandler}/> */}
            </div>
          </div>
        ))
      ) : null}

      <Toaster />
      {!data.length ? (
        <div className={styles.none}>
          <p> هیچ آگهی ثبت نکرده اید </p>
        </div>
      ) : null}
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
