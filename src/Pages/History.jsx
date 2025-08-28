import React from 'react';
import Header from '../Components/Core/Header/Header_New';
import ConnectMe from '../Pages/ConnectMe'; // This component should also be responsive for the best results.

const timelineData = [
    { 
        year: "1907", 
        title: "Founding Root:", 
        description: "Mr. Gangaram Mittal establishes India's first brass rolling mill, marking the start of the Mittal entrepreneurial journey." 
    },
    { 
        year: "1950", 
        title: "Malwa Metal Industries:", 
        description: "Shri Suresh Chandra Mittal leads Malwa Metal Industries, building a strong name in India's metal sector." 
    },
    { 
        year: "1982", 
        title: "Indore Aluminum Private Limited:", 
        description: "Under Mr. Ashutosh Mittal, the family expands into aluminum manufacturing, strengthening its industrial presence." 
    },
    { 
        year: "2000-2017", 
        title: "Era of Decline:", 
        description: "The Mittal family's industrial legacy slows down, awaiting a revival." 
    },
    { 
        year: "2019", 
        title: "Mittal Alliance Vision Launched:", 
        description: "Mr. Sarthak Mittal, 6th generation, envisions an alliance of industries driven by digital transformation and innovation." 
    },
    { 
        year: "2025", 
        title: "Official Incorporation & USA Expansion:", 
        description: "Mittal Alliance Industries Private Limited is formally incorporated and begins expanding operations into the United States, marking a major international leap." 
    },
    { 
        year: "2025-28", 
        title: "Global Ambitions:", 
        description: "With a diverse portfolio across branding, technology, BPO, e-commerce, and CSR, Mittal Alliance targets expansion into 10+ countries by 2028." 
    },
];

const empoweringData = [
    {
        icon: "/History/history4.png",
        title: "Motivating Individuals",
        description: "We aim at “Creating CEO’s”, Sarthak is Constantly taking webinars and sessions in order to create more entrepreneurs."
    },
    {
        icon: "/History/history5.png",
        title: "Expertise From Industry",
        description: "Sarthak Brings his extensive network to business, and coach individuals and rectify problems in system."
    },
    {
        icon: "/History/history6.png",
        title: "Growing Startups",
        description: "Sarthak is also helping Existing CEO and Founders by providing them resources, his youtube channel “CEO Sarthak Mittal” solves the problems faced by businesses, thorough interaction with Industrial Leaders."
    },
    {
        icon: "/History/history7.png",
        title: "AI in Business",
        description: "He makes business technologically smart and provide them technical business consulting."
    },
    {
        icon: "/History/history8.png",
        title: "Growing Industries",
        description: "Sarthak is currently working with Ganesh Industries, a biomass briquette manufacturing company. He is co-leading the company and helping them grow their business through his extensive industrial network."
    }
];

const History = () => {
    return (
        <div className="bg-white mt-20">
            <Header />
            {/* Divider image */}
            <img src="/History/line.png" alt="divider" className="w-full block" />

            {/* --- Hero Section --- */}
            <div className="relative">
                <img src="/History/history1.png" alt="Asian-African Leadership Forum" className="w-full h-auto object-cover" />
            </div>
            
            <img src="/History/history2.png" alt="arrow divider" className="w-full block -mt-px" />

            {/* --- Main Content Section --- */}
            <main className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                
                {/* --- Empowering Generations Section --- */}
                <div className="text-center">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold underline underline-offset-4 text-[rgba(208,161,81,1)]">EMPOWERING GENERATIONS, INSPIRING ENTREPRENEURIAL JOURNEYS</h2>
                    
                    <img src="/History/history3.png" alt="Lacs CEO's Creation Initiative" className="w-full max-w-4xl mx-auto mt-12 md:mt-20"/>

                    <hr className="border-t-2 border-[rgba(194,124,6,1)] my-16 md:my-24" />
                    
                    <div className="bg-white">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {empoweringData.slice(0, 4).map((item, index) => (
                                <div key={index} className="border-2 border-[rgba(211,167,92,1)] rounded-lg p-6 h-full flex items-start">
                                    <div className="flex items-start space-x-4 sm:space-x-6">
                                        <img src={item.icon} alt="" className="h-12 w-12 sm:h-16 sm:w-16 md:h-20 md:w-20 object-contain flex-shrink-0 mt-1"/>
                                        <div className="text-left">
                                            <h3 className="text-base sm:text-lg font-bold text-black">{item.title}</h3>
                                            <p className="mt-1 text-sm sm:text-base text-black">{item.description}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        
                        <div className="mt-8 flex justify-center">
                           <div className="border-2 border-[rgba(211,167,92,1)] rounded-lg p-6 w-full md:max-w-2xl flex items-start">
                                <div className="flex items-start space-x-4 sm:space-x-6">
                                     <img src={empoweringData[4].icon} alt="" className="h-12 w-12 sm:h-16 sm:w-16 md:h-20 md:w-20 object-contain flex-shrink-0 mt-1"/>
                                     <div className="text-left">
                                        <h3 className="text-base sm:text-lg font-bold text-black">{empoweringData[4].title}</h3>
                                        <p className="mt-1 text-sm sm:text-base text-black">{empoweringData[4].description}</p>
                                    </div>
                                </div>
                           </div>
                        </div>
                    </div>
                </div>

                {/* Separator Line */}
                <hr className="border-t-2 border-[rgba(194,124,6,1)] my-16 md:my-24" />

                {/* --- Golden Timeline Section --- */}
                <div className="text-center">
                    <h2 className="text-5xl lg:text-6xl font-bold bg-gradient-to-b from-[rgba(191,142,65,1)] via-[rgba(255,216,156,1)] to-[rgba(191,142,65,1)] bg-clip-text text-transparent mb-4">
                        <span className="block">Golden</span>
                        <span className="block">Timeline</span>
                    </h2>
                    <p className="text-gray-500 mt-2 max-w-3xl mx-auto text-sm sm:text-base">This timeline highlights significant milestones in Sarthak Mittal's journey and the legacy of the Mittal family in industry and entrepreneurship.</p>
                    
                    <div className="container mx-auto w-full h-full mt-16">
                        <div className="relative wrap overflow-hidden p-4 sm:p-10 h-full">
                            <div className="absolute border-opacity-20 border-gray-700 h-full border" style={{left: '50%'}}></div>
                            {timelineData.map((item, index) => (
                                <div key={index} className={`mb-8 flex justify-between items-center w-full ${index % 2 === 0 ? 'flex-row-reverse left-timeline' : 'right-timeline'}`}>
                                    <div className="order-1 w-5/12"></div>
                                    <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-6 h-6 sm:w-8 sm:h-8 rounded-full">
                                        <h1 className="mx-auto font-semibold text-sm sm:text-lg text-white">{index + 1}</h1>
                                    </div>
                                    <div className={`order-1 rounded-lg shadow-xl w-5/12 px-4 py-4 sm:px-6 sm:py-4 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                                        <p className="mb-2 sm:mb-3 text-sm sm:text-base text-yellow-500">{item.year}</p>
                                        <h4 className="mb-2 sm:mb-3 font-bold text-lg md:text-2xl">{item.title}</h4>
                                        <p className="text-xs sm:text-sm md:text-base leading-snug text-gray-500 text-opacity-100">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Separator Line */}
                <hr className="border-t-2 border-[rgba(194,124,6,1)] my-16 md:my-24" />

                {/* --- Detailed History Text (Updated with your provided text) --- */}
                <div id="journey" className="text-lg text-gray-800 leading-relaxed space-y-10 text-justify">
                    <h3 className="text-3xl font-bold text-center mb-8 text-gray-900">THE MITTAL LEGACY: A STORY OF RESILIENCE AND HOPE</h3>
                    
                    <div>
                        <h4 className="text-2xl font-semibold mb-3">Part 1: The Mittal Legacy Begins (1907 - 1951)</h4>
                        <p>In the year 1907, as India began its slow march toward independence, two visionary men, Ganga Ram Mohanlal Mittal and Shri Babulal Mittal, took a bold step that would lay the foundation for a lasting legacy. They launched India’s first brass rolling mill, a venture that not only symbolized economic resilience but also hope for a burgeoning nation. Their determination to build something from the ground up inspired generations, transforming a small family-run operation into what would eventually evolve into the renowned Mittal Group.</p>
                        <p className="mt-4">Over the decades, this enterprise flourished, becoming a beacon of hard work and dedication. The Mittal family, bound together by blood and purpose, toiled side by side, cultivating a culture of collaboration and shared dreams. By 1951, Suresh Chandra Mittal, one of the heirs, began to expand the business alongside his brothers, pouring their hearts into their work. Their efforts bore fruit as the Mittal name became synonymous with quality and trust across India, creating jobs and nurturing a sense of community.</p>
                    </div>

                    <div>
                        <h4 className="text-2xl font-semibold mb-3">Part 2: Family Splits and Economic Decline (1980s - 2003)</h4>
                        <p>As the Mittal empire grew, so did the complexities of familial relationships. The once-unified vision began to fray under the weight of ambition and differing perspectives. Tensions escalated among the brothers, leading to a painful division of the family business. Suresh Chandra Mittal took the helm of Malwa Metal Industries, dedicating his life to its growth, yet the shadow of competition and market shifts loomed large.</p>
                        <p className="mt-4">As the new century approached, the Mittal Group faced significant challenges. Poor financial decisions and internal strife created a perfect storm, leading to an unforeseen decline. By 2003, the once-thriving enterprise, valued at an impressive 1,000 crores, crumbled into bankruptcy within a mere thirty years. The collapse sent shockwaves through the family, shattering dreams and hopes, and leaving behind a legacy that felt more like a ghost than a triumph.</p>
                    </div>

                    <div>
                        <h4 className="text-2xl font-semibold mb-3">Part 3: A Family’s Struggle and Sarthak’s Early Years (2003 - 2011)</h4>
                        <p>In December 2003, amidst the ashes of their family’s financial ruin, Sarthak was born. The world he entered was one of uncertainty and despair, a far cry from the legacy of affluence his family once enjoyed. His father, Ashutosh Mittal, was engulfed in sorrow over the collapse of the family business, grappling with depression that cast a long shadow over their home. The family transitioned from a life of comfort to a modest existence, facing financial hardship and personal challenges that tested their resolve.</p>
                        <p className="mt-4">Yet, in the midst of turmoil, Sarthak’s mother emerged as a beacon of strength and resilience. Working tirelessly, she became the heart of the family, nurturing her children and instilling in them values of kindness, curiosity, and unwavering determination. Sarthak, though just a child, felt the weight of their struggles, yet he also experienced the warmth of his mother’s love, shaping his character and igniting a spark of hope in his young heart.</p>
                    </div>
                    
                    <div>
                        <h4 className="text-2xl font-semibold mb-3">Part 4: Loss, Family Tensions, and Sarthak’s Strength (2011)</h4>
                        <p>The year 2011 brought profound loss to Sarthak’s life. His beloved grandmother, a guiding presence who showered him with love and wisdom, succumbed to cancer. Her passing created an irreplaceable void, yet it also revealed the immense strength of his mother, who navigated the family through grief with grace and resilience. As tensions simmered with extended family members, Sarthak’s mother made the difficult decision to temporarily leave their family home, seeking peace and stability.</p>
                        <p className="mt-4">Suddenly, Sarthak found himself taking on new responsibilities. As a young child, he ran errands and helped his mother wherever he could, stepping up in ways that belied his age. This challenging period taught him valuable lessons about family loyalty, the importance of standing together in times of hardship, and the courage to face life’s challenges head-on. Through it all, he developed a strong sense of empathy and resilience that would guide him throughout his life.</p>
                    </div>

                    <div>
                        <h4 className="text-2xl font-semibold mb-3">Early Academic Struggles and 10th Grade Milestone (2018-2019)</h4>
                        <p>In 2018, Sarthak Mittal entered 10th grade at Choithram School North Campus in Indore, facing academic challenges and frustration with the CBSE curriculum's rigid, test-oriented structure. The pressure to perform and lack of creative freedom left him disillusioned.</p>
                        <p className="mt-4">Despite this, he achieved a respectable 81.25% in his final exams. Still, he grew increasingly weary of studying just for marks, feeling trapped in a system that limited his potential.</p>
                    </div>

                    <div>
                        <h4 className="text-2xl font-semibold mb-3">Family Expectations and IIT Preparations (2019)</h4>
                        <p>By 2019, Sarthak faced family expectations to pursue IIT like his relatives, even though he was uncertain about his path. Despite his reservations about mathematics, he enrolled in Prestige Public School, a "dummy" school, while preparing for the IIT entrance exam at FIITJEE Indore.</p>
                        <p className="mt-4">Isolated and overwhelmed, Sarthak found it challenging to handle the complexities of IIT-level questions and yearned for a different path. Feeling a pull toward other interests, he began exploring social media content creation.</p>
                    </div>

                    <div>
                        <h4 className="text-2xl font-semibold mb-3">First YouTube Venture and Entrepreneurial Beginnings (2019-2020)</h4>
                        <p>Driven by curiosity, Sarthak launched his first YouTube channel, "Jokemon," experimenting with social media marketing by reposting content from platforms like TikTok. Although his family eventually discovered and shut down the channel to focus on his IIT preparations, he gained valuable insights into digital marketing.</p>
                        <p className="mt-4">Sarthak also saw an opportunity in his mother’s crafts, attempting to sell her handmade products on platforms like Amazon and Flipkart, facing initial setbacks before finding success on Meesho. This experience taught him about e-commerce, sparking a growing interest in business.</p>
                    </div>
                    
                    <div>
                        <h4 className="text-2xl font-semibold mb-3">Challenges During the COVID-19 Pandemic (2021)</h4>
                        <p>The COVID-19 pandemic severely impacted the Mittal family, with Sarthak's mother and grandfather both falling ill. Balancing IIT studies with caring for his family, Sarthak took on household responsibilities, including cooking and cleaning, while continuing his academic pursuits.</p>
                        <p className="mt-4">Although he contracted COVID-19 himself, a dedicated tutor motivated him to persevere, and he eventually completed 12th grade with a 74% aggregate.</p>
                    </div>

                    <div>
                        <h4 className="text-2xl font-semibold mb-3">Exploring New Academic Paths and Entrepreneurship at NMIMS (2022)</h4>
                        <p>After high school, Sarthak considered pursuing animation and design but ultimately stayed in Indore due to family ties, enrolling in a B.Tech + MBA program at NMIMS Indore. Here, he embraced coding and began exploring various entrepreneurial ideas, balancing academics with his drive to create impactful businesses.</p>
                        <p className="mt-4">He founded Mittal Alliance in 2020 to support MSMEs with AI solutions and rebranded his YouTube channel as "BAD Youth Media," eventually launching BadTalks, which connected industry professionals with students.</p>
                    </div>
                    
                    <div>
                        <h4 className="text-2xl font-semibold mb-3">Building a Network and Launching MentorMenti (2023)</h4>
                        <p>During his time at NMIMS, Sarthak joined the Microsoft Learn Student Ambassadors community, where he expanded his network globally. He founded a C++ WhatsApp community, quickly growing it to over 1,000 members, which led to the creation of MentorMenti, a platform connecting students with mentors.</p>
                        <p className="mt-4">Although MentorMenti closed after eight months due to disagreements within the founding team, it taught Sarthak crucial lessons in team dynamics and startup management.</p>
                    </div>
                </div>

                <hr className="border-t-2 border-[rgba(194,124,6,1)] my-12 md:my-12" />
                
                {/* --- Connect With Me Section --- */}
                <div className="mt-9">
                   <ConnectMe />
                </div>
            </main>
        </div>
    );
};

export default History;