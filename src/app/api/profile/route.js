
import Profile from "@/models/Profile";
import { authOptions } from "@/utils/authOptions";
import connectDB from "@/utils/connectDB";
import { e2p, sp } from "@/utils/replaceNumber";
import { validationSession } from "@/utils/session";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function POST(req) {
  // const session = getServerSession(authOptions);
  // if (!session) {
  //   return NextResponse.json(
  //     { error: "لطفا ابتدا حساب کاربری ایجاد کنید!" },
  //     { status: 401 }
  //   );
  // }
  const session = await getServerSession(req)
  const session1 = await getServerSession(authOptions)
  console.log({reqSession: session})
  console.log({authSession: session1})
  try {
    validationSession();

    await connectDB();

    const data = await req.json();

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
      published,
      email
    } = data;

    console.log(email);
    console.log(email);

    if (
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

    // const email1 = data.email
    // const recordedProfile = await Profile.create({
    //   ...data,
    //   price: sp(data.price),
    //   phoneNumber: e2p(data.phoneNumber)
    // })

       const recordedProfile = await Profile.create({
        ...data,
        price: sp(data.price),
        phoneNumber: e2p(data.phoneNumber),
       })

    console.log(recordedProfile.email);

    return NextResponse.json(
      { message: "آگهی با موفقیت ثبت شد!" },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "مشکلی در سرور رخ داده است!" },
      { status: 500 }
    );
  }
}

export async function GET() {
  validationSession();
  await connectDB();

  // const data = await req.json();
  // console.log(data);

  const profiles = await Profile.find();

  return NextResponse.json(
    {
      message: "اطلاعات با موفقیت دریافت شد",
      profiles,
    },
    { status: 200 }
  );
}
