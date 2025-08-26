import React, { useEffect, useState } from "react";
import Header from "../Components/Core/Header/Header_New";
import { useNavigate } from "react-router-dom";
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { db } from "../Config/firebase";

const Blogs = () => {
  const navigate = useNavigate();
  const [blogPosts, setBlogPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      const blogsCollection = collection(db, "Blogs");
      const q = query(blogsCollection, orderBy("timestamp", "desc"));
      const querySnapshot = await getDocs(q);
      const posts = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setBlogPosts(posts);
      setLoading(false);
    };

    fetchBlogs();
  }, []);

  const handleCardClick = (id) => {
    navigate(`/blog/${id}`);
  };

  // The custom gold color used throughout the component.
  const brandGold = "rgba(208, 161, 81, 1)";

  return (
    <div className="bg-white  ">
      <Header />
      {/* Line divider image */}
      <img src="/Blog/line.png" alt="divider" className="w-full block " />

      {/* Hero Section */}
      <div className="relative ">
        <img
          src="/Blog/blog 1.png"
          alt="Frequently Asked Questions"
          className="w-full h-auto object-cover mt-20"
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

      {/* Main Content */}
      <main className="max-w-[1600px] mx-auto bg-transparent pt-12 px-4 md:pt-12 md:px-8 md:pb-16">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2
            className="text-3xl font-bold inline-block m-0 pb-2"
            style={{ color: brandGold }}
          >
            BLOGS
          </h2>
          <div
            className="h-2 w-[110px] mx-auto"
            style={{ backgroundColor: brandGold }}
          ></div>
        </div>

        {/* Blog Grid */}
        {loading ? (
          <div className="text-center text-lg text-[#503440]">Loading blogs...</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
            {blogPosts.map((post) => (
              <div
                key={post.id}
                className="border border-gray-200 rounded-lg overflow-hidden bg-white shadow-md flex flex-col cursor-pointer transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl"
                onClick={() => handleCardClick(post.id)}
              >
                <img
                  src={post.imageUrl}
                  alt={post.title}
                  className="w-full h-auto block aspect-video object-cover"
                />
                <div
                  className="p-4 text-center h-[80px] flex items-center justify-center"
                  style={{ backgroundColor: brandGold }}
                >
                  <h3 className="text-white text-[1.1rem] font-semibold m-0">
                    {post.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default Blogs;
