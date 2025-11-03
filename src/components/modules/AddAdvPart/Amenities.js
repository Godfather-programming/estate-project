import { AiOutlineDelete } from "react-icons/ai";
import { MdOutlineAddToPhotos } from "react-icons/md";
import styles from "@/AddAdvPart/Amenities.module.scss";

function Amenities({ data, setData }) {
  const changeAmenitiesHandler = (e, index) => {
    const { value } = e.target;
    const newAmenities = [...data.amenities];
    newAmenities[index].text = value;
    setData({ ...data, amenities: newAmenities });
  };

  const deleteAmenitiesHandler = (e, index) => {
    e.preventDefault();
    const eliminatedAmenitie = data.amenities.splice(index, 1);
    setData({ ...data });
  };

  const addAmenitiesHandler = (e) => {
    e.preventDefault();
    setData({ ...data, amenities: [...data.amenities, { text: "" }] });
  };
  return (
    <div className={styles.facilities}>
      <p> امکانات رفاهی </p>
      {data.amenities?.map((item, index) => (
        <div className={styles.options} key={index}>
          <input
            type="text"
            className={styles.option}
            value={item.text}
            onChange={(e) => changeAmenitiesHandler(e, index)}
          />
          <button
            className={styles.delete}
            onClick={(e) => deleteAmenitiesHandler(e, index)}
          >
            {" "}
            <span> حذف </span> <AiOutlineDelete size={18} />{" "}
          </button>
        </div>
      ))}
      <button onClick={addAmenitiesHandler}>
        {" "}
        افزودن <MdOutlineAddToPhotos size={18} />{" "}
      </button>
    </div>
  );
}

export default Amenities;
