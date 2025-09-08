import React from 'react'
import { BusInfoProvider } from '../context/BusInfoContext'
import BusList from '../components/BusInfo/BusList'
import AdminDashboard from './AdminDashboard'
import AddBus from './Bus/AddBus'

const Home = () => {
  return (
    <>
      <AdminDashboard />
      <AddBus />
    </>
  )
}

export default Home