"use client";

import React, { Children, useEffect, useState } from "react";
import { IoPersonCircleOutline } from "react-icons/io5";
import { RxExit } from "react-icons/rx";

import styles from "@/modules/DashbordAside.module.scss";
import { getServerSession } from "next-auth";
import { authOptions } from "@/utils/authOptions";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";

function DashbordAside({ email, role }) {
  // console.log({ email, role });
  // const [admin, setAdmin] = useState(null);

  // const fetchClient = async () => {
  //   const res = await fetch("/api/clientss", {
  //     method: "POST",
  //     body: JSON.stringify(email),
  //     headers: { "Content-Type": "application/json" },
  //   });
  //   const data = await res.json();
  //   console.log(data);
  //   if (res.status === 200) {
  //     setAdmin(data.valid);
  //   } else {
  //     return;
  //   }
  // };

  // useEffect(() => {
  //   fetchClient();
  // }, []);

  // if (admin)
  return (
    <div className={styles.container}>
      <div className={styles.user}>
        <IoPersonCircleOutline size={40} color="#0500ff" />
        {role === "ADMIN" ? <p> Admin </p> : null}
        <span className={styles.email}> {email} </span>
        <span className={styles.line}> </span>
      </div>

      <div className={styles.options}>
        <ul>
          <Link href="/dashbord">
            {" "}
            <li> حساب کاربری </li>{" "}
          </Link>
          <Link href="/dashbord/my-adv">
            {" "}
            <li> آگهی های من </li>{" "}
          </Link>
          <Link href="/dashbord/add-adv">
            {" "}
            <li> ثبت آگهی </li>{" "}
          </Link>
          {role === "ADMIN" ? (
            <Link href="/admin">
              {" "}
              <li> در انتظار تایید </li>{" "}
            </Link>
          ) : null}
        </ul>
      </div>

      <div className={styles.exit} onClick={signOut}>
        <RxExit size="25px" />
        <span> خروج </span>
      </div>
    </div>
  );
}

export default DashbordAside;
