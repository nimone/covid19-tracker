import React from 'react'
import { Line, Bar } from 'react-chartjs-2'

import styles from './Chart.module.css'

function Chart({ lineData, barData, country }) {

	const lineChart = (
		<Line 
			data={{
				labels: lineData.map(({ reportDate }) => reportDate),
				datasets: [{
					label: 'Infected',
					borderColor: '#3333ff',
					fill: true,
					data: lineData.map(({ confirmed }) => confirmed.total),
				}, {
					label: 'Deaths',
					backgroundColor: 'rgba(255, 0, 0, 0.5)',
					borderColor: 'red',
					fill: true,
					data: lineData.map(({ deaths }) => deaths.total),
				}],
			}}
		/>
	)

	const barChart = (
		<Bar
			data={{
				labels: ['Infected', 'Recovered', 'Deaths'],
				datasets: [{
					label: 'People',
					backgroundColor: [
						'rgba(0,0,255,0.5)',
						'rgba(0,255,0,0.5)',
						'rgba(255,0,0,0.5)',
					],
					data: [
						barData.confirmed.value,
						barData.recovered.value,
						barData.deaths.value,
					]
				}]
			}}
			options={{
				plugins: {
					legend: { display: false },
					title: { display: true, text:`Current state in ${country}` },
				}
			}}
		/>
	)

	return (
		<div className={styles.container}>
			{country ? barChart : lineChart}
		</div>
	)
}
export default Chart