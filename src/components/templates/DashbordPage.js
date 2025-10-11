import React from "react";

import styles from "@/templates/DashbordPage.module.scss";
import DashbordAside from "@/modules/DashbordAside";
import DashbordMain from "@/modules/DashbordMain";
import { getServerSession } from "next-auth";
import { authOptions } from "@/utils/authOptions";
import Client from "@/models/Client";
import { redirect } from "next/navigation";

async function DashbordPage() {
  
  const session = await getServerSession(authOptions);
  console.log(session);
  if(!session) {
    redirect("/signin")
  }
  const email  = session?.user.email;
  const client = await Client.findOne({ email });
  const date = client?.createdAt;
  // use dashbord things here for don't doing the props drilling
  return (
    <div className={styles.container}>
      <div className={styles.aside}>
        <DashbordAside email={email}/>
      </div>

      <div className={styles.main}>
        <DashbordMain date={date} />
      </div>
    </div>
  );
}

export default DashbordPage;
