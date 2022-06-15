import React, {useState} from "react";

const Counter = ()=>{
    const [count, setCount] = useState<number>(0)

    const incButton = () => setCount(count + 1)
    const decButton = () => setCount(count - 1)

    return <div>
        <div>
            <h3>COUNT</h3>
        </div>
        <div>
            <button onClick={incButton}>inc</button>
            <button onClick={decButton}>dec</button>
        </div>

        <h1>{count}</h1>

    </div>
}
export default Counter