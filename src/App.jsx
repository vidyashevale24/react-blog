import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import User from './User'

function App() {
	// const[val, setVal] = useState('vidya');
	const[name, setName] = useState('');
	const[pass, setPassword] = useState('');
	const[email, setEmail] = useState('');
	return (
		<>
			<div>
				{/* <form action='' method=''> */}
				{/* <input type="text" value={val} onChange={(event)=>setVal(event.target.value)} placeholder='Add name here...' /> */}
				{/* <button onClick={()=>setVal("")}>Clear</button> */}

				<input type="text" value={name} placeholder="Enter name" onChange={(event)=>setName(event.target.value)}/>
				<br/>
				<input type="password" value={pass} placeholder="Enter password" onChange={(event)=>setPassword(event.target.value)}/>
				<br/>
				<input type="text" value={email} placeholder="Enter email" onChange={(event)=>setEmail(event.target.value)}/>
				<br/>
				<button onClick={()=>{setName('');setPassword('');setEmail('')}}>Clear</button>
				<h1>{name}</h1>
				<h1>{pass}</h1>
				<h1>{email}</h1>
				{/* </form> */}
			</div>
		</>
	)
}

export default App
