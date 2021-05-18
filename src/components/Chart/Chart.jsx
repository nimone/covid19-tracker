import React from 'react'
import { Line, Bar } from 'react-chartjs-2'

import styles from './Chart.module.css'

function Chart({ data: dailyData }) {
	// console.log(dailyData[0].date)
	// console.log(dailyData[0].deaths)

	const lineChart = (
		<Line 
			data={{
				labels: dailyData.map(({ reportDate }) => reportDate),
				datasets: [{
					label: 'Infected',
					borderColor: '#3333ff',
					fill: true,
					data: dailyData.map(({ confirmed }) => confirmed.total),
				}, {
					label: 'Deaths',
					backgroundColor: 'rgba(255, 0, 0, 0.5)',
					borderColor: 'red',
					fill: true,
					data: dailyData.map(({ deaths }) => deaths.total),
				}],
			}}
		/>
	)

	return (
		<div className={styles.container}>
			{lineChart}
		</div>
	)
}
export default Chart