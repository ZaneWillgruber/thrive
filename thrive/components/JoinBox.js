import React, { useState } from 'react';

const SubscriptionBox = () => {

    return (
        <div className='w-1/6 bg-white flex flex-col justify-center items-center space-y-8 rounded-xl transform hover:scale-105 transition-transform duration-300 ease-in-out drop-shadow-2xl'>
            <p className='text-2xl'>Thrive</p>
            <p className='text-5xl'>$30</p>
            <p className='text-xs'>Valid for 6 months</p>
            <button className='text-white bg-hero-gradient-end hover:bg-hero-gradient-start duration-300 ease-in-out focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'>PURCHASE</button>
            <div className='flex flex-col justify-center items-center text-xs space-y-2'>
                <p>30 Chapter Course</p>
                <p>Application System</p>
                <p>Adaptation System</p>
                <p className='pb-2'>Support Development</p>
            </div>
        </div>
    );
};

export default SubscriptionBox;
