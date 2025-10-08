"use client";

import React, { useEffect, useState } from "react";
import { IoPersonCircleOutline } from "react-icons/io5";
import { RxExit } from "react-icons/rx";

import styles from "@/modules/DashbordAside.module.scss";
import { getServerSession } from "next-auth";
import { authOptions } from "@/utils/authOptions";
import Link from "next/link";
import { useSession } from "next-auth/react";

function DashbordAside({ email }) {
  const [admin, setAdmin] = useState(null);

  const fetchClient = async () => {
    const res = await fetch("/api/clientss", {
      method: "POST",
      body: JSON.stringify(email),
      headers: { "Content-Type": "application/json" },
    });
    const data = await res.json();
    console.log(data);
    setAdmin(data.valid);
  };

  useEffect(() => {
    fetchClient();
  }, []);

  // if (admin)
  return (
    <div className={styles.container}>
      <div className={styles.user}>
        <IoPersonCircleOutline size={40} color="#0500ff" />
        {admin ? <p> Admin </p> : null}
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
          {admin ? (
            <Link href="/admin">
              {" "}
              <li> در انتظار تایید </li>{" "}
            </Link>
          ) : null}
        </ul>
      </div>

      <div className={styles.exit}>
        <RxExit size="25px" />
        <span> خروج </span>
      </div>
    </div>
  );
}

export default DashbordAside;
