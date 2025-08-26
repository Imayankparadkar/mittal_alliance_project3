import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import React from "react";

const ProtectedRoute = ({ children }) => {
    const navigate = useNavigate();

    useEffect(() => {
        const isAdmin = localStorage.getItem("admin");
        if (!isAdmin) {
            navigate("/admin");
        }
    }, [navigate]);

    return children;
};

export default ProtectedRoute;