import { useState } from 'react'
import './App.css'

function App() {
	const[gender, setGender] = useState('male');
	const[city, setCity] = useState('Bangalore');
	return (
			<div>
				<h2>----------------------------------RadioButtons---------------------------------</h2>
				<input type="radio" onChange={(event)=>setGender(event.target.value)} checked={gender === 'male'} id="male" name="gender" value="male" />
				<label htmlFor="male">Male</label>
				<input type="radio" onChange={(event)=>setGender(event.target.value)} checked={gender === 'female'} id="female" name="gender" value="female" />
				<label htmlFor="female">Female</label>

				<h1>Selected Gender : {gender}</h1>

				<h2>------------------------------------Dropdowns-----------------------------------</h2>
				<select onChange={(event)=>setCity(event.target.value)} defaultValue={'Bangalore'}>
					<option value="Delhi">Delhi</option>
					<option value="Mumbai">Mumbai</option>
					<option value="Bangalore">Bangalore</option>
				</select>

				<h1>Selected City : {city}</h1>
			</div>
	)
}

export default App
