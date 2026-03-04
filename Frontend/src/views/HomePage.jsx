import React from 'react';


const HomePage = () => {


  return (
    <div className="bg-slate-50 min-h-screen">
      {/* NAVBAR SPACING HELPER 
         Since your navbar is 'fixed', we need a margin-top or padding-top 
      */}
      <div className="pt-24 lg:pt-32">
        
        {/* 1. HERO SECTION - Contained */}
        <header className="container mx-auto px-6 lg:px-12">
          <div className="bg-white rounded-[3rem] p-8 md:p-16 shadow-sm border border-gray-100 flex flex-col lg:flex-row items-center gap-12">
            
            <div className="lg:w-3/5 space-y-6 text-center lg:text-left">
              <span className="inline-block px-4 py-1.5 bg-indigo-50 text-indigo-600 rounded-full text-sm font-bold tracking-wide">
                LATEST UPDATES
              </span>
              <h1 className="text-4xl md:text-6xl font-black text-gray-900 leading-tight">
                Refined Blogging for <br/>
                <span className="text-indigo-600">Modern Developers.</span>
              </h1>
              <p className="text-lg text-gray-600 max-w-xl font-medium">
                A clean, minimal space to document your journey with Django and React. Focused on readability and speed.
              </p>
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <button className="px-8 py-4 bg-gray-900 text-white font-bold rounded-2xl hover:bg-indigo-600 transition-all shadow-lg shadow-gray-200">
                  Write a Post
                </button>
                <button className="px-8 py-4 bg-white text-gray-700 font-bold rounded-2xl border border-gray-200 hover:border-indigo-600 transition-all">
                  Read Guide
                </button>
              </div>
            </div>

            <div className="lg:w-2/5 w-full">
               {/* Simplified visual to keep the 'container' feel clean */}
               <div className="aspect-square bg-gradient-to-br from-indigo-100 to-purple-100 rounded-[2rem] flex items-center justify-center border-4 border-white shadow-xl">
                  <div className="text-6xl animate-bounce">✍️</div>
               </div>
            </div>
          </div>
        </header>

        {/* 2. FEED SECTION - Contained */}
        <section className="container mx-auto px-6 lg:px-12 py-20">
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-2xl font-extrabold text-gray-900 uppercase tracking-widest">Recent Posts</h2>
            <div className="flex-grow mx-8 h-[1px] bg-gray-200 hidden md:block"></div>
            <button className="text-sm font-bold text-indigo-600 hover:text-indigo-800">VIEW ALL</button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[1, 2, 3].map((i) => (
              <div key={i} className="group cursor-pointer">
                <div className="aspect-video bg-gray-200 rounded-3xl mb-5 overflow-hidden ring-1 ring-gray-200">
                  <div className="w-full h-full bg-slate-800 group-hover:scale-105 transition-transform duration-500 flex items-center justify-center text-white/20 font-mono">
                    Post Thumbnail
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-indigo-600 mb-2">
                  Securing React Routes with JWT
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">
                  A deep dive into frontend middleware and token persistence...
                </p>
                <div className="flex items-center text-xs font-bold text-gray-400 gap-3">
                  <span className="text-indigo-600">REACT</span>
                  <span>•</span>
                  <span>5 MIN READ</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default HomePage;