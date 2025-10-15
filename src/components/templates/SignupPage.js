"use client";

import React, { useState } from "react";

import styles from "@/templates/SignupPage.module.scss";
import Input from "@/elements/Input";
import Link from "next/link";
import { formHandler } from "@/utils/serverFunctions";
import { useRouter } from "next/navigation";
import { ColorRing } from "react-loader-spinner";
import toast, { Toaster } from "react-hot-toast";
import SigninInput from "@/elements/SigninInput";
import Loader from "@/modules/Loader";

function SignupPage() {
  const router = useRouter();

  const [information, setIformation] = useState({
    email: "",
    password: "",
    repeatedPassword: "",
    loading: false,
  });

  // const [loading, setLoading] = useState(false);

  const changeHandler = (e) => {
    const { name } = e.target;
    const { value } = e.target;
    setIformation({ ...information, [name]: value });
  };

  const registerHandler = async (e) => {
    e.preventDefault();

    if (information.password !== information.repeatedPassword) {
      toast.error("رمز عبور و تکرار آن برابر نیست!");
      return;
    }

    setIformation({ ...information, loading: true })
    const res = await fetch("/api/auth/signup", {
      method: "POST",
      body: JSON.stringify({
        email: information.email,
        password: information.password,
      }),
      headers: { "Content-Type": "application/json" },
    });

    const data = await res.json();
    setIformation({...information, loading: false})
    // console.log(res.status);
    // console.log(data);

    if (res.status === 201) {
      // router.push("/signin")
    } else {
      toast.error(data.error);
    }
  };
  return (
    <div className={styles.container}>
      <h2> فرم ثبت نام </h2>

      <form
        className={styles.form}
        // action={() => {}}
        // action={async (formData) => {
        //   await formHandler(formData);
        //   if (!formHandler.error) console.log(formHandler.error);
        // }}
      >
        <SigninInput
          label="ایمیل"
          type="text"
          name="email"
          value={information.email}
          changeHandler={changeHandler}
        />
        <SigninInput
          label="رمزعبور"
          type="text"
          name="password"
          value={information.password}
          changeHandler={changeHandler}
        />
        <SigninInput
          label="تکرار رمزعبور"
          type="text"
          name="repeatedPassword"
          value={information.repeatedPassword}
          changeHandler={changeHandler}
        />

        {information.loading ? (
         <Loader />
        ) : (
          <button type="submit" onClick={registerHandler}>
            {" "}
            ثبت نام{" "}
          </button>
        )}
      </form>

      <div className={styles.situation}>
        <span> حساب کاربری دارید؟ </span>
        <div>
          <Link href="/signin">
            <span className={styles.entrance}> ورود </span>
          </Link>
          <span className={styles.line}> </span>
        </div>
      </div>
      <Toaster />
    </div>
  );
}

export default SignupPage;
