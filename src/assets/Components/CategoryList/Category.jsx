/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const Category = ({ item }) => {
  const {
    id,
    picture,
    category,
    title,
    background_color,
    text_color,
    button_background_color,
  } = item;
  return (
    <Link to={`/donation-details/${id}`}>
      <div
        style={{ backgroundColor: background_color }}
        className="card card-compact bg-base-100 shadow-xl"
      >
        <figure>
          <img src={picture} alt="" />
        </figure>
        <div className="p-5">
          <button
            style={{
              backgroundColor: button_background_color,
              color: text_color,
            }}
            className="btn mb-[8px]"
          >
            {category}
          </button>
          <h2 className="card-title">{title}</h2>
        </div>
      </div>
    </Link>
  );
};

export default Category;
