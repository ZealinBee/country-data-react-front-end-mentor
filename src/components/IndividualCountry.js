import React from "react";

function IndividualCountry({
  name,
  population,
  region,
  capital,
  subRegion,
  domain,
  commonName
}) {
  return (
    <>
      <button>Back</button>
      <h1>Name: {name}</h1>
      <div className="facts">
      <h3>Native Name: {commonName}</h3>

      </div>
    </>
  );
}

export default IndividualCountry;
