"use client";

import { useParams } from "next/navigation";
import styles from '@/templates/ProfileDetailsPage.module.scss'
import React, { useEffect, useState } from "react";
import DetailsMain from "@/modules/DetailsMain";
import DetailsAside from "@/modules/DetailsAside";

function ProfileDetailsPage({intendedProfile}) {
  console.log(intendedProfile)
  
  // const [data, setData] = useState([]);
  // const {profileId} = useParams()
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const res = await fetch(`/api/profile/edit/${profileId}`, {
  //       method: "POST",
  //       body: JSON.stringify(profileId),
  //       headers: {"Content-Type": "application/json"}
  //     });
  //     const data = await res.json();
  //     setData(data.intendedProfile)
  //     console.log(data)
  //   };
  //   fetchData()
  // }, []);
  // console.log(data)
  return <div className={styles.container}>
    <div className={styles.main}>
       <DetailsMain intendedProfile={intendedProfile} /> 
    </div>

    <div className={styles.aside}>
       <DetailsAside intendedProfile={intendedProfile} /> 
    </div>
  </div>;
}

export default ProfileDetailsPage;
