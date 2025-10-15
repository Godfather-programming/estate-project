"use client";

import React, { useState } from "react";

import styles from "@/AddAdvPart/LoadingButton.module.scss";
import { centerStyles } from "src/constants/constantData";
import { ColorRing } from "react-loader-spinner";
import toast, { Toaster } from "react-hot-toast";
import Loader from "../Loader";

function LoadingButton({ data, value, handler, loading }) {
  return (
    <>
      {loading ? (
        <div style={centerStyles}>
          <Loader />
        </div>
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
