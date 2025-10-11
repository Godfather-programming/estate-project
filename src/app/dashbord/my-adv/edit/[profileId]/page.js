"use client";

import ProfileEditPage from "@/templates/ProfileEditPage";
import { useSession } from "next-auth/react";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

function Edit() {
  const router = useRouter()
  const [data, setData] = useState(null);
  const { profileId } = useParams();
  console.log(profileId);
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`/api/profile/edit/${profileId}`, {
        method: "POST",
        body: JSON.stringify(profileId),
        headers: { "Content-Type": "application/json" },
      });
      const data = await res.json();
      //   console.log(data);
      setData(data.intendedProfile);
    };
    fetchData();
  }, []);
  console.log(data);

  const session = useSession();
  const email = session?.data?.user?.email;
  if(!session) router.push("/signin")
  if (data && email)
    return <ProfileEditPage data={data} profileId={profileId} email={email} />;
}

export default Edit;
