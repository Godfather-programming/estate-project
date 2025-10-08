"use client";

import React, { useEffect, useState } from "react";

import styles from "@/templates/BuyResidentialPage.module.scss";
import BuyResidentialAside from "@/modules/BuyResidentialAside";
import BuyResidnetialMain from "@/modules/BuyResidentialMain";

function BuyResidentialPage() {
  const [data, setData] = useState(null);
  const fetchData = async () => {
    const res = await fetch("/api/profile");
    const information = await res.json();
    setData(information.profiles);
    // console.log(information.profiles)
  };
  useEffect(() => {
    fetchData();
  }, []);
  
  console.log({primeData: data});
  if (data)
    return (
      <div className={styles.container}>
        <div className={styles.aside}>
          <BuyResidentialAside data={data} setData={setData}/>
        </div>

        <div className={styles.main}>
          <BuyResidnetialMain data={data} setData={setData} />
        </div>
      </div>
    );
}

export default BuyResidentialPage;
