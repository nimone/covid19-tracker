import React, { useState } from 'react'
import styles from './App.module.css'

import { CardList, Chart, CountryPicker } from './components'
import useFetch from './hooks/useFetch'

const url = "https://covid19.mathdro.id/api"

function App() {
  // const { data, isLoading, error } = useFetch(url)
  // const { data: dailyData, isLoading, error } = useFetch(`${url}/daily`)
  const mainData = useFetch(url)
  const dailyData = useFetch(`${url}/daily`)

  // if (mainData.data && dailyData.data) {
  //   console.log(mainData.data)
  //   console.log(dailyData.data)
  // }

  return (
    <div className={styles.App}>
      <h1>App</h1>
      {mainData.isLoading && <div>Loading...</div>}
      {mainData.data && <CardList data={mainData.data} />}
      {dailyData.data && <Chart data={dailyData.data}/>}
      <CountryPicker />
    </div>
  )
}

export default App
