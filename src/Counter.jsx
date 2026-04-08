import { useState } from "react";

const Counter = () => {

    const [count, setCount]  = useState(0);
    const [Rcount, revCount] = useState(10);
    return (<>
        <div>
            <h1>Counter Value is: {count}</h1>
            <h1>R Counter Value is: {Rcount}</h1>
            <button onClick={() => setCount(count + 1)}>Click me to Increase</button>
            <button onClick={() => revCount(Rcount - 1)}>Click me to Decrease</button>
        </div>
    </>
    )
}
export default Counter;