'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const NaveLink = ({href,children}) => {
    const pathname=usePathname()
    const isActive=href===pathname

    return (
        <Link className={`${isActive?'bg-pink-400 text-white p-2 rounded-lg':''} `} href={href}>{children} </Link>
    );
};

export default NaveLink;