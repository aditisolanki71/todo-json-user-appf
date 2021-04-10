import React,{useState,useEffect} from 'react'
import axios from 'axios';
import { Link ,useParams} from 'react-router-dom';

const User = () => {
   const [user,setUser] = useState({
      name: "",
      username: "",
      email: "",
      phone: "",
      website: ""
   })
   const {id} = useParams();

   useEffect(()=> {
      loadUser()
   },[]);

   const loadUser = async () => {
      const result = await axios.get(`http://localhost:3003/users/${id}`)
      setUser(result.data);
      console.log(result)
   }

   return (
      <div className="container">
      <Link className="btn btn-primary" to="/">
      Back to Home
      </Link>
      <h1 className="display-4">User ID: {id}</h1>
      <hr />
      <ul container="list-group w-50">
         <li className="list-group-item"> name: {user.name}</li>
         <li className="list-group-item"> User name: {user.username}</li>
         <li className="list-group-item"> Email: {user.email}</li>
         <li className="list-group-item"> Phone: {user.phone}</li>
         <li className="list-group-item"> Website: {user.website}</li>
      </ul>
   </div>
   )
} 
export default User;