import { use, useState } from 'react'
import './App.css'
import Counter from './Counter';

function App() {
	const [counter, setCounter] = useState(0);
	const [data, setData] = useState(0);
	
	return (
		<div >
			<h2>----------------------------------Use Effect---------------------------------</h2>
			<button onClick={()=>setCounter(counter+1)}>Counter {counter}</button>
			<button onClick={()=>setData(data+1)}>Data {data}</button>
			<Counter count={counter} data={data} />
			
		</div>
	)
}

export default App
