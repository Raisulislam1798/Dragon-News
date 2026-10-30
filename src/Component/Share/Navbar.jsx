import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import user from '@/assets/user.png'
import NaveLink from './Nave-link';

const Navbar = () => {
    return (
        <div className='flex justify-between container mx-auto mt-7'>
            <div></div>
                <ul className='flex gap-x-4 text-gray-600 '>
                    <li><NaveLink href='/' >Home</NaveLink></li>
                    <li><NaveLink href='/About' >About</NaveLink></li>
                    <li><NaveLink href='/Career' >Career</NaveLink></li>
                </ul>
                <div className='flex '>
                    <Image src={user} width={40} height={40} alt='user'/>
                    <button className='btn bg-blue-600 text-white ml-7' > <Link href={'/login'}>Login</Link></button>
                </div>
        </div>
    );
};

export default Navbar;