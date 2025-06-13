import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <>
    <div className='flex gap-[20px] bg-transparent text-black p-[30px] justify-around align-center'>
      <p className='text-black font-black text-2xl'>SFWP Fitness Center</p>
      <div className='flex gap-3 text-xl justify-evenly'>
        <NavLink 
          to="/" 
          className={({ isActive }) => 
            isActive ? 'text-red-500 font-bold' : 'text-black font-bold'
          }
        >
          Home
        </NavLink>
        /
        <NavLink 
          to="/About" 
          className={({ isActive }) => 
            isActive ? 'text-red-500 font-bold' : 'text-black font-bold'
          }
        >
          About
        </NavLink>
        /
        <NavLink 
          to="/Gallery" 
          className={({ isActive }) => 
            isActive ? 'text-red-500 font-bold' : 'text-black font-bold'
          }
        >
          Gallery
        </NavLink>
        /
        <NavLink 
          to="/Login" 
          className={({ isActive }) => 
            isActive ? 'text-red-500 font-bold' : 'text-black font-bold'
          }
        >
          Login
        </NavLink>
        /
        <NavLink 
          to="/SignUp" 
          className={({ isActive }) => 
            isActive ? 'text-red-500 font-bold' : 'text-black font-bold'
          }
        >
          SignUp
        </NavLink>
      </div>
    </div>
    </>
  )
}

export default NavBar
