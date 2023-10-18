import React, { useState } from 'react';

function HomeModule({ number, heading, description, link }) {

    return (
        <div className="w-1/3 h-2/3 m-24 bg-hero-gradient-start rounded-xl">
            <div className='bg-lime-900 rounded-full w-32 h-32 flex items-center justify-center font-bold text-white text-7xl m-auto -translate-y-14 absolute translate-x-40'>
                {number}
            </div>
            <div className='flex flex-col justify-center items-center text-white gap-40 h-full'>
                <div className='text-5xl font-bold'>{heading}</div>
                <div className='flex justify-center items-center'>
                    <p>{description}</p>
                </div>
                <button className='bg-hero-gradient-end hover:bg-hero-gradient-start text-white font-bold py-2 px-4 rounded text-3xl'>
                    <a href={ link }>Explore</a>
                </button>
            </div>

        </div>
    );
}

export default HomeModule;
