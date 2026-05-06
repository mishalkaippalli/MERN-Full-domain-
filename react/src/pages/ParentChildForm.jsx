import React from 'react';
import { useState } from 'react'

function App() {
     const [data, setData] = useState([]);
     
     const handleData = (userData) => {
       setData([...prev, userData]);
     } 
     return(
       <>
         <h1>{data}</h1>
         
       <Child setData = {handleData}/>
       </>
       )
}
function Child({handleData}) {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("")
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = {
      name,
      password
    }
    handleData(userData);
    
    setName("");
    setPassword("")
  }
   
  return(
    <form onSubmit={handleSubmit}>
      <input type = "text" value = {name} onChange = {(e) => setName(e.target.value)}/>
      <input type = "password" value = {password} onChange = {(e) => setPassword(e.target.value)}/>
      <button onClick={handleSubmit}>submit</button>
    </form>
    )
}

export default App