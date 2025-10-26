"use client";

import React, { useEffect, useState } from "react";

import styles from "@/modules/SharingButton.module.scss";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { PiShareNetwork } from "react-icons/pi";
// import { usePathname } from "next/navigation";

function SharingButton() {
  const [url, setUrl] = useState("");
//   const path = usePathname();
 
  
  useEffect(() => {
    // if (path) {
    //   setUrl(`http://localhost:3000/${path}`); 
    // } ==> also it is true

    setUrl(window.location.href)
  }, []);


  return (
    <CopyToClipboard text={url}>
      <div className={styles.sharing}>
        <span>
          {" "}
          <PiShareNetwork size={18} color="#0500ff" />{" "}
        </span>
        <span> اشتراک گذاری </span>
      </div>
    </CopyToClipboard>
  );
}

export default SharingButton;
