"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import styles from "@/elements/PublishButton.module.scss";
import Loader from "@/modules/Loader";

function PublishButton({ id, toast }) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const publishedHandler = async (id) => {
    setLoading(true);
    const res = await fetch(`/api/admin/${id}`, {
      method: "PATCH",
      body: JSON.stringify(id),
      headers: { "Content-Type": "application/json" },
    });

    const inforamtion = await res.json();
    setLoading(false);
    if (res.status === 200) {
      toast.success(inforamtion.message);
      router.refresh();
    } else {
      toast.error(inforamtion.error);
    }
  };
  return (
    <>
      {loading ? (
        <Loader type="ادمین" />
      ) : (
          <button
            className={styles.publish}
            onClick={(e) => publishedHandler(e, id)}
          >
            {" "}
            انتشار{" "}
          </button>
      )}
    </>
  );
}

export default PublishButton;
