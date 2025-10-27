"use client";

import React, { useEffect, useState } from "react";

import styles from "@/modules/AdminMain.module.scss";
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";
import Link from "next/link";

function AdminMain() {
  const router = useRouter();
  const [data, setData] = useState([]);
  const [empty, setEmpty] = useState(false);
  console.log({ empty });
  const fetchData = async () => {
    const res = await fetch("/api/profile");
    const inforamtion = await res.json();
    const intendedData = inforamtion.profiles.filter(
      (item) => item.published === false
    );
    console.log({ intendedData });
    if (intendedData) {
      setData(intendedData);
      // setEmpty(true);
    } else {
      return;
    }
  };

  // finish about refreshing page
  useEffect(() => {
    fetchData();
    if (data) setEmpty(false);
  }, []);

  const publishedHandler = async (e, id) => {
    // e.preventDefault()
    const res = await fetch("/api/admin", {
      method: "PUT",
      body: JSON.stringify(id),
      headers: { "Content-Type": "application/json" },
    });

    const inforamtion = await res.json();
    console.log({ inforamtion });
    if (res.status === 200) {
      toast.success(inforamtion.message);
      const newData = data.filter((item) => item._id !== id);
      setData(newData);
    } else {
      toast.error(inforamtion.error);
    }
  };

  console.log({ data });
  // if(!data) return
  return (
    // <>
    <div className={styles.container}>
      {data ? (
        <>
          {data.map((item) => (
            <div className={styles.wrapper} key={item._id}>
              <h3> {item.article} </h3>
              <p> {item.description} </p>
              <div className={styles.charactristics}>
                <span> {item.address} </span>
                <span> {item.price} تومان </span>
              </div>

              {/* <Link href="/admin">           */}
              <button onClick={(e) => publishedHandler(e, item._id)}>
                {" "}
                انتشار{" "}
              </button>
              {/* </Link> */}
              <span className={styles.line}></span>
            </div>
          ))}
        </>
      ) : null}

      {!data.length ? (
        <p className={styles.empty}> هیچ آگهی برای انتشار وجود ندارد </p>
      ) : null}
      <Toaster />
    </div>

    // </>
  );
}

export default AdminMain;
