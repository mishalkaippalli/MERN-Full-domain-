import { useState } from "react";

function UserForm({onAddUser}){
     const [name, setName] = useState("");
     const [email, setEmail] = useState("")

     const handleSubmit = (event) => {
        event.preventDefault();

        const userData = {
            name: name,
            email: email
        }
        onAddUser(userData)

        setName("");
        setEmail("");
     }

     return(
        <>
        <form onSubmit = {handleSubmit}>
          <input 
            type="text"
            value = {name}
            onChange = {(e) => setName(e.target.value)}
          />

          <input
             type="text"
             value = {email}
             onChange = {(e) => setEmail(e.target.value)}
          />

          <button type = "submit">
            Add User
          </button>

        </form>
        </>
     )
}
export default UserForm