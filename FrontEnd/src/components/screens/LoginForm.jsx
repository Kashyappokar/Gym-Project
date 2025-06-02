import NavBar from '../common/NavBar'
// import './File.css'
const LoginForm = () => {

  return (
    <div>
      <NavBar />
      <div className='bg-[#555] h-[609px]'>

      <form className='flex justify-center items-center h-full'>
        <div className="flex flex-col justify-center items-center gap-[30px] h-[100%] text-center ">          
          <h1 className='text-5xl font-bold text-white'>Login Form</h1>
          
          <div className="bg-[bisque] border-solid border-2 border-black p-[10px] rounded-[10px]">
            <input type="text" className='w-[400px] p-[10px] m-1 rounded-lg border-none font-sans text-[rebeccapurple] font-bold text-xl' placeholder='Enter Your Email Here!' required/><br />
            <input type="Password" className='w-[400px] p-[10px] m-1 rounded-lg border-none font-sans text-[rebeccapurple] font-bold text-xl' placeholder='Enter Your Password Here!' required />
          </div>
    
          <div className="bg-blue-700 text-white rounded-md py-[5px] px-[20px]">
            <button className="Submit">Submit</button>
          </div>
        
        </div>
      </form>
    </div>
    </div>
  )
}

export default LoginForm
