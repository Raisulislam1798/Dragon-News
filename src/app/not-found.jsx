import React from 'react';
import Link from 'next/link';

const NotFound = () => {
    return (
        <div className="min-h-[100vh] bg-slate-950 flex items-center justify-center px-4 text-white">
            <div className="text-center max-w-lg mx-auto space-y-6">
                
                <div className="relative">
                    <h1 className="text-8xl sm:text-9xl font-black tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 animate-pulse">
                        404
                    </h1>
                    
                </div>

                <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
                    Oops! The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
                </p>

                <div className="pt-2">
                    <Link 
                        href="/" 
                        className="inline-block px-7 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-medium shadow-lg shadow-indigo-500/25 transition-all duration-200 transform hover:-translate-y-0.5"
                    >
                        Back to Home
                    </Link>
                </div>

            </div>
        </div>
    );
};

export default NotFound;