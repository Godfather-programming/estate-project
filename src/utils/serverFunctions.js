// "use server";

// import { NextResponse } from "next/server";
// import Client from "@/models/Client";
// import connectDB from "./connectDB";
// import { hashedPassword } from "./auth";
// import toast from "react-hot-toast";
// // import { getServerSession } from "next-auth";
// // import { authOptions } from "./authOptions";

// const formHandler = async (formData) => {
//   try {
//     const email = formData.get("email");
//     const password = formData.get("password");
//     const repeatedPassword = formData.get("repeatedPassword");

//     console.log({ email, password, repeatedPassword });
//     if (!email || !password || !repeatedPassword)
//       throw new Error("لطفا اطلاعات معتبر وارد کنید!");

//     if (password !== repeatedPassword) {
//       toast.error("رمزعبور و تکرار آن یکسان نیست!");
//       throw new Error("لطفا رمزعبور و رمزعبور تکرار شده را بررسی کنید!");
//     }

//     await connectDB();

//     const existedClient = await Client.findOne({ email });
//     if (existedClient) {
//       throw new Error("این حساب کاربری از قبل وجود دارد!");
//     }

//     const hashPassword = await hashedPassword(password);
//     // console.log(hashPassword);
//     const client = await Client.create({ email, password: hashPassword });
//     // console.log(client);

//     NextResponse.json({ message: "حساب کاربری ایجاد شد!" });
//   } catch (error) {
//     console.log(error);
//     NextResponse.json({ error: "مشکلی در سرور رخ داده است" }, { status: 500 });
//   }
// };

// export { formHandler };
