import {useState} from 'react'

function Parent(){
    const [count, setCount] = useState(0);

    const handleIncrement = () => {
        setCount((prev) => prev + 1)
    }

    return(
        <div>
            <h1>Parent Component</h1>
            <h2>Count: {count}</h2>
            <Counter count={count}  onIncrement={handleIncrement}/>
        </div>
    )
}
function Counter({count, onIncrement}){
    return(
        <div>
            <h1>child Component</h1>
            <h2>Count from parent {count}</h2>

            {/* calling parent function */}
            <button onClick={onIncrement}>Increment</button>
        </div>
    )
}
export default Parent