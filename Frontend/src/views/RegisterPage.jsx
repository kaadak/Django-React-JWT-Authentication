
import React, { useContext, useState } from "react";
import AuthContext from "../context/AuthContext";
import { Link } from "react-router-dom";





const RegisterPage = () => {

    const { registerUser } = useContext(AuthContext); 
    
    const[email, setEmail] = useState("")
    const[username, setUsername] = useState("")
    const[password, setPassword] = useState("")
    const[password2, setPassword2] = useState("")

    const handleSubmit = async (e) => {
      e.preventDefault()
      registerUser(email, username, password, password2)

      console.log(email, username, password, password2)

    }

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4 lg:p-0">
      {/* Main Container */}
      <div className="max-w-6xl w-full bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col lg:flex-row min-h-[750px]">
        
        {/* Left Side: Visual/Brand Area (Flipped for variety) */}
        <div className="hidden lg:flex w-5/12 bg-gradient-to-tr from-purple-600 via-indigo-600 to-blue-500 p-12 flex-col justify-between relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
          
          <div className="relative z-10">
            <div className="w-12 h-12 bg-white/20 backdrop-blur-lg rounded-xl flex items-center justify-center mb-6 border border-white/30">
              <span className="text-white font-bold text-xl">I.</span>
            </div>
            <h3 className="text-4xl font-extrabold text-white leading-tight mb-4">
              Join the <br/> Community.
            </h3>
            <p className="text-indigo-100 text-lg font-medium">
              Start your journey with Insight today and connect with thousands of writers.
            </p>
          </div>

          <div className="relative z-10 space-y-4">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-2xl flex items-center space-x-4">
              <div className="w-10 h-10 rounded-full bg-green-400/20 flex items-center justify-center text-green-300">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
              </div>
              <span className="text-white text-sm font-semibold">Instant JWT Authentication</span>
            </div>
            <div className="bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-2xl flex items-center space-x-4">
              <div className="w-10 h-10 rounded-full bg-blue-400/20 flex items-center justify-center text-blue-300">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
              </div>
              <span className="text-white text-sm font-semibold">Real-time Dashboard Access</span>
            </div>
          </div>
        </div>

        {/* Right Side: The Form */}
        <div className="w-full lg:w-7/12 p-8 md:p-12 lg:p-16 flex flex-col justify-center">
          <div className="mb-8">
            <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">Create Account</h2>
            <p className="text-gray-500 font-medium mt-2">Sign up to get started with your new blog.</p>
          </div>

          <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={handleSubmit}>
            {/* Full Name */}
            

            {/* Username */}
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2 ml-1">Username</label>
              <input 
                type="text" 
                name="username"
                onChange={e => setUsername(e.target.value)}
                placeholder="johndoe_dev"
                className="w-full px-5 py-3.5 rounded-2xl bg-gray-50 border border-gray-200 focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-100 transition-all duration-300 outline-none"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2 ml-1">Email</label>
              <input 
                type="email" 
                name="email"
                onChange={e => setEmail(e.target.value)}
                placeholder="john@example.com"
                className="w-full px-5 py-3.5 rounded-2xl bg-gray-50 border border-gray-200 focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-100 transition-all duration-300 outline-none"
              />
            </div>

            {/* Password */}
            <div className="md:col-span-2">
              <label className="block text-sm font-bold text-gray-700 mb-2 ml-1">Password</label>
              <input 
                type="password" 
                name="password"
                onChange={e => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full px-5 py-3.5 rounded-2xl bg-gray-50 border border-gray-200 focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-100 transition-all duration-300 outline-none"
              />
              <label className="block text-sm mt-5 font-bold text-gray-700 mb-2 ml-1">Confirm Password</label>
              <input 
                type="password" 
                name="password2"
                onChange={e => setPassword2(e.target.value)}
                placeholder="••••••••"
                className="w-full px-5 py-3.5 rounded-2xl bg-gray-50 border border-gray-200 focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-100 transition-all duration-300 outline-none"
              />
              {/* Password Strength Indicator */}
              <div className="mt-3 flex space-x-1 px-1">
                <div className="h-1.5 w-1/4 rounded-full bg-indigo-500"></div>
                <div className="h-1.5 w-1/4 rounded-full bg-indigo-500"></div>
                <div className="h-1.5 w-1/4 rounded-full bg-gray-200"></div>
                <div className="h-1.5 w-1/4 rounded-full bg-gray-200"></div>
              </div>
            </div>

            <div className="md:col-span-2 flex items-center space-x-2 ml-1">
              <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
              <span className="text-sm text-gray-500">I agree to the <a href="#" className="text-indigo-600 font-bold hover:underline">Terms of Service</a></span>
            </div>

            <button className="md:col-span-2 w-full bg-gray-900 text-white font-bold py-4 rounded-2xl hover:bg-indigo-600 hover:shadow-xl hover:shadow-indigo-100 transition-all duration-300 active:scale-[0.98]">
              Create Account
            </button>
          </form>

          <div className="mt-8 text-center">
            <p className="text-sm text-gray-500 font-medium">
              Already have an account? <a href="/login" className="text-indigo-600 font-bold hover:underline">Sign In</a>
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default RegisterPage;