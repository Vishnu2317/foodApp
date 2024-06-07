import React from 'react'
import CreateUser from './CURD/CreateUser'
import UserDetails from './CURD/UserDetails'
import Users from './CURD/Users'
import EditUser from './CURD/EditUser'
import Home from './CURD/Home'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'


const App4 = () => {
  return (
    <>
    <BrowserRouter>
    <nav>
        <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/users'>Users</Link></li>
        </ul>
    </nav>
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/users' element={<Users/>} />
        <Route path='/create' element={<CreateUser/>} />
        <Route path='/users/:id' element={<UserDetails/>} />
        <Route path='/editusers/:id' element={<EditUser/>} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App4