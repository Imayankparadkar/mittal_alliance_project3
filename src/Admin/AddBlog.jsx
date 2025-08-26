import React, { useState, useRef } from 'react';
import axios from "axios";
import { db } from "../Config/firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import JoditEditor from 'jodit-react';
import { ArrowLeft } from 'lucide-react';

// Cloudinary Configuration
const CLOUDINARY_URL = "https://api.cloudinary.com/v1_1/db44hbcwp/image/upload";
const CLOUDINARY_UPLOAD_PRESET = "The Pankh Project";

const AddBlog = () => {
    const [title, setTitle] = useState("");
    const [heading, setHeading] = useState("");
    const [content, setContent] = useState("");
    const [image, setImage] = useState(null);
    const [uploading, setUploading] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const navigate = useNavigate();
    const editor = useRef(null);

    const handleImageUpload = async (e) => {
        const file = e.target.files[0];
        if (file) {
            const formData = new FormData();
            formData.append("file", file);
            formData.append("upload_preset", CLOUDINARY_UPLOAD_PRESET);

            setUploading(true);
            try {
                const response = await axios.post(CLOUDINARY_URL, formData);
                setImage(response.data.secure_url);
            } catch (err) {
                console.error("Image upload failed", err);
                alert("Image upload failed. Please try again.");
            } finally {
                setUploading(false);
            }
        }
    };

    const handleAddBlog = async (e) => {
        e.preventDefault();

        if (!title || !heading || !content) {
            alert("Please fill in all required fields");
            return;
        }

        setIsSubmitting(true);

        try {
            const blogData = {
                title,
                heading,
                content,
                timestamp: serverTimestamp(),
            };

            if (image) {
                blogData.imageUrl = image;
            }

            await addDoc(collection(db, "Blogs"), blogData);
            navigate("/dashboard");
        } catch (err) {
            console.error("Error adding blog", err);
            alert("Failed to add blog. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen bg-gray-900 py-10 px-4">
            <div className="max-w-4xl mx-auto bg-gray-800 rounded-xl shadow-xl overflow-hidden border border-gray-700">
                {/* Header */}
                <div className="bg-blue-900 p-4 flex items-center justify-between">
                    <button
                        onClick={() => navigate("/dashboard")}
                        className="flex items-center gap-2 px-4 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-600 transition"
                    >
                        <ArrowLeft size={20} />
                        Back to Dashboard
                    </button>
                    <h1 className="text-2xl font-bold text-white">Create New Blog</h1>
                </div>

                <div className="p-6 space-y-6">
                    <form onSubmit={handleAddBlog} className="space-y-6">
                        {/* Image Upload */}
                        <div className="space-y-4">
                            <label className="block text-lg font-medium text-gray-300">Featured Image</label>
                            <div className="flex flex-col gap-4">
                                <input
                                    type="file"
                                    id="imageUpload"
                                    accept="image/*"
                                    onChange={handleImageUpload}
                                    className="hidden"
                                />
                                <label
                                    htmlFor="imageUpload"
                                    className={`w-full text-center cursor-pointer bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold shadow hover:opacity-90 transition ${uploading ? 'opacity-70' : ''}`}
                                >
                                    {uploading ? "Uploading..." : image ? "Change Image" : "Upload Image"}
                                </label>
                                {image && (
                                    <div className="w-full overflow-hidden rounded-lg border-2 border-blue-700">
                                        <img
                                            src={image}
                                            alt="Preview"
                                            className="w-full h-64 object-cover"
                                        />
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Title Input */}
                        <div className="space-y-2">
                            <label className="block text-lg font-medium text-gray-300">
                                Blog Title <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Enter blog title"
                                className="w-full p-4 text-white bg-gray-700 border-2 border-blue-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                required
                            />
                        </div>

                        {/* Heading Input */}
                        <div className="space-y-2">
                            <label className="block text-lg font-medium text-gray-300">
                                Blog Heading <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Enter blog heading"
                                className="w-full p-4 text-white bg-gray-700 border-2 border-blue-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                value={heading}
                                onChange={(e) => setHeading(e.target.value)}
                                required
                            />
                        </div>

                        {/* Content Editor */}
                        <div className="space-y-2">
                            <div className="w-full">
                                <label className="block text-lg font-medium text-gray-300 mb-2">
                                    Content <span className="text-red-500">*</span>
                                </label>
                                <JoditEditor
                                    ref={editor}
                                    value={content}
                                    config={{
                                        readonly: false,
                                        height: 300,
                                        toolbarSticky: false,
                                        toolbarButtonSize: "large",
                                        buttons: "bold,italic,underline,strikethrough,|,ul,ol,|,font,fontsize,paragraph,brush,|,align,indent,outdent,|,link,image,video,table,|,cut,copy,paste,|,hr,eraser,fullsize",
                                        editorCssClass: "jodit-dark-editor",
                                        style: {
                                        },
                                    }}
                                    onBlur={(newContent) => setContent(newContent)}
                                />
                            </div>
                        </div>

                        {/* Submit Button */}
                        <div className="pt-4">
                            <button
                                type="submit"
                                disabled={uploading || isSubmitting || !title || !heading || !content}
                                className={`w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-bold text-lg shadow-lg hover:opacity-90 transition ${(uploading || isSubmitting || !title || !heading || !content) ? 'opacity-70 cursor-not-allowed' : ''}`}
                            >
                                {isSubmitting ? (
                                    <span className="flex items-center justify-center gap-2">
                                        <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        Publishing...
                                    </span>
                                ) : "Publish Blog"}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddBlog;
