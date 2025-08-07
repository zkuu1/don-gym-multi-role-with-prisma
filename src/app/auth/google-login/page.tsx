"use client";

import { signIn } from "next-auth/react";

export default function GoogleLoginPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-purple-900 to-purple-700 text-white">
      <h1 className="text-3xl font-bold mb-8">Login dengan Google</h1>
      <button
        onClick={() => signIn("google", { callbackUrl: "/" })}
        className="flex items-center gap-3 bg-white text-black px-6 py-3 rounded-lg shadow-lg hover:bg-gray-200 transition"
      >
        <img
          src="https://www.svgrepo.com/show/355037/google.svg"
          alt="Google"
          className="w-6 h-6"
        />
        <span className="font-medium">Sign in with Google</span>
      </button>

      <p className="mt-6">
        Mau login dengan GitHub?{" "}
        <a
          href="/auth/github-login"
          className="underline hover:text-gray-300"
        >
          Klik di sini
        </a>
      </p>
    </div>
  );
}
