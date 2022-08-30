import React, { useState } from "react";
import "./Banner.css";
import Search from "./Search.js";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
const Banner = () => {
  const navigate = useNavigate();
  const [showSearch, setShowSearch] = useState(false);
  const sfun = () => {
    setShowSearch(!showSearch);
  };
  return (
    <div className="banner">
      <div className="banner__search">
        {showSearch && <Search />}
        <Button
          onClick={sfun}
          variant="Outlined"
          className="banner__searchButton "
        >
          {showSearch ? "Hide" : "Search Date"}
        </Button>
      </div>
      <div className="banner__info">
        <h1>Get out and stretch your imgiantion</h1>
        <h5>
          Plan a difference kind of getway to uncover the hidden gems near you.
        </h5>
        <Button variant="outlined" onClick={() => navigate("/search")}>
          Explore NearBy
        </Button>
      </div>
    </div>
  );
};

export default Banner;
