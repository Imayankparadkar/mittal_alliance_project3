import React from "react";

const Podcast = () => {
  const handleWatchPodcast = () => {
    window.open("https://open.spotify.com/show/2xylhP1PG90whlBakdpJzv", "_blank");
  };

  const handleFollowMe = () => {
    window.open("https://www.linkedin.com/in/sarthak-cxo/", "_blank");
  };

  return (
    <div>
      <div>
        <img src="/Core/Divider.png" alt="Divider" />
      </div>
      <div className="px-5 mt-1 sm:px-20 w-full bg-cover min-h-180 bg-center py-8">
        <div className="text-center mb-10">
          <h1 className="text-[#D0A151] text-4xl sm:text-[45px] font-bold uppercase">
            PODCASTS
          </h1>
          <img
            src="/ConsistentMatrix/border.png"
            className="w-[210px] sm:w-[255px] h-[7px] sm:h-[6px] mx-auto mt-2"
            alt="Border"
          />
        </div>

        <div className="flex flex-col lg:flex-row items-center mt-10 lg:mt-18 justify-center gap-10 lg:gap-30">
          <div className="relative shadow-lg rounded-md">
            <img
              src="/Core/rec.png"
              className="absolute top-8 sm:top-10 left-10 sm:left-10 w-[250px] sm:w-[330px] h-[300px] sm:h-[380px] opacity-80"
              alt="Background Overlay"
            />
            <img
              src="/Podcast/Founder.png"
              className="relative z-10 h-[320px] sm:h-[400px] w-[280px] sm:w-[350px] border-4 border-[#D0A151] object-cover"
              alt="Podcast Host"
            />
          </div>

          <div className="max-w-[500px] text-left mt-6 px-2">
            <h2 className="text-[36px] sm:text-[30px] lg:text-[50px] font-bold text-black leading-snug lg:leading-tight">
              A podcast for <br className="hidden lg:block" /> makers and
              entrepreneurs
            </h2>
            <p className="text-black/70 mt-4 text-[13px] sm:text-[14px] leading-relaxed">
              Welcome to our podcast series dedicated to makers and
              entrepreneurs. Join industry leaders and innovators as they share
              insights, stories, and practical advice to inspire your journey.
              Whether you’re building a startup or launching your next big idea,
              these conversations offer valuable guidance and motivation to help
              you succeed.
            </p>

            <div className="flex text-xs sm:flex-row lg:justify-start gap-4 mt-6">
              {/* --- ANIMATED BUTTON --- */}
              <button
                onClick={handleWatchPodcast}
                className="bg-[#D0A151] text-white px-6 py-2 rounded-full transform transition-transform duration-200 ease-in-out hover:scale-105 active:scale-95"
              >
                WATCH PODCAST
              </button>
              {/* --- ANIMATED BUTTON --- */}
              <button
                onClick={handleFollowMe}
                className="border border-[#D0A151] text-[#D0A151] px-6 py-2 rounded-full transform transition-all duration-200 ease-in-out hover:scale-105 hover:bg-[#D0A151] hover:text-white active:scale-95"
              >
                Follow Me
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Podcast;