import Profile from "@/models/Profile";
import { authOptions } from "@/utils/authOptions";
import connectDB from "@/utils/connectDB";
import { validationSession } from "@/utils/session";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function POST(req) {
  validationSession();

  await connectDB();

  const id = await req.json();
  console.log(id);
  const intendedProfile = await Profile.findOne({ _id: id });
  console.log(intendedProfile);

  return NextResponse.json({
    message: "اطلاعات پروفایل با موفقیت دریافت شد",
    intendedProfile,
  });
}

export async function PUT(req) {
  validationSession();
  const { profileId, information } = await req.json();
  const {
    article,
    explanations,
    address,
    phoneNumber,
    price,
    firm,
    category,
    constructionDate,
    amenities,
    rules,
  } = information;
  console.log(profileId);

  const profile = await Profile.findOneAndUpdate(
    { _id: profileId },
    {
      $set: {
        article,
        explanations,
        address,
        phoneNumber,
        price,
        firm,
        category,
        constructionDate,
        amenities,
        rules,
      },
    },
    {new : true}
  );

  return NextResponse.json(
    { message: "اطلاعات با موفقیت ویرایش شد", profile },
    { status: 200 }
  );
}
