import React from 'react'

import { Card as MaterialCard, CardContent, Typography, Grid } from '@material-ui/core'
// import CountUp from 'react-countup'
import classNames from 'classnames/bind'
import styles from './Card.module.css'

const cx = classNames.bind(styles)

function Cards({ title, description, value, lastUpdate, type }) {
	const cardClass = cx({
		card: true,
		infected: type === 'infected',
		recovered: type === 'recovered',
		deaths: type === 'deaths'
	})

	return (
		<Grid item xs={12} md={3} component={MaterialCard} className={cardClass}>
			<CardContent>
				<Typography color="textSecondary" gutterBottom>{ title }</Typography>
				<Typography variant="h5">{ value }</Typography>
				<Typography color="textSecondary">
					{ new Date(lastUpdate).toDateString() }
				</Typography>
				<Typography variant="body2">{ description }</Typography>
			</CardContent>
		</Grid>
	)
}
export default Cards