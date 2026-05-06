import {useState} from "react";

function ToggleExample(){
    const [isOn, setIsOn] = useState(false);

    const handleToggle = () => {
        setIsOn(prev => !prev)
    }

    return(
        <>
        <h1>{isOn? "ON" : "OFF"}</h1>
        <button onClick={handleToggle}>Toggle</button>
        
        </>
    )
}
export default ToggleExample;