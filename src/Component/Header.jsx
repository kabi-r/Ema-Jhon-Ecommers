import React, { useContext } from 'react';
import logo from '../assets/Logo.svg'
import { Link, NavLink } from 'react-router-dom';
import { authContext } from './Provider/AuthProvider';

const Header = () => {
    const {logOut, user} = useContext(authContext)
    return (
        <div className='flex bg-slate-800 justify-between px-16 items-center p-2'>
            <div>
                <NavLink to='/'><img src={logo} alt="" /></NavLink>
            </div>
            <div>
                <Link className='text-xl pr-5 text-white' to='/'>Shop</Link>
                <Link className='text-xl pr-5 text-white' to='/orders'>Order</Link>
                <Link className='text-xl pr-5 text-white' to='/inventory'>Inventory</Link>
                <Link className='text-xl pr-5 text-white' to='/login'>Login</Link>
                {
                user && <span className='text-success'>{user.email}
                <button onClick={logOut} className='btn'>logOut</button>
                </span> 
                }
            </div>
        </div>
    );
};

export default Header;