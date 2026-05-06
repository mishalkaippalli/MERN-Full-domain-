import { useState } from "react";

function Parent1(){
    const [user, setUser] = useState("");

    const updateUser = (username) => setUser(username);

    return(
        <div>
            <h1>hello {user}</h1>
            <Child changeUser = {updateUser}/>
        </div>
    )
}

function Child({changeUser}){
     const [newUser, setnewUser] = useState("");
     
    const handleSubmit = (e) => {
        e.preventDefault();

        changeUser(newUser);
        setnewUser("");
    }


     return(
        <>
        <form onSubmit={handleSubmit}>
            <input type = "text" onChange = {(e) => setnewUser(e.target.value)}/>
            <button type="submit"> submit</button>
        </form>
        </>
     )
}
export default Parent1