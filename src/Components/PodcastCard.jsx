import React, { useState } from 'react';

const PodcastCard = () => {
    const [podcasts] = useState([
        {
            image: "/Core/Gradient.png",
            name: "John Doe",
            date: "2025-07-15",
            podcastTitle: "Building Startups That Last",
            pageContent:
                "<p>This episode dives into practical strategies for building scalable startups, overcoming funding challenges, and creating a sustainable business model.</p>",
            podcastLink: "#",
        },
        {
            image: "/Core/Gradient.png",
            name: "Priya Sharma",
            date: "2025-07-10",
            podcastTitle: "Leadership in the Digital Age",
            pageContent:
                "<p>Discover how leaders are adapting to rapid technological changes, building resilient teams, and staying ahead in the digital revolution.</p>",
            podcastLink: "#",
        },
        {
            image: "/Core/Gradient.png",
            name: "Arjun Mehta",
            date: "2025-06-28",
            podcastTitle: "The Art of Effective Communication",
            pageContent:
                "<p>Learn how effective communication can transform your leadership style, improve team productivity, and boost organizational culture.</p>",
            podcastLink: "#",
        },
    ]);

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
        });
    };

    const limitWords = (htmlString, wordLimit) => {
        const div = document.createElement("div");
        div.innerHTML = htmlString;
        const text = div.textContent || div.innerText || "";
        const words = text.trim().split(/\s+/).slice(0, wordLimit).join(" ");
        return words + (text.trim().split(/\s+/).length > wordLimit ? "..." : "");
    };

    return (
        <div className="px-4 py-10">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 sm:w-[1100px] mx-auto">
                {podcasts.map((service, index) => (
                    <div
                        key={index}
                        className="flex flex-col bg-white rounded-2xl shadow-lg border border-[#D0A151]/40 
                                   overflow-hidden w-full max-w-[340px] mx-auto min-h-[460px]"
                    >
                        {/* Image Section with Category Tag */}
                        <div className="relative">
                            <img
                                src={service.image}
                                alt={service.podcastTitle}
                                className="w-full h-[200px] object-cover"
                            />
                            <span className="absolute top-3 left-3 bg-white/90 text-[#218F9A] 
                                             text-xs font-semibold px-3 py-1 rounded-full shadow-md">
                                Innovation
                            </span>
                        </div>

                        {/* Content Section */}
                        <div className="p-6 flex flex-col justify-between flex-grow bg-black">
                            <div>
                                {/* Author & Date */}
                                <div className="flex justify-between text-xs mb-4">
                                    <div className="flex items-center gap-1 text-[#218F9A]">
                                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M12.0017 12.4574V11.2892C12.0017 10.6695 11.7555 10.0752 11.3174 9.63708C10.8792 9.19892 10.2849 8.95276 9.66527 8.95276H6.16064C5.54098 8.95276 4.94671 9.19892 4.50854 9.63708C4.07038 10.0752 3.82422 10.6695 3.82422 11.2892V12.4574"
                                                stroke="#218F9A"
                                                strokeWidth="1.2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M7.91357 6.61633C9.20394 6.61633 10.25 5.57027 10.25 4.2799C10.25 2.98953 9.20394 1.94348 7.91357 1.94348C6.6232 1.94348 5.57715 2.98953 5.57715 4.2799C5.57715 5.57027 6.6232 6.61633 7.91357 6.61633Z"
                                                stroke="#218F9A"
                                                strokeWidth="1.2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                        {service.name}
                                    </div>
                                    <div className="flex items-center gap-1 text-[#218F9A]">
                                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M4.87793 1.35925V3.69568M9.55078 1.35925V3.69568M1.95703 6.03235H12.4709M11.3027 2.52771H3.12524C2.48006 2.52771 1.95703 3.05074 1.95703 3.69592V11.8734C1.95703 12.5186 2.48006 13.0416 3.12524 13.0416H11.3027C11.9479 13.0416 12.4709 12.5186 12.4709 11.8734V3.69592C12.4709 3.05074 11.9479 2.52771 11.3027 2.52771Z"
                                                stroke="#218F9A"
                                                strokeWidth="1.2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                        {formatDate(service.date)}
                                    </div>
                                </div>

                                {/* Title */}
                                <h3 className="text-[#FDAA56] mb-3 text-lg font-semibold leading-snug">
                                    {service.podcastTitle}
                                </h3>

                                {/* Description */}
                                <div
                                    className="text-white/70 text-sm leading-relaxed mb-4"
                                    dangerouslySetInnerHTML={{
                                        __html: limitWords(service.pageContent || "<p>No content</p>", 25),
                                    }}
                                />
                            </div>

                            {/* Read More Button */}
                            <a
                                href={service.podcastLink}
                                className="flex items-center gap-2 text-[#FDAA56] font-medium hover:opacity-80 transition"
                            >
                                <span>Read More</span>
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M3.33325 8H12.6666M8 3.33398L12.6667 8.00065L8 12.6673"
                                        stroke="#FDAA56"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PodcastCard;
