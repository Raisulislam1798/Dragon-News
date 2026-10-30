'use client'
import { authClient } from '@/lib/auth-client';
import { Passero_One } from 'next/font/google';
import Link from 'next/link';
import React from 'react';
import { useForm } from 'react-hook-form';
import { CgPassword } from 'react-icons/cg';

const Register = () => {
    const { register,handleSubmit,formState: { errors }} =useForm()

    const hendRegisterFunc= async (data)=>{ 
        
        const{name,email,photo,password }=data
        console.log(data)
        const {data:res,error} = await authClient.signUp.email({
            name: name, // required, The name of the user.
            email: email, // required, The email address of the user.
            password:password, // required, The password of the user. It should be at least 8 characters long and max 128 by default.
            image:photo, // An optional profile image of the user.
            callbackURL: "/", // An optional URL to redirect to after the user signs up.
         });

         console.log(res,error)
    }
    console.log(errors)
   
    return (
        <div className="min-h-screen w-full bg-gray-50 flex items-center justify-center px-4">
            
            <div  className="bg-white p-12 md:p-16 rounded-lg max-w-xl w-full mx-auto shadow-sm">
                
                {/* Form Title */}
                <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-8 pb-4 border-b border-gray-100">
                    Register your account
                </h2>

                <form onSubmit={handleSubmit(hendRegisterFunc)} className="space-y-6">

                     <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Name
                        </label>
                        <input 
                            type="text" 
                            {...register("name",{ required: "name field is required"})} 
                            placeholder="Enter your name" 
                            className="w-full px-4 py-3 bg-gray-100 border border-transparent rounded-md text-sm focus:outline-none focus:bg-white focus:border-gray-300 transition-all"
                        />
                        { errors.name && <p className='text-red-500'>{errors.name.message}</p> }
                    </div>

                     <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Photo url
                        </label>
                        <input 
                            type="text" 
                            {...register("photo",{ required: "Photo url field is required"})} 
                            placeholder="Enter your photo url" 
                            className="w-full px-4 py-3 bg-gray-100 border border-transparent rounded-md text-sm focus:outline-none focus:bg-white focus:border-gray-300 transition-all"
                        />
                        { errors.photo  && <p className='text-red-500'>{errors.photo.message}</p> }
                    </div>
                    
                    {/* Email Input Field */}
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Email address
                        </label>
                        <input 
                            type="email" 
                            {...register("email",{ required: "Email field is required"})} 
                            placeholder="Enter your email address" 
                            className="w-full px-4 py-3 bg-gray-100 border border-transparent rounded-md text-sm focus:outline-none focus:bg-white focus:border-gray-300 transition-all"
                        />
                        { errors.email && <p className='text-red-500'>{errors.email.message}</p> }
                    </div>

                    {/* Password Input Field */}
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Password
                        </label>
                        <input 
                            type="password" 
                            {...register("password" ,{ required: "Password field is required"})} 
                            placeholder="Enter your password" 
                            className="w-full px-4 py-3 bg-gray-100 border border-transparent rounded-md text-sm focus:outline-none focus:bg-white focus:border-gray-300 transition-all"

                            
                        />
                        { errors.password && <p className='text-red-500'>{errors.password.message}</p> }
                    </div>

                    {/* Submit Button */}
                    <button 
                        type="submit" 
                        className="w-full py-3 bg-gray-800 hover:bg-gray-900 hover:cursor-pointer text-white font-medium text-sm rounded-md transition-colors"
                    >
                        Register
                    </button>

                </form>

                {/* Bottom Register Link */}
                <p className="text-center text-sm font-medium text-gray-600 mt-6">
                     Have An Account ? {' '}
                    <Link 
                        href={`/login`}
                        className="text-rose-500 font-semibold hover:underline "
                    >
                        Login
                    </Link>
                </p>

            </div>

        </div>
    );
};

export default Register;