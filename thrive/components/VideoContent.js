import React, { useState } from 'react';
import Video from './Video';

function HomeModule() {

    return (
        <div className='w-full h-screen flex justify-center items-center gap-16'>
            <div >
                Items
            </div>
            <div className='w-4/5'>
                <Video />
            </div>
        </div>
    );
}

export default HomeModule;
