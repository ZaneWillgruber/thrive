import React from 'react';

function StyledParagraph({ text }) {
    return (

            <div className='flex justify-center items-center w-full m-auto mt-20'>
                <p className="text-lg w-3/6">
                    <span className="text-4xl font-bold">{text.charAt(0)}</span>
                    {text.slice(1)}
                </p>
            </div>

    );
}

export default StyledParagraph;
