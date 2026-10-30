import React from 'react';
import logo from'@/assets/logo.png'
import Image from 'next/image';
import { format } from "date-fns";


const Header = () => {
    return (
        <div className='text-center py-6 space-y-3'>
            <Image src={logo} width={300}height={300} alt='logo' className='mx-auto'/>
            <p>Journalism Without Fear or Favour</p>
            <p>{format(new Date(), "EEE,MMM dd,yyyy")}</p>
            
        </div>
    );
};

export default Header;

