"use client"

import React from "react";
import { IoPersonCircleOutline } from "react-icons/io5";
import { RxExit } from "react-icons/rx";

import styles from "@/modules/DashbordAside.module.scss";
import { getServerSession } from "next-auth";
import { authOptions } from "@/utils/authOptions";
import Link from "next/link";
import { useSession } from "next-auth/react";

function DashbordAside() {
  // const session = await getServerSession(authOptions);
  // const { email } = session.user;
  const session = useSession()
  const email = session?.data?.user?.email
  return (
    <div className={styles.container}>
      <div className={styles.user}>
        <IoPersonCircleOutline size={40} color="#0500ff" />
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
