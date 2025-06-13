import NavBar from "../common/NavBar";
import { useFormik } from "formik";
import { initialValues, LoginSchema } from "../constant/Data";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState([]);

  const loginUser = async (values) => {
    try {
      axios.post("http://localhost:8000/login", values).then((res) => {
        if (res?.status === 200) {
          console.log(res?.data);
          setUser(res?.data);
          navigate("/");
        }
      });
    } catch (error) {
      console.log(error);
    }
  };
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: LoginSchema,
    onSubmit: (values) => {
      formik.resetForm();
      loginUser(values);
    },
  });

  return (
    <div>
      <NavBar />
      <div className="bg-[#555] h-screen">
        <form
          onSubmit={formik.handleSubmit}
          className="flex justify-center items-center h-full"
        >
          <div className="flex flex-col justify-center items-center gap-[40px] h-[100%] text-center ">
            <h1 className="text-5xl font-bold text-white">Login Form</h1>

            <div className="bg-[bisque] border-solid border-2 border-black flex flex-col gap-3 p-[20px] rounded-[10px]">
              <div>
                <label
                  htmlFor="email"
                  className=" font-semibold flex flex-col items-start ml-2"
                >
                  Enter Email :
                </label>
                <input
                  name="email"
                  id="email"
                  className="w-[400px] p-[10px] m-1 rounded-lg border-none font-sans font-semibold"
                  placeholder="Enter Your Email Here!"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                />
                {formik.errors.email && formik.touched.email ? (
                  <p className="text-red-600 flex justify-start ml-3">
                    {formik.errors.email}
                  </p>
                ) : null}
              </div>
              <div>
                <label
                  htmlFor="password"
                  className=" font-semibold flex flex-col items-start ml-2 "
                >
                  Enter Password :
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  className="w-[400px] p-[10px] m-1 rounded-lg border-none font-sans font-semibold "
                  placeholder="Enter Your Password Here!"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.password}
                />

                {formik.errors.password && formik.touched.password ? (
                  <p className="text-red-600 flex justify-start ml-3">
                    {formik.errors.password}
                  </p>
                ) : null}
              </div>
              <div>
                <label
                  htmlFor="confirmPassword"
                  className=" font-semibold flex flex-col items-start ml-2"
                >
                  Re-enter The Password :
                </label>
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  className="w-[400px] p-[10px] m-1 rounded-lg border-none font-sans font-semibold "
                  placeholder="Enter Your Password Here!"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.confirmPassword}
                />
                {formik.errors.confirmPassword &&
                formik.touched.confirmPassword ? (
                  <p className="text-red-600 flex justify-start ml-3">
                    {formik.errors.confirmPassword}
                  </p>
                ) : null}
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="bg-blue-800 text-white rounded-md py-[10px] px-[40px] text-lg font-semibold hover:bg-blue-700 transition-all active:bg-blue-500"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
