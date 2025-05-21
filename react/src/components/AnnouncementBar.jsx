import React, { useState, useEffect } from "react";

const AnnouncementBar = () => {
  const [announcement, setAnnouncement] = useState("");

  // 获取公告内容
  useEffect(() => {
    const fetchAnnouncement = async () => {
      try {
        const response = await fetch("http://localhost:3000/data"); // 后端 API 地址
        const data = await response.json();
        setAnnouncement(data.readData.announcement);                // 剥离数据
      } catch (error) {
        console.error("Failed to fetch announcement:", error);
        setAnnouncement("无法加载公告，请稍后重试。");                  // 错误时展示的默认消息
      }
    };

    fetchAnnouncement();
  }, []);

  // 如果没有公告，则不显示组件
  if (announcement == null) {
    return null;
  }

  return (
    <div className="bg-blue-500 text-white text-center py-2 px-4">
      <p className="text-sm font-medium">{announcement}</p>
    </div>
  );
};

export default AnnouncementBar;