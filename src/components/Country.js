import React, { useState } from "react";
import IndividualCountry from "./IndividualCountry";
import "../styles/country.scss"

function Country({
  name,
  population,
  region,
  capital,
  subRegion,
  domain,
  commonName,
  flagImg,
}) {
  const [showDetailedCountries, setShowDetailedCountries] = useState(false);

  return (
    <div class="country">
      <div className="flag-wrapper">
        <img src={flagImg} alt="" />
      </div>
      <h2 onClick={() => setShowDetailedCountries(true)}>{name}</h2>
      <p>Population: <span> {population}</span></p>
      <p>Region: <span> {region}</span></p>
      <p>Capital: <span> {population}</span></p>
   
      {showDetailedCountries && (
        <IndividualCountry
          name={name}
          population={population}
          region={region}
          capital={capital}
          subRegion={subRegion}
          domain={domain}
          commonName={commonName}
        ></IndividualCountry>
      )}
    </div>
  );
}

export default Country;
