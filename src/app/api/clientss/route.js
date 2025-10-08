import Client from "@/models/Client";
import { verifyPassword } from "@/utils/auth";
import { NextResponse } from "next/server";

export async function POST(req) {
  const email = await req.json();

  const client = await Client.findOne({ email });
//   console.log(client)
//   a1b2b3a4s5duck

  const adminPassword = "123nemat"

  const isValid = await verifyPassword(adminPassword, client.password)
  console.log(isValid)

  return NextResponse.json(
    { message: "اطلاعات کاربر با موفقیت دریافت شد", client, valid: isValid },
    {
      status: 200,
    }
  );
}
