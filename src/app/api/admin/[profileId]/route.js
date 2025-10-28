import Client from "@/models/Client";
import Profile from "@/models/Profile";
import connectDB from "@/utils/connectDB";
import { validationSession } from "@/utils/session";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function PATCH(req, context) {
  try {
    validationSession();

    const session = await getServerSession(req);

    const client = await Client.findOne({ email: session.user.email });
    // if there is an error, check the session part that you get it with req
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


    await connectDB();

    const id = context.params.profileId;

    // also it is a right way
    // const desiredProfile === await Profile.find({_id: id})
    // desiredProfile.published = true
    // desiredProfile.save()

    const desiredProfile = await Profile.findOneAndUpdate(
      { _id: id },
      {
        $set: {
          published: true,
        },
      },
      { new: true }
    );

    return NextResponse.json(
      {
        message: "آگهی با موفقیت منتشر شد",
        desiredProfile,
      },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "مشکلی در ارتباط با سرور رخ داده است!" },
      { status: 500 }
    );
  }
}
