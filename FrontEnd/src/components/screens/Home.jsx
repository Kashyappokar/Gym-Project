import React from 'react'
import NavBar from '../common/NavBar'


const Home = () => {
  return (
    <>
         <NavBar />
         <div>
            <img className='w-full h-[609px] ' src={"https://m.media-amazon.com/images/I/71t2iMRG+rL._UF1000,1000_QL80_.jpg"} alt="Gym Image BackGround" />
            <div className='w-[500px] absolute top-[350px] left-[800px] bg-sky-50 py-[40px] px-[60px] rounded-[20px] '>
            <h1 className='text-3xl my-2 font-bold'>Unleash Your Potential</h1>

            <p className='font-medium'>Transform your body and mind with state-of-the-art equipment, expert trainers, and a supportive fitness community. Whether you're a beginner or a pro, we help you crush your goals — one rep at a time.</p>
            </div> 
         </div>
    
    </>
  )
}

export default Home
