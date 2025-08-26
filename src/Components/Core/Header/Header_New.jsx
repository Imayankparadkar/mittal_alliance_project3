import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Header_New = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    // Centralize navigation links for easier management
    const navLinks = [
        { href: "/blogs", label: "Blogs" },
        { href: "/events", label: "Events" },
        { href: "/podcasts", label: "Podcasts" },
        // { href: "/pricing", label: "Stories" },
        { href: "/books", label: "Books" },
        { href: "/mentors", label: "Mentors" },
        { href: "/history", label: "History" },
        { href: "/careers", label: "Careers" },
        { href: "/faqs", label: "FAQs" },
    ];

    return (
        <header className="bg-black px-6 h-20 flex items-center fixed top-0 left-0 w-full z-50">
            <div className="flex items-center justify-between w-full mx-auto">
                {/* Logo */}
                <div>
                    <Link to="/" style={{ textDecoration: 'none' }}>
                        <img
                            src="/images/logo.png"
                            alt="logo"
                            className="w-[80px] ml-2 h-auto scale-205"
                        />
                    </Link>
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center cursor-pointer space-x-14 text-white/80 font-medium">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            to={link.href}
                            style={{ textDecoration: 'none' }}
                            // The 'group' class enables the hover effect for the child span
                            className="relative group text-white/80 hover:text-white transition-colors duration-300"
                        >
                            {link.label}
                            {/* Underline for active link */}
                            <span
                                className={`absolute left-0 -bottom-1 w-full h-0.5 bg-[#CE9D4B] transition-transform duration-300 ease-out ${
                                    location.pathname === link.href ? 'scale-x-100' : 'scale-x-0'
                                } group-hover:scale-x-100`}
                            ></span>
                        </Link>
                    ))}
                </nav>

                {/* Desktop Button */}
                <div className="hidden md:block">
                    <Link to="/contact" style={{ textDecoration: 'none' }}>
                        <div className="relative w-[220px] h-12 cursor-pointer">
                            <svg
                                className="absolute inset-0"
                                viewBox="0 0 322 68"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M305.174 1.5L320.211 34L305.174 66.5H20.3955L1.96191 34L20.3955 1.5H305.174Z"
                                    fill="black"
                                    stroke="#CE9D4B"
                                    strokeWidth="2"
                                />
                            </svg>
                            <span className="absolute inset-0 flex items-center justify-center text-white font-semibold">
                                BOOK YOUR CALL
                            </span>
                        </div>
                    </Link>
                </div>

                {/* Hamburger Icon (Mobile Only) */}
                <div className="md:hidden">
                    <button onClick={() => setIsOpen(!isOpen)}>
                        <Menu className="text-white w-7 h-7" />
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden fixed inset-0 z-50 bg-[#0E0E0E] flex flex-col items-center justify-center py-6">
                    <div className="absolute top-6 right-6">
                         <button onClick={() => setIsOpen(false)}>
                            <X className="text-white w-8 h-8" />
                        </button>
                    </div>

                    {/* Mobile Navigation */}
                    <nav className="flex flex-col items-center space-y-8 text-white text-xl font-semibold">
                         {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                to={link.href}
                                style={{ textDecoration: 'none' }}
                                className={`relative ${location.pathname === link.href ? 'text-[#CE9D4B]' : 'text-white'}`}
                                onClick={() => setIsOpen(false)}
                            >
                                {link.label}
                                {location.pathname === link.href && (
                                     <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-[#CE9D4B]"></span>
                                )}
                            </Link>
                        ))}
                    </nav>

                    <div className="mt-12">
                        <Link to="/contact" style={{ textDecoration: 'none' }} onClick={() => setIsOpen(false)}>
                            <div className="relative w-[300px] h-15 cursor-pointer">
                                <svg
                                    className="absolute inset-0"
                                    viewBox="0 0 322 68"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M305.174 1.5L320.211 34L305.174 66.5H20.3955L1.96191 34L20.3955 1.5H305.174Z"
                                        fill="black"
                                        stroke="#CE9D4B"
                                        strokeWidth="2"
                                    />
                                </svg>
                                <span className="absolute inset-0 flex items-center justify-center text-white font-semibold">
                                    BOOK YOUR CALL
                                </span>
                            </div>
                        </Link>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header_New;