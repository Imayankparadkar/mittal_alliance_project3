import React from "react";
import PodcastCard from "../Components/PodcastCard";

const Blog = () => {
    return (
        <>

            <div className="relative sm:px-center w-full bg-cover bg-center py-16 mb-10">
                <div>
                    <img src="/Core/Divider.png"
                        className="absolute top-0 w-full"
                    />
                </div>

                <br/>
                <div className="text-center max-w-2xl mx-auto ">

                    <div>
                        <span className="bg-[#FF800033] px-6 py-2 rounded-full font-semibold text-[#FDAA56] text-sm uppercase">
                            Latest Insights
                        </span>
                    </div>


                    <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-[#D0A151] to-[#D0A151] mt-6 text-3xl sm:text-[40px] font-bold uppercase">
                        My Blogs & Insights
                    </h1>

                    <img
                        src="/ConsistentMatrix/border.png"
                        className="w-[280px] sm:w-[460px] h-[6px] mx-auto mt-3"
                        alt="Border"
                    />

                    <p className="text-sm sm:text-base leading-relaxed mt-4">
                        Thought leadership articles and strategic insights to help you navigate
                        the complexities of modern business.
                    </p>
                </div>

                <section>
                    <PodcastCard />
                </section>

                <section className="w-full flex justify-center text-sm font-semibold items-center">
                    <button className="border border-[#FDAA56] cursor-pointer text-[#FDAA56] py-2 px-4 rounded-full">
                        Visit My Blog and Learn More About Entrepreneurship
                    </button>
                </section>

                <div className="bg-black  sm:py-1 px-4 sm:px-10 gap-6 absolute sm:mt-0 mt-4 right-0 mb-2 w-fit flex items-center justify-between ">

                    <img
                        src="/Blogs/Founder.png"
                        alt="Founder"
                        className="rounded-full w-15 h-15 object-cover"
                    />

                    <div className="flex flex-col">
                        <span className="text-[#FDAA56] font-medium text-base">
                            Sarthak Mittal
                        </span>
                        <span className="text-white font-medium text-sm">
                            Author
                        </span>
                    </div>
                </div>


            </div>
        </>
    );
};

export default Blog;
