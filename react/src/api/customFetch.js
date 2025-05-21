const customFetch = async (url, options = {}) => {
  try {
    const response = await fetch(url, {
      ...options,
      credentials: "include", // 自动携带 HttpOnly Cookie (重要)
    });

    if (!response.ok) {
      if (response.status === 401) {
        alert("Session expired. Redirecting to login...");
        window.location.href = "/login";
        return;
      } else if (response.status === 403) {
        throw new Error("Access denied: You do not have permission to access this resource.");
      } else if (response.status === 404) {
        throw new Error("Resource not found.");
      } else {
        throw new Error(`Unexpected error: ${response.statusText}`);
      }
    }

    // 自动解析 JSON 数据
    return await response.json();
  } catch (error) {
    console.error("Network error:", error.message);
    throw error;
  }
};

export default customFetch;