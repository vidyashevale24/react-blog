import { use, useState } from 'react'
import './App.css'

function App() {
	const [gender, setGender] = useState('male');
	const userdata = [
		{ id: 1, name: 'John', gender: 'male' },
		{ id: 2, name: 'Jane', gender: 'female' },
		{ id: 3, name: 'Doe', gender: 'male' }
	];
	return (
		<div >
			<h2>----------------------------------MAP Function/LOOP---------------------------------</h2>

			<table border="1">
				<thead>
					<tr>
						<th>ID</th>
						<th>Name</th>
						<th>Gender</th>
					</tr>
				</thead>
				<tbody>
					{
						userdata.map((user) => (
							<tr key={user.id}>
								<td>{user.id}</td>
								<td>{user.name}</td>
								<td>{user.gender}</td>
							</tr>
						))
					}
				</tbody>
			</table>
		</div>
	)
}

export default App
