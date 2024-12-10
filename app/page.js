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
    <div className="relative bg-white rounded-lg shadow-lg overflow-hidden max-w-md w-full mx-auto sm:max-w-lg p-6">
      {/* Sliding Container */}
      <div
        className={clsx("flex transition-transform duration-500 ease-in-out", {
          "translate-x-0": isLogin,
          "-translate-x-[51%]": !isLogin,
        })}
        style={{ width: "200%" }}
      >
        {/* Login Form */}
        <Login toggleForm={toggleForm} />

        {/* Signup Form */}
        <Signup toggleForm={toggleForm} />
      </div>
    </div>
  );
}
