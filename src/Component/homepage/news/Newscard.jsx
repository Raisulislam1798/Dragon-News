import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { CiBookmark, CiShare2 } from 'react-icons/ci';
import { FaEye, FaStar } from 'react-icons/fa';

const Newscard = ({ news }) => {
    console.log(news)
    return (
        <div className="card bg-base-100 w-full flex flex-col p-6 shadow-sm my-8">
            <div className="card-body">

                <div className='flex justify-between items-center bg-slate-200 rounded-sm p-2'>
                    <div className='flex items-center'>
                        <Image className='rounded-full  mr-3' src={news.author.img} alt={news.author.name} height={40} width={40} />
                        <div>
                            <h1 className='font-semibold'>{news.author.name}</h1>
                            <h1 className='text-xs'>{news.author.published_date} </h1>
                        </div>
                    </div>
                    <div className='flex gap-2 text-2xl font-bold'>
                        <CiShare2 />
                        <CiBookmark />


                    </div>
                </div>

                <h2 className="card-title">{news.title} </h2>
            </div>
            <figure>
                <Image
                    className='w-[96%] my-2.5'
                    src={news.image_url}
                    alt={news.title}
                    height={400} width={400} />
            </figure>
            <p className=' my-2.5 text-center w-full line-clamp-2 container mx-auto'>{news.details}</p>

            <div className='flex items-center justify-between'>
                <div className=' flex items-center gap-6'>
                    <p className='flex gap-2 items-center'> <span className='text-yellow-500'><FaStar /></span>{news.rating.number}</p>
                    <p className='flex gap-2 items-center'> <span><FaEye /></span>{news.total_view}</p>
                    
                </div>
                <Link href={`/news/${news._id}`}>
                    <button className='btn'>See details</button></Link>
            </div>
        </div>
    );
};

export default Newscard;