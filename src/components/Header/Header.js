import React from 'react';
import logo from '../../images/Logo.svg'

const Header = () => {
    return (
        <nav className='px-36 h-[80px] bg-[#1C2B35] flex items-center justify-between'>
            
            <img src={logo} alt="" />

            <div className='text-white  text-md'>
                <a className='ml-6 hover:text-orange-600' href="/shop">Shop</a>
                <a className='ml-6 hover:text-orange-600' href="/orders">Orders</a>
                <a className='ml-6 hover:text-orange-600' href="/Inventory">Inventory</a>
                <a className='ml-6 hover:text-orange-600' href="/about">About</a>
            </div>
        </nav>
    );
};

export default Header;