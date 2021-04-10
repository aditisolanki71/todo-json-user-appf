import React,{useState,useEffect} from 'react'
import axios from "axios"
import { Link } from 'react-router-dom'
const Home = () => {
   const [users,setUser] = useState([])

   useEffect(() => {
      console.log('hello aditi')
      loadUsers()
   },[]);

   const loadUsers = async() => {
      const result = await axios.get("http://localhost:3003/users");
      console.log('result',result)
      setUser(result.data.reverse())
   }

   const deleteUser = async id => {
      await axios.delete(`http://localhost:3003/users/${id}`)
      loadUsers();
   }
   return (
      <div className="container">
      <div className="py-4">
   <h1>Home Page</h1>
   <table className="table border shadow">
  <thead className="thead-dark">
    <tr>
       <th scope="col">#</th>
       <th scope="col">Name</th>
       <th scope="col">User Name</th>
       <th scope="col">Email</th>
       <th>Action</th>
    </tr>
  </thead>
  <tbody>
    {/* <tr >
    <th scope="row">1</th>
      <td>Larry the Bird</td>
      <td>@twitter</td>
    </tr>
    <tr>
    <th scope="row">2</th>
      <td>Larry the Bird</td>
      <td>@twitter</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry the Bird</td>
      <td>@twitter</td>
    </tr> */}
   {
      users && users.map((user,index) => (
         <tr>
            <th scope="row">{index+1}</th>
            <td>{user.name}</td>
            <td>{user.username}</td>
            <td>{user.email}</td>
            <td>
               <Link class="btn btn-primary mr-2">view</Link>
               <Link class="btn btn-outline-primary mr-2" to={`/users/edit/${user.id}`}>Edit</Link>
               <Link class="btn btn-danger" onClick={() => deleteUser(user.id)}>Delete</Link>
            </td>
         </tr>
      ))
   }
  </tbody>
</table>
   </div>
   </div>
   )
}
export default Home;