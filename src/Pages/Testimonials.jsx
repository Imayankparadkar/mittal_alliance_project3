import React, { useState, useEffect } from "react";

// Since we don't have access to react-router-dom in this environment,
// I'm creating a placeholder for the useNavigate hook.
// In your actual application, you would use `import { useNavigate } from "react-router-dom";`
const useNavigate = () => {
    return (path) => console.log(`Navigating to: ${path}`);
};


const Testimonials = () => {
    const testimonialsData = [
        {
            id: 1,
            name: "Clay Boykin",
            role: "Author | Thought Partner | Guide",
            avatar: "/Core/Avatar.png",
            quote:
                "Sarthak is a dynamic, down-to-earth, and proactive visionary whose sincerity and resilience shine through. I truly appreciated his insightful podcast questions and wish him great success ahead.",
        },
        {
            id: 2,
            name: "Priya Sharma",
            role: "Leadership Coach",
            avatar: "/Core/Avatar1.jpeg",
            quote:
                "During my internship at Mittal Alliance, working with Mr. Sarthak Mittal was truly inspiring. His dedication, work ethic, and genuine interest in learning and guiding others make him not just a capable professional, but also a thoughtful leader and inspiring mentor.",
        },
        {
            id: 3,
            name: "Arjun Mehta",
            role: "CEO | Visionary Leader",
            avatar: "/Core/Avatar2.jpeg",
            quote:
                "Sarthak and his team at Mittal are exceptional—professional, trustworthy, and always ready to help. They’ve been instrumental in taking my business to the next level, and I’m excited for our future collaboration.",
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const navigate = useNavigate();

    // useEffect hook to handle the auto-rotation
    useEffect(() => {
        // Set up an interval to change the testimonial every 5 seconds
        const intervalId = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonialsData.length);
        }, 5000); // 5000 milliseconds = 5 seconds

        // Clean up the interval when the component unmounts or when currentIndex changes
        // This prevents memory leaks and resets the timer on manual navigation
        return () => clearInterval(intervalId);
    }, [currentIndex, testimonialsData.length]); // Dependency array

    const handleRedirect = () => {
        // This path should match the route for your Testimonials_InnerPage component
        navigate('/testimonials');
    };

    return (
        <div className="flex flex-col items-center px-6 sm:px-12 lg:px-20 py-20 sm:py-24 min-h-screen w-full bg-gray-50">
            
            {/* ## Section Header */}
            <div className="text-center mb-24 md:mb-32">
                <h1 className="text-black text-3xl sm:text-4xl font-bold uppercase">
                    Success Stories
                </h1>
                 {/* Using a div for the border for better compatibility */}
                 <div className="sm:w-[350px] w-[350px] h-1 sm:h-2 mx-auto mt-2 mb-4 bg-[#D0A151]"></div>
                <p className="text-xl sm:text-2xl text-black/60">
                    Trusted by Leaders Across Industries
                </p>
            </div>

            {/* ## Testimonial Content Wrapper */}
            <div className="flex flex-col lg:flex-row items-center justify-center gap-y-24 gap-x-16 w-full max-w-6xl flex-grow">
                
                {/* Card with Avatar */}
                <div className="relative flex-shrink-0 w-[280px] h-[200px]">
                    <img
                        src={testimonialsData[currentIndex].avatar}
                        alt="Avatar"
                        className="w-[150px] h-[150px] rounded-full shadow-lg border-4 border-white absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2"
                        // Fallback in case local images don't load in a web environment
                        onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/150x150/CCCCCC/FFFFFF?text=Image+Not+Found'; }}
                    />
                    <div className="bg-[#D0A151] w-full h-full rounded-lg shadow-md flex flex-col justify-end items-center text-center pb-6">
                        <span className="text-black/80 font-bold text-lg">
                            {testimonialsData[currentIndex].name}
                        </span>
                        <span className="text-white text-xs font-medium px-2">
                            {testimonialsData[currentIndex].role}
                        </span>
                    </div>
                </div>

                {/* Quote Section */}
                <div className="relative max-w-lg text-center lg:text-left">
                    <img
                        src="/Core/q1.png"
                        className="h-8 sm:h-12 absolute -top-13 -left-4 lg:-left-8 opacity-50"
                        alt="Quote Start"
                    />
                    <p className="text-lg sm:text-xl text-black/80 font-sm">
                        {testimonialsData[currentIndex].quote}
                    </p>
                    <img
                        src="/Core/q1.png"
                        className="h-8 sm:h-12 absolute -bottom-10 -right-4 lg:-right-8 rotate-180 opacity-50"
                        alt="Quote End"
                    />
                </div>
            </div>

            {/* ## Controls: Pagination Dots and Button */}
            <div className="mt-20 md:mt-24 flex flex-col items-center gap-y-8">
                {/* Pagination Dots */}
                <div className="flex justify-center space-x-3">
                    {testimonialsData.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            aria-label={`Go to testimonial ${index + 1}`}
                            className={`w-3 h-3 rounded-full transition-all duration-300 
                                ${currentIndex === index ? "bg-black scale-110" : "bg-gray-300 hover:bg-gray-400"}
                            `}
                        ></button>
                    ))}
                </div>

                {/* More Testimonials Button */}
                <button
                    onClick={handleRedirect}
                    className="bg-black w-[250px] text-center text-white py-3 rounded-md shadow-lg transform transition-all duration-300 ease-in-out hover:bg-gray-800 hover:scale-105"
                >
                    More Testimonials
                </button>
            </div>
        </div>
    );
};

export default Testimonials;
