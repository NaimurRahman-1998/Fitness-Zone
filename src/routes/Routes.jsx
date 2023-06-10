import { createBrowserRouter } from 'react-router-dom'
import Dashboard from '../layouts/Dashboard'
import Main from '../layouts/Main'
import Login from '../pages/auth/Login'
import SignUp from '../pages/auth/SignUp'
import Instructor from '../pages/dashboard/Instructors/Instructor'
import Home from '../pages/home/Home'
import MyClasses from '../pages/dashboard/Instructors/MyClasses'
import SelectedClasses from '../pages/dashboard/Student/SelectedClasses'
import Enrolled from '../pages/dashboard/Student/Enrolled'
import InstructorPage from '../pages/Instructor/InstructorPage'
import Classes from '../pages/Classes/Classes'
import AllUsers from '../pages/dashboard/Admin/AllUsers'
import ManageClasses from '../pages/dashboard/Admin/ManageClasses'
import Payment from '../pages/dashboard/Payment/Payment'
import PrivateRoute from './PrivateRoute'

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
        element: <Classes></Classes>
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
        path: '/dashboard/myclasses',
        element: <MyClasses></MyClasses>
      },
      {
        path: '/dashboard/selectedclass',
        element: <SelectedClasses></SelectedClasses>
      },
      {
        path: '/dashboard/enrolled',
        element: <Enrolled></Enrolled>
      },
      {
        path: '/dashboard/admin/allUsers',
        element: <AllUsers></AllUsers>
      },
      {
        path: "/dashboard/payment/:id",
        element: <PrivateRoute><Payment></Payment></PrivateRoute>
      },
      {
        path: '/dashboard/admin/manageClasses',
        element: <ManageClasses></ManageClasses>
      }
    ]
  }
])
