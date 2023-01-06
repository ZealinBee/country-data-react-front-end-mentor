import React from "react";
import "../styles/search.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

function Search({ searchOnChangeHandler }) {
  return (
    <>
      <div className="input-wrapper">
        <FontAwesomeIcon icon={faMagnifyingGlass} />
        <input
          type="search"
          name="countrySearch"
          id="country-search"
          placeholder="Search for a country... "
          onChange={searchOnChangeHandler}
        />
      </div>
    </>
  );
}

export default Search;
