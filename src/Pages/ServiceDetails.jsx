import React from "react";
import { Link, useParams } from "react-router-dom";
// In your actual project, you would import the data from its own file like this:
// import { allServicesData } from '../data/serviceData';
import Header from "../Components/Core/Header/Header_New";

// --- Data for Services ---
// This data is included here so the component can run independently.
// In your project, this would be in a separate data.js file.
const allServicesData = [
  {
    id: 1,
    title: "MarTech (Marketing Technology) Strategy",
    subtitle: "Empowering Growth Through Smart Integration",
    description:
      "In today’s digital-first world, aligning marketing with the right technology is no longer optional - it's essential. We help you bridge the gap between strategy and execution by implementing intelligent MarTech (Marketing Technology) stacks tailored to your business goals.",
    secondaryTitle: "Marketing Technology Strategy",
    secondaryDescription:
      "Bridge the gap between marketing and technology. We help you implement powerful MarTech stacks that enhance customer experience, streamline marketing operations, and drive data-backed decisions that fuel growth.",
    imageUrl: "/Services/service1.png",
    whatWeOffer: [
      {
        title: "Seamless Integration of Tools",
        description:
          "Connect your marketing systems for better efficiency and collaboration.",
      },
      {
        title: "Enhanced Customer Experience",
        description:
          "Deliver personalized, data-driven interactions across every touchpoint.",
      },
      {
        title: "Optimized Operations",
        description:
          "Automate repetitive tasks and streamline campaign management to save time and resources.",
      },
      {
        title: "Smarter Decision-Making",
        description:
          "Use actionable insights and real-time analytics to make confident, growth-focused decisions.",
      },
    ],
    whyItMatters:
      "A well-executed MarTech strategy fuels better marketing performance, higher ROI, and a stronger connection with your audience. Whether you're scaling up or refining existing processes, we’re here to turn your tech investments into real business results.",
    pricing: {
      amount: "4,50,000",
      note: "Custom solutions based on your business size, needs, and growth goals.",
    },
  },
  {
    id: 2,
    title: "BrandTech Consulting ",
    subtitle: "Empowering Growth Through Smart Integration",
    description:
      "In today’s brand-driven economy, combining creative branding with cutting-edge technology isn’t just an advantage – it’s a necessity. We help you bridge the gap between vision and execution by integrating intelligent BrandTech (Brand Technology) solutions tailored to amplify your brand presence and achieve your business objectives.",
    secondaryTitle: "Marketing Technology Strategy",
    secondaryDescription:
      "Reimagine your brand with the power of technology. Our BrandTech solutions combine creative branding with cutting-edge digital tools—ensuring your business stands out, stays relevant, and builds lasting emotional connections with your audience",
    imageUrl: "/Services/service2.png",
    whatWeOffer: [
      {
        title: "Seamless Integration of Creative and Technology",
        description:
          "Align your brand identity with digital platforms for consistent and impactful communication.",
      },
      {
        title: "Enhanced Audience Engagement",
        description:
          "Deliver personalized, interactive experiences that resonate and build loyalty across every touchpoint.",
      },
      {
        title: "Optimized Brand Operations",
        description:
          "Simplify brand management and automate routine activities, saving time and maximizing creative output.",
      },
      {
        title: "Data-Driven Brand Insights",
        description:
          "Leverage actionable data and analytics to inform branding decisions and measure campaign effectiveness.",
      },
    ],
    whyItMatters:
      "A well-executed BrandTech strategy drives greater brand recognition, stronger audience loyalty, and increased impact. Whether you’re launching a new brand or refreshing an existing one, we’re here to help you transform ideas and technology into lasting emotional connections with your audience.",
    pricing: {
      amount: "5,00,000",
      note: "Custom solutions based on your business size, needs, and growth goals.",
    },
  },
  {
    id: 3,
    title: "Personal Brand Consulting",
    subtitle: "Crafting an Authentic Presence That Inspires Influence",
    description:
      "In today’s hyper-connected world, your personal brand is more than just a profile—it’s your reputation, your story, and your impact. We help entrepreneurs, coaches, and thought leaders shape a compelling, authentic brand presence that builds trust, attracts opportunities, and positions you as a go-to authority in your field.",
    secondaryTitle: "Personal Brand Strategy",
    secondaryDescription:
      "Bridge the gap between who you are and how the world sees you. We work with you to create a personal brand that reflects your values, amplifies your voice, and communicates your expertise across digital and real-world platforms.",
    imageUrl: "/Services/service3.png",
    whatWeOffer: [
      {
        title: "LinkedIn Optimization",
        description:
          "Craft a powerful, professional LinkedIn profile that showcases your expertise and attracts the right audience.",
      },
      {
        title: "Personal Website Development",
        description:
          "Build a modern, impactful website that serves as your digital home and personal portfolio.",
      },
      {
        title: "Media Positioning",
        description:
          "Strategically place your brand in relevant media, podcasts, and speaking opportunities for maximum visibility.",
      },
      {
        title: "Content Strategy & Storytelling",
        description:
          "Develop engaging, value-driven content that reflects your personality and resonates with your target audience.",
      },
    ],
    whyItMatters:
      "A strong personal brand builds credibility, fosters trust, and opens doors to opportunities you never knew existed. Whether you’re launching your brand from scratch or refining your online presence, we help you transform your expertise into lasting influence.",
    pricing: {
      amount: "1,50,000",
      note: "Custom solutions based on your business size, needs, and growth goals.",
    },
  },
  {
    id: 4,
    title: "Sales Coaching & Consulting",
    subtitle: "Turning Conversations into Conversions",
    description:
      "In today’s competitive market, selling isn’t just about pushing a product—it’s about building trust, understanding customer needs, and delivering value at every stage. We help you refine your sales approach, enhance team performance, and leverage smart tools to close deals more consistently.",
    secondaryTitle: "Sales Coaching & Consulting",
    secondaryDescription:
      "Transform your sales process from guesswork to a predictable growth engine. We equip your team with the right skills, strategies, and technologies to convert leads into loyal customers—faster and more efficiently.",
    imageUrl: "/Services/service4.png",
    whatWeOffer: [
      {
        title: "Process Optimization",
        description:
          "Streamline your sales funnel, eliminate bottlenecks, and ensure every lead is handled with precision and care.",
      },
      {
        title: "Skills Development",
        description:
          "Train your team with proven sales frameworks, persuasive communication techniques, and objection-handling strategies.",
      },
      {
        title: "AI & Automation Integration",
        description:
          "Use automation tools and AI-driven insights to prioritize leads, personalize outreach, and track performance in real time.",
      },
      {
        title: "Data-Backed Strategies",
        description:
          "Leverage analytics to understand buyer behavior and adjust sales tactics for maximum impact.",
      },
    ],
    whyItMatters:
      "An effective sales strategy doesn’t just boost revenue—it builds long-term customer relationships, strengthens brand loyalty, and creates a scalable growth model. Whether you’re building a sales team from scratch or optimizing an existing one, we help you turn opportunities into measurable results.",
    pricing: {
      amount: "4,50,000",
      note: "Custom solutions based on your business size, needs, and growth goals.",
    },
  },
  {
    id: 5,
    title: "Business Expansion Strategy (USA, Europe & UK)",
    subtitle: "Go Global with Confidence",
    description:
      "In today’s interconnected economy, tapping into international markets is not just an opportunity—it’s a growth imperative. We help you turn your global ambitions into reality by crafting tailored expansion strategies for the USA, Europe, and the UK. From market entry planning to operational setup, we bridge the gap between vision and execution.",
    secondaryTitle: "Business Expansion Strategy",
    secondaryDescription:
      "Expand beyond borders with a clear, data-driven plan. We guide Indian businesses in navigating global markets by providing in-depth insights, building strong local partnerships, and ensuring compliance with regional regulations—so you can grow without unnecessary risks.",
    imageUrl: "/Services/service5.png",
    whatWeOffer: [
      {
        title: "Market Intelligence",
        description:
          "Gain deep insights into consumer behavior, industry trends, and competitive landscapes in target regions.",
      },
      {
        title: "Strategic Market Entry",
        description:
          "Select the right entry model—whether it’s partnerships, acquisitions, or direct presence—based on your business goals.",
      },
      {
        title: "Regulatory Navigation",
        description:
          " Understand and comply with legal, tax, and trade requirements to ensure a smooth market entry.",
      },
      {
        title: "Local Partner Networks",
        description:
          "Leverage our trusted network of local partners for faster, more effective market penetration.",
      },
    ],
    whyItMatters:
      "A strong global expansion strategy minimizes costly missteps, accelerates market penetration, and positions your brand for long-term success. Whether you’re entering one new market or scaling across continents, we ensure your international growth journey is strategic, compliant, and profitable.",
    pricing: {
      amount: "8,50,000",
      note: "Custom solutions based on your business size, needs, and growth goals.",
    },
  },
  {
    id: 6,
    title: "Self-Analysis & Life Auditing",
    subtitle: "Empowering Growth Through Personal Clarity",
    description:
      "In today’s fast-paced world, growth isn’t just about working harder—it’s about working with purpose. Our Self-Analysis & Life Auditing framework helps you pause, reflect, and gain clarity on who you are, where you’re headed, and how you can align your daily actions with your bigger vision.",
    secondaryTitle: "Self-Analysis & Life Auditing",
    secondaryDescription:
      "Bridge the gap between where you are and where you want to be. We guide you through structured reflection and practical life auditing techniques to help you identify strengths, uncover blind spots, and create a clear, actionable path toward your goals.",
    imageUrl: "/Services/service6.png",
    whatWeOffer: [
      {
        title: "Comprehensive Self-Reflection",
        description:
          " Evaluate your values, priorities, and habits to understand what drives you.",
      },
      {
        title: "Vision Alignment",
        description:
          "Define or refine your long-term goals and ensure your actions are aligned with your purpose.",
      },
      {
        title: "Habit & Routine Optimization",
        description:
          "Identify what’s helping you and what’s holding you back—then restructure for success.",
      },
      {
        title: "Progress Tracking",
        description:
          "Monitor your growth with tools and methods that keep you accountable and inspired.",
      },
    ],
    whyItMatters:
      "Clarity leads to better decisions, stronger focus, and more intentional growth—both personally and professionally. Whether you’re seeking a fresh start or fine-tuning your current path, our life auditing process ensures you’re investing your time and energy in what truly matters.",
    pricing: { amount: "1,00,000", note: "Custom solutions based on your business size, needs, and growth goals." },
  },
  {
    id: 7,
    title: "LinkedIn Consulting & Automation",
    subtitle: "Transform Connections into Conversions",
    description:
      "In today’s professional landscape, LinkedIn is more than just a networking platform—it’s a powerful engine for building authority, generating leads, and driving business growth. We help you unlock LinkedIn’s full potential by refining your presence, amplifying your content, and automating outreach to keep your pipeline active without constant manual effort.",
    secondaryTitle: "LinkedIn Strategy & Automation",
    secondaryDescription:
      "Bridge the gap between online presence and real business results. We work with you to design a LinkedIn strategy that positions you as an industry leader, engages your ideal audience, and runs on smart automation so you can focus on closing deals, not chasing them.",
    imageUrl: "/Services/service7.png",
    whatWeOffer: [
      {
        title: "Profile Optimization",
        description:
          "Craft a high-impact profile that communicates your value, credibility, and expertise at first glance.",
      },
      {
        title: "Content Strategy & Creation",
        description:
          "Develop and distribute thought-leadership content that attracts, nurtures, and converts your audience.",
      },
      {
        title: "Automated Outreach Systems",
        description:
          " Implement smart, compliant automation to connect with qualified prospects at scale.",
      },
      {
        title: "Engagement & Relationship Building",
        description:
          "Nurture leads through meaningful interactions that build trust and authority.",
      },
    ],
    whyItMatters:
      "A strong LinkedIn presence backed by an automated system means consistent visibility, a growing network, and a predictable stream of opportunities. Whether you’re building your personal brand or scaling your business, we’ll help you turn LinkedIn into your most reliable lead generation channel.",
    pricing: {
      amount: "2,00,000",
      note: "Custom solutions based on your business size, needs, and growth goals.",
    },
  },
];

/**
 * ServiceDetails Component
 * This page displays the full details for a single service.
 * It gets the service ID from the URL to know which service to display.
 */
const ServiceDetails = () => {
  // The useParams hook reads the 'id' from the URL (e.g., /services/1)
  const { id } = useParams();
  // Find the service data that matches the ID from the URL
  const service = allServicesData.find((s) => s.id === parseInt(id));

  // If no service with that ID is found, display an error message.
  if (!service) {
    return (
      <div className=" text-white h-screen flex flex-col items-center justify-center">
        <Header />
        <div className="flex-grow flex items-center justify-center text-2xl">
          Service not found!
        </div>
      </div>
    );
  }

  // If the service is found, render the detailed page layout.
  return (
    <div className=" text-white min-h-screen font-sans">
      <Header />
      {/* Common decorative line image */}
      <img
        src="/Services/line.png"
        alt="Decorative line"
        className="w-full"
        onError={(e) => {
          e.target.onerror = null;
          e.target.style.display = "none";
        }}
      />

      <main>
        <div>
          {/* Service-specific image from the data */}
          <img
            src={service.imageUrl}
            alt={service.title}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src =
                "https://placehold.co/800x400/1a1a1a/cccccc?text=Image+Not+Found";
            }}
          />
          {/* Common image for all services */}
          <img
            src="/Services/service8.png"
            alt="Service offering"
            className="mb-12"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src =
                "https://placehold.co/800x200/1a1a1a/cccccc?text=Image+Not+Found";
            }}
          />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Centered Top Section */}
          <div className="text-center mb-16">
            <h1
              className="text-3xl sm:text-4xl md:text-5xl font-bold uppercase"
              style={{ color: "rgba(208, 161, 81, 1)" }}
            >
              {service.title}
            </h1>
            <p className="text-lg sm:text-3xl text-gray-500 mt-4">
              {service.subtitle}
            </p>
            <br />
            <p className="max-w-3xl mt-4 text-gray-500 leading-relaxed">
              {service.description}
            </p>
          </div>

          {/* Left-Aligned Main Content */}
          <div className="text-left">

            <h2 className="text-2xl font-bold uppercase text-black">
              {service.secondaryTitle}
            </h2>
            <p className="max-w-3xl mt-4 text-gray-500 leading-relaxed">
              {service.secondaryDescription}
            </p>

            <div className="my-12">
              <h2 className="text-2xl font-semibold text-left text-[#424242] mb-6">
                What We Offer:
              </h2>
              <div className="space-y-6">
                {service.whatWeOffer.map((offer, index) => (
                  <div key={index}>
                    <h3 className="font-medium text-xl text-gray-500 flex items-start">
                      <span className="mr-3 text-2xl leading-none">•</span>
                      <span>{offer.title}</span>
                    </h3>
                    <p className="text-gray-500 mt-2 pl-6">
                      {offer.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="my-12">
              <h2 className="text-2xl font-semibold text-left text-[#424242] mb-4">
                Why It Matters:
              </h2>
              <p className="text-gray-500 leading-relaxed">
                {service.whyItMatters}
              </p>
            </div>

            <div className="my-16 text-center py-8 px-6">
              <div className="flex items-center justify-center space-x-3">
                <p className="text-gray-500 text-2xl">Starting at</p>
                <p className="text-xl text-black">₹ {service.pricing.amount}</p>
              </div>

              <button className="bg-[black] text-white font-bold py-3 px-10 rounded-lg mt-6 text-lg">
                GET A CUSTOM QUOTE
              </button>
              <p className="text-gray-500 text-base mt-4">
                {service.pricing.note}
              </p>
            </div>
            <br />
            <div className="mt-12 mb-16">
              <Link
                to="/"
                className="text-3xl font-bold text-[#CE9D4B] hover:text-[#D0A151] transition-colors duration-300 inline-block"
              >
                &larr; Back to home page
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ServiceDetails;
