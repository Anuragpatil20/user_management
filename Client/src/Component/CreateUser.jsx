import React, { useState } from 'react';
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

function CreateUser() {
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [role, setRole] = useState()
    const navigate = useNavigate()


    const Submit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:3001/createUser", {name,email,password,role})
        .then(result => {
            console.log(result)
            alert("create new account Successfully ...")
            navigate('/')

        })
        .catch(err => console.log(err))
        

    }

  return (
    <div >
    
    <div class="min-h-screen bg-[url('https://images.hdqwalls.com/download/beautiful-sunset-sea-sky-scenery-landscape-4k-5t-1920x1080.jpg')] bg-cover items-center flex flex-col justify-center py-12 sm:px-6 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-md">
        <img class="mx-auto h-10 w-auto" src="https://www.svgrepo.com/show/301692/login.svg" alt="Workflow"/>
        <h2 class="mt-6 text-center text-4xl leading-9 font-extrabold text-yellow-500">
            Create a new account
        </h2>
       
    </div>

    <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form method="POST" action="#"  onSubmit={Submit}>
                <div>
                    <label for="email" class="block text-1xl font-bold text-center leading-5  text-gray-700">Name</label>
                    <div class="mt-1 relative rounded-md shadow-sm">
                        <input id="name" name="name" placeholder="Enter your name" type="text" required=""
                            class="appearance-none block w-full px-3 py-2 border hover:scale-105 hover:bg-gray-500 hover:text-white duration-200 border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                            onChange={(e) => setName(e.target.value)}
                            />
                        <div class="hidden absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                            <svg class="h-5 w-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd"
                                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                                    clip-rule="evenodd">
                                </path>
                            </svg>
                        </div>
                    </div>
                </div>

               

                <div class="mt-6">
                    <label for="email" class="block text-1xl text-center font-bold leading-5 text-gray-700">
                        Email 
                    </label>
                    <div class="mt-1 relative rounded-md shadow-sm">
                        <input id="email" name="email" placeholder="Enter your Email" type="email"
                            required=""
                            class="appearance-none block w-full px-3 py-2 border hover:scale-105 hover:bg-gray-500 hover:text-white duration-100 border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                            onChange={(e) => setEmail(e.target.value)} 
                            />
                        <div class="hidden absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                            <svg class="h-5 w-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd"
                                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                                    clip-rule="evenodd"></path>
                            </svg>
                        </div>
                    </div>
                </div>

                <div class="mt-6">
                    <label for="password" class="block text-1xl font-bold text-center leading-5 text-gray-700">
                        Password
                    </label>
                    <div class="mt-1 rounded-md shadow-sm">
                        <input id="password" name="password" type="password" required="" placeholder='Enter your Password'
                            class="appearance-none block w-full px-3 py-2 border border-gray-300 hover:scale-105 hover:bg-gray-500 hover:text-white duration-150 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                            onChange={(e) => setPassword(e.target.value)}
                            />
                    </div>
                </div>

                <div class="mt-6">
                    <label for="Role" class="block text-1xl font-bold text-center leading-5 text-gray-700">
                        Role
                    </label>
                    <div class="mt-1 rounded-md shadow-sm">
                        <input id="Role" name="Role" type="Role" required="" placeholder='Enter your role'
                            class="appearance-none block w-full px-3 py-2 border border-gray-300  hover:scale-105 hover:bg-gray-500 hover:text-white duration-150 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                            onChange={(e) => setRole(e.target.value)}
                            />
                    </div>
                </div>

                <div class="mt-6">
                    <span class="block w-full rounded-md shadow-sm">
                        <button type="submit"
                            class="w-full flex justify-center py-2 hover:scale-110 duration-150 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out">
                            Create account
                        </button>
                    </span>
                </div>
            </form>

        </div>
    </div>
</div>

    </div>
  )
}

export default CreateUser