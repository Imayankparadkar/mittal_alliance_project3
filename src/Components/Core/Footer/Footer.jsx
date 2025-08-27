import React from "react";
import { ArrowUp } from "lucide-react"; // ✨ 1. Import the ArrowUp icon
import { Link } from "react-router-dom";

const Footer = () => {
  const pages = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Blog Insight", path: "/blogs" },
    { name: "Contact", path: "/contact" },
  ];

  const companyLinks = [{ name: "Careers", path: "/careers" }];

  // ✨ 2. Create a function to handle scrolling to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // for a smooth scrolling animation
    });
  };

  return (
    <footer className="bg-black text-white py-10 px-4 sm:px-20 relative">
      <div className="absolute top-5 right-5 sm:top-10 sm:right-10">
        {/* ✨ 3. Add the onClick event and swap the icon */}
        <div
          className="bg-[#D0A151] rounded-lg w-12 h-12 flex items-center justify-center cursor-pointer hover:scale-105 transition"
          onClick={scrollToTop} // Add the click handler here
        >
          <ArrowUp className="text-black" /> {/* Use the new icon */}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-y-10 gap-x-8 sm:px-20">
        {/* About Section */}
        <div className="md:col-span-2">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-[#CC9A48] text-2xl">
              <svg
                width="52"
                height="40"
                viewBox="0 0 52 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_376_2845)">
                  <path
                    d="M20 23.332C25.5228 23.332 30 18.8549 30 13.332C30 7.80918 25.5228 3.33203 20 3.33203C14.4772 3.33203 10 7.80918 10 13.332C10 18.8549 14.4772 23.332 20 23.332Z"
                    stroke="#D0A151"
                    strokeWidth="3.33333"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M25.7951 21.4844L28.3334 36.6677L20.0001 31.6677L11.6667 36.6677L14.2051 21.4844"
                    stroke="#D0A151"
                    strokeWidth="3.33333"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_376_2845">
                    <rect width="40" height="40" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </span>
            <h2 className="text-[#CC9A48] font-bold text-lg">Sarthak Mittal</h2>
          </div>
          <p className="text-gray-300 text-sm text-justify leading-relaxed sm:max-w-[300px]">
            Sarthak Group of Companies provides the best business solutions,
            helping businesses thrive through strategic and technical
            development. Led by Mr. Sarthak Mittal, a top-tier business
            consultant representing various companies, we are dedicated to
            "Creating CEOs" and fostering the growth of MSMEs.
          </p>
        </div>

        {/* Wrapper for Pages and Company */}
        <div className="grid grid-cols-2 gap-8 md:contents">
          {/* Pages Section */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-bold mb-4">Pages</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              {pages.map((page, i) => (
                <li key={i} className="hover:text-[#CC9A48] cursor-pointer">
                  <Link to={page.path}>{page.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Section */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-bold mb-4">Company</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              {companyLinks.map((link, i) => (
                <li key={i} className="hover:text-[#CC9A48] cursor-pointer">
                  <Link to={link.path}>{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Get In Touch Section */}
        <div className="text-center md:text-left">
          <h3 className="text-lg font-bold mb-4">Get In Touch</h3>
          <div className="text-sm space-y-3">
            <div>
              <p className="font-bold">Head Office</p>
              <p className="text-gray-300">
                Vijay Nagar Part II, Indore, INDIA
              </p>
            </div>
            <div>
              <p className="font-bold">Sub Office</p>
              <p className="text-gray-300">
                Colorado Springs, Colorado United States
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="border-t border-gray-700 mt-10 pt-5 flex flex-col sm:flex-row sm:justify-between items-center gap-4">
        <p className="text-[10px] sm:text-sm text-gray-300 text-center sm:text-left">
          Copyright By ©{" "}
          <span className="text-[#CC9A48] font-semibold">Sarthak Mittal</span> -{" "}
          {new Date().getFullYear()}
        </p>
        <img
          src="/Core/sign.png"
          alt="Signature"
          className="mt-4 sm:scale-200 scale-300 sm:mt-0 h-10 sm:h-20"
        />
      </div>
    </footer>
  );
};

export default Footer;