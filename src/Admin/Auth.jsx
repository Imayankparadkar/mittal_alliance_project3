import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { HiEye, HiEyeOff } from "react-icons/hi";
import { ArrowLeft } from "lucide-react";
import React from "react";

const Auth = () => {
    const navigate = useNavigate();
    const [error, setError] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        const adminEmail = "admin@gmail.com";
        const adminPassword = "admin123";

        if (email === adminEmail && password === adminPassword) {
            localStorage.setItem("admin", "true");
            navigate("/dashboard");
        } else {
            setError("Invalid Credentials");
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center px-4 relative">
            <div className="w-full max-w-md relative">
                {/* Back Button - positioned at top left of form */}
                {/* <button
                    onClick={() => navigate("/")}
                    className="absolute -top-30 -left-40 flex items-center gap-2 px-4 py-2 border-gray-300 rounded-lg border-2  hover:border-gray-400 bg-gray-200 text-gray-700 hover:text-gray-900 transition-all font-medium"
                >
                    <ArrowLeft size={20} />
                    Back
                </button> */}

                <form
                    onSubmit={handleLogin}
                    className="flex flex-col justify-center items-center bg-white p-8 rounded-2xl shadow-lg border border-gray-200 w-full"
                >
                    <h2 className="text-[30px] font-extrabold text-center text-gray-800 mb-6">
                        Admin Login
                    </h2>

                    <input
                        name="email"
                        type="email"
                        placeholder="Email"
                        className="w-full mb-4 px-4 py-3 border border-gray-300 bg-gray-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800 placeholder-gray-500"
                        required
                    />
                    <div className="w-full relative mb-4">
                        <input
                            name="password"
                            type={showPassword ? "text" : "password"}
                            placeholder="Password"
                            className="w-full mb-4 px-4 py-3 border border-gray-300 bg-gray-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800 placeholder-gray-500"
                            required
                        />
                        <button
                            type="button"
                            className="absolute right-3 top-5 transform -translate-y-1/2"
                            onClick={() => setShowPassword(!showPassword)}
                        >
                            {showPassword ? (
                                <HiEyeOff className="text-gray-500 w-6 h-6" />
                            ) : (
                                <HiEye className="text-gray-500 w-6 h-6" />
                            )}
                        </button>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-3 px-8 font-bold rounded-lg hover:bg-blue-700 transition-all duration-300 shadow-md border border-blue-600 cursor-pointer"
                    >
                        Login
                    </button>
                    {error && (
                        <p className="text-white bg-red-500 mt-4 px-4 py-2 rounded text-center font-medium">
                            {error}
                        </p>
                    )}
                </form>
            </div>
        </div>
    );
};

export default Auth;
