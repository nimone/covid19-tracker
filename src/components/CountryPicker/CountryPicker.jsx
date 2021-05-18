import React from 'react'
import { FormControl, NativeSelect } from '@material-ui/core'

import styles from './CountryPicker.module.css'

function CountryPicker({ countryList, setCountry }) {
	const changeCountry = e => {
		setCountry(e.target.value)
	}
	return (
		<div>
			<FormControl className={styles.fromControl}>
				<NativeSelect defaultValue="" onChange={changeCountry}>
					<option value="global">Global</option>
					{countryList.map(country => (
						<option key={country.iso3} value={country.name}>{country.name}</option>
					))}
				</NativeSelect>
			</FormControl>
		</div>
	)
}
export default CountryPicker