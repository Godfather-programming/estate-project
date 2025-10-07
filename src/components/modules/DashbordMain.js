import React from "react";

import styles from "@/modules/DashbordMain.module.scss";

function DashbordMain({ date }) {
  // console.log(date)
  const time = Intl.DateTimeFormat("fa").format(date);
  // console.log(time)
  return (
    <div className={styles.container}>
      <h2> سلام👋 </h2>

      <p> آگهی های خود را ثبت کنید تا هزاران نفر آن را مشاهده کنند </p>

      <div className={styles.date}>
        <span> تاریخ عضویت: </span>
        <span className={styles.history}> {time} </span>
      </div>
    </div>
  );
}

export default DashbordMain;
