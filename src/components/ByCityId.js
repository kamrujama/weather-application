import React, { useEffect, useState } from 'react'

export default function ByCityId() {
    const [cityId, setCityId] = useState(null);
    const [search, setSearch] = useState("123");

    useEffect(() => {

        const fetchApi = async () =>{
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?id=${search}&appid=020d0f5c625051a1ff6f8a962c51dd9c`)
            const jsonResponse = await response.json();

            
        }

        fetchApi();
    },[search])
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
  )
}
