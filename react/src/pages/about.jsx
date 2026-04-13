import {useState} from "react"
import UserForm from "./UserForm";
function About(){
    const [users, setUsers] = useState([]);

    const handleAddUser = (newUser) => {
        setUsers((prevUsers) => [...prevUsers, newUser])
    }

    return(
        <>
        <div>
            <UserForm onAddUser={handleAddUser}/>

            <h1>Users List</h1>
            <ul>
                {users.map((user, index) => (
                    <li key = {index} >{user.name} - {user.email}</li>
                ))}
            </ul>
        </div>
        </>
    )
}
export default About