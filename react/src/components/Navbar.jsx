import React, { useState } from "react";
import { Link } from "react-router-dom";

// 子组件：箭头图标
const ArrowRightIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    className="w-5 h-5 ml-1"
  >
    <path
      fillRule="evenodd"
      d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
      clipRule="evenodd"
    />
  </svg>
);

// 子组件：菜单图标
const MenuIcon = () => (
  <svg
    className="block h-6 w-6"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    aria-hidden="true"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M4 6h16M4 12h16M4 18h16"
    />
  </svg>
);

// 子组件：关闭图标
const CloseIcon = () => (
  <svg
    className="block h-6 w-6"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    aria-hidden="true"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
);

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "主页", path: "/" },
    { name: "关于我们", path: "/About" }, 
    { name: "测试页面", path: "/NotFound" },
  ];

  // 公共样式
  const linkStyle =
    "text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium";

  const renderNavLinks = () =>
    navLinks.map((link) => (
      <Link key={link.name} to={link.path} className={linkStyle}>
        {link.name}
      </Link>
    ));

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* 左侧导航链接 */}
          <div className="hidden md:flex space-x-4">{renderNavLinks()}</div>

          {/* 中间 Logo */}
          <div className="flex-shrink-0">
            <Link to="/" aria-label="Home">
              <img
                src="/public/logo.png"
                alt="Logo"
                className="h-8 w-auto object-contain"
              />
            </Link>
          </div>

          {/* 右侧登录链接 */}
          <div className="hidden md:flex items-center">
            <Link to="/Login" className={`${linkStyle} flex items-center`}>
              Log in
              <ArrowRightIcon />
            </Link>
          </div>

          {/* 移动端菜单按钮 */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="bg-white p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              aria-expanded={isMobileMenuOpen}
            >
              <span className="sr-only">Toggle menu</span>
              {isMobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
      </div>

      {/* 移动端菜单 */}
      {isMobileMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">{renderNavLinks()}</div>
          <div className="border-t border-gray-200 pt-4 pb-3">
            <Link to="Login" className={`${linkStyle} flex items-center`}>
              Log in
              <ArrowRightIcon />
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;