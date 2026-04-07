import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import ToDo from './ToDo'
import Counter from './Counter'

function App() {
//   function callFun(){
// 	alert("Function called1");
// }
  return (
    <>
	<ul>
		<li>a</li>
		<li>b</li>
		<li>c</li>
	</ul>
     
	<button onClick={callFun}>Click Me</button>
	<ToDo />
	<Counter />
    </>
  )
}
const callFun=()=>{
	alert("Function called1");
}

export default App
