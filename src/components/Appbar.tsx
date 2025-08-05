"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import Image from "next/image";

const Appbar = () => {
  const { data: session } = useSession();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Periksa apakah user memiliki role admin
  const isAdmin = session?.user?.role === 'admin';

  return (
    <header className="fixed inset-x-0 top-0 z-30 mx-auto w-full max-w-screen-md border border-gray-100 bg-base_purple py-3 shadow backdrop-blur-lg md:top-6 md:rounded-3xl lg:max-w-screen-lg">
      <div className="px-4">
        <div className="flex items-center justify-between">
          {/* Hamburger menu for mobile */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white p-2 rounded-md focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </div>

          {/* Logo on the left (centered on mobile) */}
          <div className="flex shrink-0 md:ml-0 mx-auto md:mx-0">
            <Link href="/" className="flex items-center">
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
                alt="Website Logo"
                width={28}
                height={28}
              />
              <span className="sr-only">Website Title</span>
            </Link>
          </div>

          {/* Mobile menu */}
          {isMobileMenuOpen && (
            <div className="absolute top-full left-0 w-full bg-base_purple shadow-lg md:hidden z-40">
              <div className="flex flex-col py-4">
                <Link
                  href="/"
                  className="px-4 py-2 text-white hover:bg-purple-700"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Home
                </Link>
                <Link
                  href="/muscle"
                  className="px-4 py-2 text-white hover:bg-purple-700"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Hit The Muscle
                </Link>
                <Link
                  href="/about"
                  className="px-4 py-2 text-white hover:bg-purple-700"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Tentang Kami
                </Link>
                <Link
                  href="/pricing"
                  className="px-4 py-2 text-white hover:bg-purple-700"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Pricing
                </Link>
                
                {/* Mobile auth options */}
                {session ? (
                  <>
                    <Link
                      href="/user"
                      className="px-4 py-2 text-white hover:bg-purple-700"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Dashboard
                    </Link>
                    
                    {/* Hanya tampilkan untuk admin */}
                    {isAdmin && (
                      <Link
                        href="/admin"
                        className="px-4 py-2 text-white hover:bg-purple-700"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        Admin
                      </Link>
                    )}
                    
                    <button
                      onClick={() => {
                        signOut();
                        setIsMobileMenuOpen(false);
                      }}
                      className="px-4 py-2 text-left text-white hover:bg-purple-700"
                    >
                      Logout
                    </button>
                  </>
                ) : (
                  <>
                    <Link
                      href="/register"
                      className="px-4 py-2 text-white hover:bg-purple-700"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Sign Up
                    </Link>
                    <Link
                      href="/login"
                      className="px-4 py-2 text-white hover:bg-purple-700"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Login
                    </Link>
                  </>
                )}
              </div>
            </div>
          )}

          {/* Centered Navigation Links (desktop) */}
          <div className="absolute left-1/2 transform -translate-x-1/2 hidden md:flex md:items-center md:gap-5">
            <Link
              href="/"
              className="inline-block rounded-lg px-2 py-1 text-sm font-medium text-white transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
            >
              Home
            </Link>
            <Link
              href="/muscle"
              className="inline-block rounded-lg px-2 py-1 text-sm font-medium text-white transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
            >
              Hit The Muscle
            </Link>
            <Link
              href="/about"
              className="inline-block rounded-lg px-2 py-1 text-sm font-medium text-white transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
            >
              Tentang Kami
            </Link>
            <Link
              href="/pricing"
              className="inline-block rounded-lg px-2 py-1 text-sm font-medium text-white transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
            >
              Pricing
            </Link>

            {/* Hanya tampilkan untuk admin */}
            {isAdmin && (
              <Link
                href="/admin"
                className="inline-block rounded-lg px-2 py-1 text-sm font-medium text-white transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
              >
                Admin
              </Link>
            )}
          </div>

          {/* Auth buttons on the right */}
          <div className="flex items-center justify-end gap-3">
            {session ? (
              <div className="relative">
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="flex items-center gap-2"
                >
                  {/* Hapus link Admin di sini */}
                  <span className="text-white font-medium hidden sm:inline">
                    {session.user?.name}
                  </span>
                  <div className="h-8 w-8 rounded-full overflow-hidden border-2 border-white">
                    <Image
                      src={session.user?.image || "/default-avatar.png"}
                      alt={session.user?.name || "User avatar"}
                      width={32}
                      height={32}
                      className="object-cover"
                    />
                  </div>
                </button>
                
                {/* Dropdown menu */}
                {isDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
                    <Link
                      href="/user"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      Dashboard
                    </Link>
                    
                    {/* Hanya tampilkan untuk admin */}
                    {isAdmin && (
                      <Link
                        href="/admin"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        onClick={() => setIsDropdownOpen(false)}
                      >
                        Admin
                      </Link>
                    )}
                    
                    <button
                      onClick={() => {
                        signOut();
                        setIsDropdownOpen(false);
                      }}
                      className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <>
                <Link
                  href="/register"
                  className="hidden items-center justify-center rounded-xl px-3 py-2 text-sm font-semibold text-white shadow-sm ring-1 ring-inset ring-gray-300 transition-all duration-150 hover:bg-purple-200 sm:inline-flex"
                >
                  Sign in
                </Link>
                <Link
                  href="/login"
                  className="inline-flex items-center justify-center rounded-xl bg-white px-3 py-2 text-sm font-semibold text-base_purple shadow-sm transition-all duration-150 hover:bg-purple-200"
                >
                  Login
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Appbar;