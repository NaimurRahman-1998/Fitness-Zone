import { useContext, useEffect } from "react";
import { useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { Link, NavLink } from "react-router-dom";
import { FaPhoneAlt } from "react-icons/fa";
import { BsChevronBarDown } from "react-icons/bs";
import { BsChevronBarUp } from "react-icons/bs";
import { BiLogIn } from "react-icons/bi";
import { FaUserAlt } from "react-icons/fa";
import blankImg from '../../assets/images/blank-profile-picture.png'
import useAdmin from "../../hooks/useAdmin";
import useStudent from "../../hooks/useStudent";
import useInstructor from "../../hooks/useInstructor";
import logo from '../../assets/images/logo.png'

const Navbar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { user, logOut } = useContext(AuthContext);
    const [isAdmin] = useAdmin();
    const [isStudent] = useStudent();
    const [isInstructor] = useInstructor();
    const [theme, setTheme] = useState('light')

    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
    }, [theme])

    const handleThemeSwitch = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark')
    }


    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch((error) => console.log(error));
    };
    return (



        <div className="w-full bg-black h-24 relative">
            <div className="mx-52 hidden  lg:flex justify-between text-neutral-300 text-base">
                <div className="bg-neutral-700 py-3 px-7  ">
                    <p className="flex justify-center items-center gap-5"> <FaPhoneAlt /> Any Questions? Call Us: 1-303-499-7111</p>
                </div>
                <div className="flex p-3">
                    <Link to='/login'><p className="hover:text-[#9bb70d] border-r-2 px-4 flex justify-center items-center gap-2"> <BiLogIn className="text-[#9bb70d] text-lg" />Member Login</p></Link>
                    <Link to='/signup'><p className="hover:text-[#9bb70d] px-4 flex justify-center items-center gap-2" ><FaUserAlt className="text-[#9bb70d] text-sm" /> register</p></Link>
                    <button onClick={handleThemeSwitch} className="btn btn-xs">switch theme</button>
                </div>
            </div>
            <div>
                <div className="dark:bg-neutral-600 flex z-10 justify-between items-center p-10 w-full lg:w-[80%] bg-white h-20 absolute -bottom-8 left-[50%] transform translate-x-[-50%] mx-auto">
                    <img className="w-[10rem] rounded-lg" src={logo} alt="" />
                    <ul className="items-center hidden space-x-8 lg:flex font-semibold">
                        <li className="hover:text-[#9bb70d]">
                            <NavLink
                                to="/"
                                className={({ isActive }) => (isActive ? "text-[#9bb70d]" : "default")}
                            >
                                Home
                            </NavLink>
                        </li>
                        <li className="hover:text-[#9bb70d]">
                            <NavLink
                                to="/instructor"
                                className={({ isActive }) => (isActive ? "text-[#9bb70d]" : "default")}
                            >
                                Instructor
                            </NavLink>
                        </li>
                        <li className="hover:text-[#9bb70d]">
                            <NavLink
                                to="/classes"
                                className={({ isActive }) => (isActive ? "text-[#9bb70d]" : "default")}
                            >
                                Classes
                            </NavLink>
                        </li>
                        <li className="hover:text-[#9bb70d]">
                            {
                                isStudent &&
                                <>
                                    <NavLink
                                        to="/dashboard/selectedclass"
                                        className={({ isActive }) => (isActive ? "active" : "default")}
                                    >
                                        dashboard
                                    </NavLink>
                                </>
                            }
                            {
                                isInstructor &&
                                <>
                                    <NavLink
                                        to="/dashboard/addClass"
                                        className={({ isActive }) => (isActive ? "active" : "default")}
                                    >
                                        dashboard
                                    </NavLink>
                                </>
                            }
                            {
                                isAdmin &&
                                <>
                                    <NavLink
                                        to="/dashboard/admin/manageClasses"
                                        className={({ isActive }) => (isActive ? "active" : "default")}
                                    >
                                        dashboard
                                    </NavLink>
                                </>
                            }
                        </li>
                    </ul>
                    {
                        user ?
                            <>
                                <div className="flex gap-2 items-center">
                                    <button
                                        onClick={handleLogOut}
                                        className="text-black bg-[#9bb70d] px-4 py-2 hover:bg-[#9bb70d] rounded-lg hidden lg:flex"
                                    >
                                        Log Out
                                    </button>
                                    <img src={user && user.photoURL ? user.photoURL : blankImg} className='w-14 h-14 rounded-full hidden lg:flex' alt="" />
                                </div>
                            </> :
                            <>
                                <Link to="login">
                                    <button className="text-black bg-[#9bb70d] px-4 py-2 rounded-lg hidden lg:flex">
                                        Log In
                                    </button>
                                </Link>
                            </>
                    }
                    <div className="lg:hidden">
                        {/* dropdown open button  */}
                        <button
                            aria-label="Open Menu"
                            title="Open Menu"
                            onClick={() => setIsMenuOpen(true)}
                        >
                            <BsChevronBarDown className="w-5 text-gray-600" />
                        </button>
                        {isMenuOpen && (
                            <div className="absolute top-0 left-0 w-full z-10">
                                <div className="bg-slate-50 p-5 border rounded shadow-sm">
                                    {/* logo & button section  */}
                                    <div className="flex items-center justify-between mb-4">
                                        <div>
                                            <Link to="/" className="inline-flex items-center">
                                                <img className="w-32" src={logo} alt="" />
                                            </Link>
                                        </div>
                                        {/* dropdown menu close button  */}
                                        <div>
                                            <div>
                                                <button
                                                    aria-label="Close Menu"
                                                    title="Close Menu"
                                                    onClick={() => setIsMenuOpen(false)}
                                                >
                                                    <BsChevronBarUp className="w-5 text-gray-600" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    {/* mobile nav items section  */}
                                    <nav className="ml-2">
                                        <ul className="space-y-4 font-medium">
                                            <li>
                                                <NavLink
                                                    to="/"
                                                >
                                                    Home
                                                </NavLink>
                                            </li>
                                            <li>
                                                <NavLink
                                                    to="/instructor"
                                                    className={({ isActive }) =>
                                                        isActive ? "active" : "default"
                                                    }
                                                >
                                                    Instructor
                                                </NavLink>
                                            </li>
                                            <li>
                                                <NavLink
                                                    to="/classes"

                                                >
                                                    Classes
                                                </NavLink>
                                            </li>
                                            {user ? (
                                                <button onClick={handleLogOut} className="">
                                                    Log Out
                                                </button>
                                            ) : (
                                                <li>
                                                    <NavLink
                                                        to="login"
                                                        className={({ isActive }) =>
                                                            isActive ? "active" : "default"
                                                        }
                                                    >
                                                        Login
                                                    </NavLink>
                                                </li>
                                            )}
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div >

    );
};

export default Navbar;