import React from "react";

import styles from "./DetailsAside.module.scss";
import { MdRealEstateAgent } from "react-icons/md";
import { AiOutlinePhone } from "react-icons/ai";

import { FaCalendarCheck } from "react-icons/fa6";
import { icons } from "@/constants/icons";
import SharingButton from "./SharingButton";
import connectDB from "@/utils/connectDB";
import Client from "@/models/Client";
import { getServerSession } from "next-auth";
import { authOptions } from "@/utils/authOptions";
import PublishButton from "@/elements/PublishButton";
import Link from "next/link";
import { e2p, sp } from "@/utils/replaceNumber";

async function DetailsAside({
  intendedProfile: {
    _id,
    firm,
    phoneNumber,
    category,
    article,
    price,
    constructionDate,
  },
}) {
  await connectDB();

  const date = new Date(constructionDate).toLocaleDateString("fa-IR")

  const session = await getServerSession(authOptions);
  console.log({ session });

  const client = await Client.findOne({ email: session.user.email });

  return (
    <div className={styles.container}>
      <div className={styles.estate}>
        <span>
          {" "}
          <MdRealEstateAgent size={40} color="#0500ff" />{" "}
        </span>
        <p> املاک {firm} </p>
        <div className={styles.phoneNumber}>
          {" "}
          <span>
            {" "}
            <AiOutlinePhone size={18} />{" "}
          </span>{" "}
          <span> {e2p(phoneNumber)} </span>{" "}
        </div>
      </div>

      <SharingButton />

      <div className={styles.specifications}>
        <div className={styles.category}>
          {" "}
          <span>{icons[category]}</span> <span> {article} </span>
        </div>
        <p> {sp(price)} تومان </p>
        <div className={styles.Date}>
          <span>
            {" "}
            <FaCalendarCheck size={18} color="#0500ff" />{" "}
          </span>
          <span> {date} </span>
        </div>
      </div>

      <div className={styles.publish}>
        <Link href="/admin">
          <PublishButton id={_id} />
        </Link>
      </div>
    </div>
  );
}

export default DetailsAside;
