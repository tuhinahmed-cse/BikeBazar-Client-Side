import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(err => console.log(err));
    }
    const menuItems = <>

        <li><Link to="/" className=' font-bold'>HOME</Link></li>
        <li><Link to="/" className=' font-bold'>BLOG</Link></li>


        {
            user?.uid ? 
            <><li><Link to="/dashboard" className='font-bold'>DASHBOARD</Link></li>
             <li><Link to="/"><button type="button" class="btn btn-active btn-primary" onClick={handleLogOut}>
                Logout</button></Link></li>

            </> :
            <li><Link to="/login"><button type="button" class="btn btn-active btn-primary">
            Login</button></Link></li>
                
           
        }



    </>

    return (
        <>

            <div className="navbar bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex justify-between">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={1} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {menuItems}
                        </ul>
                    </div>
                    <Link to="/" className="btn btn-ghost normal-case text-xl text-white">Bike Bazar</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        {menuItems}
                    </ul>
                </div>
                <label htmlFor="dashboard-drawer" tabIndex={2} className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>

            </div>

            

        </>
    );
};

export default Navbar;