import React from 'react'
import Login from './pages/Login'
import { Route, Routes } from 'react-router-dom'
import BusRoute from './pages/BusRoute'
import Home from './pages/Home'
import Register from './pages/Register'

const App = () => {
  return (
    <div>
      <Routes>
        {/* Show entire timetable */}
        <Route path='/' element = {<Home />} />
        {/* Routes display for specific bus */}
        <Route path='/timetable/:id' element = {<BusRoute />} />
        {/* admin login page */}
        <Route path='/admin/login' element = {<Login />} />  
        {/* admin register page */}
        <Route path='/admin/register' element = {<Register />} />  
        {/* <Route path='/admin/timetables' element = {<Login />} /> */}
        {/* <Route path='/admin/routes' element = {<Login />} /> */}
      </Routes>
    </div>
  )
}

export default App