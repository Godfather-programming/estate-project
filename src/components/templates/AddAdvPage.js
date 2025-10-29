"use client";

import React, { useState } from "react";

import styles from "@/templates/AddAdvPage.module.scss";
import DashbordAside from "@/modules/DashbordAside";
import Specifiation from "@/modules/AddAdvPart/Specification";
import Categories from "@/modules/AddAdvPart/Categories";
import Amenities from "@/modules/AddAdvPart/Amenities";
import Rules from "@/modules/AddAdvPart/Rules";
import Dates from "@/modules/AddAdvPart/Dates";
import LoadingButton from "@/modules/AddAdvPart/LoadingButton";
import toast from "react-hot-toast";
import { e2p } from "@/utils/replaceNumber";
import { useSession } from "next-auth/react";

function AddAdvPage({ email, role }) {
  console.log(email);
  const date = new Date();
  const time = Intl.DateTimeFormat("fa").format(date);

  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({
    article: "",
    explanations: "",
    address: "",
    phoneNumber: "",
    price: "",
    firm: "",
    category: "",
    constructionDate: time,
    amenities: [],
    rules: [],
    published: "false",
    email: email,
  });

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const addAdvHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    const res = await fetch("/api/profile", {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    });

    const inforamtion = await res.json();
    setLoading(false);
    if (res.status === 200) {
      toast.success(inforamtion.message);
      // setData({
      //   article: "",
      //   explanations: "",
      //   address: "",
      //   phoneNumber: "",
      //   price: "",
      //   firm: "",
      //   category: "",
      //   constructionDate: time,
      //   amenities: [],
      //   rules: [],
      //   published: "false",
      //   email
      // });
    } else {
      toast.error(inforamtion.error);
    }
  };

  // const session = useSession()
  // console.log({session})

  return (
    <div className={styles.container}>
      <div className={styles.aside}>
        <DashbordAside email={email} role={role}/>
      </div>

      <div className={styles.main}>
        <div className={styles.record}>
          <p> ثبت آگهی </p>
        </div>

        <div className={styles.wrapper}>
          <form className={styles.form}>
            <Specifiation data={data} changeHandler={changeHandler} />

            <Categories data={data} changeHandler={changeHandler} />

            <Amenities data={data} setData={setData} />

            <Rules data={data} setData={setData} />

            <Dates data={data} setData={setData} />

            <LoadingButton
              data={data}
              value="ثبت"
              handler={addAdvHandler}
              loading={loading}
            />
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddAdvPage;
