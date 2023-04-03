
import React, { useState } from 'react';
import Link from '../Link/Link';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'

const navber = () => {
    const [open, setOpen] = useState(false);
    const routes = [
        { id: 1, name: 'Home', path: '/' },
        { id: 2, name: 'About', path: '/about' },
        { id: 3, name: 'Products', path: '/products' },
        { id: 4, name: 'Contact', path: '/contact' },
        { id: 5, name: 'Blog', path: '/blog' }
    ];

    return (
        <nav className=' bg-purple-400 '>
            <div onClick={() => setOpen(!open)} className='md:hidden'>
                <span>{
                    open === true ? <XMarkIcon className="h-6 w-6 text-purple-600" />
                        : <Bars3Icon className="h-6 w-6 text-purple-600" />
                }</span>


            </div>


            <ul className={`md:flex absolute md:static duration-500 pl-8 pb-2 py-2  bg-purple-400  ${open ? 'top-6': '-top-36'}`}>
                {
                    routes.map(route => <Link
                        key={route.id}
                        route={route}
                    ></Link>)
                }
            </ul>
        </nav>
    );
};

export default navber;
