import React from "react";
import { Link } from "react-router-dom";

const Services = () => {
  const primaryServices = [
    {
      id: 1,
      title: "MarTech (Marketing Technology) Strategy",
      description:
        "Bridge the gap between marketing and technology. We help you implement powerful MarTech stacks that enhance customer experience, streamline marketing operations, and drive data-backed decisions that fuel growth.",
    },
    {
      id: 2,
      title: "BrandTech Consulting",
      description:
        "Reimagine your brand with the power of technology. Our BrandTech solutions combine creative branding with cutting-edge digital tools—ensuring your business stands out, stays relevant, and builds lasting emotional connections with your audience",
    },
    {
      id: 3,
      title: "Personal Brand Consulting",
      description:
        "Your personal brand is your legacy. We help entrepreneurs, coaches, and thought leaders create an authentic online presence—via LinkedIn, personal websites, and media positioning—that opens doors to new opportunities and influence.",
    },
  ];

  const additionalServices = [
    {
      id: 4,
      title: "Sales Coaching & Consulting",
      description:
        "Struggling to convert leads into loyal customers? Our sales consulting sharpens your sales processes, scripts, and team performance—using proven frameworks, automation tools, and AI-led insights to consistently close more deals.",
    },
    {
      id: 5,
      title: "Business Expansion Strategy (USA, Europe & UK)",
      description:
        "Go global with confidence. With in-depth market insights and local partner networks, we help Indian businesses expand into the USA, Europe, and the UK—minimizing risk, navigating regulations, and setting up the right entry strategy.",
    },
    {
      id: 6,
      title: "Self-Analysis & Life Auditing",
      description:
        "Business growth starts with personal clarity. Our life auditing framework helps you reflect, realign, and refocus on what truly matters—your purpose, vision, and habits—so you can grow both personally and professionally.",
    },
    {
      id: 7,
      title: "LinkedIn Consulting & Automation",
      description:
        "Turn LinkedIn into your lead generation engine. We help you optimize your profile, content, and networking strategy—and automate outreach systems that grow your visibility, engagement, and pipeline on autopilot.",
    },
  ];

  return (
    <div className="bg-black relative">
      {/* Divider */}
      <div className="">
        <img src="/Core/BDivider.png" alt="Divider" />
      </div>

      {/* Main Section */}
      <div className="flex px-5 sm:px-20 w-full bg-cover bg-center relative">
        <div className="absolute inset-0"></div>

        <div className="relative z-10 w-full">
          <div className="text-center mb-10">
            <h1
              className="text-transparent bg-clip-text bg-gradient-to-r 
                            from-[#D0A151] via-[#DCB56C] via-[#E6C584] 
                            via-[#DDB56D] to-[#CE9D4B] 
                            text-4xl sm:text-[50px] font-bold uppercase mt-15 mb-3"
            >
              <span className="text-[#D0A151]">Services</span>
            </h1>

            <img
              src="/ConsistentMatrix/border.png"
              className="w-[250px] h-[8px] mx-auto mb-5"
              alt="Border"
            />
            <span className="text-[#E0E0E0]">
              We offer various impactful programs
            </span>
          </div>

          <div className="mt-10 flex justify-center mb-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {primaryServices.map((service) => (
                <div
                  key={service.id}
                  className="border w-[320px] h-[260px] border-white text-white uppercase p-5 flex flex-col justify-between "
                >
                  <div className="font-semibold text-sm mb-3">
                    {service.title}
                  </div>
                  <div className="text-justify text-[12px] mb-4">
                    {service.description}
                  </div>
                  <div className="w-full flex justify-center">
                    <Link to={`/services/${service.id}`}>
                    <button className="border w-[230px] py-2 text-sm transition cursor-pointer  hover:bg-white hover:text-black">
                        KNOW MORE
                      </button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* --- MODIFIED SECTION --- */}
          <div className="mb-10">
            {/* Grid for the first 3 additional services */}
            <div className="flex justify-center">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {additionalServices.slice(0, 3).map((service) => (
                  <div
                    key={service.id}
                    className="border w-[320px] h-[260px] border-white text-white uppercase p-5 flex flex-col justify-between"
                  >
                    <div className="font-semibold text-sm mb-3">
                      {service.title}
                    </div>
                    <div className="text-justify text-[12px] mb-4">
                      {service.description}
                    </div>
                    <div className="w-full flex justify-center">
                      <Link to={`/services/${service.id}`}>
                      <button className="border w-[230px] py-2 text-sm transition cursor-pointer  hover:bg-white hover:text-black">
                        KNOW MORE
                      </button>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Centered container for the last (7th) service */}
            <div className="mt-8 flex justify-center">
              {additionalServices.slice(3).map((service) => (
                <div
                  key={service.id}
                  className="border w-[320px] h-[260px] border-white text-white uppercase p-5 flex flex-col justify-between"
                >
                  <div className="font-semibold text-sm mb-3">
                    {service.title}
                  </div>
                  <div className="text-justify text-[12px] mb-4">
                    {service.description}
                  </div>
                  <div className="w-full flex justify-center">
                    <Link to={`/services/${service.id}`}>
                    <button className="border w-[230px] py-2 text-sm transition cursor-pointer hover:bg-white hover:text-black">
                        KNOW MORE
                      </button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* --- END OF MODIFIED SECTION --- */}
        </div>
      </div>
    </div>
  );
};

export default Services;
