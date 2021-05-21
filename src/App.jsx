import React, { useState, useEffect } from "react"
import styles from "./App.module.css"

import { CardList, Chart, CountryPicker, Loader } from "./components"
import useFetch from "./hooks/useFetch"

const url = "https://covid19.mathdro.id/api"

function App() {
  const [currentCountry, setCurrentCountry] = useState(null)

  const mainData = useFetch(
    currentCountry ? `${url}/countries/${currentCountry}` : url
  )
  const dailyData = useFetch(`${url}/daily`)
  const countries = useFetch(`${url}/countries`)

  return (
    <div className={styles.App}>
      <h1>COVID-19 Tracker</h1>
      {countries.data && (
        <CountryPicker
          countryList={countries.data.countries}
          setCountry={setCurrentCountry}
        />
      )}
      {mainData.data && <CardList data={mainData.data} />}
      {(dailyData.data && mainData.data) && (
        <Chart
          lineData={dailyData.data} 
          barData={mainData.data}
          country={currentCountry} 
        />
      )}
      {(mainData.isLoading || dailyData.isLoading || countries.isLoading) && <Loader />}
    </div>
  );
}

export default App;
