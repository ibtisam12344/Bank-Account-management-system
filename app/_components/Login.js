import Link from "next/link";

function Login({ toggleForm, type = "initial" }) {
  return (
    <div
      className={`flex flex-col justify-center w-full  px-4 py-6 ${
        type === "initial" ? "sm:w-1/2" : "sm:w-full"
      }`}
    >
      <h2 className="text-xl font-bold text-gray-800 text-center">Login</h2>
      <form className="mt-4 space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Email Address
          </label>
          <input
            type="email"
            className="mt-1 w-full px-4 py-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="you@example.com"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <input
            type="password"
            className="mt-1 w-full px-4 py-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="********"
          />
        </div>
        <button
          type="submit"
          className="w-full px-4 py-2 text-white bg-indigo-600 hover:bg-indigo-700 rounded-md shadow-sm"
        >
          Login
        </button>
      </form>

      <p className="text-sm text-gray-600 mt-4 text-center">
        Don&apos;t have an account?
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
