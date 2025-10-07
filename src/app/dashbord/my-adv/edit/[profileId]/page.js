"use client";

import ProfileEditPage from "@/templates/ProfileEditPage";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

function Edit() {
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

  if (data) return <ProfileEditPage data={data} profileId={profileId}/>;
}

export default Edit;
