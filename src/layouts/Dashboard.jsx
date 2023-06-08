import { Outlet } from "react-router-dom";
import { Link, NavLink } from "react-router-dom";
import useInstructor from "../hooks/useInstructor";


const Dashboard = () => {
    const [isInstructor] = useInstructor();
    return (
        <div>
            <div>
                <div className="drawer lg:drawer-open">
                    <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content flex flex-col items-center justify-center">
                        {/* Page content here */}
                        <Outlet></Outlet>
                        <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                    </div>
                    <div className="drawer-side">
                        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                        <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
                            {/* Sidebar content here */}
                            {
                                isInstructor ?
                                    <>
                                        <NavLink
                                            to="/dashboard/instructor"
                                            className={({ isActive }) => (isActive ? "bg-green-400" : "default")}
                                        >
                                            Instructor
                                        </NavLink>
                                        <NavLink
                                            to="/dashboard/myclasses"
                                            className={({ isActive }) => (isActive ? "bg-green-400" : "default")}
                                        >
                                            My CLasses
                                        </NavLink>
                                    </> : 
                                    <>
                                    <NavLink
                                            to="/dashboard/selectedclass"
                                            className={({ isActive }) => (isActive ? "bg-green-400" : "default")}
                                        >
                                            My Selected Classes
                                        </NavLink>
                                        <NavLink
                                            to="/dashboard/enrolled"
                                            className={({ isActive }) => (isActive ? "bg-green-400" : "default")}
                                        >
                                            Enrolled Class
                                        </NavLink>
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