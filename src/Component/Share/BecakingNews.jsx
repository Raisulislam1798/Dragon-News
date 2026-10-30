import React from 'react';
import Marquee from 'react-fast-marquee';

const BecakingNews = () => {
    return (
        <div className='bg-gray-300 flex p-4 gap-3 container mx-auto rounded-md'>
            <button className='btn bg-red-600 border-none text-white'>Brecaking news</button>
            <Marquee pauseOnHover={true}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut ab enim provident ex. Dolores nemo harum ut, vero explicabo esse libero eius minima earum, nihil, ea ipsam! Eum, quibusdam illum?
            </Marquee>
        </div>
    );
};

export default BecakingNews;