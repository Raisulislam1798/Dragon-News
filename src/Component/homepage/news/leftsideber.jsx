import Link from 'next/link';
import React from 'react';

const Leftsideber = ({ categoryes, activeid }) => {
    return (
        <div>
            <p>All Caterogy</p>
            <ul>
                {categoryes.map(categorys => <li key={categorys.category_id} className={`${activeid === categorys.category_id && 'bg-purple-500'} font-semibold rounded-lg my-2 py-1 text-center text-xl`}> <Link className='block' href={`/categoryes/${categorys.category_id}`}> {categorys.category_name}</Link> </li>)}
            </ul>
        </div>
    );
};

export default Leftsideber;