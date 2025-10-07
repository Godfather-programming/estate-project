import { getServerSession } from "next-auth";
import { authOptions } from "./authOptions";
import { NextResponse } from "next/server";

const validationSession = () => {
  const session = getServerSession(authOptions);
  if (!session) {
    return NextResponse.json(
      { error: "لطفا ابتدا حساب کاربری ایجاد کنید!" },
      { status: 422 }
    );
  }
};

export { validationSession };
