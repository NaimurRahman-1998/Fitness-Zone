import { Outlet } from "react-router-dom"
import Footer from "../pages/shared/Footer"
import Navbar from "../pages/shared/Navbar"
import DarkModeButton from "../component/DarkModeButton"

const Main = () => {

  return (
    <div className="dark:bg-neutral-700">
      <Navbar ></Navbar>
      <div>
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default Main
