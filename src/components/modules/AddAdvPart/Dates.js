import React from "react";

import styles from "@/AddAdvPart/Dates.module.scss";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import DatePicker from "react-multi-date-picker";
import { dateStyle } from "@/constants/styles";

function Dates({ data, setData }) {
  const dateHandler = (e) => {
    const date = new Date(e);
    // const time = Intl.DateTimeFormat("fa").format(date);
    // console.log(data.constructionDate)
    setData({ ...data, constructionDate: date });
    console.log(data.constructionDate)
  };

  const date1 = new Date(data.constructionDate).toLocaleDateString("fa-IR")
  console.log({date1})
  return (
    <div style={{ marginTop: "20px" }} className={styles.date}>
      <p> تاریخ ساخت </p>
      <DatePicker
        calendar={persian}
        locale={persian_fa}
        placeholder={date1}
        value={data.constructionDate}
        onChange={dateHandler}
        calendarPosition="bottom-right"
        style={dateStyle}
      />
    </div>
  );
}

export default Dates;
