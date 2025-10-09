"use client";

import React, { useEffect, useState } from "react";

import styles from "@/modules/AdminMain.module.scss";

function AdminMain() {
  const [data, setData] = useState(null);
  const fetchData = async () => {
    const res = await fetch("/api/profile");
    const inforamtion = await res.json();
    const intendedData = inforamtion.profiles.filter(
      (item) => item.published === "false"
    );
    setData(intendedData)
  };

  // finish about refreshing pageg
  useEffect(() => {
    fetchData();
  }, []);

  const publishedHandler = async (id) => {
    const res = await fetch("/api/admin", {
      method: "PUT",
      body: JSON.stringify(id),
      headers: { "Content-Type": "application/json" },
    });

    const data = await res.json();
    console.log(data);
  };

  console.log(data);
  return (
    <>
      {data ? (
        <div className={styles.container}>
          {data.map((item) => (
            <div className={styles.wrapper} key={item._id}>
              <h3> {item.article} </h3>
              <p> {item.description} </p>
              <div className={styles.charactristics}>
                <span> {item.address} </span>
                <span> {item.price} تومان </span>
              </div>

              <button onClick={() => publishedHandler(item._id)}>
                {" "}
                انتشار{" "}
              </button>
              <span className={styles.line}></span>
            </div>
          ))}
        </div>
      ) : (
        <p className={styles.empty}> هیچ آگهی برای انتشار وجود ندارد </p>
      )}
    </>
  );
}

export default AdminMain;
