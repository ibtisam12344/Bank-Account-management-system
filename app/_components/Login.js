"use client";

import Link from "next/link";

import SpinnerMini from "./SpinnerMini";
import SubmitButton from "./SubmitButton";

import { handleLogin } from "../_lib/action";
function Login({ toggleForm, type = "initial" }) {
  return (
    <div
      className={`flex flex-col justify-center w-full px-4 py-6 ${
        type === "initial" ? "sm:w-1/2" : "sm:w-full"
      }`}
    >
      <h2 className="text-xl font-bold text-gray-800 text-center">Login</h2>

      <form className="mt-4 space-y-4" action={handleLogin}>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Email Address
          </label>
          <input
            type="email"
            name="email"
            className="mt-1 w-full px-4 py-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="you@example.com"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <input
            type="password"
            name="password"
            className="mt-1 w-full px-4 py-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="********"
            required
          />
        </div>

        <SubmitButton type="submit" pendingLabel={<SpinnerMini />}>
          Login
        </SubmitButton>
      </form>

      <p className="text-sm text-gray-600 mt-4 text-center">
        Don&apos;t have an account?{" "}
        {type === "initial" ? (
          <button
            onClick={toggleForm}
            className="text-indigo-500 hover:underline"
          >
            Sign Up
          </button>
        ) : (
          <Link href="/signup" className="text-indigo-500 hover:underline">
            Sign Up
          </Link>
        )}
      </p>
    </div>
  );
}

export default Login;
