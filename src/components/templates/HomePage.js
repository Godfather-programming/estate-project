import React from "react";

import styles from "@/templates/HomePage.module.scss";
import { FaRegCircle } from "react-icons/fa6";
import { MdOutlineApartment } from "react-icons/md";
import {
  categories,
  cities1,
  cities2,
  types,
} from "src/constants/constantData";
import Image from "next/image";
import { getServerSession } from "next-auth";
import { authOptions } from "@/utils/authOptions";
import Link from "next/link";

function HomePage() {
  // const session = await getServerSession(authOptions)
  // console.log(session)
  return (
    <div className={styles.container}>
      <h1> سامانه خرید و اجاره ملک </h1>

      <div className={styles.types}>
        {types.map((i, index) => (
          <div key={index} className={styles.type}>
            <FaRegCircle />
            <span> {i} </span>
          </div>
        ))}
      </div>

      <div className={styles.categories}>
        {categories.map((item, index) => (
          <Link
            href={`/buy-residential?category=${item.category}`}
            key={index}
            className={styles.kind}
          >
            <div className={styles.category}>
              <Image src={item.src} width={220} height={130} alt={item.title}/>
              <span> {item.title} </span>
            </div>
          </Link>
        ))}
      </div>

      <div className={styles.cities}>
        <h2> شهر های پربازدید </h2>
        <div className={styles.wrapper}>
          <div>
            {cities1.map((i, index) => (
              <div key={index} className={styles.town}>
                <MdOutlineApartment color="#0500ff" />
                <span> {i} </span>
              </div>
            ))}
          </div>

          <div>
            {cities2.map((i, index) => (
              <div key={index} className={styles.town}>
                <MdOutlineApartment color="#0500ff" />
                <span> {i} </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
