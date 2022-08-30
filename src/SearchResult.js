import React, { useState } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import StarIcon from "@mui/icons-material/Star";
import "./SearchResult.css";
const SearchResult = ({
  img,
  location,
  title,
  description,
  star,
  price,
  total,
}) => {
  const [heart, setHeart] = useState(false);
  const heartFun = () => {
    setHeart(!heart);
  };
  console.log(heart);
  return (
    <div className="searchResult">
      <img src={img} alt="" />
      <p onClick={heartFun}>
        <FavoriteIcon
          className={heart ? "searchResult__heart" : "searcResul__heart1"}
        />
      </p>
      <div className="searchResult__info">
        <div className="searchResult__infoTop">
          <p>{location}</p>
          <h3>{title}</h3>
          <p>___</p>
          <p>{description}</p>
        </div>
        <div className="searchResult__infoButtom">
          <div className="searchResult__stars">
            <StarIcon className="searchResult__star" />
            <p>
              <strong>{star}</strong>
            </p>
          </div>
          <div className="searchResults__price">
            <h2>{price}</h2>
            <p>{total}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchResult;
