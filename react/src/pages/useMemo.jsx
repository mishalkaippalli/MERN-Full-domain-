import {useState, useMemo} from "react";

function TryuseMemo(){
    const [count, setCount] = useState(0);
    const [todos, settodos] = useState([])
    const calculation = useMemo(() => expensiveCalculation(count), [count]);

    const increment = () => {
        setCount((c) => c + 1)
    }

    const addtodos = () => {
        settodos((todos) => [...todos, "new to do"])
    }

    return(
        <>
          <h1>count: {count}</h1>
          <h2>todoss</h2>
          {todos.map((todo, index)=> (
            <p key = {index}>{todo}</p>
          ))}
          <button onClick={increment}>increment</button>
          <button onClick={addtodos}>addtodos</button>
          <h1>expensive calculation{calculation}</h1>
        </>
    )
}
const expensiveCalculation = function(num){
    alert("expensive calculation running")
   for(let i = 0; i < 100000; i++){
       num+=i
   }
   return num
}

export default TryuseMemo