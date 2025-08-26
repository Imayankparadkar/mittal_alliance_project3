import React, { useState, useEffect } from 'react';

// --- NEW POPUP COMPONENT (WITH NAVIGATION) ---
// This component contains the JSX and styling for the popup modal.
const Popup = ({ onClose }) => {
    // A simple checkmark SVG component
    const CheckIcon = () => (
        <svg
            className="w-5 h-5 text-gray-700 mr-2 flex-shrink-0"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
    );

    // --- NAVIGATION FUNCTION (CORRECTED) ---
    // This function will handle redirecting the user.
    // NOTE: If you are using a routing library like React Router,
    // it's still best to use its navigation method (e.g., useNavigate).
    const handleRedirect = () => {
        // This will navigate to a URL like: yoursite.com/contact
        window.location.href = '/contact';
    };


    return (
        // Overlay: covers the whole screen with a backdrop blur effect
        <div
            className="fixed inset-0 backdrop-blur-sm bg-black/20 flex justify-center items-center z-50 p-4"
            onClick={onClose} // Close popup when clicking the overlay
        >
            {/* Modal Box: Stop propagation to prevent closing when clicking inside the box */}
            <div
                className="bg-white rounded-xl p-8 sm:p-10 text-center relative max-w-lg w-full transform transition-all"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-3 right-3 bg-gray-100 hover:bg-gray-200 text-gray-500 rounded-full w-8 h-8 flex items-center justify-center transition-colors"
                    aria-label="Close popup"
                >
                    ✕
                </button>

                {/* Main Heading */}
                <h2 className="text-black font-extrabold text-3xl sm:text-4xl uppercase tracking-wide">
                    Book a Free Session
                </h2>

                {/* Subheading */}
                <p className="text-slate-800 font-semibold text-lg sm:text-xl uppercase mt-1 tracking-wider">
                    With Our Branding Expert
                </p>

                {/* Description */}
                <p className="text-gray-600 mt-4 text-sm sm:text-base">
                    Transform your personal brand with our expert guidance. Get personalized strategies to build influence and credibility in the digital world.
                </p>

                {/* Features List */}
                <div className="mt-6 space-y-2 sm:space-y-0 sm:flex sm:justify-around sm:items-center text-gray-800 font-medium">
                    <div className="flex items-center justify-center">
                        <CheckIcon />
                        <span>30-minute consultation</span>
                    </div>
                    <div className="flex items-center justify-center">
                        <CheckIcon />
                        <span>Brand audit</span>
                    </div>
                    <div className="flex items-center justify-center">
                        <CheckIcon />
                        <span>Strategy roadmap</span>
                    </div>
                </div>

                {/* Call to Action Button with onClick for redirection */}
                <button
                    onClick={handleRedirect}
                    className="mt-8 bg-[#D6A95D] text-white font-bold py-3 px-10 rounded-lg uppercase tracking-wider hover:bg-[#c99a4e] transition-colors text-sm sm:text-base"
                >
                    Book a Free Call
                </button>
            </div>
        </div>
    );
};


// --- YOUR ORIGINAL LANDING COMPONENT (WITH POPUP LOGIC ADDED) ---
const Landing = () => {
    // --- State to manage popup visibility ---
    const [isPopupVisible, setIsPopupVisible] = useState(false);

    // --- Effect to show the popup when the component mounts ---
    useEffect(() => {
        // A short delay can improve user experience
        const timer = setTimeout(() => {
            setIsPopupVisible(true);
        }, 1500); // Popup appears after 1.5 seconds

        // Cleanup function to clear the timer if the component unmounts
        return () => clearTimeout(timer);
    }, []); // Empty dependency array ensures this runs only once on mount


    const logos = [
        { img: '/Landing/Logo/l1.png' }, { img: '/Landing/Logo/l2.png' },
        { img: '/Landing/Logo/l3.png' }, { img: '/Landing/Logo/l4.png' },
        { img: '/Landing/Logo/l5.png' }, { img: '/Landing/Logo/l6.png' },
        { img: '/Landing/Logo/l7.png' }, { img: '/Landing/Logo/l8.png' },
        { img: '/Landing/Logo/l9.png' }, { img: '/Landing/Logo/l10.png' },
        { img: '/Landing/Logo/l11.png' }, { img: '/Landing/Logo/l12.png' },
        { img: '/Landing/Logo/l13.png' }, { img: '/Landing/Logo/l14.png' },
        { img: '/Landing/Logo/l15.png' },
    ];

    const logotwo = [
        { img: '/Landing/Logo2/l1.png' }, { img: '/Landing/Logo2/l2.png' },
        { img: '/Landing/Logo2/l3.png' }, { img: '/Landing/Logo2/l4.png' },
        { img: '/Landing/Logo2/l5.png' }, { img: '/Landing/Logo2/l6.png' },
        { img: '/Landing/Logo2/l7.png' },
    ];

    const getTrustedBySize = (index) => {
        const i = index % 7;
        if (i === 1 || i === 2 || i === 3) return "w-20 sm:w-32";
        if (i === 6) return "w-16 sm:w-20";
        return "w-10 sm:w-12";
    }

    return (
        <div className='w-full h-full space-y-10 py-28'>

            {/* --- Conditionally render the popup based on state --- */}
            {isPopupVisible && <Popup onClose={() => setIsPopupVisible(false)} />}

            {/* --- HEADER AND TEXT SECTIONS (Unchanged) --- */}
            <div className='flex flex-col h-full w-full justify-center items-center'>
                <h1 className='uppercase flex sm:flex-row flex-col sm:space-x-5 justify-center items-center text-center text-[55px] sm:text-[50px] text-[#CE9D4B]'>
                    <span className='font-bold'>Mittal</span>
                    <span className='text-white sm:text-[50px] text-[30px] sm:text-start text-center '>CREATE</span>
                </h1>
                <span className="uppercase text-[20px] text-center sm:text-start sm:text-[40px] font-bold bg-gradient-to-r from-[#D0A151] via-[#E6C584] via-[#CE9D4B] to-[#E2BE7A] bg-clip-text text-transparent mt-5 sm:mt-0">
                    VISIONARY CEO's <span className='text-white'>&</span> INDUSTRY-LEADING ENTERPRISES
                </span>
            </div>
            <div className='flex gap-3 flex-col text-[17px] text-center sm:text-[30px] w-full justify-center items-center text-white'>
                <span>I BUILD ICONIC PERSONAL BRANDS & REDEFINE CORPORATE IDENTITIES</span>
                <span className='sm:text-[30px] text-[15px]'>Blending Soul & Strategy to Shape Legacy, Influence, and Impact</span>
            </div>

            {/* --- "MY WORK" LOGO SECTION (Unchanged) --- */}
            <div className='w-full space-y-4'>
                <div className='w-full flex justify-center uppercase'>
                    <span className='text-[#CE9D4B] text-[16px] sm:text-xl'>My Work has reached audiences at</span>
                </div>
                <div className="overflow-x-hidden">
                    <div className="py-2 animate-marquee whitespace-nowrap">
                        {logos.slice(0, 11).map((logo, index) => (
                            <img key={`orig-1-${index}`} src={logo.img} alt="" className="inline-block w-12 sm:w-20 h-auto object-contain mx-4" />
                        ))}
                        {logos.slice(0, 11).map((logo, index) => (
                            <img key={`dup-1-${index}`} src={logo.img} alt="" className="inline-block w-12 sm:w-20 h-auto object-contain mx-4" />
                        ))}
                        {logos.slice(0, 11).map((logo, index) => (
                            <img key={`dup-1-2-${index}`} src={logo.img} alt="" className="inline-block w-12 sm:w-20 h-auto object-contain mx-4" />
                        ))}
                         {logos.slice(0, 11).map((logo, index) => (
                            <img key={`dup-1-3-${index}`} src={logo.img} alt="" className="inline-block w-12 sm:w-20 h-auto object-contain mx-4" />
                        ))}
                         {logos.slice(0, 11).map((logo, index) => (
                            <img key={`dup-1-4-${index}`} src={logo.img} alt="" className="inline-block w-12 sm:w-20 h-auto object-contain mx-4" />
                        ))}
                    </div>
                </div>
                <div className="overflow-x-hidden">
                    <div className="py-2 animate-marquee whitespace-nowrap">
                        {logos.slice(11).map((logo, index) => (
                            <img key={`orig-2-${index}`} src={logo.img} alt=""
                                className={`inline-block h-auto object-contain mx-4 ${index % 4 === 0 ? 'w-10 sm:w-24' : 'w-20'}`}
                            />
                        ))}
                        {logos.slice(11).map((logo, index) => (
                            <img key={`dup-2-${index}`} src={logo.img} alt=""
                                className={`inline-block h-auto object-contain mx-4 ${index % 4 === 0 ? 'w-10 sm:w-24' : 'w-20'}`}
                            />
                        ))}
                        {logos.slice(11).map((logo, index) => (
                            <img key={`dup-2-2-${index}`} src={logo.img} alt=""
                                className={`inline-block h-auto object-contain mx-4 ${index % 4 === 0 ? 'w-10 sm:w-24' : 'w-20'}`}
                            />
                        ))}
                         {logos.slice(11).map((logo, index) => (
                            <img key={`dup-2-3-${index}`} src={logo.img} alt=""
                                className={`inline-block h-auto object-contain mx-4 ${index % 4 === 0 ? 'w-10 sm:w-24' : 'w-20'}`}
                            />
                        ))}
                         {logos.slice(11).map((logo, index) => (
                            <img key={`dup-2-4-${index}`} src={logo.img} alt=""
                                className={`inline-block h-auto object-contain mx-4 ${index % 4 === 0 ? 'w-10 sm:w-24' : 'w-20'}`}
                            />
                        ))}
                        {logos.slice(11).map((logo, index) => (
                            <img key={`dup-2-4-${index}`} src={logo.img} alt=""
                                className={`inline-block h-auto object-contain mx-4 ${index % 4 === 0 ? 'w-10 sm:w-24' : 'w-20'}`}
                            />
                        ))}
                    </div>
                </div>
            </div>


            {/* --- "TRUSTED BY" SECTION (Unchanged) --- */}
            <div className='w-full space-y-4'>
                <div className='w-full flex justify-center uppercase'>
                    <span className='text-[#CE9D4B] text-lg sm:text-xl'>TRUSTED BY</span>
                </div>
                <div className="text-center text-sm sm:text-0.5xl text-white px-4">
                    <span>Industry Icons | Conscious Companies | Soulful Celebrities | Internet Influencers | Passionate Professionals | Solopreneurs | Industrialists | Legacy-Driven Leaders</span>
                </div>
            </div>
        </div>
    );
};

export default Landing;
