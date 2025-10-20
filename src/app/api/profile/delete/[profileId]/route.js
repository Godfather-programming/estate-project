import Client from "@/models/Client";
import Profile from "@/models/Profile";
import connectDB from "@/utils/connectDB";
import { validationSession } from "@/utils/session";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function DELETE(req, context) {
  validationSession();

  const session = await getServerSession(req);

  await connectDB();

  const client = await Client.findOne({ email: session.user.email });
  if (!client) {
    return NextResponse.json(
      { error: "حساب کاربری یافت نشد!" },
      { status: 404 }
    );
  }

  const profileId = await context.params.profileId;
  console.log({ profileId });

  const intendedProfile = await Profile.findOne({_id: profileId})

  // const {id, userId} = await req.json();
  console.log({ clientId: client._id.toHexString() });

  // if (userId !== client._id.toHexString()) {
  if(!intendedProfile.userId.equals(client._id)){
    return NextResponse.json(
      { error: "شما به این آگهی دسترسی ندارید!" },
      { status: 403 }
    );
  }

  const deletedItem = await Profile.findOneAndDelete({ _id: profileId });

  return NextResponse.json(
    { message: "آگهی با موفقیت حذف شد", deletedItem },
    { status: 200 }
  );
}
