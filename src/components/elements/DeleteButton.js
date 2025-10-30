"use client";

import React, { useState } from "react";

import styles from "@/elements/DeleteButton.module.scss";
import { AiOutlineDelete } from "react-icons/ai";
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";
import Loader from "@/modules/Loader";

function DeleteButton({ type, item, toast }) {
  const [loading, setLoading] = useState(false);

  const router = useRouter();
  const deleteHandler = async (e, item) => {
    setLoading(true);
    // e.preventDefault()
    const res = await fetch(`/api/profile/delete/${item._id}`, {
      method: "DELETE",
    });
    const information = await res.json();
    setLoading(false);
    if (res.status === 200) {
      toast.success(information.message);
      router.refresh();
      // if(type ==="ادمین") {
      //   window.location.reload()
      // }

    } else {
      toast.error(information.error);
    }
  };
  return (
    <>
      {loading ? (
        <Loader type={type} />
      ) : (
        <>
          <button
            className={type === "آگهی من" ? styles.delete : null}
            onClick={(e) => deleteHandler(e, item)}
          >
            <span> حذف آگهی </span>
            <span className={styles.trash}>
              {" "}
              <AiOutlineDelete size={18} />{" "}
            </span>
          </button>
        </>
      )}
    </>
  );
}

export default DeleteButton;
