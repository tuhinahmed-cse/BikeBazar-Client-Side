import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';
import Navbar from '../Pages/Shared/Navbar/Navbar';

const Dashboard = () => {

    const { user } = useContext(AuthContext);
    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 text-base-content">
                        { user &&
                             <>
                                <li><Link to="/dashboard/userbooks" className='font-bold text-2xl' style={{color:'#ef6c00', fontFamily:'cursive', }}>My Orders</Link></li>
                                <li><Link to="/dashboard/allbuyers" className='font-bold text-2xl' style={{color:'#ef6c00', fontFamily:'cursive', }}>All Buyers</Link></li>
                            </>
                        }

                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;