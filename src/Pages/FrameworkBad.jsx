import React from "react";

const FrameworkBad = () => {
    const acquiredBusinesses = [
        { id: 1, image: "/FrameWork/B.png" },
        { id: 2, image: "/FrameWork/A.png" },
        { id: 3, image: "/FrameWork/D.png" },
    ];


    const frameworkSteps = [
        {
            id: 1,
            letter: "B",
            img: "FrameWork/Icon1.png",
            word: "Breakdown",
            description:
                "Through plans, you break down a process into small and identify the things you accomplish.",
        },
        {
            id: 2,
            img: "FrameWork/Icon2.png",
            letter: "A",
            word: "Analysis",
            description:
                "Through Breakdown, Analyze your each problem your business is facing and find possible solution",
        },
        {
            id: 3,
            img: "FrameWork/Icon3.png",
            letter: "D",
            word: "Decision",
            description:
                "Through Analysis, Launch your Initiative",
        },
    ];

    return (
        <>
            <div>
                <img
                    src="/Core/Divider.png"
                    className=""
                    alt="Border"
                />
            </div>

            <div className="flex px-6 sm:px-20 w-full justify-center sm:h-170 h-full bg-cover bg-center relative mb-20">
                <div className="relative z-10">
                    {/* Title */}
                    <h1
                        className="text-center text-transparent bg-clip-text bg-gradient-to-r 
                    from-[#D0A151] via-[#DCB56C] via-[#E6C584] 
                    via-[#DDB56D] to-[#CE9D4B] 
                    text-2xl sm:text-[48px] font-bold w-full mt-15 uppercase"
                    >
                        I use “bad” framework to solve problems
                    </h1>
                    <div>
                        <img
                            src="/ConsistentMatrix/border.png"
                            className="sm:w-[1230px] w-full mt-2"
                            alt="Border"
                        />
                    </div>

                    {/* Polygon Images */}
                    <div className="relative w-full border border-[#C0944B] p-4 flex flex-col justify-center items-center mt-10 sm:mt-10">
                        <div className="flex flex-wrap justify-center gap-8">
                            {acquiredBusinesses.map((business) => (
                                <div
                                    key={business.id}
                                    className="relative w-[150px] h-[150px]"
                                >
                                    <img
                                        src="/FrameWork/polygon.png"
                                        className="w-full h-full"
                                        alt="Polygon"
                                    />
                                    <div className="absolute inset-0 flex justify-center items-center">
                                        <img
                                            src={business.image}
                                            className="h-[60px] rounded-2xl"
                                            alt={`Business ${business.id}`}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>


                        <div className="grid sm:grid-cols-3 grid-cols-1 gap-6 mt-10">
                            {frameworkSteps.map((step) => (
                                <div
                                    key={step.id}
                                    className="bg-[#1a1a1a] border border-[#313131] p-5 max-w-[250px] text-center"
                                >
                                    <div className="w-full mb-5 flex justify-center">
                                        <img src={step.img}
                                            alt={step.letter}
                                            className="w-12"
                                        />
                                    </div>
                                    <div className="bg-[#313131] w-[120px] mx-auto text-center p-2 rounded-full mb-3">
                                        <span className="text-[#CE9D4B] font-semibold text-sm">
                                            "{step.letter}" Stands for
                                        </span>
                                    </div>
                                    <div className="text-white font-bold text-lg mb-2">
                                        {step.word}
                                    </div>
                                    <div className="text-white/60 text-[14px] leading-relaxed">
                                        {step.description}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Bottom Text */}
                    {/* <div className=" mt-10 w-full flex justify-center ">
                        <button className="text-white bg-[#CE9D4B] px-4 py-3 cursor-pointer rounded-full ">
                            Learn More About Our Framework
                        </button>
                    </div> */}
                </div>
            </div>
        </>
    );
};

export default FrameworkBad;
