import Profile from "@/models/Profile";
import { authOptions } from "@/utils/authOptions";
import connectDB from "@/utils/connectDB";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function GET() {
  await connectDB();
  const session = await getServerSession(authOptions);
  if (!session) {
    return NextResponse.json(
      { error: "لطفا ابتدا حساب کاربری ایجاد کنید" },
      { status: 404 }
    );
  }

  const { email } = session.user;

  const intendedProfiles = await Profile.find({ email });

  return NextResponse.json(
    { message: "اطلاعات کاربر با موفقیت دریافت شد", intendedProfiles },
    {
      status: 200,
    }
  );
}
