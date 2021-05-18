import React, { useState } from 'react'
import styles from './App.module.css'

import { CardList, Chart, CountryPicker } from './components'
import useFetch from './hooks/useFetch'

const url = "https://covid19.mathdro.id/api"

function App() {
  const { data, isLoading, error } = useFetch(url)

  if (data) {
    console.log(data)
  }

  return (
    <div className={styles.App}>
      <h1>App</h1>
      {isLoading && <div>Loading...</div>}
      {data && <CardList data={data} />}
      <Chart />
      <CountryPicker />
    </div>
  )
}

export default App
