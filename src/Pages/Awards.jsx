import React from "react";

const Awards = () => {
    const acquiredBusinesses = [
        { id: 1, image: "/Awards/c1.png" },
        { id: 2, image: "/Awards/c2.png" },
        { id: 3, image: "/Awards/c3.png" },
        { id: 4, image: "/Awards/c4.png" },
        { id: 5, image: "/Awards/c5.png" },
        { id: 6, image: "/Awards/c6.png" },
        { id: 7, image: "/Awards/c7.png" },
        { id: 8, image: "/Awards/c8.png" },
        { id: 9, image: "/Awards/c9.png" },
        { id: 10, image: "/Awards/c10.png" },
        { id: 11, image: "/Awards/c11.png" },
        { id: 12, image: "/Awards/c12.png" },
        { id: 13, image: "/Awards/c13.png" },
        { id: 14, image: "/Awards/c14.png" },
        { id: 15, image: "/Awards/c15.png" },
        { id: 16, image: "/Awards/c16.png" },
    ];

    return (
        <>

            <div>
                <img
                    src="/Core/Divider.png"
                    
                    alt="Divider"
                />
            </div>

            <div className="flex flex-col items-center px-6 sm:px-20 w-full justify-center bg-cover bg-center relative mb-30">
                <div className="relative z-10 text-center">

                    <h1
                        className="text-transparent bg-clip-text bg-gradient-to-r 
                        from-[#D0A151] via-[#DCB56C] via-[#E6C584] 
                        via-[#DDB56D] to-[#CE9D4B] 
                        text-3xl sm:text-[50px] font-bold mt-10 uppercase mb-7"
                    >
                        Media Honors AND AWARDS
                    </h1>

                    <div className="grid grid-cols-1 sm:grid-cols-4 gap-30 gap-x-35 mt-20 place-items-center">
                        {acquiredBusinesses.map((business) => (
                            <div
                                key={business.id}
                                className="flex items-center justify-center rounded-xl p-4 scale-220 transition-transform duration-300"
                            >
                                <img
                                    src={business.image}
                                    alt={`Business ${business.id}`}
                                    className="object-contain max-w-full max-h-28"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Awards;
