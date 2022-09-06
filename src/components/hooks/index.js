import React, {useEffect, useState} from "react";

export default function HooksExercise() {

    return (
        <div>
            <Counter1></Counter1>
            <Counter2></Counter2>
        </div>
    )
}

function Counter1() {
    const [count, setCount] = useIncrement(1);
    return (
        <div>
            <p>{count}</p>
            <button onClick={setCount}>Add 1</button>
        </div>
    )
}

function Counter2() {
    const [count, setCount] = useIncrement(2);
    return (
        <div>
            <p>{count}</p>
            <button onClick={setCount}>Add 2</button>
        </div>
    )
}

function useIncrement(props) {
    const addAmount = props;
    const [count, setCount] = useState(0);
    const increase = () => {
        setCount(count + addAmount);
    }
    return [count, increase]
}
