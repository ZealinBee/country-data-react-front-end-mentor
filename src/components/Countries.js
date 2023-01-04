import React, { useState, useEffect } from "react";
import Country from "./Country";

function Countries() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://restcountries.com/v3.1/all");
      const json = await response.json();
      setData(json);
      setLoading(false);
    }
    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }



  return (
    <>
      {data.map((item) => {
        return (
          <Country
          name={item.name.common}
          population={item.population}
          region={item.region}
          capital={item.capital}
          subRegion={item.subregion}
          domain={item.tld}
          // commonName = {item.name.nativeName.eng.common}
        ></Country>
        )
        
      })}
    </>
  );
}

export default Countries;
