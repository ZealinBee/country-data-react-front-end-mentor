import React from "react";
import "../styles/individualCountry.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

function IndividualCountry({
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
  showDetailedCountries,
  setShowDetailedCountries,
  borders,
}) {
  function toggleCurrentCountryHandler() {
    setShowDetailedCountries(false);
    document.body.classList.remove("over-flow");
  }
  return (
    <>
      {showDetailedCountries && (
        <div class="detailed-country">
          <button onClick={toggleCurrentCountryHandler} className="back-button">
            <FontAwesomeIcon icon={faArrowLeft} />
            Back
          </button>
          <div className="info">
            <div className="info-img-wrapper">
              <img src={flagImg} alt="" />
            </div>
            <div className="facts">
              <div className="facts-title-wrapper">
                <h1>{name}</h1>
              </div>
              <div className="facts-details-wrapper">
                <div className="facts-details-wrapper-left">
                  <p>
                    <span>Native Name:</span> {commonName}
                  </p>
                  <p>
                    <span>Population: </span>
                    {population}
                  </p>
                  <p>
                    <span>Region: </span>
                    {region}
                  </p>
                  <p>
                    <span>Subregion: </span>
                    {subRegion}
                  </p>
                  <p>
                    <span className="capital">Capital: </span>
                    {capital}
                  </p>
                </div>
                <div className="facts-details-wrapper-right">
                  <p>
                    <span>Top Level Domain: </span>
                    {domain}
                  </p>
                  <p>
                    <span>Currencies: </span>
                    {currencies}
                  </p>
                  <p>
                    <span>Languages: </span>
                    {languages}
                  </p>
                </div>
              </div>
              {Array.isArray(borders) ? (
                <div className="facts-neighboring-country-wrapper">
                  <h3>Border Countries:</h3>
                  <div className="border-countries">
                    {borders.map((border) => (
                      <button className="border-country">{border}</button>
                    ))}
                  </div>
                 
                </div>
              ) : (
                <div></div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default IndividualCountry;
