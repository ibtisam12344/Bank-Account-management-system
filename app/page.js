"use client";
import Login from "./_components/Login";
import Signup from "./_components/Signup";
// test purposes
import { useState } from "react";
import clsx from "clsx";

export default function Page() {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <>
      {/* Header */}
      <header className="bg-indigo-600 text-white py-4">
        <h1 className="text-center text-xl font-bold">Welcome to IE Banking</h1>
      </header>

      {/* Main Content */}
      <main className="flex-grow bg-gray-100 flex items-center justify-center">
        <div className="relative bg-white rounded-lg shadow-lg overflow-hidden max-w-md w-full mx-auto sm:max-w-lg p-6">
          {/* Sliding Container */}
          <div
            className={clsx(
              "flex transition-transform duration-500 ease-in-out",
              {
                "translate-x-0": isLogin,
                "-translate-x-[51%]": !isLogin,
              }
            )}
            style={{ width: "200%" }}
          >
            {/* Login Form */}
            <Login toggleForm={toggleForm} />

            {/* Signup Form */}
            <Signup toggleForm={toggleForm} />
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-indigo-600 text-white py-2">
        <p className="text-center text-sm">
          &copy; {new Date().getFullYear()} IE Banking. All Rights Reserved.
        </p>
      </footer>
    </>
  );
}
