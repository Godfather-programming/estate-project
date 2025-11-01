import Client from "@/models/Client";
import { verifyPassword } from "@/utils/auth";
import { authOptions } from "@/utils/authOptions";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const session = await getServerSession(authOptions);
    const client = await Client.findOne({ email: session.user.email });

    return NextResponse.json(
      { message: "اطلاعات کاربر با موفقیت دریافت شد", role: client.role },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "مشکلی در سرور رخ داده است!" },
      { status: 500 }
    );
  }
}
