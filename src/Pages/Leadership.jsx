import React from "react";
// 1. Import the useNavigate hook from react-router-dom
import { useNavigate } from "react-router-dom";

const Leadership = () => {
    // 2. Initialize the navigate function
    const navigate = useNavigate();

    const acquiredBusinesses = [
        { id: 1, image: "/ConsistentMatrix/l1.png" },
        { id: 2, image: "/ConsistentMatrix/l2.png" },
        { id: 3, image: "/ConsistentMatrix/l3.png" },
        { id: 4, image: "/ConsistentMatrix/l4.png" },
    ];

    // Optional: Create a handler function for clean code
    const handleNavigateToHistory = () => {
        // 3. Call navigate with the path to your History page
        navigate("/history");
    };

    return (
        <div
            className="flex px-3 sm:px-20 w-full justify-center h-[550px] sm:h-screen bg-cover bg-bottom relative"
            style={{
                backgroundImage: "url('/Leadership/bg.png')",
            }}
        >
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/70"></div>

            <div className="relative z-10">

                <h1
                    className="text-transparent text-center bg-clip-text bg-gradient-to-r 
                                from-[#D0A151] via-[#DCB56C] via-[#E6C584] 
                                via-[#DDB56D] to-[#CE9D4B] 
                                text-3xl sm:text-[50px] font-bold  sm:w-full uppercase mt-20"
                >
                    From Legacy to Leadership
                </h1>


                <div className="sm:mt-30 mt-10 sm:text-center  sm:w-[1200px]">
                    <span className="text-white w-full sm:text-[23px]">
                        I was <strong>born in the ruins of a broken empire.</strong> But I chose to <strong>rebuild the Mittal name</strong> - not on <strong>inheritance</strong>, but <strong>insight</strong>. Not on privilege, but <strong>purpose.</strong>
                    </span>
                </div>

                <div className="mt-10 ">
                    <span className="text-white sm:text-center w-full sm:text-[23px]">
                        This is <strong>just the beginning.</strong>  And I’m here to help <strong>others write their own story of reinvention - no matter where  they start.</strong>
                    </span>
                </div>

                <div className="w-full justify-center flex mt-10 sm:mt-20">
                    {/* The updated animated button */}
                    <button
                        onClick={handleNavigateToHistory}
                        className="border-[#CE9D4B] border px-4 py-3 text-[#CE9D4B] rounded-full font-semibold cursor-pointer
                                   transition-all duration-300 ease-in-out
                                   hover:bg-[#CE9D4B] hover:text-white hover:scale-105 hover:shadow-lg hover:shadow-[#CE9D4B]/30
                                   active:scale-95"
                    >
                        View Entire Journey
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Leadership;