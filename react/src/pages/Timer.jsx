import { useEffect, useState } from "react";

function Timer(){
    const [count, setCount] = useState(0);

    useEffect(() => {

        let timer = setInterval(() => {
            setCount((prev) => {
                if(prev > 10) {
                    clearInterval(timer)
                    return prev;
                }
                return prev + 1
            })
        }, 1000)

        return () => clearInterval(timer)
    },[])

    return <h2>Timer : {count}</h2>
}
 export default Timer