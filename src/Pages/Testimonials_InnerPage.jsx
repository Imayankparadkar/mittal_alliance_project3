import React from 'react';
import Header from "../Components/Core/Header/Header_New"; // As requested

// Data for the testimonials to keep the JSX clean
const testimonialData = [
    {
        id: 1,
        image: "/Testimonials/testimonial3.png",
        name: "Dr. Sai Sanskrithi",
        role: "Professor, TEDx Speaker, Author",
        review: "Sarthak is a very intelligent and out-of-the-box thinker. He is highly professional and meticulous in his work, always bringing fresh ideas and unique perspectives to any task. His dynamic nature and innovative mindset make him stand out, constantly finding new ways of looking at challenges and opportunities.",
        review1:""},
    {
        id: 2,
        image: "/Testimonials/testimonial4.png",
        name: "Arab Khan",
        role: "CEO, UAV Systems",
        review: "I've had the pleasure of working with Sarthak Mittal, and I must say he brings an exceptional and dynamic personality to the table. His out-of-the-box thinking and innovative strategies in marketing and branding truly set him apart. Sarthak has an innate ability to connect with people easily, making collaboration seamless and enjoyable.        ",
        review1:"What stands out the most is his clarity in setting deliverables and consistently maintaining timelines. He leads teams with confidence, ensuring alignment, motivation, and results. If you're looking for someone who brings creativity, strategic insight, and reliable execution—Sarthak is the person you want on your side."
    },
    {
        id: 3,
        image: "/Testimonials/testimonial5.png",
        name: "Jahnavi Verma",
        role: "MBA-IIM ROHTAK 2023-26, Operations Manager",
        review: "I had the pleasure of working with Mr. Sarthak Mittal during my internship at Mittal Alliance, and I can confidently say that he is not only a helpful mentor but also someone with an insatiable hunger to learn, regardless of whether he is speaking with a junior or a senior. What stood out most about Sarthak was his remarkable dedication and work ethic. Every interaction with him was more than just a routine exchange of tasks; it was a session filled with guidance, insight, and meaningful reflection.",
        review1:"His ability to combine sharp professional acumen with a genuine interest in personal growth—both his own and that of others—left a lasting impact on me. Anyone who gets the opportunity to work with Sarthak will gain more than just a capable teammate; they will gain a thoughtful leader and an inspiring learner."
    },
    {
        id: 4,
        image: "/Testimonials/testimonial6.png",
        name: "Author Pawan Verma",
        role: "Author, Speaker & Management Consultant-Insurance",
        review: "What sets Sarthak apart is not just his fluency in AI, branding, and digital transformation, but his uncompromising belief in the power of youth. With a mission to turn students into CEOs and careers into legacies, he has mentored thousands, created tangible job opportunities, and built one of the most energetic and future-focused youth communities in India. Whether he's delivering a TEDx talk, conducting one of his 150+ workshops, or hosting his podcast, Sarthak brings clarity, credibility, and contagious energy to every interaction.",
        review1:"His personal brand is rooted in authenticity and bold ambition—qualities that reflect in his Mittal Millionaires community and his global leadership roadmap. From Fortune 500 consulting to grassroots mentorship, he operates at both altitude and depth. If you're looking to collaborate with someone who doesn't just dream big but executes bigger, Sarthak is the name to know. He isn’t just building companies—he’s building a legacy, and if you connect with him, he’ll challenge you to build yours too."
    },
    {
        id: 5,
        image: "/Testimonials/testimonial7.png",
        name: "Andriana Nunez",
        role: "Delivering Tangible Results",
        review: "In just a brief interaction, Sarthak Mittal completely shifted how I view branding. He reminded me that a powerful brand and authentic voice start with purpose, not just a portfolio. Through real examples, he showed me what it truly means to showcase your essence — not just what you do, but who you are. The clarity he brought to this concept was incredible, and his approach made the idea feel both inspiring and attainable.",
        review1:"Sarthak didn’t stop at theory — he gave me actionable, immediately applicable steps to elevate my online presence and align it with my deeper mission. His ability to distill complex branding ideas into clear, practical insights is rare, and his generosity in sharing his expertise is even rarer. If you’re looking for someone who can help you uncover and express your true brand essence, Sarthak is the person you want in your corner."
    },
    {
        id: 6,
        image: "/Testimonials/testimonial8.png",
        name: "Divyansh Agarwal",
        role: "Solution Principal @HighRadius | Student at Chandigarh University | Machine Learning & Python Enthusiast | Former Secretary @IEEE CUSB & Eloquence Consortium | Aspiring Soft Skills Coach",
        review: "I had the absolute privilege of working under Mr. Sarthak Mittal during my internship at BADVERSE.IN, where he was not just a mentor but also a great friend and guide. Meeting him in person at BAD Talks: The CEO Summit 2025 was truly inspiring, as I witnessed firsthand his passion, dedication, and visionary leadership in action. Throughout my internship, he consistently provided guidance, support, and encouragement, helping me navigate challenges with confidence and turning even the toughest moments into valuable learning experiences.",
        review1:"Sarthak sir is an exceptional leader, a true innovator, and someone who deeply believes in his initiatives. His mentorship played a crucial role in my personal and professional growth, and I truly appreciate his commitment to empowering others. Whether it was strategic decision-making or problem-solving during event execution, he was always there to help. I highly recommend him as a mentor to anyone looking to learn, grow, and excel in their journey, and I look forward to collaborating with him again in the future."
    },
    {
        id: 7,
        image: "/Testimonials/testimonial9.png",
        name: "Bruno Salazar Molinero",
        role: "Creator @Brunospeaks.com | Human-centered Native Spanish Coach | 5+ Years Experience",
        review: "Sarthak and his team in Mittal are one of a kind. They came out of nowhere, and are helping me to get my business to the next level. Professional, trustworthy, and always helpful. I'm looking forward to see where our collaboration in the future will take us.",
        // review1:"His personal brand is rooted in authenticity and bold ambition—qualities that reflect in his Mittal Millionaires community and his global leadership roadmap. From Fortune 500 consulting to grassroots mentorship, he operates at both altitude and depth. If you're looking to collaborate with someone who doesn't just dream big but executes bigger, Sarthak is the name to know. He isn’t just building companies—he’s building a legacy, and if you connect with him, he’ll challenge you to build yours too."
    },
    {
        id: 8,
        image: "/Testimonials/testimonial10.png",
        name: "Kartik Sharma",
        role: "Simplifying Artificial Intelligence for everyone!",
        review: "I had the privilege of being featured on a podcast hosted by Sarthak, and it was an inspiring experience to witness his passion for making a difference in the lives of young people. Sarthak is a remarkable young entrepreneur who is not just focused on his own growth but is deeply committed to uplifting the youth community by bridging the gap between academia and industry. His ability to create opportunities, foster meaningful connections, and share knowledge through his platforms is truly commendable, and during our podcast discussion on AI, his knack for engaging conversations and drawing out valuable insights was evident.",
        review1:"His dedication to empowering young minds, coupled with his entrepreneurial spirit, positions him as a true leader and changemaker. I’m excited to see how his initiatives will continue to inspire and positively impact the next generation. I highly recommend Sarthak to anyone seeking to collaborate with someone who is driven, innovative, and genuinely invested in creating value for the community. Keep up the great work, Sarthak — the future is bright with leaders like you paving the way."
    },
    {
        id: 9,
        image: "/Testimonials/testimonial11.png",
        name: "Sahil Kumar Nagpal",
        role: "International Life Coach | Best Selling Author | Keynote Speaker | Executive Coach To Leaders | Unconventional Leadership Trainer | Founder @ Optimum Living Media",
        review: "Sarthak is a very dynamic, down to earth yet proactive individual. His sincerity and resilience outshines his experience. I did a podcast with him and his questions were very good. Good questions lead to a good show. He is a visionary with a doubt. I appreciate him for his work and wish him great luck for the future.",
        // review1:"His personal brand is rooted in authenticity and bold ambition—qualities that reflect in his Mittal Millionaires community and his global leadership roadmap. From Fortune 500 consulting to grassroots mentorship, he operates at both altitude and depth. If you're looking to collaborate with someone who doesn't just dream big but executes bigger, Sarthak is the name to know. He isn’t just building companies—he’s building a legacy, and if you connect with him, he’ll challenge you to build yours too."
    },
    {
        id: 10,
        image: "/Testimonials/testimonial12.png",
        name: "Saurab Gupta",
        role: "Democratising Coaching with AI-Native Enterprise Platfrom ⚡ Founder at Enablerz || Making Coaching Accessible to Every Employee with Impact at Scale || Ex-Tata Motors, BNP, Ghari || Learner || Explorer || Poet",
        review: "I had the pleasure of being featured on Sarthak's podcast as the Founder of Enablerz, where we discussed my journey in building a B2B SaaS product for the global market. Sarthak is an incredibly talented and energetic podcaster, blogger, and speaker who brings a unique blend of enthusiasm, insight, and professionalism to his work. From the very beginning, his ability to ask thoughtful, engaging questions was evident, creating an environment that felt both comfortable and stimulating, allowing for an authentic exchange of ideas. His deep understanding of the tech and startup ecosystem added tremendous value to our conversation, making it not only informative but also inspiring for listeners.",
        review1:"Sarthak’s passion for storytelling, paired with his expertise in the digital space, truly sets him apart. He has a rare gift for blending knowledge with charisma, ensuring every interaction leaves a lasting impact. He is undoubtedly a rising star in the world of podcasting and blogging, and I have no doubt his influence will only continue to grow. I highly recommend Sarthak to anyone looking to collaborate with a dynamic, insightful, and purpose-driven content creator."
    },

    {
        id: 11,
        image: "/Testimonials/testimonial13.png",
        name: "Vincent Messelier",
        role: "Ambassador, Arts and Culture Network | Gallery owner",
        review: "Sarthak is a very versatile businessman that has the skills on all technical matter about marketing, SEO, digitalizing, social media, where he combines these skillsto get personnal solutions for his client. And all above and most important, he knows how important in life, is that, connecting to the right people and have personnal meetings are much more important.In life it does not matter what you know, but it is all about 'WHO' you know.",
        // review1:"Sarthak’s passion for storytelling, paired with his expertise in the digital space, truly sets him apart. He has a rare gift for blending knowledge with charisma, ensuring every interaction leaves a lasting impact. He is undoubtedly a rising star in the world of podcasting and blogging, and I have no doubt his influence will only continue to grow. I highly recommend Sarthak to anyone looking to collaborate with a dynamic, insightful, and purpose-driven content creator."
    },

    {
        id: 12,
        image: "/Testimonials/testimonial14.png",
        name: "Ruth Owen",
        role: "Founder of The Identity Imperative Movement",
        review: "I recently connected with Sarthak on a networking call, followed by a 1:1, and was truly impressed by his commitment to personal growth and to helping his clients realize their potential. He shared powerful ideas on how I could extend my reach and amplify my message, with a solution-driven, laser-focused approach that was both insightful and practical. Beyond his strategies, what stood out was his genuine care for solving problems and freeing people from limitations so they can create a wider impact. If this is a version of the “circular economy,” I’m all for it—and I highly recommend having a conversation with him, as he is both insightful and highly effective in getting businesses to focus on what truly matters.",
        // review1:"Sarthak’s passion for storytelling, paired with his expertise in the digital space, truly sets him apart. He has a rare gift for blending knowledge with charisma, ensuring every interaction leaves a lasting impact. He is undoubtedly a rising star in the world of podcasting and blogging, and I have no doubt his influence will only continue to grow. I highly recommend Sarthak to anyone looking to collaborate with a dynamic, insightful, and purpose-driven content creator."
    },

    {
        id: 13,
        image: "/Testimonials/testimonial15.png",
        name: "Matt Gutierrez",
        role: "Blog & Email Copywriter For Fitness Coaches And Brands| Digital Marketing Expert",
        review: "I've worked with Sarthak the past two years and from that time I learned not only he is a passionate worker but also the hardest worker in the room. He is on track to building his legacy and his footprint in the business world. We are currently business partners and still learning from him. I am interested on seeing him continue to build his future and seeing everyone that looks up to him to follow in his foot steps. Rarley I see someone that works like that and earns his respect. He is definitely someone I can follow into battle with.",
        // review1:"Sarthak’s passion for storytelling, paired with his expertise in the digital space, truly sets him apart. He has a rare gift for blending knowledge with charisma, ensuring every interaction leaves a lasting impact. He is undoubtedly a rising star in the world of podcasting and blogging, and I have no doubt his influence will only continue to grow. I highly recommend Sarthak to anyone looking to collaborate with a dynamic, insightful, and purpose-driven content creator."
    },

    {
        id: 14,
        image: "/Testimonials/testimonial16.png",
        name: "Thomas Hansen",
        role: "#1 CHIEF AI GUY | CEO @ AINIRO",
        review: "I've had the pleasure of working together with Sarthak on some podcasts, and he is a great listener, always open for new perspectives, and truly an agile manager and leader. I recommend Sarthak hands down to anyone lucky enough to be able to work with him!",
        // review1:"Sarthak’s passion for storytelling, paired with his expertise in the digital space, truly sets him apart. He has a rare gift for blending knowledge with charisma, ensuring every interaction leaves a lasting impact. He is undoubtedly a rising star in the world of podcasting and blogging, and I have no doubt his influence will only continue to grow. I highly recommend Sarthak to anyone looking to collaborate with a dynamic, insightful, and purpose-driven content creator."
    },

    {
        id: 15,
        image: "/Testimonials/testimonial17.png",
        name: "Arka Majumdar",
        role: "UX AND ACCESSIBLE DESIGN | Building intuitive and engaging experiences for 16+ years | AI Enthusiast",
        review: "When i first met Sarthak i saw a guy who has a Hunger to Learn, and now when is see Sarthak Mittal who has become visionary marketing leader whose strategic insights and positive attitude have been instrumental in driving the growth and recognition of Mittal Alliance. I wholeheartedly recommend Sarthak for his expertise and dedication to excellence",
        // review1:"Sarthak’s passion for storytelling, paired with his expertise in the digital space, truly sets him apart. He has a rare gift for blending knowledge with charisma, ensuring every interaction leaves a lasting impact. He is undoubtedly a rising star in the world of podcasting and blogging, and I have no doubt his influence will only continue to grow. I highly recommend Sarthak to anyone looking to collaborate with a dynamic, insightful, and purpose-driven content creator."
    },

    {
        id: 16,
        image: "/Testimonials/testimonial18.png",
        name: "Yash Mishra",
        role: "Founder & CEO at Innovait Technologies | IT Consultant | Empowering MSMEs with Cutting-Edge Technology",
        review: "Sarthak Mittal is a visionary leader with exceptional marketing and branding skills. His positive attitude and strategic insights have been invaluable in helping us gain recognition and achieve growth. Under his leadership, Mittal Alliance has significantly elevated our brand. I highly recommend Sarthak for his expertise and commitment to excellence.",
        // review1:"Sarthak’s passion for storytelling, paired with his expertise in the digital space, truly sets him apart. He has a rare gift for blending knowledge with charisma, ensuring every interaction leaves a lasting impact. He is undoubtedly a rising star in the world of podcasting and blogging, and I have no doubt his influence will only continue to grow. I highly recommend Sarthak to anyone looking to collaborate with a dynamic, insightful, and purpose-driven content creator."
    },

    {
        id: 17,
        image: "/Testimonials/testimonial19.png",
        name: "Dhiraj Sachdeva",
        role: "Growth Hacker | Digital marketing Agency owner | Community Builder, and Retail Innovator",
        review: "I’ve had the pleasure of witnessing Mr. Sarthak’s exceptional skills in business consulting, where his unique strategies have significantly contributed to business growth. His podcasting talent further amplifies his expertise, making him a valuable asset in the business development space. Highly recommend working with him!",
        // review1:"Sarthak’s passion for storytelling, paired with his expertise in the digital space, truly sets him apart. He has a rare gift for blending knowledge with charisma, ensuring every interaction leaves a lasting impact. He is undoubtedly a rising star in the world of podcasting and blogging, and I have no doubt his influence will only continue to grow. I highly recommend Sarthak to anyone looking to collaborate with a dynamic, insightful, and purpose-driven content creator."
    },

    {
        id: 18,
        image: "/Testimonials/testimonial20.png",
        name: "Toufique Umar",
        role: "Business Lead – Toufique Electricals | BCA Student | Learning Cybersecurity & AI | Tech x Business Growth",
        review: "Sarthak was incredibly helpful when I consulted him for my business. He shared valuable advice that helped me improve my ideas and direction. His knowledge and willingness to support startups really stood out. I highly recommend him for his guidance and expertise.",
        // review1:"Sarthak’s passion for storytelling, paired with his expertise in the digital space, truly sets him apart. He has a rare gift for blending knowledge with charisma, ensuring every interaction leaves a lasting impact. He is undoubtedly a rising star in the world of podcasting and blogging, and I have no doubt his influence will only continue to grow. I highly recommend Sarthak to anyone looking to collaborate with a dynamic, insightful, and purpose-driven content creator."
    },

    {
        id: 19,
        image: "/Testimonials/testimonial21.png",
        name: "Yashpreeth Nijalinge",
        role: "Founder at So Called CS Engineers(SCCSE)",
        review: "I recently had the distinct pleasure of sharing the podcast with Sarthak and even in the brief interaction , I was impressed with his work and during our conversation, Sarthak had taught me many things and I would say he has a visionary mindset,always thinking one step ahead and to be total it was inspiring and informative",
        // review1:"Sarthak’s passion for storytelling, paired with his expertise in the digital space, truly sets him apart. He has a rare gift for blending knowledge with charisma, ensuring every interaction leaves a lasting impact. He is undoubtedly a rising star in the world of podcasting and blogging, and I have no doubt his influence will only continue to grow. I highly recommend Sarthak to anyone looking to collaborate with a dynamic, insightful, and purpose-driven content creator."
    },

    {
        id: 20,
        image: "/Testimonials/testimonial22.png",
        name: "Abhisek Mishra",
        role: "Democratising Coaching with AI-Native Enterprise Platfrom ⚡ Founder at Enablerz || Making Coaching Accessible to Every Employee with Impact at Scale || Ex-Tata Motors, BNP, Ghari || Learner || Explorer || Poet",
        review: "I recently had the pleasure of being hosted by Sarthak Mittal on his podcast, and I am truly amazed by his energy and innovation. At just 21, Sarthak is already leading Mittal Alliance and Badbusiness.in with remarkable vision and determination which is rare at such a young age. Sarthak is not just a leader; he’s a trailblazer. His innovative projects for pets and efforts to prevent ATM robberies demonstrate his commitment to solving real-world problems. His passion for technology and entrepreneurship is contagious, and his work with FFA Animal NGO highlights his compassion and dedication to animal welfare.",
        // review1:"Sarthak’s passion for storytelling, paired with his expertise in the digital space, truly sets him apart. He has a rare gift for blending knowledge with charisma, ensuring every interaction leaves a lasting impact. He is undoubtedly a rising star in the world of podcasting and blogging, and I have no doubt his influence will only continue to grow. I highly recommend Sarthak to anyone looking to collaborate with a dynamic, insightful, and purpose-driven content creator."
    },

    {
        id: 21,
        image: "/Testimonials/testimonial23.png",
        name: "Priya Talreja",
        role: "Team Player , Extrovert and Professional with a keen interest in project and product management",
        review: "As I approached Sarthak for us to partner on my current venture not only did he took out the time to get on a call with me but he left with a great insight that is hard to find these days. a great feedback and a great coworker. I am looking forward to partner on more projects and take them to sucess. As a first client of mine Bad Business will always be a mark in my professional journey.",
        // review1:"Sarthak’s passion for storytelling, paired with his expertise in the digital space, truly sets him apart. He has a rare gift for blending knowledge with charisma, ensuring every interaction leaves a lasting impact. He is undoubtedly a rising star in the world of podcasting and blogging, and I have no doubt his influence will only continue to grow. I highly recommend Sarthak to anyone looking to collaborate with a dynamic, insightful, and purpose-driven content creator."
    },

    {
        id: 22,
        image: "/Testimonials/testimonial24.png",
        name: "Dr Mohammad Zubair Ahmad",
        role: "20+ Years in Tourism & Hospitality | Director & Professor | Passionate About Entrepreneurship & Societal Impact",
        review: "We are collaborating with BadBusiness, where we support them with business strategy, planning, and client servicing, while they assist us and our clients with technology-related aspects. Sarthak is a dynamic, active, and focused professional, and I sincerely wish him great success in all his endeavours.",
        // review1:"Sarthak’s passion for storytelling, paired with his expertise in the digital space, truly sets him apart. He has a rare gift for blending knowledge with charisma, ensuring every interaction leaves a lasting impact. He is undoubtedly a rising star in the world of podcasting and blogging, and I have no doubt his influence will only continue to grow. I highly recommend Sarthak to anyone looking to collaborate with a dynamic, insightful, and purpose-driven content creator."
    },

    {
        id: 23,
        image: "/Testimonials/testimonial25.png",
        name: "Vishal Jain",
        role: "“Founder @ Saarthi AI | Building CollabiFy, Rideo, DOT AI | Helping founders build, connect & grow”",
        review: "I highly recommend Sarthak Mittal. Sarthak has been instrumental in building my brand and fostering a vibrant community among young professionals. His innovative strategies and dedication have greatly contributed to our growth and success. Sarthak’s ability to connect with and engage our target audience sets him apart. He is a valuable asset to any team and will undoubtedly continue to excel in his career.",
        // review1:"Sarthak’s passion for storytelling, paired with his expertise in the digital space, truly sets him apart. He has a rare gift for blending knowledge with charisma, ensuring every interaction leaves a lasting impact. He is undoubtedly a rising star in the world of podcasting and blogging, and I have no doubt his influence will only continue to grow. I highly recommend Sarthak to anyone looking to collaborate with a dynamic, insightful, and purpose-driven content creator."
    },

    {
        id: 24,
        image: "/Testimonials/testimonial26.png",
        name: "Akshat Aggarwal",
        role: "Growth Intern at Vedantu | Harvard Aspire Leader Fellow | McKinsey Forward Fellow",
        review: "I recently connected with Sarthak, and I must say he’s one of the most impressive individuals I’ve met. His ability to tackle complex problems with enthusiasm is remarkable—he doesn’t shy away from challenges but dives in headfirst. With an unmatched entrepreneurial spirit, he’s always generating new ideas and looking for opportunities to innovate, yet what sets him apart is that he’s not just a dreamer but a doer. His resilience is unwavering; no matter the setback, he learns, adapts, and comes back stronger. Equally inspiring is his dedication to continuous learning, always seeking new knowledge and skills to push himself to grow and evolve.",
        review1:"In short, Sarthak is a rare gem. He's a brilliant problem solver with a contagious entrepreneurial spirit fueled by resilience and a thirst for knowledge. I do not doubt that he will achieve great things in his chosen field. I wholeheartedly recommend him for any opportunity that demands talent, drive, and an insatiable curiosity."
    },
    {
        id: 25,
        image: "/Testimonials/testimonial27.png",
        name: "Soham Mandal (Founder and CEO)",
        role: "Co-Founder of DOUM | Innovating Home Services | Empowering Professionals with Opportunities",
        review: "In the tapestry of life, Sarthak Mitta shines as a vibrant thread, weaving boundless creativity with a natural flair for leadership. I first encountered him during a webinar hosted by Inside Community, where his mentoring left a lasting impression on me. His guidance carries a subtle brilliance that inspires a genuine longing for mentorship of his caliber. What truly sets him apart, however, is the humility that crowns his character, making him not just a mentor but a paragon of greatness. To collaborate with Sarthak is to embark on a journey guided by a true luminary—a beacon of inspiration and wisdom.",
        review1:"As he charts the course for his future endeavors, I extend heartfelt wishes for a path adorned with the exquisite hues of success and the undeniable beauty of accomplishment. A mosaic of admiration and camaraderie defines our bond, for I am unequivocally fortunate to be embraced as a brother in his mentorship. My esteem for him transcends mere words; it is a profound, unspoken reverence that graces the very essence of our connection."
    },



    

];

// Reusable component for each testimonial card, now with alternating layout
// Reusable component for each testimonial card, now with alternating layout
const TestimonialCard = ({ image, name, role, review, review1, isReversed }) => (
    <div className={`bg-white border-2 border-[#D0A151] shadow-xl p-6 md:p-8 flex flex-col md:flex-row items-center gap-6 md:gap-8 w-full ${isReversed ? 'md:flex-row-reverse' : ''} relative`}>
        
        {/* Testimonial Image */}
        <div className="flex-shrink-0">
            <img 
                src={image} 
                alt={`${name}'s testimonial`} 
                className="w-32 h-32 md:w-auto md:h-auto object-cover shadow-md"
                onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/192x192/FFFFFF/D0A151?text=Image'; }}
            />
        </div>

        {/* Testimonial Content */}
        <div className={`relative text-center ${isReversed ? 'md:text-right' : 'md:text-left'}`}>
            
            {/* Quote Start */}
            <img
                src="/Core/q1.png"
                className="w-6 sm:w-8 absolute -top-2.5 left-0 transform -translate-x-1/2 -translate-y-1/2"
                alt="Quote Start"
            />

            <p className="text-base lg:text-lg  mb-4 text-gray-700">"{review}"</p>
            {review1 && <p className="text-base lg:text-lg  mb-4 text-gray-700">"{review1}"</p>}
            
            <h4 className="font-bold text-xl text-gray-900">{name}</h4>
            <p className="font-medium text-sm text-gray-600">{role}</p>

            {/* Quote End */}
            <img
                src="/Core/q1.png"
                className="w-6 sm:w-8 absolute -bottom-3.5 right-0 transform translate-x-1/2 translate-y-1/2 scale-x-[-1]"
                alt="Quote End"
            />
        </div>
    </div>
);



const Testimonials_InnerPage = () => {
    return (
        <div className="bg-white min-h-screen mt-20">
            <Header />

            {/* Decorative Images Section - removed shape styling */}
            <div className="">
                    <img 
                        src="/Testimonials/line.png" 
                        alt="Decorative line" 
                        className="" 
                        onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/160x8/FFFFFF/000000?text='; }}
                    />
                    <div className="">
                        <img 
                            src="/Testimonials/testimonial1.png" 
                            alt="Testimonial collage 1" 
                            className=""
                            onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/192x192/CCCCCC/FFFFFF?text=Img1'; }}
                        />
                        <img 
                            src="/Testimonials/testimonial2.png" 
                            alt="Testimonial collage 2" 
                            className=""
                            onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/192x192/CCCCCC/FFFFFF?text=Img2'; }}
                        />
                    </div>
                </div>

            <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-15">
                

                {/* Page Heading Section */}
                <div className="text-center mb-10 md:mb-15">
                    <h1 
                        className="text-4xl md:text-4xl font-extrabold uppercase "
                        style={{ color: '#D0A151' }}
                    >
                        Voices Shaping Mittal Alliance Industries' Legacy
                    </h1>
                    <p 
                        className="text-sm md:text-4xl mt-2"
                        style={{ color: '#808080' }}
                    >
                        Real Stories, Real Impact at Mittal Alliance
                    </p>
                </div>

                {/* Testimonials Grid */}
                <div className="grid grid-cols-1 gap-12 md:gap-16">
                    {testimonialData.map((testimonial, index) => (
                        <TestimonialCard 
                            key={testimonial.id}
                            image={testimonial.image}
                            name={testimonial.name}
                            role={testimonial.role}
                            review={testimonial.review}
                            review1={testimonial.review1}
                            isReversed={index % 2 !== 0} // This creates the alternating effect
                        />
                    ))}
                </div>
            </main>
        </div>
    );
};

export default Testimonials_InnerPage;
