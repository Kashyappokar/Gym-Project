import NavBar from "../common/NavBar";
import { useFormik } from 'formik'
import { initialValues1, SignUpSchema } from "../constant/Data";

const RegistrationForm = () => {
  const {errors, handleBlur, handleChange, handleSubmit, touched, values} = useFormik({
    initialValues: initialValues1,
    validationSchema: SignUpSchema,
    onSubmit: (values , actions) => {
      console.log(values);
      actions.resetForm()
    }
  })
  return (
    <div>
      <NavBar />
      <div className="bg-[#555] h-[609px] flex flex-col justify-center items-center">

      <form onSubmit={handleSubmit}>
        <div className="flex flex-col justify-center items-center gap-[40px] h-[100%] text-center ">
          <h1 className="text-5xl font-bold text-white">SignUp Form</h1>

          <div className="bg-[bisque] border-solid border-2 border-black flex flex-col gap-3 p-[20px] rounded-[10px]">
            <div>
              <label htmlFor="name" className="flex flex-col items-start ml-2 font-semibold">Enter Name :</label>
              <input
                id="name"
                type="text"
                name="name"
                className="w-[400px] p-[10px] m-1 rounded-lg border-none font-sans text-[rebeccapurple] font-semibold "
                placeholder="Enter Your Name Here!"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
              />
              {errors.name && touched.name ? (<p className="text-red-600 flex justify-start ml-2">{errors.name}</p>) : null}
            </div>
            <div>
              <label htmlFor="email" className="flex flex-col items-start ml-2 font-semibold">Enter Email :</label>
              <input
                id="email"
                name="email"
                type="text"
                className="w-[400px] p-[10px] m-1 rounded-lg border-none font-sans text-[rebeccapurple] font-semibold "
                placeholder="Enter Your Email Here!"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
              {errors. email && touched.email ? (<p className="text-red-600 flex justify-start ml-2">{errors.email}</p>) : null}
            </div>
            <div>
              <label htmlFor="password" className="flex flex-col items-start ml-2 font-semibold">Enter Password :</label>
              <input
                id="password"
                name="password"
                type="password"
                className="w-[400px] p-[10px] m-1 rounded-lg border-none font-sans text-[rebeccapurple] font-semibold"
                placeholder="Enter Your Password Here!"
                onChange={handleChange}
                onBlur={handleBlur}  
                value={values.password}
              />
              {errors.password && touched.password ? (<p className="text-red-600 flex justify-start ml-2">{errors.password}</p>) : null}
            </div>
          </div>

          <div className="">
            <button type="submit" className="bg-blue-800 text-white rounded-md py-[10px] px-[40px] text-lg font-semibold hover:bg-blue-700 transition-all">Submit</button>
          </div>
        </div>
      </form>
    </div>
    </div>
  );
};

export default RegistrationForm;
