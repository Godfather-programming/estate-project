import Client from "@/models/Client";
import { hashedPassword } from "@/utils/auth";
import connectDB from "@/utils/connectDB";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    await connectDB();

    const { email, password } = await req.json();
    console.log({ email, password });

    if (!email || !password)
      return NextResponse.json(
        { error: "لطفا اطلاعات معتبر وارد کنید!" },
        { status: 422 }
      );

    const existedClient = await Client.findOne({ email });
    if (existedClient)
      return NextResponse.json(
        { error: "این حساب کاربری از قبل وجود دارد!" },
        { status: 422 }
      );

    const hashPassword = await hashedPassword(password);

    const newClient = await Client.create({ email, password: hashPassword });
    console.log(newClient);

    return NextResponse.json(
      { message: "حساب کاربری ایجاد شد!" },
      { status: 201 }
    );
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      { error: "مشکلی در سرور رخ داده است!" },
      { status: 500 }
    );
  }
}
