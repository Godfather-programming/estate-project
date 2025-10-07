"use client";

import React from "react";

import Link from "next/link";
import styles from "@/layout/Header.module.scss";
import { PiSignInBold } from "react-icons/pi";
import { BsFillPersonCheckFill } from "react-icons/bs";
import { useSession } from "next-auth/react";

function Header() {
  const { status } = useSession();
  console.log(status);
  return (
    <div className={styles.header}>
      <div className={styles.charactristics}>
        <Link href="/">
          {" "}
          <span> صفحه اصلی </span>{" "}
        </Link>
        <Link href="buy-residential"> <span> آگهی ها </span> </Link>
      </div>
      <div className={styles.entrance}>
        {" "}
        {status === "authenticated" ? (
          <Link href="/dashbord"> <BsFillPersonCheckFill /> </Link>
        ) : (
          <>
            <Link href="/signin">
              {" "}
              <PiSignInBold size={25} /> <span> ورود </span>{" "}
            </Link>
          </>
        )}{" "}
      </div>
    </div>
  );
}

export default Header;
