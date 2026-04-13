import { useEffect } from "react";
import { useState } from "react";

function TryEffect(){
    const [count, setCount] = useState(0);

    useEffect(() => {
        setTimeout(() => {
          setCount((c) => c + 1)
        },1000)
    },[])
    return(
        <>
        <h1>I have renedered {count}</h1>
        </> 
    ) 
}
export default TryEffect