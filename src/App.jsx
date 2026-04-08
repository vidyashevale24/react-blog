import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import ToDo from './ToDo'
import Counter from './Counter'
import Toggle from './Toggle'


function App() {
	/* function callFun(){
		alert("Function called1");
	} */
	const [display,setDisplay] =useState(true);

	const toggle = () => {
		setDisplay(!display);
	}
	
	return (
		<>


			{/* <button onClick={callFun}>CLick me </button> */}
			{<button onClick={toggle}>Toggle </button>}
			{display?<Toggle />:''}
			<ToDo />
			<Counter />
			
		</>
	)
}
const callFun = () => {
	alert("Function called1");
}

export default App
