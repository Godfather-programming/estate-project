"use client";

import React, { useEffect, useState } from "react";

import styles from "@/templates/Dashbord.module.scss";
import DashbordAside from "@/modules/DashbordAside";
import MyAdvPart from "@/modules/MyAdvPart";

function MyAdvPage() {
  const [data, setData] = useState([]);
  // const [type, setType] = useState(true);
  const fetchData = async () => {
    const res = await fetch("/api/profile");
    const inforamtion = await res.json();
    console.log(inforamtion);
    setData(inforamtion.profiles);
  };
  useEffect(() => {
    fetchData();
  }, []);

  if (data) return (
    <div className={styles.container}>
      <div className={styles.aside}>
        <DashbordAside />
      </div>

      <div className={styles.main}>
        <MyAdvPart data={data} setData={setData}/>
      </div>
    </div>
  );
}

export default MyAdvPage;
