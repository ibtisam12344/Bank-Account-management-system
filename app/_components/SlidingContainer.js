"use client";

import { useState } from "react";
import clsx from "clsx";
import Login from "./Login";
import Signup from "./Signup";

function SlidingContainer() {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div
      className={clsx("flex transition-transform duration-500 ease-in-out", {
        "translate-x-0": isLogin,
        "-translate-x-1/2": !isLogin, // Fixed translate issue
      })}
      style={{ width: "200%" }}
    >
      {/* Login Form */}
      <Login toggleForm={toggleForm} />

      {/* Signup Form */}
      <Signup toggleForm={toggleForm} />
    </div>
  );
}

export default SlidingContainer;
