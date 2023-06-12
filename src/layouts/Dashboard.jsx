import { Outlet } from "react-router-dom";
import { Link, NavLink } from "react-router-dom";
import useInstructor from "../hooks/useInstructor";
import useAdmin from "../hooks/useAdmin";
import useStudent from "../hooks/useStudent";


const Dashboard = () => {
    const [isInstructor] = useInstructor();
    const [isAdmin] = useAdmin();
    const [isStudent] = useStudent()
    return (
        <div>
            <div>
                <div className="drawer lg:drawer-open">
                    <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content px-40 py-20 ">
                        {/* Page content here */}
                        <Outlet></Outlet>
                        <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                    </div>
                    <div className="drawer-side ">
                        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                        <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
                            {/* Sidebar content here */}
                            {
                                isInstructor &&
                                <>
                                    <NavLink
                                        to="/dashboard/addClass"
                                        className={({ isActive }) => (isActive ? "bg-green-400" : "default")}
                                    >
                                        Add A Class
                                    </NavLink>
                                    <NavLink
                                        to="/dashboard/myclasses"
                                        className={({ isActive }) => (isActive ? "bg-green-400" : "default")}
                                    >
                                        My CLasses
                                    </NavLink>
                                    
                                    <div className="border-2 border-black mt-2"></div>
                                </>

                            }

                            {isStudent &&
                                <>
                                    <NavLink
                                        to="/dashboard/selectedclass"
                                        className={({ isActive }) => (isActive ? "bg-green-400" : "default")}
                                    >
                                        My selected Classes
                                    </NavLink>
                                    <NavLink
                                        to="/dashboard/enrolled"
                                        className={({ isActive }) => (isActive ? "bg-green-400" : "default")}
                                    >
                                        Enrolled Classes
                                    </NavLink>
                                    <NavLink
                                        to="/dashboard/payments"
                                        className={({ isActive }) => (isActive ? "bg-green-400" : "default")}
                                    >
                                        My payments
                                    </NavLink>
                                    <div className="border-2 border-black mt-2"></div>
                                </>
                            }

                            {
                                isAdmin &&
                                <>
                                    <NavLink
                                        to="/dashboard/admin/manageClasses"
                                        className={({ isActive }) => (isActive ? "bg-green-400" : "default")}
                                    >Manage Classes</NavLink>
                                    <NavLink
                                        to="/dashboard/admin/allUsers"
                                        className={({ isActive }) => (isActive ? "bg-green-400" : "default")}
                                    >All user</NavLink>
                                    <div className="border-2 border-black mt-2"></div>
                                </>
                            }

                            <NavLink to={'/'}>home </NavLink>
                        </ul>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;