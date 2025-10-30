// "use client";

// import React, { useEffect, useState } from "react";

import styles from "@/templates/DashbordPage.module.scss";
import DashbordAside from "@/modules/DashbordAside";
import MyAdvPart from "@/modules/MyAdvPart";

function MyAdvPage({ email, profiles, role }) {
  // const [data, setData] = useState(profiles)
  // console.log(data) 
  //   const fetchData = async () => {
  //   const res = await fetch("/api/profile");
  //   const inforamtion = await res.json();
  //   console.log(inforamtion)
  //   setData(inforamtion.profiles)
  // };
  // useEffect(() => {
  //   fetchData()
  // }, [])
  // if (data)
    return (
  <div className={styles.container}>
        <div className={styles.aside}>
          <DashbordAside email={email} role={role}/>
        </div>

        <div className={styles.main}>
          {/* <MyAdvPart profiles={profiles} setData={setData} /> */}
          <MyAdvPart profiles={profiles} />
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