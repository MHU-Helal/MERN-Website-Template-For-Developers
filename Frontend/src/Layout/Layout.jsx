import React from 'react'
import { Outlet } from 'react-router-dom'
import Nabvar from '../Components/Nabvar'
import Footer from '../Components/Footer'

export default function Layout() {
  return (
    <>
    <Nabvar/>
    <main className='w-full h-[90vh] text-center text-white bg-slate-400 p-5'><Outlet/></main>
    <Footer/>
    </>
  )
}
