import React from 'react'
import NavBar from '../common/NavBar'


const About = () => {
  return (
    <div>
      <NavBar />
      <div className='flex flex-col justify-center pt-[10px] items-center bg-[#555] '>

      <div className='bg-[#fff] rounded-[12px] m-[10px] flex w-[60%] gap-[80px] justify-center items-center py-5 px-5'>
        <div className='h-[250px] overflow-hidden w-[360px]'>
        <img className='max-w-[350px] max-h-[350px]' src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOVvRRrRADUsUzBIVyK5ztCwV6o1F1jiju3A&s"} alt="Exercise Image" />
        </div>
        <div className='w-[30%]'>
        <h1 className='text-2xl font-bold'>Bench Press</h1>
        <p className='font-medium'>Strengthens chest, shoulders, and triceps by pressing a barbell from chest level upward.</p>
        </div>
      </div>

      <div className='bg-[#fff] rounded-[12px] m-[10px] flex w-[60%] gap-[80px] justify-center items-center py-5 px-5 flex-row-reverse'>
        <div className='h-[250px] overflow-hidden w-[360px]'>
          <img className='max-w-[350px] max-h-[350px]' src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwKdJ5wMvWigyuVXSc7RmA8-fKyq9wVxNtfw&s"} alt="Exercise Image" />
        </div>
        <div className='w-[30%]'>
        <h3 className='text-2xl font-bold'>Push Up</h3>
        <p className='font-medium'>Bodyweight exercise targeting chest, shoulders, and triceps. Performed by pushing your body up from the ground.</p>
        </div>
      </div>

      <div className='bg-[#fff] rounded-[12px] m-[10px] flex w-[60%] gap-[80px] justify-center items-center py-5 px-5'>
        <div className='h-[250px] overflow-hidden w-[360px]'>
          <img className='max-w-[350px] max-h-[350px]' src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShb8VZi2YQ1R4rXOSk1OZ4YuppENuRQtrBnA-Rh__mOeOWP4IqAF2jSsD90xMdYbekj9Q&usqp=CAU"} alt="Exercise Image" />
        </div>
        <div className='w-[30%]'>
        <h3 className='text-2xl font-bold'>Pull-Ups</h3>
        <p className='font-medium'>Uses bodyweight to strengthen back and biceps by pulling yourself up on a bar.</p>
        </div>
      </div>

      <div className='bg-[#fff] rounded-[12px] m-[10px] flex w-[60%] gap-[80px] justify-center items-center py-5 px-5 flex-row-reverse'>
        <div className="h-[250px] overflow-hidden w-[360px]">
          <img className='max-w-[350px] max-h-[350px]' src={"https://spotebi.com/wp-content/uploads/2014/10/squat-exercise-illustration.jpg"} alt="Exercise Image" />
        </div>
        <div className='w-[30%]'>
        <h3 className='text-2xl font-bold'>Squats</h3>
        <p className='font-medium'>A compound movement that strengthens quads, hamstrings, glutes, and core by bending the knees and lowering the hips.</p>
        </div>
      </div>

      <div className='bg-[#fff] rounded-[12px] m-[10px] flex w-[60%] gap-[80px] justify-center items-center py-5 px-5'>
        <div className="h-[250px] overflow-hidden w-[360px]">
          <img className='max-w-[350px] max-h-[350px]' src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcwKY7Aj071QT80oNOqH7a_jz0s_WmSK8lwg&s"} alt="Exercise Image" />
        </div>
        <div className='w-[30%]'>
        <h3 className='text-2xl font-bold'>Deadlift</h3>
        <p className='font-medium'>A powerful lift that works the back, glutes, hamstrings, and core by lifting weight from the ground.</p>
        </div>
      </div>
      </div>
    </div>
  )
}

export default About
