import Image from 'next/image';
import React from 'react';
import { FaFacebook, FaGithub, FaGoogle, FaTwitterSquare } from 'react-icons/fa';
import { FaSquareInstagram } from 'react-icons/fa6';
import classImg from '@/assets/class.png'
import swimming from '@/assets/swimming.png'
import playground from '@/assets/playground.png'
import bg from '@/assets/bg.png'

const Rightsideber = () => {
    return (
        <>
            <div className='mb-8'>
                <p className='mb-6'>Login with</p>
                <div className='flex flex-col gap-2 '>
                    <button className='btn border-blue-500 text-blue-500'><FaGoogle />Login with google</button>
                    <button className='btn'> <FaGithub />Login with github</button>
                </div>
            </div>
            <div className='mb-8'>
                <p className='mb-5'>Find us on</p>

                <div className=''>
                    <p className='border p-2 flex items-center gap-2 '> <FaFacebook />Facebook</p>
                    <p className='border-x p-2 flex items-center gap-2'> <FaTwitterSquare />Twitter</p>
                    <p className='border p-2 flex items-center gap-2'><FaSquareInstagram />Instagram</p>
                </div>
            </div>
            <div className='bg-amber-50 rounded-sm p-7' >
                <p className='mb4'>Q-Zone</p>
                <div className=' flex flex-col justify-center items-center gap-6'>
                    <Image src={swimming} width={250} height={200} alt='swimming' />
                    <Image src={classImg} width={250} height={200} alt='class' />
                    <Image src={playground} width={250} height={200} alt='playground' />
                </div>
            </div>
            <div className=' flex justify-center items-center my-6'>
                 <Image  src={bg} width={250} height={200} alt='playground'/>
            </div>
        </>
    );
};

export default Rightsideber;