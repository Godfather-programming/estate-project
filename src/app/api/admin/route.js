import Client from "@/models/Client";
import Profile from "@/models/Profile";
import { authOptions } from "@/utils/authOptions";
import connectDB from "@/utils/connectDB";
import { validationSession } from "@/utils/session";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

// check the type of request(POST)

export async function POST(req) {
      validationSession();
    
    await connectDB()

    const session = await getServerSession(authOptions);
    console.log({session})
    console.log({session})
    console.log({session})

  const client = await Client.findOne({ email: session?.user.email });
  if (!client) {
    return NextResponse.json(
      { error: "حساب کاربری یافت نشد!" },
      { status: 404 }
    );
  }

  if (client.role !== "ADMIN") {
    return NextResponse.json(
      { error: "شما مجاز به انتشار آگهی نیستید!" },
      { status: 403 }
    );
  }


  const profiles = await Profile.find().select("SEO")
  console.log({profiles})
  console.log({profiles})
  console.log({profiles})
  const SEO = profiles.map(item => item.SEO)

  return NextResponse.json({profiles, SEO}, {status: 200})
}
