import Profile from "@/models/Profile";
import MyAdvPage from "@/templates/MyAdvPage";
import { authOptions } from "@/utils/authOptions";
import { getServerSession } from "next-auth";
import React from "react";

async function MyAdv() {
  const session = await getServerSession(authOptions);
  console.log(session);
  const { email } = session.user;

  return <MyAdvPage email={email}/>;
}

export default MyAdv;
