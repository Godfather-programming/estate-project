import { MdOutlineApartment } from "react-icons/md";
import { BsFillHouseHeartFill } from "react-icons/bs";
import { FaStore } from "react-icons/fa";
import { PiOfficeChairFill } from "react-icons/pi";



const types = ["خرید", "فروش", "رهن", "اجاره"];

const categories = [
  { category: "ویلا", src: "/images/apartment.png", title: "خانه ویلایی" },
  { category: "آپارتمان", src: "/images/office.png", title: "آپارتمان" },
  { category: "مغازه", src: "/images/store.png", title: "مغازه" },
  { category: "دفتر", src: "/images/villa.png", title: "دفترکار" },
];

const cities1 = ["تهران", "سنندج", "کرمانشاه", "اهواز"];
const cities2 = ["مشهد", "اصفهان", "شیراز", "خرم آباد"];

const dateStyle = {
  marginTop: "6px",
  outline: "none",
  margin: "auto",
  border: "1px dashed black",
  padding: "12px",
  width: "92px",
  color: "gray",
  borderRadius: "5px",
};

const centerStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "75px",
};

const centerStyles = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginBottom: "50px",
};

const queries = [
  { ویلا: "ویلا" },
  { آپارتمان: "آپارتمان" },
  { دفتر: "دفتر" },
  { مغازه: "مغازه" },
];

const icons = {
  ویلا: <BsFillHouseHeartFill size={20} color="#0500ff" />,
  آپارتمان: <MdOutlineApartment size={20} color="#0500ff" />,
  مغازه: <FaStore size={20} color="#0500ff" />,
  دفتر: <PiOfficeChairFill size={20} color="#0500ff" />,
};

export {
  types,
  categories,
  cities1,
  cities2,
  dateStyle,
  centerStyle,
  centerStyles,
  queries,
  icons
};
