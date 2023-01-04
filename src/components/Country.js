import React, { useState } from "react";
import IndividualCountry from "./IndividualCountry";

function Country({ name, population, region, capital, subRegion, domain, commonName }) {
  const [showDetailedCountries, setShowDetailedCountries] = useState(false);

  return (
    <div>
      <h1 onClick={() => setShowDetailedCountries(true)}>{name}</h1>
      <p>{population}</p>
      <p>{region}</p>
      <p>{capital}</p>
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
