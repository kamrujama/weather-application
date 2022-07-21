import React, { useEffect, useState } from "react";
import '../components/Style/style.css'
import '../components/Style/rain.mp4'

export default function Weather() {
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState("Pune");

  useEffect(() => {
    const fetchApi = async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=ca33156c19097e8b17b984c4ae5309a4`;
      const response = await fetch(url);
      const resJson = await response.json();
      console.log(resJson);
      setCity(resJson.main);
    };

    fetchApi();
  }, [search]);

  return (
    <>
      <div className="container-new">
        <div className="contentBox">
          <input
            type="search"
            className="search-new"
            onChange={(event) => {
              setSearch(event.target.value);
            }}
          />
        </div>

        {!city ? (
          <p className="notFound">Data not found</p>
        ) : (
          <div>
            <div className="info">
              <h2 className="location">{search}</h2>
              <h1 className="temp">{city.temp}&deg;Cel</h1>
              <h3 className="temp_min_max">
                Min : {city.temp_min}&deg;C | Max : {city.temp_max}&deg;C
              </h3>
              <h3 className="pressure">Pressure : {city.pressure}</h3>
              <h3 className="humidity">Humidity : {city.humidity}</h3>
            </div>
          </div>
        )}
      </div>
     
    </>
  );
}
