import React, { useState } from "react";
import Nav from "./Nav";
import Countries from "./Countries";
import Filter from "./Filter";
import Search from "./Search";

function Home() {
  const [search, setSearch] = useState("");
  function searchOnChangeHandler(e) {
    setSearch(e.target.value);
  }
  return (
    <>
      <Nav></Nav>
      <Search
        setSearch={setSearch}
        search={search}
        searchOnChangeHandler={searchOnChangeHandler}
      ></Search>
      <Filter></Filter>
      <Countries setSearch={setSearch} search={search}></Countries>
    </>
  );
}

export default Home;
