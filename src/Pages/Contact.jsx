import React from "react";
import Header from "../Components/Core/Header/Header_New";
import ConnectMe from './ConnectMe'; // Adjust the path if necessary
const Contact = () => {
  return (
    <>
    <Header/>
      <main className="mt-20 mb-10">
        {/* 3. Render the ConnectMe component directly */}
        <ConnectMe />
      </main>
    </>
    
  );
};

export default Contact;
