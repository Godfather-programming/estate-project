import React from "react";

import styles from "@/modules/DetailsMain.module.scss";
import { MdOutlinePlace } from "react-icons/md";
import Options from "./Options";
import ItemList from "./ItemList";

function DetailsMain({
  intendedProfile: { article, explanations, address, amenities, rules },
}) {
  // const { article, explanations, address, amenities, rules } = intendedProfile;
  console.log({ amenities });
  console.log({ rules });
  return (
    <div className={styles.container}>
      <div className={styles.name}>
        <h1> {article} </h1>
        <div className={styles.place}>
          <span>
            {" "}
            <MdOutlinePlace size={20} />{" "}
          </span>
          <span> {address} </span>
        </div>
      </div>

      <div className={styles.explanations}>
        <p> توضیحات </p>
        <span className={styles.line}></span>
        <p> {explanations} </p>
      </div>

      <ItemList title="امکانات" data={amenities} />

      <ItemList title="قوانین" data={rules} />
    </div>
  );
}

export default DetailsMain;
