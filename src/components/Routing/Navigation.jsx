import React from 'react';
import { Link } from 'react-router-dom'

const Navigation = () => {
    return (
        <>
            <Link to='/' className='h-link'>HOME</Link>
            <Link to='/about' className='h-link'>ABOUT</Link>
            <Link to='/tickets' className='h-link'>TICKETS</Link>
            <Link to='/contacts' className='h-link'>CONTACTS</Link>
        </>
    );
};

export default Navigation;