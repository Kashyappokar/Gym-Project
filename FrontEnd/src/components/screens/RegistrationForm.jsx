import { useState } from "react";
import NavBar from "../common/NavBar";

const RegistrationForm = () => {
  const [name, setName] = useState("");

  const [display, setDisplay] = useState("");

  const EventPara = (e) => {
    setName(e.target.value);
  };

  const displayName = () => {
    setDisplay(name);
  };

  const Submit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <NavBar />
      <div className="bg-[#555] h-[609px] flex flex-col justify-center items-center">
      <h1 className='text-center flex justify-center text-white font-extrabold items-center text-3xl p-5'>{`Welcome ${display} !`}</h1>

      <form onSubmit={Submit}>
        <div className="flex flex-col justify-center items-center gap-[30px] h-[100%] text-center ">
          <h1 className="text-5xl font-bold text-white">SignUp Form</h1>

          <div className="bg-[bisque] border-solid border-2 border-black p-[10px] rounded-[10px]">
            <input
              type="text"
              name="Name"
              placeholder="Enter Your Name Here!"
              required
              className="w-[400px] p-[10px] m-1 rounded-lg border-none font-sans text-[rebeccapurple] font-bold text-xl"
              onInput={EventPara}
            />
            <br />
            <input
              type="text"
              className="w-[400px] p-[10px] m-1 rounded-lg border-none font-sans text-[rebeccapurple] font-bold text-xl"
              placeholder="Enter Your Email Here!"
              required
            />
            <br />
            <input
              type="Password"
              className="w-[400px] p-[10px] m-1 rounded-lg border-none font-sans text-[rebeccapurple] font-bold text-xl"
              placeholder="Enter Your Password Here!"
              required
            />
          </div>

          <div className="">
            <button className="bg-blue-700 text-white rounded-md py-[5px] px-[20px]" onClick={displayName}>Submit</button>
          </div>
        </div>
      </form>
    </div>
    </div>
  );
};

export default RegistrationForm;
