import { useEffect, useState } from "react";

const Counter = ({ count, data }) => {

    const handleCounter = () => {
        console.log("Counter Clicked");
    }

    const handleData = () => {
        console.log("Data Clicked");
    }

    useEffect(() => {
        handleCounter();
    }, [])

    useEffect(() => {
        handleData();
    }, [data])

    return (
        <div>
            <h2>Counter Value {count}</h2>
            <h2>Data Value {data}</h2>
        </div>
    )
}
export default Counter;