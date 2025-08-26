import React from 'react';

const TedxSection = () => {
    return (
        <div className='w-full'>
            {/* Desktop Image */}
            <div className='hidden sm:block w-full'>
                <img
                    src='/Blogs/founder-2.png'
                    alt='Founder'
                    className='w-full h-auto object-contain'
                />
            </div>

            {/* Mobile Image */}
            <div className='block sm:hidden w-full'>
                <img
                    src='/Blogs/founder-3.png'
                    alt='Founder Mobile'
                    className='w-full h-auto object-contain'
                />
            </div>
        </div>
    );
};

export default TedxSection;
