import React, { useState, useEffect } from "react";
import Country from "./Country";
import "../styles/countries.scss";

function Countries({ search, setSearch }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showCountries, setShowCountries] = useState(true);
  

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://restcountries.com/v3.1/all");
      const json = await response.json();
      setData(json);
      setLoading(false);
    }
    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  const filteredCountries = data.filter((item) =>
    item.name.common.toLowerCase().includes(search.toLowerCase()) 
  );

  return (
    <>
      <main>
        {search === ""
          ? data.map((item) => {
              return (
                <Country
                  showCountries={showCountries}
                  setShowCountries={setShowCountries}
                  name={item.name.common}
                  population={item.population}
                  region={item.region}
                  capital={item.capital}
                  subRegion={item.subregion}
                  domain={item.tld}
                  flagImg={item.flags.png}
                  commonName={"do this later"}
                  currencies={"do this later"}
                  languages={"do this later"}
                ></Country>
              );
            })
          : filteredCountries.map((item) => {
              return (
                <Country
                  showCountries={showCountries}
                  setShowCountries={setShowCountries}
                  name={item.name.common}
                  population={item.population}
                  region={item.region}
                  capital={item.capital}
                  subRegion={item.subregion}
                  domain={item.tld}
                  flagImg={item.flags.png}
                  commonName={"do this later"}
                  currencies={"do this later"}
                  languages={"do this later"}
                ></Country>
              );
            })}
      </main>
    </>
  );
}

export default Countries;
