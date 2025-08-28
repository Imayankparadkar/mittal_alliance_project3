import React, { useState } from "react";

const GreatTogether = () => {
    const meaningCards = [
        {
            image: "/Together/M.png",
            title: "Meaning",
            quote: "“Efforts and courage are not enough without purpose and direction.”",
            author: "- John F. Kennedy",
            description:
                "Discover the soul of the brand - its deeper purpose, vision, and mission. Meaning drives impact.",
        },
        {
            image: "/Together/I.png",
            title: "Integrity",
            quote: "“Integrity is doing the right thing, even when no one is watching.”",
            author: "- C.S. Lewis",
            description:
                "Audit the alignment between your message and your actions — across online, offline, and internal culture.",
        },
        {
            image: "/Together/T.png",
            title: "Trust",
            quote: "“Trust is built with consistency.”",
            author: "- Lincoln Chafee",
            description:
                "Build and measure reputation, reviews, and credibility — how others speak about you matters more than what you say.",
        },
        {
            image: "/Together/T.png",
            title: "Transparency",
            quote: "“Honesty and transparency make you vulnerable. Be honest and transparent anyway.”",
            author: "- Mother Teresa",
            description:
                "Showcase authentic communication, open processes, and ethical storytelling. Vulnerability builds connection.",
        },
        {
            image: "/Together/A.png",
            title: "Authority",
            quote: "“Become the expert, the authority, the leader — and profits will follow.”",
            author: "- Dan Kennedy",
            description:
                "Develop your thought leadership, recognition, and influence in the market or community you serve.",
        },
        {
            image: "/Together/L.png",
            title: "Legacy",
            quote: "“Carve your name on hearts, not tombstones.”",
            author: "- Shannon L. Alder",
            description:
                "Architect a future-ready brand that leaves a meaningful mark, scales sustainably, and transcends trends.",
        },
    ];

    // CHANGED: Initial state is now 0 to show the first card by default.
    const [activeCardIndex, setActiveCardIndex] = useState(0);

    const handleScheduleMeeting = () => {
        window.open("https://calendar.app.google/HRCNH5eECSNPr8tC7", "_blank");
    };

    const handleLetterClick = (index) => {
        if (activeCardIndex === index) {
            setActiveCardIndex(null);
        } else {
            setActiveCardIndex(index);
        }
    };

    return (
        <div className="bg-black min-h-screen relative py-10">
            {/* Divider */}
            <div className="absolute -top-[0px] scale-125 sm:-top-[6px] left-0 right-0">
                <img src="/Core/BDivider.png" className="" alt="Divider" />
            </div>

            <div className="flex px-5 sm:px-20 w-full bg-cover bg-center relative">
                <div className="absolute inset-0"></div>

                <div className="relative z-10 w-full">
                    <div className="text-center mb-10">
                        {/* Heading */}
                        <h1
                            className="text-transparent bg-clip-text bg-gradient-to-r
                            from-[#D0A151] via-[#DCB56C] via-[#E6C584]
                            via-[#DDB56D] to-[#CE9D4B]
                            text-2xl sm:text-[50px] font-bold uppercase mt-16 leading-snug"
                        >
                            Let’s build something great together
                        </h1>

                        <p className="text-[#E0E0E0] mt-4 text-sm sm:text-base">
                            Ready to transform your business? Get in touch with our team of experts.
                        </p>

                        <div className="mt-8 flex flex-col ">
                            <img src="/Together/logo.png" className="w-[150px]" alt="Brand Logo" />
                            <span className="text-[#E0E0E0] w-full text-start text-sm sm:text-base mt-2">
                                Creating World-Class Brands
                            </span>
                            <img src="/Core/border.png" className="w-[300px] mt-2" alt="Decorative Border" />
                        </div>

                        {/* --- START: DESKTOP VIEW --- */}
                        <div className="flex-col justify-center hidden sm:flex items-center mt-10">
                            {/* --- HIGHLIGHTING SECTION --- */}
                            <div className="flex justify-center items-center gap-6 my-10 pb-6">
                                {meaningCards.map((card, index) => (
                                    <div
                                        key={index}
                                        className="relative group cursor-pointer"
                                        onClick={() => handleLetterClick(index)}
                                    >
                                        <img
                                            src={card.image}
                                            className={`
                                                w-[90px]
                                                transition-all duration-300 ease-in-out
                                                ${
                                                    activeCardIndex === index
                                                        ? 'scale-110 shadow-[0_0_20px_5px_rgba(227,185,107,0.5)]'
                                                        : 'group-hover:scale-105'
                                                }
                                            `}
                                            alt={card.title}
                                        />
                                        {/* Underline Marker for active item */}
                                        {activeCardIndex === index && (
                                            <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 w-12 h-1 bg-[#E3B96B] rounded-full"></div>
                                        )}
                                    </div>
                                ))}
                            </div>


                            {/* Conditional Display of Meaning Details */}
                            {activeCardIndex !== null && (
                                <div className="mt-12 mb-10 w-full max-w-2xl animate-fadeIn">
                                    <div className="flex items-center justify-center gap-6 w-full">
                                        <hr className="border-t border-[#D0A151] flex-1" />
                                        <span className="text-[#D0A151] text-[32px] sm:text-[40px] font-semibold uppercase whitespace-nowrap">
                                            {meaningCards[activeCardIndex].title}
                                        </span>
                                        <hr className="border-t border-[#D0A151] flex-1" />
                                    </div>
                                    <div className="mt-8">
                                        <span className="text-[#FFFFFF]/70 space-y-4 flex flex-col text-start text-lg sm:text-xl">
                                            <span>{meaningCards[activeCardIndex].quote}</span>
                                            <span>{meaningCards[activeCardIndex].author}</span>
                                        </span>
                                    </div>
                                    <div className="mt-5 font-semibold text-start">
                                        <span className="text-[#CE9D4B] text-base sm:text-lg">
                                            {meaningCards[activeCardIndex].description}
                                        </span>
                                    </div>
                                    <hr className="border-t border-[#D0A151] flex-1 mt-12 w-full max-w-2xl" />
                                </div>
                            )}

                            {/* "Behind the Badass Brands" section */}
                            <div className="flex flex-col items-center mt-16 mb-15">
                                <img src="/Together/pc.png" className="w-full max-w-lg" alt="Behind the Badass Brands" />
                                <h1
                                    className="text-4xl font-bold uppercase mt-10 text-center"
                                    style={{ color: '#E3B96B' }}
                                >
                                    BEHIND THE BADASS BRANDS
                                </h1>
                                <p className="text-white/80 mt-6 text-center max-w-md text-xl">
                                    INNOVATIVE INSIGHTS FROM 100+ ICONIC INTERNET INFLUENCERS
                                </p>
                                <button
                                    onClick={handleScheduleMeeting}
                                    className="bg-[#E3B96B] hover:bg-yellow-500 transition-colors mt-10 w-fit px-12 py-4 text-black font-semibold rounded-full cursor-pointer text-lg">
                                    SCHEDULE A MEETING
                                </button>
                            </div>
                        </div>
                        {/* --- END: DESKTOP VIEW --- */}


                        {/* --- START: MOBILE VIEW (Unchanged) --- */}
                        <div className="sm:hidden ">
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
                                {meaningCards.map((card, index) => (
                                    <div key={index} className="flex flex-row gap-2">
                                        <img src={card.image} className="h-[70px]" alt={card.title} />
                                        <div className="flex flex-col text-start text-[10px]">
                                            <span className="text-[#CE9D4B] text-[20px] uppercase">
                                                {card.title}
                                            </span>
                                            <span className="text-white">{card.quote}</span>
                                            <span className="text-white">{card.author}</span>
                                            <span className="text-[#CE9D4B]">{card.description}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="flex justify-center mt-10">
                                <div>
                                    <img src="/Together/border.png" className="h-1" alt="Border" />
                                </div>
                            </div>
                            <div className="mt-2 flex w-full items-center justify-center flex-col">
                                <img src="/Together/pc.png" alt="Together" />
                                <span className="bg-gradient-to-b from-[#CC9A48] via-[#FFFFFF] to-[#C99748] bg-clip-text text-[20px] font-semibold text-transparent text-center">
                                    BEHIND THE BADASS BRANDS
                                </span>
                                <span className="text-white mt-2 text-center">
                                    INNOVATIVE INSIGHTS FROM 100+ ICONIC INTERNET INFLUENCERS
                                </span>
                                <button
                                    onClick={handleScheduleMeeting}
                                    className="bg-[#D0A151] mt-10 py-2 w-[250px] rounded-full px-4 ">
                                    SCHEDULE A MEETING
                                </button>
                            </div>
                        </div>
                        {/* --- END: MOBILE VIEW --- */}
                    </div>
                </div>
            </div>
            <img
                src="/ConsistentMatrix/Divider.png"
                className="absolute z-10 bottom-0  left-1/2 -translate-x-1/2 -mb-1 "
                alt="Divider"
                onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/600x10/D0A151/1a202c?text=+'; }}
            />
        </div>
    );
};

export default GreatTogether;