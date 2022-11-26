import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';
import useAdmin from '../hooks/useAdmin';
import useBuyer from '../hooks/useBuyer';
import useSeller from '../hooks/useSeller';
import Navbar from '../Pages/Shared/Navbar/Navbar';

const Dashboard = () => {

    const { user } = useContext(AuthContext);
    const [isAdmin] = useAdmin(user?.email);
    const [isBuyer] = useBuyer(user?.email);
    const [isSeller] = useSeller(user?.email);

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
                        {isAdmin &&
                            <>
                                <li><Link to="/dashboard/allbuyers" className='font-bold text-2xl' style={{ color: '#ef6c00', fontFamily: 'cursive', }}>All Buyers</Link></li>
                                <li><Link to="/dashboard/allsellers" className='font-bold text-2xl' style={{ color: '#ef6c00', fontFamily: 'cursive', }}>All Sellers</Link></li>
                                <li><Link to="/dashboard/report" className='font-bold text-2xl' style={{ color: '#ef6c00', fontFamily: 'cursive', }}>Reported Items</Link></li>
                            </>
                        }
                        {isBuyer &&
                            <>
                                <li><Link to="/dashboard/userbooks" className='font-bold text-2xl' style={{ color: '#ef6c00', fontFamily: 'cursive', }}>My Orders</Link></li>
                            </>
                        }
                        {isSeller &&
                           <>
                           <li><Link to="/dashboard/addproduct" className='font-bold text-2xl' style={{ color: '#ef6c00', fontFamily: 'cursive', }}>Add a Product</Link></li>

                           <li><Link to="/dashboard/viewproduct" className='font-bold text-2xl' style={{ color: '#ef6c00', fontFamily: 'cursive', }}>View My Products</Link></li>
                       </>
                        }

                        



                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;
