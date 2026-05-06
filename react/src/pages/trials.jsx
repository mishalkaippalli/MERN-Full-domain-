function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handlesubmit = (e) => {
    e.preventDefault();

    if(typeof(name) !== string){
        
    }

   const userData = {
    name,
    email,
    password
   }
  }
  
  return(
    <>
      <form onSubmit = {handlesubmit}>
        <input type = "text" value={name} 
        onChange = {setName((e) => e.target.value)} />
        
        <input type = "email" value={email} 
        onChange = {setEmail((e) => e.target.value)} />

        <input type = "password" value={password} 
        onChange = {setPassword((e) => e.target.value)} />
        

        <button onClick = {handlesubmit}>submit</button>
      </form>
    </>
    )
}