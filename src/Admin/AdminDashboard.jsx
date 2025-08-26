import { useEffect, useState } from "react";
import { db } from "../Config/firebase.js";
import { collection, getDocs, deleteDoc, doc, query, orderBy } from "firebase/firestore";
import { Link, useNavigate } from "react-router-dom";
import React from "react";
import { NotebookPen, Trash2, Plus, LogOut } from "lucide-react";

const AdminDashboard = () => {
    const [blogs, setBlogs] = useState([]);
    const navigate = useNavigate();

    const fetchBlogs = async () => {
        const q = query(collection(db, "Blogs"), orderBy("timestamp", "desc"));
        const snapshot = await getDocs(q);
        const items = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setBlogs(items);
        console.log(blogs);
    };

    const handleDelete = async (id) => {
        if (window.confirm("Are you sure you want to delete this blog?")) {
            await deleteDoc(doc(db, "Blogs", id));
            fetchBlogs();
        }
    };

    const handleLogout = () => {
        localStorage.removeItem("admin");
        navigate("/admin");
    };

    useEffect(() => {
        fetchBlogs();
    }, []);

    return (
        <div className="min-h-screen bg-gray-900 p-6">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col sm:flex-row items-center justify-between mb-10 gap-4">
                    <h1 className="text-4xl font-bold text-white drop-shadow-md">
                        Admin Dashboard
                    </h1>
                    <div className="flex gap-4">
                        <button
                            onClick={handleLogout}
                            className="flex items-center gap-2 px-5 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-all shadow-md border border-red-600"
                        >
                            <LogOut size={18} />
                            Logout
                        </button>
                        <Link to="/blog/add">
                            <button className="flex items-center gap-2 px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all shadow-md border border-blue-600">
                                <Plus size={18} />
                                Add Blog
                            </button>
                        </Link>
                    </div>
                </div>

                {blogs.length === 0 ? (
                    <div className="text-center text-gray-300 text-lg mt-20 bg-gray-800/70 p-8 rounded-xl max-w-2xl mx-auto">
                        No blogs available. Click "Add Blog" to create your first one.
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {blogs.map((blog) => (
                            <div
                                key={blog.id}
                                className="bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all flex flex-col border border-gray-700"
                            >
                                {blog.imageUrl && (
                                    <div className="w-full h-48 overflow-hidden">
                                        <img
                                            src={blog.imageUrl}
                                            alt="Blog"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                )}

                                <div className="p-5 flex flex-col flex-1">
                                    <div className="mb-3">
                                        <h2 className="text-xl font-bold text-white mb-2 line-clamp-2">
                                            {blog.title}
                                        </h2>



                                        <div
                                            className="text-gray-400 text-sm mb-4 line-clamp-3"
                                            dangerouslySetInnerHTML={{ __html: blog.content }}
                                        ></div>
                                    </div>

                                    <div className="flex justify-between items-center mt-auto pt-3 border-t border-gray-700">
                                        {blog.timestamp && (
                                            <p className="text-sm text-gray-400">
                                                {new Date(blog.timestamp.seconds * 1000).toLocaleDateString("en-US", {
                                                    // weekday: "short",
                                                    day: "2-digit",
                                                    month: "short",
                                                    year: "numeric",
                                                })}
                                            </p>
                                        )}

                                        <div className="flex space-x-3">
                                            <Link to={`/edit/${blog.id}`}>
                                                <button
                                                    className="p-2 bg-blue-600/20 rounded-lg transition-all hover:bg-blue-600/40 text-blue-400 hover:text-blue-300"
                                                    title="Edit"
                                                >
                                                    <NotebookPen size={18} />
                                                </button>
                                            </Link>
                                            <button
                                                onClick={() => handleDelete(blog.id)}
                                                className="p-2 bg-red-600/20 rounded-lg transition-all hover:bg-red-600/40 text-red-400 hover:text-red-300"
                                                title="Delete"
                                            >
                                                <Trash2 size={18} />
                                            </button>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default AdminDashboard;
