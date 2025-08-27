import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();
    const isHome = location.pathname === '/';

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isOpen]);


    return (
        <header
            className={`
                fixed top-0 left-0 w-full z-50 px-6 transition-all duration-300
                ${isScrolled ? 'h-16' : 'h-16 md:h-20'}
                ${isOpen
                    ? 'bg-[#0E0E0E]'
                    : isScrolled
                        ? 'bg-[#0E0E0E]/90 backdrop-blur-sm shadow-md'
                        : 'bg-transparent'
                }
            `}
        >
            <div className="flex items-center justify-between w-full h-full mx-auto">
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

                {/* Desktop Navigation (conditional on home page) */}
                {isHome && (
                    <nav className="hidden md:flex items-center cursor-pointer space-x-14 text-white/80 font-medium">
                        <Link to="/" style={{ textDecoration: 'none' }} className="text-white hover:text-white" onClick={() => setIsOpen(false)}>Home</Link>
                        <Link to="/blogs" style={{ textDecoration: 'none' }} className="text-white/80 hover:text-white">Blogs</Link>
                        <Link to="/events" style={{ textDecoration: 'none' }} className="text-white/80 hover:text-white">Events</Link>
                        <Link to="/podcasts" style={{ textDecoration: 'none' }} className="text-white/80 hover:text-white">Podcasts</Link>
                        <Link to="/books" style={{ textDecoration: 'none' }} className="text-white/80 hover:text-white">Books</Link>
                        <Link to="/mentors" style={{ textDecoration: 'none' }} className="text-white/80 hover:text-white">Mentors</Link>
                        <Link to="/history" style={{ textDecoration: 'none' }} className="text-white/80 hover:text-white">History</Link>
                        <Link to="/careers" style={{ textDecoration: 'none' }} className="text-white/80 hover:text-white">Careers</Link>
                        <Link to="/faqs" style={{ textDecoration: 'none' }} className="text-white/80 hover:text-white">FAQs</Link>
                    </nav>
                )}

                {/* Desktop Button */}
                <div className="hidden md:block">
                    <Link to="/contact" style={{ textDecoration: 'none' }}>
                        <div className="relative w-[220px] h-12 cursor-pointer">
                            <svg className="absolute inset-0" viewBox="0 0 322 68" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M305.174 1.5L320.211 34L305.174 66.5H20.3955L1.96191 34L20.3955 1.5H305.174Z" fill="black" stroke="#CE9D4B" strokeWidth="2" />
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

            {/* --- Mobile Menu Overlay --- */}
            {isOpen && (
                // 1. ADDED gap-8 TO THIS CONTAINER TO SPACE OUT THE LOGO, NAV, AND BUTTON
                <div className="md:hidden fixed inset-0 z-50 bg-[#0E0E0E] flex flex-col items-center justify-center py-6 gap-4">
                    <div className="absolute top-12 right-6">
                        <button
                            onClick={() => setIsOpen(false)}
                            className="absolute right-6 top-1/2 -translate-y-1/2"
                        >
                            <X className="text-white w-7 h-7" />
                        </button>
                    </div>

                    <Link to="/" style={{ textDecoration: 'none' }} onClick={() => setIsOpen(false)}>
                        <img
                            src="/images/logo.png"
                            alt="logo"
                            className="w-[200px] h-auto "
                        />
                    </Link>

                    {isHome && (
                        <nav className="flex flex-col items-center space-y-6 text-white text-lg font-semibold">
                            <Link to="/" style={{ textDecoration: 'none' }} className="text-white hover:text-white" onClick={() => setIsOpen(false)}>Home</Link>
                            <Link to="/blogs" style={{ textDecoration: 'none' }} className="text-white hover:text-white" onClick={() => setIsOpen(false)}>Blogs</Link>
                            <Link to="/events" style={{ textDecoration: 'none' }} className="text-white hover:text-white" onClick={() => setIsOpen(false)}>Events</Link>
                            <Link to="/podcasts" style={{ textDecoration: 'none' }} className="text-white hover:text-white" onClick={() => setIsOpen(false)}>Podcasts</Link>
                            <Link to="/books" style={{ textDecoration: 'none' }} className="text-white hover:text-white" onClick={() => setIsOpen(false)}>Books</Link>
                            <Link to="/mentors" style={{ textDecoration: 'none' }} className="text-white hover:text-white" onClick={() => setIsOpen(false)}>Mentors</Link>
                            <Link to="/history" style={{ textDecoration: 'none' }} className="text-white hover:text-white" onClick={() => setIsOpen(false)}>History</Link>
                            <Link to="/careers" style={{ textDecoration: 'none' }} className="text-white hover:text-white" onClick={() => setIsOpen(false)}>Careers</Link>
                            <Link to="/faqs" style={{ textDecoration: 'none' }} className="text-white hover:text-white" onClick={() => setIsOpen(false)}>FAQs</Link>
                        </nav>
                    )}
                        
                        {/* 2. REMOVED mt-8 FROM THIS DIV */}
                    <div>
                        <Link to="/contact" style={{ textDecoration: 'none' }} onClick={() => setIsOpen(false)}>
                            <div className="relative w-[300px] h-15 cursor-pointer">
                                <svg className="absolute inset-0" viewBox="0 0 322 68" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M305.174 1.5L320.211 34L305.174 66.5H20.3955L1.96191 34L20.3955 1.5H305.174Z" fill="black" stroke="#CE9D4B" strokeWidth="2" />
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

export default Header;