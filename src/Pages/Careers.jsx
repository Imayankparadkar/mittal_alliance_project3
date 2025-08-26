import React from 'react';
import Header from '../Components/Core/Header/Header_New';
import ConnectMe from '../Pages/ConnectMe'; // Import the ConnectMe component

// Assuming Header and ConnectMe are correctly imported from your project structure.
// If they are not in the specified paths, you might need to adjust the import statements.

const Careers = () => {
    return (
        <div className="bg-white mt-20">
            <Header />
            {/* Divider image */}
            <img src="/Career/line.png" alt="divider" className="w-full block" 
                 onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/1920x10/ffffff/000000?text='; }}/>

            {/* --- Hero Section --- */}
            <div className="relative">
                <img src="/Career/career1.png" alt="Careers at Mittal Alliance" className="w-full h-auto object-cover" 
                     onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/1920x600/cccccc/333333?text=Career+Hero+1'; }}/>
            </div>
            <img src="/Career/career2.png" alt="arrow divider" className="w-full block -mt-px" 
                 onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/1920x100/ffffff/000000?text='; }}/>

            {/* --- Main Content Section --- */}
            <main className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#D0A151] underline">EMPOWERING INNOVATORS, BUILDING FUTURE LEADERS</h2>
                </div>

                {/* --- Get Hired Section (Updated to match the new image) --- */}
                <div className="max-w-4xl mx-auto text-left">
                    {/* Pill with custom RGBA background */}
                    <p 
                        className="inline-block text-[#B8860B] font-semibold px-4 py-2 rounded-full" 
                        style={{ backgroundColor: 'rgba(253, 170, 86, 0.2)' }}
                    >
                        CAREER WITH MITTAL ALLIANCE
                    </p>
                    
                    {/* Image */}
                    <img src="/Career/career3.png" alt="Person building with blocks" className="w-full h-auto object-cover rounded-lg mt-6 mb-8" 
                         onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/1024x400/eeeeee/333333?text=Career+Image+3'; }}/>
                    
                    {/* Title */}
                    <h2 className="text-3xl sm:text-4xl font-bold text-[#B8860B]">Get Hired!</h2>
                    
                    {/* Description */}
                    <p className="mt-4 text-lg text-gray-700 leading-relaxed">
                        At Mittal Alliance, we believe in empowering our team members to become leaders and innovators in their fields. We offer opportunities across various sectors, including biofuel, branding, and technology, where our team members can make a meaningful impact and grow their careers. Whether you're a seasoned professional or a recent graduate, Mittal Alliance offers a dynamic environment focused on skill-building, creativity, and leadership development.
                    </p>
                    <p className="mt-4 text-lg text-gray-700 leading-relaxed">
                        As a part of our team, you'll work alongside industry experts and thought leaders, contribute to breakthrough projects, and participate in initiatives aimed at transforming industries. We are dedicated to fostering a collaborative culture where every voice is valued and every contribution counts. Explore the possibilities with Mittal Alliance and take the next step in your career journey.
                    </p>
                    
                    {/* Button */}
                    <a
                        href="#"
                        className="mt-8 inline-block bg-[#D0A151] text-white font-bold px-8 py-3 hover:bg-opacity-90 transition-colors"
                    >
                        EXPLORE CAREER OPPORTUNITIES
                    </a>
                </div>

                {/* --- Separator Line --- */}
                <div className="my-8 border-t border-[#C27C06]"></div>

                {/* --- Connect With Me Section --- */}
                <div>
                   <ConnectMe />
                </div>
            </main>
        </div>
    );
};

export default Careers;
