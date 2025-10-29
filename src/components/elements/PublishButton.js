"use client";

import styles from "@/elements/PublishButton.module.scss";
import { useRouter } from "next/navigation";
import React from "react";
import toast, { Toaster } from "react-hot-toast";

function PublishButton({ id }) {
  const router = useRouter();

  const publishedHandler = async (e, id) => {
    const res = await fetch(`/api/admin/${id}`, {
      method: "PATCH",
      body: JSON.stringify(id),
      headers: { "Content-Type": "application/json" },
    });

    const inforamtion = await res.json();
    console.log({ inforamtion });
    if (res.status === 200) {
      toast.success(inforamtion.message);
      router.refresh();
    } else {
      toast.error(inforamtion.error);
    }
  };
  return (
    <>
      <button
        className={styles.publish}
        onClick={(e) => publishedHandler(e, id)}
      >
        {" "}
        انتشار{" "}
      </button>
      <Toaster />
    </>
  );
}

export default PublishButton;
