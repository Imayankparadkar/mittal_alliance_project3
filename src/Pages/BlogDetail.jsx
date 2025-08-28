import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Header from "../Components/Core/Header/Header_New";
import { ArrowLeft } from "lucide-react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../Config/firebase";

const BlogDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const docRef = doc(db, "Blogs", id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setPost({ id: docSnap.id, ...docSnap.data() });
        } else {
          console.log("No such document!");
          alert("Blog post not found!");
          navigate("/blogs");
        }
      } catch (error) {
        console.error("Error fetching blog post:", error);
        alert("Error fetching blog post.");
        navigate("/blogs");
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [id, navigate]);

  // Define the custom brand color for reuse.
  const brandGold = "rgba(208, 161, 81, 1)";

  // Handler for the back button
  const handleBackClick = () => navigate("/blogs");

  // Render loading state
  if (loading) {
    return (
      <div className="bg-white min-h-screen flex items-center justify-center">
        <p className="text-lg font-semibold text-[#503440]">Loading blog post...</p>
      </div>
    );
  }

  // Render a "not found" message if the post doesn't exist after loading.
  if (!post) {
    return (
      <div className="bg-white min-h-screen">
        <Header />
        <div className="text-center p-16">
          <h1 className="text-3xl font-bold mb-6">Blog post not found</h1>
          <button
            onClick={handleBackClick}
            className="flex items-center mx-auto bg-transparent border-none font-bold cursor-pointer text-base"
            style={{ color: brandGold }}
          >
            <ArrowLeft size={18} className="mr-2" />
            Back to Blog
          </button>
        </div>
      </div>
    );
  }

  // Render the blog post details if found.
  return (
    <div className="bg-white mt-26">
      <Header />
      {/* Line divider image */}
      <img src="/Blog/line.png" alt="divider" className="w-full block" />

      {/* Hero Section */}
      <div className="relative">
        <img
          src="/Blog/blog 1.png"
          alt="Frequently Asked Questions"
          className="w-full h-auto object-cover -mt-6"
        />
        <div className="absolute inset-0 flex flex-col md:flex-row items-center justify-center p-8">
          {/* The question mark image is now part of the hero for better responsive control */}
        </div>
      </div>

      {/* The arrow divider scales with the width of the screen. */}
      <img
        src="/Blog/arrow_pattern.png"
        alt="arrow divider"
        className="w-full block -mt-px"
      />

      <main className="max-w-4xl mx-auto px-4 pt-10 pb-8 md:px-8 md:pt-12 md:pb-12">
        <h1
          className="font-bold text-center mb-4 text-2xl md:text-4xl"
          style={{ color: brandGold }}
        >
          {post.title}
        </h1>

        {post.imageUrl && (
          <img
            src={post.imageUrl}
            alt={post.title}
            className="w-auto h-auto md:h-[350px] mb-4 block mx-auto object-cover"
          />
        )}

        <img
          src="/Blog/linkedin.png"
          alt="linkedin"
          className="w-full h-auto md:h-[150px] block mx-auto mb-4 object-contain rounded-lg"
        />

        <div className="text-left font-semibold text-gray-500 text-base md:text-xl mb-8">
          {post.timestamp?.toDate().toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </div>

        <article className="text-justify">
          <h2 className="font-bold text-black mb-6 text-center text-lg md:text-xl">
            {post.heading}
          </h2>
          <div
            className="leading-loose text-lg text-gray-700"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </article>

        {/* Separator Line */}
        <div className="h-px bg-gray-400 mt-12 mb-8"></div>

        <button
          onClick={handleBackClick}
          className="flex items-center bg-transparent border-none font-bold cursor-pointer text-3xl"
          style={{ color: brandGold }}
        >
          <ArrowLeft size={18} className="mr-2" />
          Back to Blog
        </button>
      </main>
    </div>
  );
};

export default BlogDetail;
