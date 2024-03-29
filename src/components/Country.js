import React, { useEffect, useState } from "react";
import { Route, Link } from "react-router-dom";
import IndividualCountry from "./IndividualCountry";
import "../styles/country.scss";

function Country({
  name,
  population,
  region,
  capital,
  subRegion,
  domain,
  commonName,
  flagImg,
  currencies,
  languages,
  borders,
  showAllCountryHandler
}) {
  const [showDetailedCountries, setShowDetailedCountries] = useState(false);

  function addOverflow() {
    document.body.classList.add("overflow-hidden")
  }
 
  return (
    <>
      <div className="country">
        <div className="flag-wrapper">
          <Link to={`/countries/${name}`}>
            <img src={flagImg} alt="" />
          </Link>
        </div>
        <h2>
          <Link to={`/countries/${name}`} class="h2-link" onClick={addOverflow}>
            {" "}
            {name}
          </Link>
        </h2>
        <p className="country-p">
          Population: <span> {population}</span>
        </p>
        <p className="country-p">
          Region: <span> {region}</span>
        </p>
        <p className="country-p">
          Capital: <span> {capital}</span>
        </p>
      </div>
      <Route
        path={`/countries/${name}`}
        render={(props) => (
          <IndividualCountry
            {...props}
            showDetailedCountries={showDetailedCountries}
            setShowDetailedCountries={setShowDetailedCountries}
            name={name}
            population={population}
            region={region}
            capital={capital}
            subRegion={subRegion}
            domain={domain}
            commonName={commonName}
            flagImg={flagImg}
            currencies={currencies}
            languages={languages}
            borders={borders}
            showAllCountryHandler={showAllCountryHandler}
          ></IndividualCountry>
        )}
      ></Route>
    </>
  );
}

export default Country;
