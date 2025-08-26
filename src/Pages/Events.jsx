import React from 'react';
import Header from '../Components/Core/Header/Header_New';
import { useNavigate } from 'react-router-dom';
import { eventData } from '../data/eventData'; // Assuming blogData.js is in src/data

const Events = () => {
  const navigate = useNavigate();

 

  // The custom gold color used throughout the component.
  const brandGold = 'rgba(208, 161, 81, 1)';

  return (
    <div className="bg-white">
      <Header />
      {/* Line divider image */}
      <img src="/Events/line.png" alt="divider" className="w-full block mt-20" />

      {/* Hero Section */}
      <div className="relative">
                <img src="/Events/event1.png" alt="Frequently Asked Questions" className="w-full h-auto object-cover" />
                <div className="absolute inset-0 flex flex-col md:flex-row items-center justify-center p-8">
                    {/* The question mark image is now part of the hero for better responsive control */}
                </div>
            </div>
            
            {/* The arrow divider scales with the width of the screen. */}
            <img src="/Events/event2.png" alt="arrow divider" className="w-full block -mt-px" />


      {/* Main Content */}
      <main className="max-w-[1600px] mx-auto bg-transparent pt-12 px-4 pb-8 md:pt-12 md:px-8 md:pb-16 ">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 
            className="text-3xl md:text-3xl font-bold inline-block m-0 pb-2"
            style={{ color: brandGold }}
          >
            EVENTS
          </h2>
          <div 
            className="h-2 w-[130px] mx-auto"
            style={{ backgroundColor: brandGold }}
          ></div>
        </div>
        
        {/* Event Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {eventData.map(post => (
            <div 
              key={post.id} 
              className="border border-gray-200 rounded-lg overflow-hidden bg-white shadow-md flex flex-col cursor-pointer transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl"
              
            >
              <img 
                src={post.imageUrl} 
                alt={post.alt} 
                className="w-full h-auto block aspect-video object-cover" 
              />
              <div 
                className="p-4 text-center h-[60px] flex items-center justify-center"
                style={{ backgroundColor: brandGold }}
              >
                <h3 className="text-white text-[1.1rem] font-semibold m-0">
                  {post.alt}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Events;