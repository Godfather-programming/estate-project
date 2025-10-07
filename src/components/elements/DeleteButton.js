// "use client"

import React from "react";

import styles from "@/modules/MyAdvPart.module.scss";
import { AiOutlineDelete } from "react-icons/ai";

function DeleteButton({deleteHandler}) {
  return (
    <button
      className={styles.delete}
      // onClick={() => {
      //   deleteHandler()
      //   revalidatePath()
      // }}
    >
      {" "}
      حذف آگهی <AiOutlineDelete size={18} />{" "}
    </button>
  );
}

export default DeleteButton;
