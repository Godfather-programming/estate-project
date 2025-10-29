import Client from "@/models/Client";
import Profile from "@/models/Profile";
import MyAdvPage from "@/templates/MyAdvPage";
import { authOptions } from "@/utils/authOptions";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import React from "react";

async function MyAdv() {
  const session = await getServerSession(authOptions);
  console.log(session);
  if (!session) redirect("/signin");
  const { email } = session.user;
  const customer = await Client.findOne({email})
  const [client] = await Client.aggregate([
    { $match: { email } },
    { $lookup: {
      from: "profiles",
      localField: "_id",
      foreignField: "userId", 
      as: "clientProfiles"
    } },
  ]);

  console.log(client.clientProfiles)
  const profiles = JSON.parse(JSON.stringify(client.clientProfiles))

  return <MyAdvPage email={email} profiles={profiles} role={customer.role}/>;
}

export default MyAdv;
