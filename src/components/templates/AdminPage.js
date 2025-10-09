// "use client";

import React from "react";

import styles from "@/templates/AdminPage.module.scss";
import DashbordAside from "@/modules/DashbordAside";
import AdminMain from "@/modules/AdminMain";
import { getServerSession } from "next-auth";
import { authOptions } from "@/utils/authOptions";

async function AdminPage() {
  const session = await getServerSession(authOptions);
  console.log(session);
  const { email } = session.user;

  return (
    <div className={styles.container}>
      <div className={styles.aside}>
        <DashbordAside email={email}/>
      </div>

      <div className={styles.main}>
        <AdminMain />
      </div>
    </div>
  );
}

export default AdminPage;
