import { createBrowserRouter } from 'react-router-dom'
import Dashboard from '../layouts/Dashboard'
import Main from '../layouts/Main'
import Login from '../pages/auth/Login'
import SignUp from '../pages/auth/SignUp'
import Instructor from '../pages/dashboard/Instructor'
import Home from '../pages/home/Home'
import MyClasses from '../pages/dashboard/MyClasses'
import SelectedClasses from '../pages/dashboard/SelectedClasses'
import Enrolled from '../pages/dashboard/Enrolled'
import InstructorPage from '../pages/Instructor/InstructorPage'
import Classes from '../pages/Classes/Classes'
import AllUsers from '../pages/dashboard/Admin/AllUsers'
import ManageClasses from '../pages/dashboard/Admin/ManageClasses'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/instructor',
        element: <InstructorPage></InstructorPage>
      },
      {
        path: '/classes',
        element : <Classes></Classes>
      }
    ]
  },
  {
    path: '/login',
    element: <Login></Login>
  },
  {
    path: "/signup",
    element: <SignUp />
  },
  {
    path: '/dashboard',
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: '/dashboard/addClass',
        element: <Instructor></Instructor>
      },
      {
        path:'/dashboard/myclasses',
        element:<MyClasses></MyClasses>
      },
      {
        path: '/dashboard/selectedclass',
        element : <SelectedClasses></SelectedClasses>
      },
      {
        path: '/dashboard/enrolled',
        element : <Enrolled></Enrolled>
      },
      {
        path: '/dashboard/admin/allUsers',
        element: <AllUsers></AllUsers>
      },
      {
        path: '/dashboard/admin/manageClasses',
        element: <ManageClasses></ManageClasses>
      }
    ]
  }
])
