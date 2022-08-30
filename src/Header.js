import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import LanguageIcon from "@mui/icons-material/Language";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="header">
      <Link to={"/"}>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/220px-Airbnb_Logo_B%C3%A9lo.svg.png"
          alt="Airbnb"
          className="header__icon"
        />
      </Link>
      <div className="header__center">
        <input type="text" />
        <Link to={"/search"}>
          <SearchIcon />
        </Link>
      </div>

      <div className="header__right">
        <p>Become a Host</p>
        <LanguageIcon />
        <ArrowDropDownIcon />
        <AccountCircleIcon />
      </div>
    </div>
  );
};

export default Header;
