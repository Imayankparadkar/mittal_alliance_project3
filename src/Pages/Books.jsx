import React from 'react';
import Header from '../Components/Core/Header/Header_New';

const Books = () => {
  // Style for the main heading text color
  const headingStyle = {
    color: 'rgba(208, 161, 81, 1)',
  };

  return (
    <>
      {/* 1. Header Component */}
      <Header />

      {/* Images added as per your request */}
      <img
        src="/Books/line.png"
        alt="line"
        className="mt-20"
        onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/1200x10/000000/000000?text='; }}
      />
      <img
        src="/Books/book1.png"
        alt="book1"
        onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/1200x400/cccccc/000000?text=Book+1+Image'; }}
      />
      <img
        src="/Books/book2.png"
        alt="book2"
        className="mb-12"
        onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/1200x400/cccccc/000000?text=Book+2+Image'; }}
      />

      <div className="bg-white font-sans">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 ">

          {/* 3. "Discover My Books" Heading */}
          <div className="text-center mb-11">
            <h2 className="text-4xl md:text-4xl font-bold" style={headingStyle}>
              Discover My Books
            </h2>
          </div>

          {/* 4. Main Book Section based on Screenshot */}
          <section className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16 mb-32">

            {/* Book Image Column */}
            <div className="w-full lg:w-2/5 flex justify-center">
              <div className="border-yellow-500 rounded-lg shadow-lg bg-gray-50">
                <img
                  src="/Books/book3.png"
                  alt="Mastering Success in Contact Centres"
                  className="w-full h-auto"
                  onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/400x550/ffffff/000000?text=Book+Cover'; }}
                />
              </div>
            </div>

            {/* Book Details Column */}
            <div className="w-full lg:w-3/5 text-center lg:text-left">
              <span
                className="inline-block text-sm font-semibold px-4 py-1 rounded-full mb-4"
                style={{ backgroundColor: 'rgba(253, 170, 86, 0.2)', color: 'rgba(208, 161, 81, 1)' }}
              >
                LATEST PUBLICATION
              </span>

              <h3 className="text-3xl md:text-4xl font-bold mb-4" style={headingStyle}>
                Mastering Success in <br /> Contact Centres
              </h3>

              <p className="text-gray-600 mb-6 max-w-2xl mx-auto lg:mx-0">
                Unlock the secrets to exceptional customer service and operational
                excellence. This comprehensive guide provides proven strategies, real-
                world case studies, and actionable insights for contact centre leaders
                and professionals.
              </p>

              <ul className="space-y-3 text-gray-700 mb-8 max-w-md mx-auto lg:mx-0">
                <li className="flex items-center">
                  <span className="text-yellow-500 mr-3">&#9679;</span>
                  Strategic frameworks for contact centre optimization
                </li>
                <li className="flex items-center">
                  <span className="text-yellow-500 mr-3">&#9679;</span>
                  Real-world case studies and best practices
                </li>
                <li className="flex items-center">
                  <span className="text-yellow-500 mr-3">&#9679;</span>
                  Leadership techniques for team excellence
                </li>
                <li className="flex items-center">
                  <span className="text-yellow-500 mr-3">&#9679;</span>
                  Technology integration and digital transformation
                </li>
              </ul>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button
                  className="bg-yellow-500 text-white font-bold py-3 px-8 rounded-full shadow-md transform transition-all duration-300 ease-in-out hover:bg-yellow-600 hover:shadow-lg hover:scale-105 active:scale-95"
                  style={{ backgroundColor: 'rgba(208, 161, 81, 1)' }}
                  onClick={() => window.open('https://www.amazon.com/dp/B0D71XN997', '_blank')}
                >
                  BUY BOOK
                </button>
              </div>
            </div>
          </section>

        </div>
      </div>
    </>
  );
};

export default Books;