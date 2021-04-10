import React,{useState,useEffect} from 'react'
import axios from 'axios';
import { useHistory ,useParams} from 'react-router-dom';
const EditUser =() => {
   let history = useHistory();
   const {id} = useParams();
   const [user,setUser] = useState({
      name: "",
      username: "",
      email: "",
      phone: "",
      website: ""
   })
   //destruction
   const {name,username,email,phone,website} = user;
   const onInputChange = e => {
      console.log(e.target.value)
      setUser({...user,[e.target.name]: e.target.value});
   };
   const onSubmit = async e  => {
      e.preventDefault();
      await axios.put(`http://localhost:3003/users/${id}`,user);
      history.push("/");
   };
   useEffect ( () => {
      loadUser()
   },[])
   const loadUser = async () => {
      const result = await axios.get(`http://localhost:3003/users/${id}`)
      setUser(result.data);
      console.log(result)
   }
   return (
      <div className="container">
      <div className="w-75 mx-auto shadow p-5">
      <h2 className="text-center mb-4">Edit A User
         <form onSubmit={e => onSubmit(e)}>
            <div className="form-group">
               <input
               type="text"
               className="form-control from-control-lg"
               placeholder="enter your name"
               name="name"
               value={name}
               onChange={e => onInputChange(e)} 
            />  
            </div>
            <div className="form-group">
               <input
               type="text"
               className="form-control from-control-lg"
               placeholder="enter your Username"
               name="username"
               value={username}
               onChange={e => onInputChange(e)}
               />
            </div>
            <div className="form-group">
               <input
               type="text"
               className="form-control from-control-lg"
               placeholder="enter your E-mail Address"
               name="email" 
               value={email}
               onChange={e => onInputChange(e)}
            />
            </div>
            <div className="form-group">
               <input
               type="text"
               className="form-control from-control-lg"
               placeholder="enter your Phone Number"
               name="phone" 
               name={phone}
               onChange={e => onInputChange(e)}
            />
            </div>
            <div className="form-group">
               <input
               type="text"
               className="form-control from-control-lg"
               placeholder="enter your Website Name"
               name="website"
               value={website}
               onChange={e => onInputChange(e)}
               />
            </div>
            <button className="btn btn-warning btn-block">Update User</button>
         </form>
      </h2>
      </div></div>
   )
}
export default EditUser;