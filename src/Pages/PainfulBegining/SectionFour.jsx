import React from 'react'

const SectionFour = () => {
    return (
        <div>
            <div className="sm:h-[600px] h-[700px]  bg-black px-4 sm:px-10 mt-8  flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-10">


                <div className="flex justify-center">
                    <img
                        src="/Core/Team2.png"
                        alt="Team2"
                        className="h-[220px] sm:h-[280px] lg:h-[400px]"
                    />
                </div>

                <div className=" lg:text-left mt-6 lg:mt-0">
                    <h1 className="text-center text-[#CE9D4B] uppercase font-bold text-xl sm:text-2xl lg:text-[40px] mb-4 lg:mb-5">
                        From BadBusiness to BADVERSE
                    </h1>

                    <div className="text-white mb-15 max-w-full sm:max-w-lg lg:w-xl space-y-4 sm:space-y-6 lg:space-y-8 text-sm sm:text-base leading-relaxed px-2 lg:px-0">
                        <p>
                            <strong>2024</strong> changed everything.
                        </p>

                        <p>
                            I launched <strong>BadBusiness</strong>, a consulting firm – which became a huge success.
                            It transformed into <strong>BADVERSE.IN</strong> – a <strong>global community of creators,
                                leaders, and strategists.</strong>
                        </p>

                        <p>
                            With <strong>30,000+ followers,</strong> it became my <strong>legacy.</strong>
                        </p>

                        <p>
                            By <strong>2025</strong>, I officially registered:<br />
                            <strong>➡ Mittal Alliance Industries Pvt. Ltd. (India)</strong><br />
                            <strong>➡ Mittal Brandtech Inc. (Colorado, USA)</strong><br />
                            A branding powerhouse serving 2,000+ industrialists and solopreneurs.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SectionFour
