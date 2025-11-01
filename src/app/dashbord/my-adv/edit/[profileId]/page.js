"use client";

import ProfileEditPage from "@/templates/ProfileEditPage";
import { useSession } from "next-auth/react";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

function Edit() {

  
  const router = useRouter()
  const [data, setData] = useState(null);
  const [role, setRole] = useState(null);
  const { profileId } = useParams();
  console.log(profileId);
  const fetchData = async () => {
    const res = await fetch(`/api/profile/edit/${profileId}`, {
      method: "GET",
      // body: JSON.stringify(profileId),
      // headers: { "Content-Type": "application/json" },
    });
    const data = await res.json();
    //   console.log(data);
    setData(data.intendedProfile);
  };

  const fetchClient = async () => {
    const res = await fetch("/api/clientss")
    const data = await res.json()
    console.log({data})
    if(res.status === 200) {
      setRole(data.role)
    } else {
      toast.error(data.error)
    }

  }
  useEffect(() => {
    fetchData();
    fetchClient()
    console.log({role})
  }, []);
  console.log(data);

  const session = useSession();
  const email = session?.data?.user?.email;
  if(!session) router.push("/signin")
  if (data && email && role)
    return <>
    <ProfileEditPage data={data} profileId={profileId} email={email} role={role}/>
    <Toaster />
    </>;
}

export default Edit;
