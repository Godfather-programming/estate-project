"use client";

import React, { useEffect, useState } from "react";

import styles from "@/templates/BuyResidentialPage.module.scss";
import BuyResidentialAside from "@/modules/BuyResidentialAside";
import BuyResidnetialMain from "@/modules/BuyResidentialMain";
import { useRouter, useSearchParams } from "next/navigation";

function BuyResidentialPage({finalData}) {

    return (
      <div className={styles.container}>
        <div className={styles.aside}>
          <BuyResidentialAside />
        </div>

        <div className={styles.main}>
          {finalData.length ? (
            <BuyResidnetialMain finalData={finalData} />
          ) : (
            <p className={styles.none}> هیچ آگهی ثبت نشده است </p>
          )}
        </div>
      </div>
    );

}

export default BuyResidentialPage;
