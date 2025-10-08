"use client";

import React, { useEffect, useState } from "react";

import styles from "@/modules/AdminMain.module.scss";

function AdminMain() {
  const [data, setData] = useState(null);
  const fetchData = async () => {
    const res = await fetch("/api/profile");
    const inforamtion = await res.json();
    setData(inforamtion.profiles);
  };

  useEffect(() => {
    fetchData();
  }, []);
  console.log(data);
  // if we have not data ==> complete this part
  if (data)
    return (
      <div className={styles.container}>
        {data.map((item) => (
          <div className={styles.wrapper} key={item._id}>
            <h3> {item.article} </h3>
            <p> {item.description} </p>
            <div className={styles.charactristics}>
              <span> {item.address} </span>
              <span> {item.price} تومان </span>
            </div>

            <button> انتشار </button>
            <span className={styles.line}></span>
          </div>
        ))}
      </div>
    );
}

export default AdminMain;
