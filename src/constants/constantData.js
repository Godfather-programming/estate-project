const types = ["خرید", "فروش", "رهن", "اجاره"];

const categories = [
  { category: "خانه ویلایی", src: "/images/apartment.png" },
  { category: "آپارتمان", src: "/images/office.png" },
  { category: "مغازه", src: "/images/store.png" },
  { category: "دفترکار", src: "/images/villa.png" },
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
  marginBottom: "50px"
};

export { types, categories, cities1, cities2, dateStyle, centerStyle, centerStyles };
