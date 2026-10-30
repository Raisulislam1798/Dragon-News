import { gateNewsId } from '@/lib/data';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { CiBookmark, CiShare2 } from 'react-icons/ci';
import { FaArrowLeft, FaEye, FaStar } from 'react-icons/fa';

const NewsDetails = async ({params}) => {
    const {id}=await params
    const news = await gateNewsId(id)
    console.log(news)
    
    return (
        <div className="card bg-base-100 w-[80vw] mx-auto flex flex-col p-6 shadow-sm my-8">
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
            <p className=' my-2.5 text-center w-full  container mx-auto'>{news.details}</p>

            
            
                    <Link 
                    href={`/categoryes/${news.category_id}`} 
                    className="inline-flex items-center px-5 py-2.5 bg-rose-600 hover:bg-rose-700 w-fit text-white font-medium text-sm rounded transition-colors">
                        <FaArrowLeft />All news in this category              
                     </Link>
            
        </div>
    );
};

export default NewsDetails ;