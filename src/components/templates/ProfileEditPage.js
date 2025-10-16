"use client";

import React, { useEffect, useState } from "react";
import styles from "@/templates/AddAdvPage.module.scss";
import DashbordAside from "@/modules/DashbordAside";
import Specifiation from "@/modules/AddAdvPart/Specification";
import Categories from "@/modules/AddAdvPart/Categories";
import Amenities from "@/modules/AddAdvPart/Amenities";
import Rules from "@/modules/AddAdvPart/Rules";
import Dates from "@/modules/AddAdvPart/Dates";
import LoadingButton from "@/modules/AddAdvPart/LoadingButton";
import { useParams } from "next/navigation";
import toast from "react-hot-toast";

function ProfileEditPage({ data, profileId, email }) {
  console.log(data);
  const [information, setInformation] = useState({
    _id: data._id,
    article: data.article,
    explanations: data.explanations,
    address: data.address,
    phoneNumber: data.phoneNumber,
    price: data.price,
    firm: data.firm,
    category: data.category,
    constructionDate: data.constructionDate,
    amenities: data.amenities,
    rules: data.rules,
  });
  console.log(information);

  //   const [data, setData] = useState([]);
  // const {profileId} = useParams()
  // console.log(profileId)
  //   useEffect(() => {
  //     const fetchData = async () => {
  //       const res = await fetch(`/api/profile/edit/${profileId}`, {
  //         method: "POST",
  //         body: JSON.stringify(profileId),
  //         headers: {"Content-Type": "application/json"}
  //       });
  //       const data = await res.json();
  //       console.log(data)
  //       setData(data.intendedProfile);
  //     };
  //     fetchData();
  //   }, []);
  //   console.log(data);
  const changeHandler = (e) => {
    const { name, value } = e.target;
    setInformation({ ...information, [name]: value });
  };

  const editHandler = async (e) => {
    e.preventDefault();

    const res = await fetch(`/api/profile/edit/${profileId}`, {
      method: "PUT",
      body: JSON.stringify({ information }),
      headers: { "Content-Type": "application/json" },
    });
    const data = await res.json();
    console.log(data);
    if(res.status === 200) {
      return toast.success(data.message)
    } else {
      return toast.error(data.error)
    }
    
  };
  if (data)
    return (
      <div className={styles.container}>
        <div className={styles.aside}>
          <DashbordAside email={email}/>
        </div>

        <div className={styles.main}>
          <div className={styles.record}>
            <p> ویرایش آگهی</p>
          </div>

          <div className={styles.wrapper}>
            <form className={styles.form}>
              <Specifiation data={information} changeHandler={changeHandler} />

              <Categories data={information} changeHandler={changeHandler} />

              <Amenities data={information} setData={setInformation} />

              <Rules data={information} setData={setInformation} />

              <Dates data={information} setData={setInformation} />

              <LoadingButton
                data={information}
                value="ویرایش"
                handler={editHandler}
              />
            </form>
          </div>
        </div>
      </div>
    );
}

export default ProfileEditPage;
