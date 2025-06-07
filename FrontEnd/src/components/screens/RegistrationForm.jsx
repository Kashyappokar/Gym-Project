import NavBar from "../common/NavBar";
import { useFormik } from "formik";
import { initialValues1, SignUpSchema } from "../constant/Data";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const RegistrationForm = () => {
  const [user, setUser] = useState([]);
  const [message, setMessage] = useState();
  const [isSubmitted, setIsSubmitted] = useState(false)
  const navigate = useNavigate();
  const createUser = async (values) => {
    try {
      axios.post("http://localhost:8000/create", values).then((res) => {
        if (res?.status === 200) {
          setUser(...user, res?.data);
          setMessage(`You have successfully registred yourself ${res?.data.name} !`)
          setIsSubmitted(true)
        }
      });
    } catch (err) {
      console.log(err);
    }
  };

  const formik = useFormik({
    initialValues: initialValues1,
    validationSchema: SignUpSchema,
    onSubmit: (values) => {
      createUser(values);

      formik.resetForm();

      setTimeout(() => {
        navigate("/");
      }, 2000);

    },
  });
  return (
    
    <div>
      <NavBar />
      <div className="bg-[#555] h-[609px] flex flex-col justify-center items-center">
    {!isSubmitted ? (
        <form onSubmit={formik.handleSubmit}>
          <div className="flex flex-col justify-center items-center gap-[40px] h-[100%] text-center ">
            <h1 className="text-5xl font-bold text-white">SignUp Form</h1>

            <div className="bg-[bisque] border-solid border-2 border-black flex flex-col gap-3 p-[20px] rounded-[10px]">
              <div>
                <label
                  htmlFor="name"
                  className="flex flex-col items-start ml-2 font-semibold"
                >
                  Enter Name :
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  className="w-[400px] p-[10px] m-1 rounded-lg border-none font-sans text-[rebeccapurple] font-semibold "
                  placeholder="Enter Your Name Here!"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.name}
                />
                {formik.errors.name && formik.touched.name ? (
                  <p className="text-red-600 flex justify-start ml-2">
                    {formik.errors.name}
                  </p>
                ) : null}
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="flex flex-col items-start ml-2 font-semibold"
                >
                  Enter Email :
                </label>
                <input
                  id="email"
                  name="email"
                  type="text"
                  className="w-[400px] p-[10px] m-1 rounded-lg border-none font-sans text-[rebeccapurple] font-semibold "
                  placeholder="Enter Your Email Here!"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                />
                {formik.errors.email && formik.touched.email ? (
                  <p className="text-red-600 flex justify-start ml-2">
                    {formik.errors.email}
                  </p>
                ) : null}
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="flex flex-col items-start ml-2 font-semibold"
                >
                  Enter Password :
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  className="w-[400px] p-[10px] m-1 rounded-lg border-none font-sans text-[rebeccapurple] font-semibold"
                  placeholder="Enter Your Password Here!"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.password}
                />
                {formik.errors.password && formik.touched.password ? (
                  <p className="text-red-600 flex justify-start ml-2">
                    {formik.errors.password}
                  </p>
                ) : null}
              </div>
            </div>

            <div className="">
              <button
                type="submit"
                className="bg-blue-800 text-white rounded-md py-[10px] px-[40px] text-lg font-semibold hover:bg-blue-700 transition-all"
              >
                Submit
              </button>
            </div>
          </div>
        </form>)
        : (
          <div className="text-4xl font-bold text-white text-center">
            {message}
          </div>
        )}
      </div>
    </div>
  );
};

export default RegistrationForm;
