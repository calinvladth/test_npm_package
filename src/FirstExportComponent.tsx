import {useState} from "react";

type AppProps = {
    testProp?: string
}

function FirstExportComponent({testProp}: AppProps) {
    const [count, setCount] = useState(0)

    return (
        <>
            <h2>This is a prop: {testProp}</h2>
            <p>This is a basic movement. One click on count for increase, double click for decrease</p>
            <p>Count: {count}</p>
            <button onClick={() => setCount(prevState => prevState + 1)}>Increase</button>
            <button onClick={() => setCount(prevState => prevState - 1)}>Decrease</button>
        </>
    )
}

export default FirstExportComponent