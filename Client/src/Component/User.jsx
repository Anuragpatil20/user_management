import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {Link} from "react-router-dom"

function User() {
  const [users , setUsers] = useState([])


  useEffect(() => {
      axios.get('http://localhost:3001')
      .then(result => setUsers(result.data) )
      .catch(err => console.log(err))
  }, [])

  const handleDelete = (id) => {
    axios.delete('http://localhost:3001/deleteUser/'+id)
    .then(res => {console.log(res)
      alert("Delete Successfully...")
      window.location.reload()
    })
    .catch(errr => console.log(errr))
  }

  return (
    <div className="bg-[url('https://img.freepik.com/free-photo/artistic-blurry-colorful-wallpaper-background_58702-8217.jpg')] bg-cover items-center h-142 w-full ">
    <h2 className='font-bold text-center text-4xl uppercase text-black '>Users</h2>
    <a href='/Create' class="px-4 py-3 hover:scale-3d hover:text-black duration-150  font-medium text-white bg-green-600 rounded-md ml-7 hover:bg-green-500 focus:outline-none focus:shadow-outline-blue active:bg-blue-600 transition duration-150 ease-in-out">Add +</a>
    <table class="min-w-full divide-y divide-black mt-6 bg-transparent ">
    
    <thead>
        <tr >
           <th class="px-6 py-3 text-left text-xs font-bold  text-black uppercase tracking-wider">id</th>
            <th class="px-6 py-3 text-left text-xs font-bold  text-black uppercase tracking-wider">Name</th>
            <th class="px-6 py-3 text-left text-xs font-bold text-black uppercase tracking-wider">Email</th>
            <th class="px-6 py-3 text-left text-xs font-bodl text-black uppercase tracking-wider">Password</th>
            <th class="px-6 py-3 text-left text-xs font-bold text-black uppercase tracking-wider">Role</th>
            <th class="px-6 py-3 text-left text-xs font-bold text-black uppercase tracking-wider">Action</th>
            
        </tr>
    </thead>
    <tbody class="bg-transparent divide-y divide-black">
        

        {
          users.map((user, index) => {
              
         return  <tr>
            <td class="px-6 py-4 whitespace-nowrap">{index+1}</td>
            <td class="px-6 py-4 whitespace-nowrap">{user.name}</td>
            <td class="px-6 py-4 whitespace-nowrap">{user.email}</td>
            <td class="px-6 py-4 whitespace-nowrap">{user.password}</td>
            <td class="px-6 py-4 whitespace-nowrap">{user.role}</td>
            <td class="px-6 py-4 whitespace-nowrap">
                <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">Active</span>
            </td>
            <td class="px-6 py-4 whitespace-nowrap bg-gra">
            <Link to={`/update/${user._id}`} className="px-4 py-2 font-medium text-white bg-blue-600 rounded-md hover:bg-blue-500">
            Edit
          </Link>
          

                <button class="ml-2 px-4 py-2 font-medium text-white bg-red-600 rounded-md hover:bg-red-500 focus:outline-none focus:shadow-outline-red active:bg-red-600 transition duration-150 ease-in-out" onClick={(e) => handleDelete(user._id)}>Delete</button>
            </td>
        </tr>

          })
        }
       
    </tbody>
</table>

    </div>
  )
}

export default User  