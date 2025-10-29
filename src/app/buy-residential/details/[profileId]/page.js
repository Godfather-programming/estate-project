import Profile from "@/models/Profile";
import ProfileDetailsPage from "@/templates/ProfileDetailsPage";
import connectDB from "@/utils/connectDB";
import React from "react";

async function Details(props) {
  const params = await props.params;
  const profileId = await params.profileId;
  console.log({ profileId });

  // await connectDB();

  // const intendedProfile = await Profile.findOne({ _id: profileId });
  // console.log({intendedProfile})

  let finalData = null
  if (profileId) {
    const res = await fetch(
      `http://localhost:3000/api/profile/details/${profileId}`
    );
    const data = await res.json();
    console.log(data.intendedProfile);
    finalData = data.intendedProfile
  }

  if (!finalData) {
    return <h3> مشکی پیش آمده است! لطفا بعدا امتحان کنید. </h3>;
  }

  return <ProfileDetailsPage intendedProfile={finalData} />;
}

export default Details;
