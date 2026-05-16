// import { useEffect, useState } from "react";

import { useState } from "react";

// // fetch and store data in a state and display inside table
// function FetchUsers(){
//      const [result, updateresult] = useState([]);

//      useEffect(() => {
//         fetch("https://jsonplaceholder.typicode.com/users")
//         .then((data) => data.json())
//         .then((data) => updateresult(data))
//         .catch((error) => console.log(error))
//      },[])
//     return(
//        <div>
//         <h1>User Table</h1>
//         <table>
//             <thead>
//                 <tr>
//                     <th>ID</th>
//                     <th>Name</th>
//                     <th>Email</th>
//                     <th>City</th>
//                 </tr>
//             </thead>

//             <tbody>
//                 {result.map((user) => (
//                     <tr key = {user.id}>
//                         <td>{user.id}</td>
//                         <td>{user.name}</td>
//                         <td>{user.email}</td>
//                         <td>{user.address.city}</td>
//                     </tr>
//                 ))}
//             </tbody>
//         </table>
//        </div>
//     )

// }

// export default FetchUsers



//higher order Component
// function HOC(Component){
//     return function EnhancedComponent(props){
//          if(props.isLoading){
//             return <h1>loding...</h1>
//          } else {
//            return <Component {...props}/>
//          }
//     }
// }
// function ShowuserData(props){
//     return(
//         <h1>user data: {props.name}</h1>
//     )
// }

// const WithLoading = HOC(ShowuserData);
// export default WithLoading;

//child to parent data transfer(form submission)

// function Appforlogin(){
//     const [user, setUser] = useState(null);

//     const handleLogin = (formData) => {
//         console.log("data recieved from child", formData);

//         setUser(formData)
//     } 

//     return(
//         <>
//         <div>
//             <h1>Login Application</h1>
//             <LoginForm onLogin={handleLogin}/>

//             {user && (
//                 <div>
//                     <h3>User details</h3>
//                     <p>Email: {user.email}</p>
//                     <p>Password: {user.Password}</p>
//                 </div>
//             )}
//         </div>
//         </>
//     )
// }
// function LoginForm({onLogin}){
//     const [formData, setFormData] = useState({
//         email: "",
//         password: ""
//     })
//      const handleSubmit = (e) => {
//         e.preventDefault();
//         onLogin(formData)
//      }
//      const handleChange = (e) => {
//           setFormData({
//             ...formData,
//             [e.target.name]: e.target.value
//           })
//      }

//       return(
//         <>
//          <form onSubmit={handleSubmit}>
//            <input
//              type = "email"
//              name = "email"
//              placeholder="enter email"
//              value={formData.email}
//              onChange={handleChange}
//            />

//            <input
//             type="password"
//             name="password"
//             placeholder="password"
//             value = {formData.password}
//             onChange={handleChange}
//             />
//             <button type="submit">Login</button>
//          </form>
//         </>
//       )
// }

// export default Appforlogin

// import React, {
//   createContext,
//   useContext,
// } from "react";

// const CheckedContext = createContext();

// function AppTrial() {
//   const [checked, setChecked] = useState(false);

//   const handleClick = () => {
//     setChecked(!checked);
//   };

//   return (
//     <CheckedContext.Provider
//       value={{ checked, handleClick }}
//     >
//       <ShowCheckbox />
//     </CheckedContext.Provider>
//   );
// }

// function ShowCheckbox() {
//   const { checked, handleClick } =
//     useContext(CheckedContext);

//   return (
//     <div>
//       <button onClick={handleClick}>
//         Toggle Checkbox
//       </button>

//       <h1>
//         {checked ? "Checked" : "Unchecked"}
//       </h1>
//     </div>
//   );
// }

// export default AppTrial;

function AppTrial(){
  const [data, setdata] = useState("");

  return(
    <>
    <input
     type = "text"
     value = {data}
     onChange = {(e) => setdata(e.target.value)}

    />
    <DisplayComponent data = {data}/>
    </>
  )
}
function DisplayComponent({data}){
   return(
    <>
    <h1>{data}</h1>
    </>
   )
}
export default AppTrial