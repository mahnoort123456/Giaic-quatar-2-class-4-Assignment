import React from 'react';

export default function Footer(){
    return(
        <footer className='bg-orange-500 text-black-600 body-font text-center'>
            <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
                <a>
            <span className="font-bold italic ml-3 text-4xl flex items-center">Mahnoor Tahir</span>
            </a>
                <p className="mt-4 italic justify-center text-sm text-black-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:py-2 sm:mt-0 mt-4">
                    @2024 GIAIC Quatar 2 -
                    <a
        href="https://www.linkedin.com/in/mahnoortahir29/"
        className="text-gray-600 ml-1"
        rel="noopener noreferrer"
        target="_blank"
      >
        @mahnoortahir29
      </a>
                </p>
            </div>
        </footer>
    )};
