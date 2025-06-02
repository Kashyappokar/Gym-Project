import React from 'react'
import NavBar from '../common/NavBar'
import Data from '../constant/Data'

const Gallery = () => {
  return (
    <div>
      <NavBar />
      <div className='flex flex-wrap justify-center gap-[30px] bg-[#555] '>
    {
      Data.map((props,index) =>(
          <div className='bg-white p-5 w-[400px] justify-center items-center text-black rounded-[20px] text-center m-5' key={index}>
            <img className='w-[350px] h-[230px] rounded-[20px]' src={props.img} alt="Exercise Img" />
            <h1 className='font-bold text-2xl m-2'>{props.name}</h1>
            <h4 className='text-base m-3'>{props.desc}</h4>
            <p className='text-sm m-2'>{props.explanation}</p>
          </div>
      )
      
    )
  }
  </div>
    </div>
  )
}

export default Gallery
