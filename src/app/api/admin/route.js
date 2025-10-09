import Profile from "@/models/Profile";
import { validationSession } from "@/utils/session";
import { NextResponse } from "next/server";

export async function PUT(req) {
    validationSession()

  const profileId = await req.json();

  const desiredProfile = await Profile.findOneAndUpdate(
    { _id: profileId },
    {
      $set: {
        published: "true",
      },
    }, 
    {new: true}
  );

  return NextResponse.json(
    {
      message: "آگهی با موفقیت منتشر شد", desiredProfile
    },
    { status: 200 }
  );
}
