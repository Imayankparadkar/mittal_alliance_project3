import React from "react";

const ResultConsistent = () => {
    // ✅ Array updated with 'link' property for redirection
    const acquiredBusinesses = [
        {
            id: 1,
            image: "/ConsistentMatrix/l1.png",
            link: "https://mittalalliance.com/",
        },
        {
            id: 2,
            image: "/ConsistentMatrix/l2.png",
            link: "https://mittalbrandtech.com/",
        },
        { id: 3, image: "/ConsistentMatrix/l3.png", link: "https://badverse.in/" },
        {
            id: 4,
            image: "/ConsistentMatrix/l4.png",
            link: "https://www.meesho.com/Anjuscreation?ms=2", // Corrected the duplicated URL
        },
    ];

    return (
        <div
            className="flex flex-col items-center px-4 sm:px-20 py-12 w-full min-h-screen bg-cover bg-center relative font-sans"
            style={{
                backgroundImage: "url('/ConsistentMatrix/bg.png')",
                backgroundColor: '#1a202c'
            }}
        >
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/75"></div>

            {/* Main content container */}
            <div className="relative z-10 flex flex-col items-center text-center w-full max-w-6xl">
                <h1
                    className="text-transparent bg-clip-text bg-gradient-to-r 
                                 from-[#D0A151] via-[#DCB56C] via-[#E6C584] 
                                 via-[#DDB56D] to-[#CE9D4B] 
                                 text-3xl sm:text-5xl font-bold mt-8 sm:mt-15 uppercase tracking-wider"
                >
                    Result of My Consistency & Pain
                </h1>

                {/* Decorative Border Image */}
                <img
                    src="/ConsistentMatrix/border.png"
                    className="w-full max-w-sm sm:max-w-2xl lg:max-w-4xl mt-4"
                    alt="Decorative Border"
                    onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/960x20/D0A151/1a202c?text=+'; }}
                />

                <div className="mt-6">
                    <span className="text-white text-lg sm:text-2xl">
                        Businesses & Industries Acquired by Mittal Alliance
                    </span>
                </div>

                {/* Logos Container */}
                <div className="w-full flex justify-center items-center gap-6 sm:gap-8 flex-wrap mt-10 sm:mt-20">
                    {acquiredBusinesses.map((business) => (
                        // ✅ Wrapped the div with an anchor tag for redirection
                        <a
                            key={business.id}
                            href={business.link}
                            target="_blank" // Opens the link in a new tab
                            rel="noopener noreferrer" // Recommended for security
                        >
                            <div
                                className="relative w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] transition-transform duration-300 ease-in-out hover:scale-110 hover:-translate-y-2 cursor-pointer group"
                            >
                                {/* Polygon Background */}
                                <img
                                    src="/ConsistentMatrix/Polygon.png"
                                    className="w-full h-full"
                                    alt="Polygon Background"
                                    onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/200x200/1a202c/D0A151?text=+'; }}
                                />

                                {/* Business Logo */}
                                <div className="absolute inset-0 flex justify-center items-center p-8">
                                    <img
                                        src={business.image}
                                        className="h-auto max-h-[100px] w-auto max-w-[100px] object-contain rounded-2xl"
                                        alt={`Business ${business.id}`}
                                        onError={(e) => { e.target.onerror = null; e.target.src=`https://placehold.co/100x100/2d3748/ffffff?text=Logo+${business.id}`; }}
                                    />
                                </div>
                            </div>
                        </a>
                    ))}
                </div>

                <div className="sm:mt-20 mt-10 mb-20 ">
                    <span className="text-white font-semibold text-base sm:text-3xl ">
                        A Multinational “MITTAL” Brand Expanding by 2030
                    </span>
                </div>
            </div>

            {/* Divider Image */}
            <img
                src="/ConsistentMatrix/Divider.png"
                className="absolute z-10 bottom-0 left-1/2 -translate-x-1/2 -mb-1"
                alt="Divider"
                onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/600x10/D0A151/1a202c?text=+'; }}
            />
        </div>
    );
};

export default ResultConsistent;