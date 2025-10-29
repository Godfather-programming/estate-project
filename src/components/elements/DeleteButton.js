"use client";

import React, { useState } from "react";

import styles from "@/elements/DeleteButton.module.scss";
import { AiOutlineDelete } from "react-icons/ai";
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";
import Loader from "@/modules/Loader";

function DeleteButton({ type, item }) {
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
      // const newData = data.filter((x) => x._id !== item._id);
      // setData(newData);
    } else {
      toast.error(information.error);
    }
  };
  return (
    <>
      {loading ? (
        <Loader loading={loading} type={type} />
      ) : (
        <>
          <button
            className={type === "آگهی من" ? styles.delete : null}
            onClick={(e) => deleteHandler(e, item)}
          >
            <span> حذف آگهی </span>
            <span>
              {" "}
              <AiOutlineDelete size={18} />{" "}
            </span>
          </button>
          <Toaster />
        </>
      )}
    </>
  );
}

export default DeleteButton;
