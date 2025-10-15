"use client";

import React, { useEffect, useState } from "react";

import styles from "@/templates/DashbordPage.module.scss";
import DashbordAside from "@/modules/DashbordAside";
import MyAdvPart from "@/modules/MyAdvPart";

function MyAdvPage({ email, profiles }) {
  const [data, setData] = useState(profiles)
  console.log(data) 
  if (data)
    return (
  <div className={styles.container}>
        <div className={styles.aside}>
          <DashbordAside email={email}/>
        </div>

        <div className={styles.main}>
          <MyAdvPart data={data} setData={setData} />
        </div>
      </div>
    );
  }
  
  export default MyAdvPage;
  
  // const [data, setData] = useState([]);
  // const fetchData = async () => {
  //   const res = await fetch("/api/profile/my-profile");
  //   const inforamtion = await res.json();
  //   console.log({ info: inforamtion.intendedProfiles});
  //   if(!(inforamtion.intendedProfiles)) {
  //     return
  //   } else {
  //     setData(inforamtion.intendedProfiles);
  //   }
  // };
  // useEffect(() => {
  //   fetchData();
  // }, []);