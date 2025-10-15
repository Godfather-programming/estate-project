"use client";

import React, { useState } from "react";

import styles from "@/templates/SignupPage.module.scss";
import Input from "@/elements/Input";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { ColorRing } from "react-loader-spinner";
import toast, { Toaster } from "react-hot-toast";
import SigninInput from "@/elements/SigninInput";
import Loader from "@/modules/Loader";

function SigninPage() {
  const router = useRouter();

  const [data, setData] = useState({
    email: "",
    password: "",
    loading: false,
  });

  const changeHandler = (e) => {
    const { name } = e.target;
    const { value } = e.target;
    setData({ ...data, [name]: value });
  };

  const loginHandler = async (e) => {
    e.preventDefault();
    // const { email, password } = data;
    // const { password } = data;
    // console.log({ email, password });

    setData({ ...data, loading: true });
    const res = await signIn("credentials", {
      email: data.email,
      password: data.password,
      redirect: false,
    });
    setData({ ...data, loading: false });
    if (res.error) {
      toast.error(res.error)
    } else {
      router.push("/")
    }
  };
  return (
    <div className={styles.container}>
      <h2> فرم ورود </h2>

      <form className={styles.form} style={{ height: "300px" }}>
        <SigninInput
          label="ایمیل"
          type="text"
          name="email"
          value={data.email}
          changeHandler={changeHandler}
        />
        <SigninInput
          label="رمزعبور"
          type="text"
          name="password"
          value={data.password}
          changeHandler={changeHandler}
        />

        {data.loading ? (
           <Loader />
        ) : (
          <button onClick={loginHandler}> ورود </button>
        )}
        {/* <button onClick={loginHandler}> ورود </button> */}
      </form>

      <div className={styles.situation}>
        <span> حساب کاربری ندارید؟ </span>
        <div>
          <Link href="/signup">
            <span className={styles.entrance}> ثبت نام </span>
          </Link>
          <span className={styles.line} style={{ width: "49px" }}>
            {" "}
          </span>
        </div>
      </div>
      <Toaster />
    </div>
  );
}

export default SigninPage;
