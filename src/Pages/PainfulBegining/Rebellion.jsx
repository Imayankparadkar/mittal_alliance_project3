import React from "react";

const Rebellion = () => {
    return (
        <div className="bg-black text-white py-12 relative">

            <div className="flex flex-col lg:flex-row justify-center items-center gap-6 lg:gap-15">


                <div className="flex-shrink-0 order-0 lg:order-none">
                    <img
                        src="/Core/founder.png"
                        alt="Founder Image"
                        className="w-[200px] sm:w-[300px] mt-4 lg:mt-6"
                    />
                </div>


                <div className="text-center lg:text-left mt-6 lg:mt-0">
                    <div className="mb-6 lg:mb-10">
                        <h1
                            className="text-transparent bg-clip-text bg-gradient-to-r 
                                from-[#D0A151] via-[#E6C584] to-[#CE9D4B] 
                                text-2xl sm:text-3xl lg:text-5xl font-bold uppercase"
                        >
                            The Rebellion Years
                        </h1>
                    </div>

                    <div className="max-w-full sm:max-w-2xl lg:max-w-2xl space-y-10 text-justify text-sm sm:text-[17px] leading-relaxed px-4 lg:px-0">
                        <p>
                            Like many Indian kids, I was pushed into the IIT race. I enrolled in
                            a <strong>dummy school</strong> and <strong>FIITJEE coaching,</strong> but deep down, I knew I was meant
                            for something else.
                        </p>
                        <p>
                            I started with <strong>YouTube,</strong> then <strong>e-commerce,</strong> selling my <strong>mother’s handmade
                                crafts.</strong> I <strong>failed. Learned. Grew.</strong>
                        </p>
                        <p>
                            When <strong>COVID-19</strong> struck, it hit us hard. My <strong>mother, grandfather,</strong> and I —
                            all ill at once. I cooked. Cleaned. Studied. Survived. Finished <strong>12th
                                grade with 74%,</strong> but I knew my real exam was <strong>life itself.</strong>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Rebellion;
