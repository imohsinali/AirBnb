import React, { useState } from "react";
import "./Search.css";
import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import PeopleIcon from "@mui/icons-material/People";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
const Search = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };
  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };
  const navigate = useNavigate();
  return (
    <div className="search">
      <DateRangePicker ranges={[selectionRange]} onChange={handleSelect} />
      <h2>
        Number of gust
        <PeopleIcon />
      </h2>
      <input min={0} defaultValue={2} type="number" />
      <Button onClick={() => navigate("/search")}>Search Airbnb</Button>
    </div>
  );
};

export default Search;
