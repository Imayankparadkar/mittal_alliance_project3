import React, { useState } from 'react';
import Header from '../Components/Core/Header/Header_New';
import { Plus, Minus } from 'lucide-react';

// --- UPDATED: New FAQ data with 22 questions and answers ---
const faqData = [
    { id: 1, question: 'Who is Sarthak Mittal?', answer: 'Sarthak Mittal is the Chairman & CEO of Mittal Alliance Industries Pvt. Ltd. (India) and Founder of Mittal Brandtech Inc. (USA). He is a personal branding strategist, networking coach, author, podcaster, and youth activist on a mission to empower 10 million youth by 2030 through mentorship, networking, and entrepreneurship.' },
    { id: 2, question: 'What is Sarthak Mittal known for?', answer: 'He is recognized as one of the most trusted branding experts across APAC, USA, and Europe. Sarthak is known for helping CEOs, entrepreneurs, and creators build trust-driven personal brands, delivering 75+ global consulting projects, impacting over 50,000 students, and founding the BADVERSE community.' },
    { id: 3, question: 'When was Sarthak Mittal born?', answer: 'He was born on December 1, 2003.' },
    { id: 4, question: 'What inspired Sarthak Mittal to start his entrepreneurial journey?', answer: 'Raised by a single mother after the collapse of his family’s 100+ year-old business legacy, Sarthak was inspired to rebuild the Mittal name and create opportunities for others. His early struggles fueled his determination to empower youth and entrepreneurs worldwide.' },
    { id: 5, question: 'How did Sarthak Mittal overcome academic challenges?', answer: 'He focused on practical learning, industry experience, and networking rather than relying solely on academics, proving that skills, adaptability, and execution are more valuable than grades.' },
    { id: 6, question: 'What is the significance of December 1, 2003, in Sarthak Mittal’s life?', answer: 'It’s both his birthdate and the year his family’s century-old business collapsed — marking the start of a journey from loss to rebuilding a legacy.' },
    { id: 7, question: 'What is Mittal Alliance?', answer: 'Mittal Alliance Industries Pvt. Ltd. is a consulting and innovation firm that helps businesses and individuals thrive in the digital era through branding technology, digital transformation, and strategic consulting.' },
    { id: 8, question: 'Who founded the Mittal Group?', answer: 'The Mittal Group was founded in 1907 by Sarthak’s ancestors and became India’s first brass rolling mill.' },
    { id: 9, question: 'What is Mittal Brandtech Inc.?', answer: 'A Colorado-based consulting firm founded by Sarthak Mittal, dedicated to building personal brands for leaders, influencers, and entrepreneurs globally, combining brand psychology with technology.' },
    { id: 10, question: 'What is BADVERSE?', answer: 'A community platform created by Sarthak Mittal to bridge industry and academia, bringing together over 10,000 members for mentorship, business growth, and networking.' },
    { id: 11, question: 'What is BadBusiness.in?', answer: 'A past consulting venture that used the BAD Framework (Breakdown, Analysis, Decision) to solve startup and business challenges with strategic, actionable solutions.' },
    { id: 12, question: 'What role did Sarthak play at BadBusiness.in?', answer: 'As the founder and chief strategist, he led the creation of business strategies, branding solutions, and growth frameworks for clients.' },
    { id: 13, question: 'What were the key objectives of BadBusiness.in?', answer: 'The key objectives were to break down business challenges, analyze markets and opportunities, and provide decisive, growth-focused strategies.' },
    { id: 14, question: 'What is AnjuCreations Indie?', answer: 'A handicrafts brand under Mittal Alliance that promotes Indian craftsmanship globally through ethical and sustainable commerce.' },
    { id: 15, question: 'What is the Young Leaders Community?', answer: 'An initiative connecting students with mentorship, internships, and leadership opportunities, preparing them for corporate and entrepreneurial success.' },
    { id: 16, question: 'What impact has the Young Leaders Community had on students?', answer: 'It has empowered thousands of students with industry exposure, skill-building programs, and opportunities that bridge the gap between education and real-world application.' },
    { id: 17, question: 'How does the Young Leaders Community benefit students?', answer: 'By offering mentorship, networking, workshops, and internships, it equips students with practical knowledge and professional connections.' },
    { id: 18, question: 'What is MentorMenti.com?', answer: 'A platform (now inactive) founded by Sarthak to connect students with mentors, offering career guidance and industry insights.' },
    { id: 19, question: 'How did Sarthak Mittal’s early failures shape his career?', answer: 'His initial ventures, though unsuccessful, taught him resilience, adaptability, and the importance of clarity — leading to the development of the MITTAL and BAD frameworks.' },
    { id: 20, question: 'What have been Sarthak Mittal’s major achievements?', answer: 'His achievements include delivering 75+ global branding projects, impacting 50,000+ students, features on TEDx and global forums, authoring a Kindle book, and receiving 12+ awards.' },
    { id: 21, question: 'Who does Sarthak work with?', answer: 'He works with CEOs, industrialists, startup founders, influencers, and professionals seeking clarity, visibility, and thought leadership.' },
    { id: 22, question: 'What is Sarthak Mittal’s vision for the future?', answer: 'His vision is to build a globally trusted personal branding consultancy, create scalable systems that empower youth, and connect education with industry to nurture the next generation of leaders.' },
];


const FAQs = () => {
    const [openQuestionId, setOpenQuestionId] = useState(null);

    const handleToggle = (e, id) => {
        e.stopPropagation(); 
        setOpenQuestionId(openQuestionId === id ? null : id);
    };
    
    return (
        <div className="bg-white mt-20">
            <Header />
            {/* Divider image */}
            <img src="/Blog/line.png" alt="divider" className="w-full block" />
            
            {/* --- Hero Section (New Responsive Design) --- */}
            <div className="relative">
                <img src="/Faq/faq1.png" alt="Frequently Asked Questions" className="w-full h-auto object-cover" />
                <div className="absolute inset-0 flex flex-col md:flex-row items-center justify-center p-8">
                    {/* The question mark image is now part of the hero for better responsive control */}
                </div>
            </div>
            
            {/* The arrow divider scales with the width of the screen. */}
            <img src="/Faq/faq2.png" alt="arrow divider" className="w-full block -mt-px" />

            {/* --- Main Content Section --- */}
            <main className="max-w-7xl mx-auto py-14 px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                <div className="text-center mb-16">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#D0A151] underline">CLARITY, INSIGHT, AND INSPIRATION FOR ALL</h2>
                </div>
                    
                </div>

                {/* --- FAQ Grid --- */}
                <div className="grid md:grid-cols-2 gap-6 items-start">
                    {faqData.map((faq) => (
                        <div key={faq.id} className="bg-[#FFF4E1] rounded-lg transition-transform duration-300 ease-in-out hover:shadow-lg cursor-pointer" onClick={(e) => handleToggle(e, faq.id)}>
                            <div className="flex justify-between items-center p-4">
                                <p className="text-[#C27C06] font-semibold pr-4">{faq.question}</p>
                                <div className="bg-[rgba(208,161,81,0.15)] rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                                    {openQuestionId === faq.id ? <Minus size={20} className="text-[#D0A151]" /> : <Plus size={20} className="text-[#D0A151]" />}
                                </div>
                            </div>
                            <div className={`overflow-hidden transition-all duration-500 ease-in-out ${openQuestionId === faq.id ? 'max-h-96 p-4 pt-0' : 'max-h-0'}`}>
                                <p className="text-[#C27C06]">{faq.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
};

export default FAQs;