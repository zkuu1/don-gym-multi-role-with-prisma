'use client'

import { useState } from "react";
import Image from "next/image";
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";
import HeroImage from "../../images/Hero.png";
import Link from "next/link";
import SigninButton from "@/components/SigninButton";

export default function ResgisterPage() {

    const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false); // Ubah nama state



   return (
    <div className="min-h-screen relative bg-black flex flex-col">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src={HeroImage}
          alt="Gym Background"
          fill
          className="object-cover opacity-50"
          quality={100}
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/60"></div>
      </div>

      {/* Main Content */}
      <main className="relative z-10 flex flex-col items-center pt-20 px-4 pb-12 mt-28">
        <div className="w-full max-w-md bg-white/90 backdrop-blur-sm rounded-2xl shadow-2xl overflow-hidden">
          {/* Header Section */}
          <div className="relative h-48 bg-base_purple">
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
              <h1 className="text-4xl font-bold text-white">Welcome</h1>
              <div className="w-16 h-1 bg-white my-3"></div>
              <h2 className="text-2xl font-semibold text-white">Body Builder</h2>
            </div>
          </div>
          
          {/* Form Section */}
          <div className="p-8">
            <form  className="space-y-6">


              <div>
            <label htmlFor="name" className="block text-base_purple mb-2">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              className="w-full px-4 py-3 bg-gray-100 text-black rounded-lg focus:outline-none focus:ring-2 border-2 border-base_purple"
              placeholder="Enter your name"
              required
            />
    
          </div>

             <div>
                <label htmlFor="email" className="block text-base_purple mb-2">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="w-full px-4 py-3 bg-gray-100 text-black rounded-lg focus:outline-none focus:ring-2 border-2 border-base_purple"
                  placeholder="Enter your email"
                  required
                />
               
              </div>

              
             <div>
                <label htmlFor="password" className="block text-base_purple mb-2">Password</label>
                <div className="relative">
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    className="w-full px-4 py-3 bg-gray-100 text-black rounded-lg focus:outline-none focus:ring-2 border-2 border-base_purple pr-10"
                    placeholder="Enter your password"
                    required
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 flex items-center pr-3 text-base_purple"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <FaEye className="h-5 w-5" /> : <FaEyeSlash className="h-5 w-5" />}
                  </button>
                </div>
             
              </div>

              
              <div>
                    <label htmlFor="confirmPassword" className="block text-base_purple mb-2">Confirm Password</label>
                    <div className="relative">
                      <input
                        id="confirmPassword"
                        name="confirmPassword"
                        type={showConfirmPassword ? "text" : "password"}
                        className="w-full px-4 py-3 bg-gray-100 text-black rounded-lg focus:outline-none focus:ring-2 border-2 border-base_purple pr-10"
                        placeholder="Confirm your password"
                        required
                      />
                      <button
                        type="button"
                        className="absolute inset-y-0 right-0 flex items-center pr-3 text-base_purple"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      >
                        {showConfirmPassword ? <FaEye className="h-5 w-5" /> : <FaEyeSlash className="h-5 w-5" />}
                      </button>
                    </div>
                
              </div>

              {/* Button */}
              {/* <RegisterButton /> */}
               <div>
                    <label htmlFor="confirmPassword" className="block text-base_purple mb-2">Confirm Password</label>
                    <div className="relative">
                      
                    <SigninButton />
                    </div>
                
              </div>
              

                
              <div className="relative my-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-base_purple"></div>
                </div>
              </div>
            </form>

            <div className="mt-8 text-center">
            
              <p className="text-gray-600">
                Have an account?{" "}
                <Link href="/login" className="text-base_purple font-semibold hover:text-base_semi_purple">
                  Login
                </Link>
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 py-6 px-4 text-center text-gray-300 text-sm">
        <p>Copyright © DON GYM FITNESS 2025. All rights reserved.</p>
      </footer>
    </div>
  );
}