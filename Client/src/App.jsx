import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import User from './Component/User'
import CreateUser from './Component/CreateUser'
import UpdateUser from './Component/UpdateUser'

function App() {
  return (
    <div>
    
    <BrowserRouter>
    
    <Routes>

    <Route path='/' element = {<User/>}></Route>
    <Route path='/create' element = {<CreateUser/>}></Route>
    <Route path="/update/:id" element={<UpdateUser />} />
    
    
    </Routes>
    
    </BrowserRouter>
    
    </div>
  )
}

export default App