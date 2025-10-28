// "use client";

import React from "react";

import styles from "@/templates/AdminPage.module.scss";
import DashbordAside from "@/modules/DashbordAside";
import AdminMain from "@/modules/AdminMain";
import { getServerSession } from "next-auth";
import { authOptions } from "@/utils/authOptions";
import connectDB from "@/utils/connectDB";
import Client from "@/models/Client";
import Profile from "@/models/Profile";


async function AdminPage({ email }) {
  // const session = await getServerSession(authOptions);
  // console.log(session);
  // const { email } = session.user;

  await connectDB();

  const client = await Client.findOne({ email });

  const profiles = await Profile.find({ published: false });
  console.log({profiles})

  return (
    <div className={styles.container}>
      <div className={styles.aside}>
        <DashbordAside email={email} role={client.role} />
      </div>

      <div className={styles.main}>
        {/* {profiles.length ? (
          <AdminMain profiles={JSON.parse(JSON.stringify(profiles))}/>
        ) : (
          <p className={styles.empty}> هیچ آگهی در انتظار تاییدی وجود ندارد </p>
        )} */}
        <AdminMain profiles={JSON.parse(JSON.stringify(profiles))}/> 
      </div>
    </div>
  );
}

export default AdminPage;
