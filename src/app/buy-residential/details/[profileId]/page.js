import Profile from "@/models/Profile";
import ProfileDetailsPage from "@/templates/ProfileDetailsPage";
import connectDB from "@/utils/connectDB";
import React from "react";

async function Details(props) {
  const { profileId } = await props.params;
  console.log({ profileId });

  // let finalData = null;
  // if (profileId) {
  const res = await fetch(
    `http://localhost:3000/api/profile/details/${profileId}`
  );
  const data = await res.json();
  console.log(data.intendedProfile);

  // finalData = data.intendedProfile;
  // }

  if (!data.intendedProfile) {
    return <h3> مشکی پیش آمده است! لطفا بعدا امتحان کنید. </h3>;
  }

  return <ProfileDetailsPage intendedProfile={data.intendedProfile} />;
}

export default Details;

export const generateMetadata = async (props) => {
  const { profileId } = await props.params;
  console.log(profileId);

  await connectDB();

  const resSeo = await fetch(`http://localhost:3000/api/admin/${profileId}`);
  const {SEO} = await resSeo.json();
  // const seo = SEO[0]
  // console.log(seo)

  return {
    title: SEO[0].title,
    description: SEO[0].description,
    other: {phoneCall: SEO[0].phoneCall}
  }


};

// const desiredProfile = await Profile.findOne({ _id: profileId });
// console.log(desiredProfile);

// return {
//   title: desiredProfile.article,
//   description: desiredProfile.explanations,
//   authors: {name: desiredProfile.firm,},
//   other: {king: "power", price: desiredProfile.price}
// };
