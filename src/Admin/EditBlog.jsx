import React, { useEffect, useRef, useState } from "react";
import { db } from "../Config/firebase.js";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import JoditEditor from "jodit-react";
import { ArrowLeft } from 'lucide-react';

const CLOUDINARY_URL = "https://api.cloudinary.com/v1_1/db44hbcwp/image/upload";
const CLOUDINARY_UPLOAD_PRESET = "The Pankh Project";

const EditBlog = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const editor = useRef(null);

    const [title, setTitle] = useState("");
    const [heading, setHeading] = useState("");
    const [content, setContent] = useState("");
    const [image, setImage] = useState("");
    const [originalImage, setOriginalImage] = useState("");
    const [loading, setLoading] = useState(true);
    const [uploading, setUploading] = useState(false);
    const [updating, setUpdating] = useState(false);

    useEffect(() => {
        const fetchBlog = async () => {
            try {
                const snap = await getDoc(doc(db, "Blogs", id));
                if (snap.exists()) {
                    const data = snap.data();
                    setTitle(data.title || "");
                    setHeading(data.heading || "");
                    setContent(data.content || "");
                    setImage(data.imageUrl || "");
                    setOriginalImage(data.imageUrl || "");
                } else {
                    alert("Blog not found!");
                    navigate("/admin");
                }
            } catch (error) {
                console.error("Error fetching blog:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchBlog();
    }, [id, navigate]);

    const handleImageUpload = async (e) => {
        const file = e.target.files[0];
        if (!file) return;

        setUploading(true);
        const formData = new FormData();
        formData.append("file", file);
        formData.append("upload_preset", CLOUDINARY_UPLOAD_PRESET);

        try {
            const response = await axios.post(CLOUDINARY_URL, formData);
            const imageUrl = response.data.secure_url;
            setImage(imageUrl);
        } catch (error) {
            console.error("Image upload failed:", error);
            alert("Image upload failed. Try again.");
        } finally {
            setUploading(false);
        }
    };

    const handleUpdate = async () => {
        if (!title || !heading || !content) {
            alert("Please fill in all required fields");
            return;
        }

        setUpdating(true);
        try {
            const updatePayload = {
                title,
                heading,
                content,
                timestamp: new Date() // Update the timestamp when editing
            };

            if (image && image !== originalImage) {
                updatePayload.imageUrl = image;
            }

            await setDoc(doc(db, "Blogs", id), updatePayload, { merge: true });
            navigate("/dashboard");
        } catch (error) {
            alert("Failed to update blog. Try again.");
            console.error(error);
        } finally {
            setUpdating(false);
        }
    };

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#f8e8e8] to-[#f0d8d8]">
                <p className="text-lg font-semibold text-[#503440]">Loading blog data...</p>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-900 py-10 px-4">
            <div className="max-w-4xl mx-auto bg-gray-800 rounded-xl shadow-xl overflow-hidden border border-gray-700">
                {/* Header with Back Button */}
                <div className="bg-blue-900 p-4 flex justify-between items-center">
                    <button
                        onClick={() => navigate("/dashboard")}
                        className="flex items-center gap-2 px-4 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-600 transition"
                    >
                        <ArrowLeft size={20} />
                        Back to Dashboard
                    </button>
                    <h2 className="text-2xl font-bold text-white">Edit Blog Post</h2>
                </div>

                <div className="p-6 space-y-6">
                    {/* Image Upload Section */}
                    <div className="space-y-4">
                        <label className="block text-lg font-medium text-gray-300">Featured Image</label>
                        <div className="flex flex-col items-center gap-4">
                            {image && (
                                <div className="w-full overflow-hidden rounded-lg border-2 border-blue-700">
                                    <img
                                        src={image}
                                        alt="Preview"
                                        className="w-full h-64 object-cover"
                                    />
                                </div>
                            )}
                            <div className="w-full flex flex-col sm:flex-row gap-4">
                                <input
                                    id="fileUpload"
                                    type="file"
                                    accept="image/*"
                                    onChange={handleImageUpload}
                                    className="hidden"
                                />
                                <label
                                    htmlFor="fileUpload"
                                    className={`flex-1 text-center cursor-pointer bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold shadow hover:opacity-90 transition ${uploading ? 'opacity-70' : ''}`}
                                >
                                    {uploading ? "Uploading..." : image ? "Change Image" : "Upload Image"}
                                </label>
                            </div>
                        </div>
                    </div>

                    {/* Title Input */}
                    <div className="space-y-2">
                        <label className="block text-lg font-medium text-gray-300">
                            Blog Title <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            placeholder="Enter blog title"
                            className="w-full p-4 text-white bg-gray-700 border-2 border-blue-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
                            value={heading}
                            onChange={(e) => setHeading(e.target.value)}
                            placeholder="Enter blog heading"
                            className="w-full p-4 text-white bg-gray-700 border-2 border-blue-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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

                    {/* Update Button */}
                    <div className="pt-4">
                        <button
                            onClick={handleUpdate}
                            disabled={uploading || updating || !title || !heading || !content}
                            className={`w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-bold text-lg shadow-lg hover:opacity-90 transition ${(uploading || updating || !title || !heading || !content) ? 'opacity-70 cursor-not-allowed' : ''}`}
                        >
                            {updating ? (
                                <span className="flex items-center justify-center gap-2">
                                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    Updating...
                                </span>
                            ) : "Update Blog"}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditBlog;
