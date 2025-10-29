"use client";

import React, { useState } from "react";

import styles from "@/AddAdvPart/LoadingButton.module.scss";
import { centerStyles } from "@/constants/styles";
import { ColorRing } from "react-loader-spinner";
import toast, { Toaster } from "react-hot-toast";
import Loader from "../Loader";
import Link from "next/link";
import { useRouter } from "next/navigation";

function LoadingButton({ value, handler, loading }) {
  // const router = useRouter()
  return (
    <>
      {loading ? (
        <div style={centerStyles}>
          <Loader />
        </div>
      ) : value === "ویرایش" ? (
        // <Link href="/dashbord/my-adv" className={styles.link}>
          <button  className={styles.register} onClick={handler}>
            {value} آگهی
          </button>
        // </Link>
      ) : (
        <button type="submit" className={styles.register} onClick={handler}>
          {value} آگهی
        </button>
      )}
      <Toaster />
    </>
  );
}

export default LoadingButton;
