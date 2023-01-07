import React from "react";
import "../styles/filter.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
function Filter({filterOnChangeHandler }) {
  return (
    <form>
      <select name="" id="" onChange={filterOnChangeHandler}>
        <option value="" id="filter-all">Filter by Region</option>
        <option value="Africa" id="filter-africa">Africa</option>
        <option value="Americas" id="filter-americas">Americas</option>
        <option value="Asia" id="filter-asia">Asia</option>
        <option value="Europe" id="filter-europe">Europe</option>
        <option value="Oceania" id="filter-oceania">Oceania</option>
      </select>
     
      <div className="arrow-wrapper">
        <FontAwesomeIcon icon={faChevronDown} />
      </div>
    </form>
  );
}

export default Filter;
