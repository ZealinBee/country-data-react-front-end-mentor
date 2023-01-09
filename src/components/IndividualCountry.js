import React from "react";
import { Link , useHistory} from "react-router-dom";
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
  borders,
}) {

  const history = useHistory()

  const backButtonHandler = () => {
    history.goBack()
  }

// document.body.style.overflow = "hidden";


  return (
    <>
      <div class="detailed-country">
        <button  className="back-button" onClick={backButtonHandler}>
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
                    <button>
                      <Link to={`/countries/${border}`} class="border-country">{border}</Link>
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              <div></div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default IndividualCountry;
