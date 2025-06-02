import { Route, Routes } from "react-router-dom"
import Home from "./components/screens/Home"
import Gallery from './components/screens/Gallery'
import About from './components/screens/About'
import LoginForm from './components/screens/LoginForm'
import RegistrationForm from './components/screens/RegistrationForm'
function App() {

  return (
    <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Gallery" element={<Gallery />} />
          <Route path="/About" element={<About />} />
          <Route path="/Login" element={<LoginForm />} />
          <Route path="/SignUp" element={<RegistrationForm/>}/>
        </Routes>
    </>
  )
}

export default App
