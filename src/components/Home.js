import React, { useState } from "react";
import Nav from "./Nav";
import Countries from "./Countries";
import Filter from "./Filter";
import Search from "./Search";
import "../styles/home.scss";

function Home() {
  const [search, setSearch] = useState("");
  const [countryRegion, setCountryRegion] = useState("");
  function searchOnChangeHandler(e) {
    setSearch(e.target.value);
  }
  function filterOnChangeHandler(e) {
    setCountryRegion(e.target.value)
  }

  return (
    <>
      <Nav></Nav>
      <div className="filter">
        <Search
          setSearch={setSearch}
          search={search}
          searchOnChangeHandler={searchOnChangeHandler}
        ></Search>
        <Filter
          countryRegion={countryRegion}
          setCountryRegion={setCountryRegion}
          filterOnChangeHandler={filterOnChangeHandler}
        ></Filter>
      </div>
      <Countries setSearch={setSearch} search={search}></Countries>
    </>
  );
}

export default Home;
