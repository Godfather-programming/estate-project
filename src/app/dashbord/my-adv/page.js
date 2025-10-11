import Profile from "@/models/Profile";
import MyAdvPage from "@/templates/MyAdvPage";
import { authOptions } from "@/utils/authOptions";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import React from "react";

async function MyAdv() {
  const session = await getServerSession(authOptions);
  console.log(session);
  if(!session) redirect("/signin")
  const { email } = session.user;

  return <MyAdvPage email={email}/>;
}

export default MyAdv;
