import React, { useState } from "react";
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
}) {
  const [showDetailedCountries, setShowDetailedCountries] = useState(false);

  function IndividualCountryHandler() {
    setShowDetailedCountries(true);
    document.body.classList.add('over-flow')
  }

  return (
    <>
      <div class="country">
        <div className="flag-wrapper" onClick={IndividualCountryHandler}>
          <img src={flagImg} alt="" />
        </div>
        <h2 onClick={IndividualCountryHandler}>{name}</h2>
        <p class="country-p">
          Population: <span> {population}</span>
        </p>
        <p class="country-p">
          Region: <span> {region}</span>
        </p>
        <p class="country-p">
          Capital: <span> {population}</span>
        </p>
      </div>

      {showDetailedCountries && (
        <IndividualCountry
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
        ></IndividualCountry>
      )}
    </>
  );
}

export default Country;
