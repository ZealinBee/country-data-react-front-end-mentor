import React from "react";
import "../styles/filter.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
function Filter({filterOnChangeHandler }) {
  return (
    <form>
      <select name="" id="" onChange={filterOnChangeHandler}>
        <option value="">Filter by Region</option>
        <option value="Africa">Africa</option>
        <option value="Americas">Americas</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
      <div className="arrow-wrapper">
        <FontAwesomeIcon icon={faChevronDown} />
      </div>
    </form>
  );
}

export default Filter;
