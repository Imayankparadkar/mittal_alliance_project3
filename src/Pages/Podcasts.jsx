import React from "react";
import { Link } from "react-router-dom";
import Header from '../Components/Core/Header/Header_New';
import { blogPosts } from "../data/podcastData";
// --- 1. IMPORT THE NEW DEPENDENCIES ---
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

// The PodcastCard component remains unchanged.
const PodcastCard = ({ id, imgSrc, title, description, host, date }) => (
  <Link
    to={`/podcasts/${id}`}
    className="bg-black text-white rounded-lg overflow-hidden border border-gray-700 transform hover:scale-105 transition-transform duration-300 flex flex-col h-full group"
  >
    <img
      src={imgSrc}
      alt={title}
      className="w-full h-48 object-cover"
      onError={(e) => {
        e.target.onerror = null;
        e.target.src =
          "https://placehold.co/400x300/000000/FFFFFF?text=Image+Not+Found";
      }}
    />
    <div className="p-4 flex flex-col flex-grow">
      {/* Host and Date Section */}
      <div className="flex justify-between items-center text-xs text-gray-400 mb-3">
        <span className="flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1.5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
          {host}
        </span>
        <span className="flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1.5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          {date}
        </span>
      </div>
      <h3 className="text-lg font-bold text-[rgba(208,161,81,1)] mb-2 group-hover:underline">
        {title}
      </h3>
      <div className="flex-grow">
        <p className="text-gray-400 text-sm mb-4">
          {description.substring(0, 100)}{description.length > 100 && "..."}
        </p>
      </div>
      <div className="mt-auto text-right">
        <span className="text-sm font-semibold text-[rgba(208,161,81,1)]">
          Read More →
        </span>
      </div>
    </div>
  </Link>
);

// --- 2. DEFINE THE NEW ANIMATEDSTAT COMPONENT ---
const AnimatedStat = ({ value }) => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Animate only the first time it comes into view
    threshold: 0.1,
  });

  const number = parseFloat(value);
  const suffix = value.replace(/[0-9.]/g, '');
  const hasDecimal = value.includes('.');

  return (
    // Attach the ref to the parent element to trigger the hook
    <div ref={ref}>
      <p className="text-4xl md:text-5xl font-bold text-[rgba(208,161,81,1)]">
        {inView ? (
          <CountUp
            start={0}
            end={number}
            duration={2.5}
            separator=","
            decimals={hasDecimal ? 1 : 0}
            suffix={suffix}
          />
        ) : (
          value // Display the original value until it's in view
        )}
      </p>
    </div>
  );
};

const Podcasts = () => {
  const stats = [
    { value: "1.3M+", label: "ACROSS SOCIAL" },
    { value: "5M+", label: "MONTHLY REACH" },
    { value: "50+", label: "COUNTRIES ENGAGE" },
    { value: "60+", label: "IMPACTFUL VIDEOS" },
  ];

  return (
    <div className="bg-white min-h-screen font-sans">
      <Header />
      {/* Hero Section */}
      <section className="flex flex-wrap justify-center items-center mb-10 mt-20">
        <img src="/Podcasts/line.png" alt="Decorative line" className="w-full" />
        <img src="/Podcasts/podcast1.png" alt="Podcast hero image 1" className="w-full" />
        <img src="/Podcasts/podcast2.png" alt="Podcast hero image 2" className="w-full" />
      </section>

      {/* Main content area */}
      <main className="container mx-auto px-4 ">
        <section className="flex flex-row items-center justify-center gap-4 md:gap-16 mb-5 md:mb-5">
          {/* Left Side: Mobile Mockup */}
          <div className="w-1/2 md:w-1/3 flex-shrink-0">
            <img
              src="/Podcasts/podcast3.png"
              alt="Podcast on mobile"
              className="w-full h-auto"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "https://placehold.co/320x640/FFFFFF/000000?text=Mobile+Mockup";
              }}
            />
          </div>

          {/* Right Side: Text, Links, and Buttons */}
          <div className="w-1/2 text-left">
            <h2 className="text-2xl md:text-5xl leading-snug text-[rgba(208,161,81,1)] font-bold ">
              <span className="text-base md:text-2xl text-[rgba(208,161,81,1)] font-medium">
                EMPOWERING,{" "}
              </span>
              <br />
              <span className="text-[rgba(208,161,81,1)] ">MINDS, </span>
              <br />
              IGNITING
              <span className="text-[rgba(208,161,81,1)] font-bold">
                {" "}
                INNOVATION
              </span>
            </h2>
            <p className="mt-4 text-base md:text-lg font-semibold bg-[rgba(208,161,81,1)] text-white inline-block px-4 py-2 rounded-lg">
              PODCAST
            </p>
            <p className="mt-4 md:mt-8 text-xs md:text-base font-medium text-gray-600 tracking-wider">
              LISTEN ON YOUR FAVORITE PLATFORM
            </p>

            <div className="mt-4 md:mt-6 flex flex-col items-start gap-4 md:gap-6">
              {/* --- YOUTUBE LINK MODIFIED HERE --- */}
              <a
                href="https://www.youtube.com/@mittalspeaks/videos"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-700 hover:opacity-80 transition-opacity"
              >
                <img
                  src="https://www.youtube.com/s/desktop/014dbbed/img/favicon_144x144.png"
                  alt="YouTube icon"
                  className="w-6 h-6 md:w-8 md:h-8"
                />
                <span className="text-xl md:text-3xl font-bold">YouTube</span>
              </a>
              <button className="border-2 border-[rgba(208,161,81,1)] text-[rgba(208,161,81,1)] font-bold py-2 px-4 md:py-3 md:px-8 text-sm md:text-base rounded-full hover:bg-[rgba(208,161,81,1)] hover:text-white transition-colors duration-300">
                JOIN FOR A PODCAST
              </button>
            </div>
          </div>
        </section>

        {/* --- Stats Section (UPDATED) --- */}
        <section className="py-10 mb-5 md:mb-11">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index}>
                {/* --- 3. USE THE ANIMATEDSTAT COMPONENT HERE --- */}
                <AnimatedStat value={stat.value} />
                <p className="text-bg text-gray-500 mt-2 tracking-widest">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* --- Second Design Section (Episode Grid) --- */}
        <section>
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-[rgba(208,161,81,1)] border-b-4 border-[rgba(208,161,81,1)] inline-block pb-2">
              Checkout Our Regular Episodes
            </h2>
          </div>
          <br />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
            {blogPosts.map((episode) => (
              <PodcastCard
                key={episode.id}
                id={episode.id}
                imgSrc={episode.imageUrl}
                title={episode.title}
                description={episode.content}
                host={episode.host}
                date={episode.date}
              />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Podcasts;