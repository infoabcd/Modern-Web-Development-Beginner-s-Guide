import React, { useEffect, useState } from "react";
import customFetch from "../api/customFetch";

const Admin = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getUserProfile = async () => {
      try {
        // 用我们封装的 Fetch 去访问需要认证的 私人路由 (它的逻辑明确了带上Cookie，如果失效或者未找到，即重定向到 /Login 路由)
        const data = await customFetch("http://localhost:3000/admin", { method: "GET" });
        if (!data || !data.user || data.user.role !== true) {
          throw new Error("Access denied: You do not have permission to access this page.");
        }
        setUser(data.user);
      } catch (error) {
        setError(error.message);
        if (error.message.includes("Session expired")) {
          window.location.href = "/login";
        }
      } finally {
        setLoading(false);
      }
    };

    getUserProfile();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div className="text-red-500">Error: {error}</div>;

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <p>Welcome, {user?.username}!</p>
      <p>Your role: {user?.role ? "Admin" : "User"}</p>
    </div>
  );
};

export default Admin;