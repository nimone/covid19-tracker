import React, { useState, useEffect } from 'react'
import styles from './App.module.css'

import { CardList, Chart, CountryPicker } from './components'
import useFetch from './hooks/useFetch'

const url = "https://covid19.mathdro.id/api"

function App() {
  const [currentCountry, setCurrentCountry] = useState('')
  const mainData = useFetch(url)
  const dailyData = useFetch(`${url}/daily`)
  const countries = useFetch(`${url}/countries`)

  if (countries.data) {
    // console.log(mainData.data)
    console.log(countries.data)
  }

  useEffect(() => {
    console.log(currentCountry)
  }, [currentCountry])

  return (
    <div className={styles.App}>
      <h1>App</h1>
      {mainData.isLoading && <div>Loading...</div>}
      {mainData.data && <CardList data={mainData.data} />}
      {countries.data && (
        <CountryPicker 
          countryList={countries.data.countries} 
          setCountry={setCurrentCountry}
        />
      )}
      {dailyData.data && <Chart data={dailyData.data}/>}
    </div>
  )
}

export default App
