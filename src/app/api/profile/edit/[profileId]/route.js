import Client from "@/models/Client";
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
  const session = await getServerSession(authOptions);
  if (!session) {
    return NextResponse.json(
      { error: "لطفا ابتدا حساب کاربری ایجاد کنید!" },
      { status: 401 }
    );
  }
  const { information } = await req.json();
  // const { profileId, information } = await req.json();
  const {
    _id,
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
  console.log(_id);

  if (
    !_id ||
    !article ||
    !explanations ||
    !address ||
    !phoneNumber ||
    !price ||
    !firm ||
    !category ||
    !constructionDate
  ) {
    return NextResponse.json(
      { error: "لطفا اطلاعات را به طور کامل وارد کنید!" },
      { status: 400 }
    );
  }

  const client = await Client.findOne({ email: session.user.email });
  console.log({ client });
  if (!client) {
    return NextResponse.json(
      { error: "حساب کاربری یافت نشد!" },
      { status: 404 }
    );
  }

  const intendedProfile = await Profile.findOne({ _id });
  if (!intendedProfile) {
    return NextResponse.json(
      { error: "آگهی مورد نظر یافت نشد!" },
      { status: 404 }
    );
  }
  console.log({ intendedProfile });

  // if (intendedProfile.userId.toHexString() !== client._id.toHexString()) {
  if (!intendedProfile.userId.equals(client._id)) {
    return NextResponse.json(
      { error: "شما به این آگهی دسترسی ندارید!" },
      { status: 403 }
    );
  }

  const profile = await Profile.findOneAndUpdate(
    { _id },
    {
      $set: information,
    },
    { new: true }
  );

  return NextResponse.json(
    { message: "اطلاعات با موفقیت ویرایش شد", profile },
    { status: 200 }
  );
}
