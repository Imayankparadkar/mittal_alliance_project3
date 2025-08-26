import React from "react";
import { useInView } from "react-intersection-observer";

const Card = ({
    polygon,
    image,
    title,
    description,
    topImage = "top-8",
    layoutType = "default",
    animationDelay = 0,
}) => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const cardClasses = `
        relative w-[300px] overflow-hidden
        transform transition-all duration-500 ease-in-out
        hover:scale-105 hover:-translate-y-2
        ${
            inView
                ? "opacity-100 translate-y-0 scale-100"
                : "opacity-0 translate-y-8 scale-95"
        }
    `;

    return (
        <div
            ref={ref}
            className={cardClasses.trim()}
            style={{ transitionDelay: `${animationDelay}ms` }}
        >
            <img src={polygon} alt="Success Story" className="w-[250px] relative" />
            
            {layoutType === "default" && (
                <>
                    <div className="absolute w-[300px] h-15 top-2 z-10 bg-gradient-to-b from-black/90 to-transparent rounded-md hidden sm:block"></div>
                    <div className={`absolute w-[220px] ${topImage} h-[280px]`}>
                        <img
                            src={image}
                            alt="Success Matrix"
                            className="object-left object-cover h-[180px] ml-4 mt-2"
                        />
                    </div>
                    <div className="absolute w-[250px] h-full items-center flex top-10 justify-center">
                        <span className="text-[#D0A151] text-[12px] w-full flex justify-center items-center flex-col">
                            <span>{title[0]}</span>
                            <span>{title[1]}</span>
                        </span>
                    </div>
                    <div className="absolute w-[250px] h-full items-center flex top-17 mt-7 justify-center">
                        <span className="text-white font-extralight text-[8px] w-49 text-justify items-center">
                            <span>{description}</span>
                        </span>
                    </div>
                </>
            )}

            {layoutType === "alt" && (
                <>
                    <div className="absolute w-[250px] h-full items-center flex -top-25 justify-center">
                        <span className="text-[#D0A151] text-[12px] flex flex-col items-center">
                            <span>{title[0]}</span>
                            <span>{title[1]}</span>
                        </span>
                    </div>
                    <div className="absolute w-[250px] h-full items-center flex -top-10 justify-center">
                        <span className="text-white font-extralight text-[8px] w-49 text-justify items-center">
                            <span>{description}</span>
                        </span>
                    </div>
                    <div className="absolute w-[300px] h-15 top-105 z-10 bg-gradient-to-b from-black/90 hidden sm:block to-transparent rounded-md"></div>
                    <div className={`absolute top-43 w-[220px] ${topImage} h-[280px]`}>
                        <img
                            src={image}
                            alt="Success Matrix"
                            className="object-contain h-[180px] ml-4"
                        />
                    </div>
                </>
            )}
        </div>
    );
};

const SuccessMatrix = () => {
    const cardsOne = [
        {
            id: 1,
            polygon: "/SuccessMatrix/Polygon.png",
            image: "/SuccessMatrix/c1.png",
            title: ["32,000+ LinkedIn", "Connections"],
            description:
                "Strong network of CXOs, entrepreneurs, and professionals actively engaging with thought leadership and brand content.",
        },
        {
            id: 2,
            polygon: "/SuccessMatrix/Polygon.png",
            image: "/SuccessMatrix/c2.png",
            title: ["15,000,000+ People", "Reached"],
            description:
                "Over 1.5 Crore cumulative digital impressions across platforms  through branding, education, and marketing campaigns.",
        },
        {
            id: 3,
            polygon: "/SuccessMatrix/Polygon.png",
            image: "/SuccessMatrix/c3.png",
            title: ["12,000+ Newsletter", "Subscribers"],
            description:
                "Consistent audience consuming insights, updates, and strategies  via high-engagement email campaigns.",
        },
        {
            id: 4,
            polygon: "/SuccessMatrix/Polygon.png",
            image: "/SuccessMatrix/c4.png",
            title: ["50,000+ Students", "Impacted"],
            description:
                "Learners reached through workshops, mentorships, webinars,  and academic outreach programs.",
        },
    ];

    const cardsTwo = [
        {
            id: 1,
            polygon: "/SuccessMatrix/Polygon-8.png",
            image: "/SuccessMatrix/c6.png",
            title: ["3,600+ YouTube", "Subscribers"],
            description:
                "Educational video content creating continuous impact and  community growth.",
        },
        {
            id: 2,
            polygon: "/SuccessMatrix/Polygon-8.png",
            image: "/SuccessMatrix/c7.png",
            title: ["75+ Global Projects", "Delivered"],
            description:
                "Successful branding, digital, and consulting projects executed  across India, USA, UK, Spain, Dubai, and Australia.",
        },
        {
            id: 3,
            polygon: "/SuccessMatrix/Polygon-8.png",
            image: "/SuccessMatrix/c8.png",
            title: ["2 Incorporated", "Companies"],
            description:
                "Leading ventures in brandtech, digital transformation, and  consulting.",
        },
        {
            id: 4,
            polygon: "/SuccessMatrix/Polygon-8.png",
            image: "/SuccessMatrix/c9.png",
            title: ["1 Community", "Platform (Badverse)"],
            description:
                "Empowering solopreneurs, students, and creators with  mentorship and digital tools.",
        },
        {
            id: 5,
            polygon: "/SuccessMatrix/Polygon-8.png",
            image: "/SuccessMatrix/c10.png",
            title: ["1 Handicraft Firm", "(Anjucreations)"],
            description:
                "Promoting Indian craftsmanship globally through sustainable and  ethical commerce.",
        },
    ];

    return (
        <div className="bg-black">
            {/* --- DESKTOP VIEW --- */}
            {/* Hidden on small screens, visible on 'sm' screens and larger */}
            <div className="hidden sm:block sm:mt-[46px]">
                <div>
                    <img src="/Core/BDivider.png" alt="Divider" />
                </div>
                <div className="w-full justify-center px-20 uppercase mt-5 font-bold">
                    <h1 className="text-[#D0A151] text-[50px]">Success Matrix</h1>
                    <div>
                        <img src="/SuccessMatrix/border.png" className="w-[500px]" alt="Border" />
                    </div>
                    <div className="px-35 relative w-full justify-center grid grid-cols-4 gap-6 mt-6">
                        {cardsOne.map((card) => (
                            <Card
                                key={card.id}
                                {...card}
                                layoutType="default"
                                topImage="top-8"
                            />
                        ))}
                    </div>
                    <div className="relative mt-10 md:-top-15 ml-2 w-full justify-center grid grid-cols-5">
                        {cardsTwo.map((card) => (
                            <Card key={card.id} {...card} layoutType="alt" topImage="top-20" />
                        ))}
                    </div>
                </div>
            </div>

            {/* --- MOBILE VIEW --- */}
            {/* Visible by default, hidden on 'sm' screens and larger */}
            <div className="sm:hidden h-full w-full justify-center">
                <div>
                    <img src="/SuccessMatrix/page-divider.png" className="w-full h-[15px]" alt="Page Divider" />
                </div>
                <div className="w-full justify-center px-4 uppercase mt-5 font-bold">
                    <h1 className="text-[#D0A151] text-2xl mt-10">Success Matrix</h1>
                    <div>
                        <img src="/SuccessMatrix/border.png" className="w-full max-w-[500px]" alt="Border" />
                    </div>
                    <div className="relative w-full mx-auto flex flex-col justify-center ml-4 items-center mt-6 space-y-10">
                        {cardsOne.map((card) => (
                            <Card
                                key={card.id}
                                {...card}
                                layoutType="default"
                                topImage="top-5"
                            />
                        ))}
                    </div>
                    <div className="relative mt-10 flex flex-col justify-center ml-6 items-center space-y-10">
                        {cardsTwo.map((card) => (
                            <Card key={card.id} {...card} layoutType="alt" topImage="top-20" />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SuccessMatrix;
