"use client"

import React, { useState } from "react";

import styles from "@/AddAdvPart/LoadingButton.module.scss";
import { centerStyles } from "src/constants/constantData";
import { ColorRing } from "react-loader-spinner";
import toast, { Toaster } from "react-hot-toast";

function LoadingButton({data, value, handler}) {
  const [loading, setLoading] = useState(false);


  return (
    <>
      {loading ? (
        <div style={centerStyles}>
          <ColorRing
            visible={true}
            height={60}
            ariaLabel="color-ring-loading"
            wrapperStyle={{}}
            wrapperClass="color-ring-wrapper"
            colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
          />
        </div>
      ) : (
        <button
          type="submit"
          className={styles.register}
          onClick={handler}
        >
       {value} آگهی
        </button>
      )}
      <Toaster />
    </>
  );
}

export default LoadingButton;
