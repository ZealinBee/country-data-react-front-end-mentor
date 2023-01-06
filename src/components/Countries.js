import React, { useState } from "react";
import Country from "./Country";
import "../styles/countries.scss";

function Countries({
  search,
  setSearch,
  countryRegion,
  setCountryRegion,
  data,
  setData,
  loading,
  setLoading,
}) {
  const [showCountries, setShowCountries] = useState(true);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <main>
        {data.map((item) => {
          if (item.languages && typeof item.languages === "object") {
            let languages = Object.values(item.languages);
            var languagesString = languages.join(", ");
          }
          if (item.currencies && typeof item.currencies === "object") {
            let currencies = Object.entries(item.currencies);
            currencies.forEach((value) => {
              if (typeof value.name === "object") {
              }
            });
          }

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
              languages={languagesString}
            ></Country>
          );
        })}
      </main>
    </>
  );
}

export default Countries;
