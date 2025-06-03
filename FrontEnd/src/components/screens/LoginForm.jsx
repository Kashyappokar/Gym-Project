import NavBar from "../common/NavBar";
import {useFormik} from 'formik'
import { initialValues, LoginSchema } from "../constant/Data";

const LoginForm = () => {

 const {errors, values, touched, handleChange, handleSubmit, handleBlur} = useFormik({
    initialValues: initialValues,
    validationSchema: LoginSchema,
    onSubmit: (values, actions) => {
      console.log(values);

      actions.resetForm()
      
    },
  })
  // console.log(errors);


  return (
    <div>
      <NavBar />
      <div className="bg-[#555] h-[609px]">
        <form onSubmit={handleSubmit} className="flex justify-center items-center h-full">
          <div className="flex flex-col justify-center items-center gap-[40px] h-[100%] text-center ">
            <h1 className="text-5xl font-bold text-white">Login Form</h1>

            <div className="bg-[bisque] border-solid border-2 border-black flex flex-col gap-3 p-[20px] rounded-[10px]">
             <div>
             <label htmlFor="email" className=" font-semibold flex flex-col items-start ml-2">Enter Email :</label>
              <input
                name="email"
                id="email"
                className="w-[400px] p-[10px] m-1 rounded-lg border-none font-sans font-semibold"
                placeholder="Enter Your Email Here!"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
              {errors.email && touched.email ? (<p className="text-red-600 flex justify-start ml-3">{errors.email}</p>) : null}
               </div>
              <div>
              <label htmlFor="password" className=" font-semibold flex flex-col items-start ml-2 ">Enter Password :</label> 
              <input
                id="password"
                name="password"
                type="password"
                className="w-[400px] p-[10px] m-1 rounded-lg border-none font-sans font-semibold "
                placeholder="Enter Your Password Here!"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
              />

              {errors.password && touched.password ? (<p className="text-red-600 flex justify-start ml-3">{errors.password}</p>) : null}
               </div>
               <div>
              <label htmlFor="confirmPassword" className=" font-semibold flex flex-col items-start ml-2">Re-enter The Password :</label> 
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                className="w-[400px] p-[10px] m-1 rounded-lg border-none font-sans font-semibold "
                placeholder="Enter Your Password Here!"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.confirmPassword}
              />
              {errors.confirmPassword && touched.confirmPassword ?(<p className="text-red-600 flex justify-start ml-3">{errors.confirmPassword}</p>) : null}
            </div>
            </div>

            <div className="bg-blue-800 text-white text-lg font-semibold rounded-md py-[10px] px-[40px] hover:bg-blue-700 transition-all">
              <button type="submit">Submit</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
