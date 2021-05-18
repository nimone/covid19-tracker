import React from 'react'
import { FormControl, NativeSelect } from '@material-ui/core'

import styles from './CountryPicker.module.css'

function CountryPicker({ countryList, setCountry }) {
	const changeCountry = e => {
		const selectedCountry = e.target.value

		if (selectedCountry === 'global') {
			setCountry(null)
		} else {
			setCountry(selectedCountry)
		}
	}
	return (
		<FormControl className={styles.formControl}>
			<NativeSelect defaultValue="" onChange={changeCountry}>
				<option value="global">Global</option>
				{countryList.map(country => (
					<option key={country.name} value={country.name}>{country.name}</option>
				))}
			</NativeSelect>
		</FormControl>
	)
}
export default CountryPicker