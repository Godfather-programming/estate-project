import Profile from "@/models/Profile";
import connectDB from "@/utils/connectDB";
import { validationSession } from "@/utils/session";
import { NextResponse } from "next/server";

export async function DELETE(req) {
  validationSession()

  await connectDB();

  const id =  await req.json()
  console.log(id);

  const deletedItem = await Profile.findOneAndDelete({_id: id})

  return NextResponse.json(
    { message: "آگهی با موفقیت حذف شد",  deletedItem},
    { status: 200 }
  );

}
