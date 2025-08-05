"use client";
import React from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import { FaGoogle } from "react-icons/fa";



const AuthButton = () => {
  const { data: session } = useSession();

  return !session?.user ? (
    <button
      onClick={() => signIn()}
      className="flex items-center justify-center gap-3 bg-white text-base_purple border-2 border-base_purple py-2 px-4 rounded-lg font-semibold hover:bg-gray-100 transition duration-300"
    >
      <FaGoogle className="h-5 w-5" />
      Sign In with Google
    </button>
  ) : (
    <button
      onClick={() => signOut()}
      className="flex items-center justify-center gap-3 bg-base_purple text-white border-2 border-base_purple py-2 px-4 rounded-lg font-semibold hover:bg-base_purple/80 transition duration-300"
    >
      Sign Out
    </button>
  );
};

const SigninButton = () => {
  return (
    <div className="flex gap-4 ml-auto items-center">

      <AuthButton />
    </div>
  );
};

export default SigninButton;