import Profile from "@/models/Profile";
import connectDB from "@/utils/connectDB";
import { validationSession } from "@/utils/session";
import { NextResponse } from "next/server";


export async function GET(req, context) {
  const id = context.params.profileId
  console.log({id})

  validationSession();

  await connectDB();
  const intendedProfile = await Profile.findOne({ _id: id });
  console.log(intendedProfile);

  return NextResponse.json({
    message: "اطلاعات پروفایل با موفقیت دریافت شد",
    intendedProfile: intendedProfile,
  }, {status: 200});
}