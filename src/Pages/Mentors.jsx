import React from "react";
// Updated import path for the header component
import Header from "../Components/Core/Header/Header_New";

// Mentor data updated to remove name and title fields as they are no longer displayed.
const mentorProfiles = [
  {
    id: "mentor1",
    image: "/Mentor/mentor3.png",
    description: `Ganga Ram Mohanlal Mittal was a pioneering entrepreneur in India, known for his role in establishing the country's first brass rolling mill. In 1907, alongside Shri Babulal Mittal, Ganga Ram laid the foundation for what would eventually become the renowned Mittal Group, marking the start of a multi-generational legacy in the Indian manufacturing industry. His initiative set a standard for quality and innovation in metal production, contributing to India’s industrial development in the early 20th century. The entrepreneurial spirit Ganga Ram embodied was marked by his dedication to craftsmanship, community, and resilience—a spirit that endured through generations, even as the family business faced challenges and divisions by the 1980s. His legacy continues to influence the Mittal family, inspiring future generations, like you, to pursue innovation and resilience in both family and business endeavors.`,
  },
  {
    id: "mentor2",
    image: "/Mentor/mentor4.png",
    description: `Shri Babulal Mittal, alongside Ganga Ram Mohanlal Mittal, was a visionary co-founder of India’s first brass rolling mill, established in 1907. Together, they laid the foundation for what would become the Mittal Group, pioneering the brass manufacturing industry in an era when India was just beginning its industrial journey. Babulal Mittal's insight and dedication to quality played a crucial role in advancing the brass sector, leaving a lasting impact on India's industrial landscape. His legacy reflects a commitment to innovation, collaboration, and growth. These values have continued to inspire future generations of the Mittal family, particularly in Sarthak Mittal's ventures, where Babulal Mittal's influence is evident in Sarthak's entrepreneurial spirit and resilience in overcoming contemporary business challenges. The lasting legacy of Shri Babulal Mittal endures in the family’s ongoing commitment to excellence and progress.`,
  },
  {
    id: "mentor3",
    image: "/Mentor/mentor5.png",
    description: `Suresh Chandra Mittal, the Chairman of Malwa Metal Industries, was a dedicated and visionary leader who played a significant role in continuing the Mittal family legacy within India’s metal manufacturing industry. As a successor in the Mittal lineage, he took the helm of Malwa Metal Industries during a period marked by both opportunity and adversity. Under his leadership, Malwa Metal Industries sought to uphold the values of quality and craftsmanship instilled by the company's founders, Ganga Ram Mohanlal Mittal and Shri Babulal Mittal. His journey reflects a profound commitment to resilience and dedication to family legacy, which continue to inspire the next generation in their entrepreneurial pursuits. His story serves as a testament to perseverance and has laid a foundation of hard-earned lessons that have guided subsequent ventures within the Mittal family.`,
  },
  {
    id: "mentor4",
    image: "/Mentor/mentor6.png",
    description: `Ashutosh Mittal, the CEO of Malwa Metal Industries, represents the fifth generation of the Mittal family legacy within India's industrial sector. A graduate of the esteemed Daly College in Indore, Ashutosh brings a blend of traditional family values and modern business acumen to his role. His education from one of India’s most prestigious institutions has equipped him with a strong foundation in leadership and strategic thinking, enabling him to carry forward the entrepreneurial spirit that has been central to the Mittal family's identity since the early 1900s. In his role at Malwa Metal Industries, Ashutosh is committed to revitalizing the family business, focusing on innovation, quality, and sustainable growth. He embodies the resilience and dedication that have been hallmarks of his forebears, including his great-great-grandfather, Ganga Ram Mohanlal Mittal, who co-founded India’s first brass rolling mill. Ashutosh’s leadership is aimed at adapting to modern challenges while honoring the values and legacy of the Mittal family, furthering their longstanding contribution to India’s industrial landscape.`,
  },
  // {
  //   id: "mentor5",
  //   image: "/Mentor/Sarthak.jpg",
  //   description: `Sarthak Mittal, a visionary entrepreneur and the founder of Mittal Alliance, embodies the spirit of innovation and collaboration at the heart of this dynamic network. As a sixth-generation member of the esteemed Mittal family, Sarthak leverages his rich heritage to foster a diverse ecosystem of companies dedicated to providing comprehensive outsourcing solutions. His leadership journey is marked by significant roles, including CEO of Worldplay Ventures and CTO of Ganesh Industries, where he has demonstrated a commitment to modernizing operations and embracing technological advancements. Sarthak's academic background in BTech + MBA from NMIMS Indore, coupled with his passion for coding and entrepreneurship, equips him with the insights needed to navigate the complexities of the modern business landscape. Under his guidance, Mittal Alliance aims to connect a multitude of enterprises across sectors, driving synergy and efficiency while empowering businesses to thrive in an ever-evolving marketplace.`,
  // },
];

// Data for the grid of mentors at the bottom
const mentorGridImages = [
  "mentor8.png",
  "mentor9.png",
  "mentor10.png",
  "mentor11.png",
  "mentor12.png",
  "mentor13.png",
  "mentor14.png",
  "mentor15.png",
];

const Mentors = () => {
  return (
    <>
      <Header />

      <div className="bg-stone-50 font-sans mt-20">
        {/* Main container */}
        <div>
          {/* Top Image Banner */}
          <div className="flex flex-wrap justify-center items-center ">
            <img src="/Mentor/line.png" />
            <img src="/Mentor/mentor1.png" />
            <img src="/Mentor/mentor2.png" />
          </div>

          {/* Main Heading */}
          <div className="text-center mb-10 ">
            <h1
              className="inline-block text-3xl font-bold pb-2 pt-12"
              style={{
                color: "rgba(208, 161, 81, 1)",
                borderBottom: "4px solid rgba(208, 161, 81, 1)",
              }}
            >
              MENTORS
            </h1>
          </div>

          {/* Mentor Profiles Section */}
          <div className="flex flex-col">
            {mentorProfiles.map((mentor, index) => (
              // Using React.Fragment to handle keys and conditional rendering of the separator
              <React.Fragment key={mentor.id}>
                <div className="py-1">
                  {/* Mentor Image (Centered) */}
                  <div className="flex justify-center mb-4">
                    <img
                      src={mentor.image}
                      alt={`Mentor profile ${index + 1}`}
                      className="w-full max-w-xs h-auto object-cover rounded-lg shadow-lg border border-gray-200"
                    />
                  </div>

                  {/* Mentor Description */}
                  <div className="max-w-3xl mx-auto text-justify text-gray-700 leading-relaxed px-4 pt-4 pb-8">
                    <p>{mentor.description}</p>
                  </div>
                </div>

                {index < mentorProfiles.length - 1 && (
                  <div className="flex justify-center px-4">
                    <hr
                      className="w-full max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-3xl xl:max-w-3xl border-t pt-8 "
                      style={{
                        borderColor: "rgba(115, 115, 115, 1)",
                        borderWidth: "px",
                      }}
                    />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>

          <hr className="border-t-2 border-[rgba(194,124,6,1)] my-16 md:my-13" />

          {/* Mentor Image Grid */}
          <div className="flex flex-wrap justify-center gap-5 mt-20 py-5 mb-16">
            {mentorGridImages.map((imageName, index) => (
              <div className="flex-shrink-0" key={index}>
                <img
                  src={`/Mentor/${imageName}`}
                  alt={`Mentor ${index + 8}`}
                  className="w-75 h-75 shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-lg"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Mentors;
