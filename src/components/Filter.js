import React from "react";
import "../styles/filter.scss";
import arrow from "../assets/arrow.svg";
function Filter() {
  return (
    <form>
      <select name="" id="">
        <option value="">Filter by Region</option>
        <option value="">Africa</option>
        <option value="">America</option>
        <option value="">Asia</option>
        <option value="">Europe</option>
        <option value="">Oceania</option>
      </select>
      <div className="arrow-wrapper">
        <img src={arrow} alt="" />
      </div>
    </form>
  );
}

export default Filter;
