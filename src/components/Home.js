import React, { useState, useEffect } from "react";
import Nav from "./Nav";
import Countries from "./Countries";
import Filter from "./Filter";
import Search from "./Search";
import "../styles/home.scss";

function Home() {
  const [data, setData] = useState(null);
  const [originalData, setOriginalData] = useState(null)
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [countryRegion, setCountryRegion] = useState("");

  function searchOnChangeHandler(e) {
    setSearch(e.target.value);
  }

  function filterOnChangeHandler(e) {
    setCountryRegion(e.target.value);
  }

  function countryFilteringHandler() {
    let filteredCountries = originalData;
    if (countryRegion !== "") {
      console.log(countryRegion);
      filteredCountries = filteredCountries.filter(
        (country) => country.region === countryRegion
      );
    }
    if (search !== "") {
      console.log(search);
      filteredCountries = filteredCountries.filter((country) => {
        return country.name.common.toLowerCase().includes(search.toLowerCase());
      });
    }
    setData(filteredCountries);
  }

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://restcountries.com/v3.1/all");
      const json = await response.json();
      setData(json);
      setOriginalData(json)
      setLoading(false);
    }
    fetchData();
  }, []);

  useEffect(() => {
    countryFilteringHandler();
  }, [search, countryRegion]);

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
      <Countries
        setSearch={setSearch}
        search={search}
        countryRegion={countryRegion}
        setCountryRegion={setCountryRegion}
        data={data}
        setData={setData}
        loading={loading}
        setLoading={setLoading}
      ></Countries>
    </>
  );
}

export default Home;
