import React from 'react';

const NavBar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 px-4 py-3">
      {/* Floating Glass Container */}
      <div className="max-w-7xl mx-auto bg-white/70 backdrop-blur-md border border-white/20 shadow-lg rounded-2xl flex items-center justify-between px-6 py-3">
        
        {/* Logo with Gradient & Animation */}
        <div className="flex items-center group cursor-pointer">
          <div className="w-8 h-8 bg-gradient-to-tr from-indigo-600 to-purple-500 rounded-lg flex items-center justify-center mr-3 group-hover:rotate-12 transition-transform duration-300">
            <span className="text-white font-bold text-lg">B</span>
          </div>
          <span className="text-xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-gray-800 to-gray-600">
            Insight<span className="text-indigo-600">.</span>
          </span>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#" className="relative text-sm font-semibold text-gray-900 group">
            Home
            <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-indigo-600 transform scale-x-100 transition-transform duration-300"></span>
          </a>
          
          {/* Disabled Link: Muted with 'Glass' effect */}
          <span className="text-sm font-medium text-gray-400/60 cursor-not-allowed select-none bg-gray-100/50 px-3 py-1 rounded-full border border-gray-200/50">
            Features
          </span>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center space-x-4">
          <button className="text-sm font-semibold text-gray-600 hover:text-gray-900 transition-colors">
            Log in
          </button>
          <button className="bg-gray-900 text-white text-sm font-bold px-5 py-2.5 rounded-xl hover:bg-indigo-600 hover:shadow-[0_0_20px_rgba(79,70,229,0.4)] transition-all duration-300 active:scale-95">
            Dashboard
          </button>
        </div>

      </div>
    </nav>
  );
};

export default NavBar;