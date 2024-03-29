import React, { useState } from "react";
import Country from "./Country";
import "../styles/countries.scss";
import uuid from "react-uuid";
import iocCountries from "../assets/IOCtoCountry.json";

function Countries({ data, loading ,showAllCountryHandler}) {
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
            let currencies = Object.values(item.currencies);
            var listOfCurrencies = [];
            currencies.forEach((value) => {
              listOfCurrencies.push(value.name);
            });
          }

          if (
            item.name.nativeName &&
            typeof item.name.nativeName === "object"
          ) {
            var nativeName = Object.values(item.name.nativeName);
            nativeName = nativeName[0].official;
          }

          if (Array.isArray(item.borders)) {
            const listOfBorders = [];
            var finalListOfBorders;
            item.borders.forEach((border) => {
              if (typeof iocCountries[border] !== "undefined") {
                listOfBorders.push(iocCountries[border]);
              }
            });
            finalListOfBorders = listOfBorders.slice(0, 8);
          }

          return (
            <Country
              key={uuid()}
              showCountries={showCountries}
              setShowCountries={setShowCountries}
              name={item.name.common}
              population={item.population.toLocaleString()}
              region={item.region}
              capital={item.capital}
              subRegion={item.subregion}
              domain={item.tld}
              flagImg={item.flags.png}
              commonName={nativeName}
              currencies={listOfCurrencies}
              languages={languagesString}
              borders={finalListOfBorders}
              showAllCountryHandler={showAllCountryHandler}
            ></Country>
          );
        })}
      </main>
    </>
  );
}

export default Countries;
