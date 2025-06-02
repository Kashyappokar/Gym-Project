import React from 'react'
import { Link } from 'react-router-dom'
// import './File.css'

const NavBar = () => {
  return (
    <>
    <div className='flex gap-[20px] bg-transparent text-black p-[30px] justify-around align-center '>
    <p className='text-black font-black text-2xl'>SFWP Fitness Center</p>
    <div className='flex gap-3 text-xl justify-evenly'>

        <Link className= 'text-black font-bold' to="/">Home</Link>
        /<Link className='text-black font-bold' to="/About">About</Link>
        /<Link className='text-black font-bold' to="/Gallery">Gallery</Link>
        /<Link className='text-black font-bold' to="/Login">Login</Link>
        /<Link className='text-black font-bold' to="/SignUp">SignUp</Link>
    </div>
    </div>
    </>
  )
}

export default NavBar
