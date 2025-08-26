import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import Header from "../Components/Core/Header/Header_New"; // Adjust path if needed
import { ArrowLeft } from "lucide-react";
import { blogPosts } from "../data/podcastData"; // Ensure this path is correct

const PodcastsDetail = () => {
  // Get the 'id' from the URL (e.g., "/podcasts/3")
  const { id } = useParams();
  const navigate = useNavigate();

  // Find the specific podcast post from our data array
  const post = blogPosts.find((p) => p.id === parseInt(id));

  // A consistent brand color for styling
  const brandGold = "rgba(208, 161, 81, 1)";

  // Function to navigate back to the main podcasts page
  const handleBackClick = () => navigate("/podcasts");

  // If no post is found for the ID in the URL, show a "Not Found" message
  if (!post) {
    return (
      <div className="bg-white min-h-screen">
        <Header />
        <main className="text-center p-16">
          <h1 className="text-3xl font-bold mb-6">Podcast Not Found</h1>
          <button
            onClick={handleBackClick}
            className="flex items-center mx-auto bg-transparent border-none font-bold cursor-pointer text-lg hover:opacity-80 transition-opacity"
            style={{ color: brandGold }}
          >
            <ArrowLeft size={20} className="mr-2" />
            Back to All Podcasts
          </button>
        </main>
      </div>
    );
  }

  // If the post is found, render the detail page
  return (
    <div className="bg-white min-h-screen font-sans">
      <Header />
      <main className="max-w-4xl mx-auto px-4 py-25 md:py-30">
        {/* Page Title */}
        <h1
          className="font-bold text-center text-3xl md:text-4xl mb-2"
          style={{ color: brandGold }}
        >
          {post.title}
        </h1>

        {/* Post Date */}
        <p className="text-center text-gray-500 mb-8">
          {post.date}
        </p>

        {/* --- DYNAMIC VIDEO PLAYER (TALLER WITH INLINE STYLES) --- */}
        {/* This method creates a responsive container with a taller (4:3) aspect ratio */}
        {/* It works without needing the Tailwind aspect-ratio plugin. */}
        <div
          className="relative mb-8 rounded-lg overflow-hidden shadow-2xl"
          style={{ paddingTop: "50%" /* 12 / 16 = 75% */ }}
        >
          <iframe
            src={post.videoUrl} // The video URL comes directly from our data
            title={post.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="absolute top-0 left-0 w-full h-full"
          ></iframe>
        </div>

        {/* --- DYNAMIC CONTENT ARTICLE --- */}
        <article className="text-justify text-gray-800 leading-relaxed text-lg">
          <p>{post.content}</p>
        </article>

        {/* Separator Line */}
        <div className="h-px bg-gray-300 my-10"></div>

        {/* Back Button */}
        <button
          onClick={handleBackClick}
          className="flex items-center bg-transparent border-none font-bold cursor-pointer text-lg hover:opacity-80 transition-opacity"
          style={{ color: brandGold }}
        >
          <ArrowLeft size={20} className="mr-2" />
          Back to All Podcasts
        </button>
      </main>
    </div>
  );
};

export default PodcastsDetail;
