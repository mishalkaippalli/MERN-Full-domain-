// ---------------------------------------------------------------toggle using context--------------------

// ===context/Togglecontext.jsx

import { createContext } from "react";

export const toggleContext = createContext()

// ===app.jsx

import { useState } from "react";
import { toggleContext } from "./context/Togglecontext";
import Toggle from "./Toggle";

function App(){
    const [ison,setison] = useState(false)
    function handletoggle(){
        setison(prev=>!prev)
    }

    return(
        <>
        <toggleContext.Provider value={{ison,handletoggle}}>
            <Toggle/>
        </toggleContext.Provider>
        </>
    )
}
export default App

===Toggle.jsx
import { useContext } from "react"
import { toggleContext } from "./context/Togglecontext"

function Toggle(){
    const{ison,handletoggle} = useContext(toggleContext)
    return(
        <>
        <p>state:{ison?"On":"Off"}</p>
        <button onClick={handletoggle}>click</button>
        </>
    )

}

export default Toggle



// import {useState, useContext, createContext} from 'react';

// function toggleComponent(){
//     const [toggle, setToggle] = useState(true)
//     const toggleContext = createContext();

//     return(
//         <toggleContext.Provider.value >
//         <h1>toggle: {toggle}</h1>
//         <Child setToggle = {setToggle}/> 
//         </>
//     )
// }

// function Child({setToggle}){
//    const toggle = useContext();
//    return(
//     <>
//     <button onClick={setToggle(false)}>changeToggle</button>
//     </>
//    )
// }