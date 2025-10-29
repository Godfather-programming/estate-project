// "use client";

// import React, { useEffect, useState } from "react";

import styles from "@/modules/AdminMain.module.scss";
// import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";
import Link from "next/link";
import PublishButton from "@/elements/PublishButton";
import DeleteButton from "@/elements/DeleteButton";

function AdminMain({ profiles }) {
  return (
    <div className={styles.container}>
      {profiles.length ? (
        <>
          {profiles.map((item) => (
            <div className={styles.wrapper} key={item._id}>
              <h3> {item.article} </h3>
              <p> {item.description} </p>
              <div className={styles.charactristics}>
                <span> {item.address} </span>
                <span> {item.price} تومان </span>
              </div>

              <div className={styles.options}>
                <PublishButton id={JSON.parse(JSON.stringify(item._id))} />

                <Link href={`/buy-residential/details/${item._id}`}>
                  {" "}
                  مشاهده جزئیات{" "}
                </Link>

                {/* <button> حذف آگهی </button> */}
                <DeleteButton
                  type="ادمین"
                  item={JSON.parse(JSON.stringify(item))}
                />
              </div>

              <span className={styles.line}></span>
            </div>
          ))}
        </>
      ) : (
        <p className={styles.empty}> هیچ آگهی برای انتشار وجود ندارد </p>
      )}

      {/* {!data.length ? (
        <p className={styles.empty}> هیچ آگهی برای انتشار وجود ندارد </p>
      ) : null} */}
      <Toaster />
    </div>

    // </>
  );
}

export default AdminMain;
