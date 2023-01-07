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
  borders,
}) {
  const [showDetailedCountries, setShowDetailedCountries] = useState(false);

  function IndividualCountryHandler() {
    setShowDetailedCountries(true);
    document.body.classList.add('over-flow')
  }

  return (
    <>
      <div className="country">
        <div className="flag-wrapper" onClick={IndividualCountryHandler}>
          <img src={flagImg} alt="" />
        </div>
        <h2 onClick={IndividualCountryHandler}>{name}</h2>
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
          borders={borders}
        ></IndividualCountry>
      )}
    </>
  );
}

export default Country;
