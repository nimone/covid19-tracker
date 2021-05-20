import React from 'react'
import Card from './Card'
import { Grid } from '@material-ui/core'

function CardList({ data: { confirmed, recovered, deaths, lastUpdate }}) {
	return (
		<div style={{ margin: "50px 0", width: "100%"}}>
			<Grid container spacing={3} justify="center">			
				<Card 
					title="Infected" 
					description="Active cases of Covid-19"
					value={confirmed.value}
					lastUpdate={lastUpdate}
					type="infected"
				/>				
				<Card 
					title="Recovered" 
					description="Recoveries from Covid-19"
					value={recovered.value}
					lastUpdate={lastUpdate}
					type="recovered"
				/>				
				<Card 
					title="Deaths" 
					description="Deaths caused by Covid-19"
					value={deaths.value}
					lastUpdate={lastUpdate}
					type="deaths"
				/>
			</Grid>
		</div>
	)
}
export default CardList