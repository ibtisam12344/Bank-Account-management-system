import Link from "next/link";

function Signup({ toggleForm, type = "initial" }) {
  return (
    <div
      className={`w-full px-4 py-6  ${
        type === "initial" ? "sm:w-1/2 sm:ml-4 ml-4" : "sm:w-full"
      }`}
    >
      <h2 className="text-xl font-bold text-gray-800 text-center">Sign Up</h2>
      <form className="mt-4 space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Full Name
          </label>
          <input
            type="text"
            className="mt-1 w-full px-4 py-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="John Doe"
          />
        </div>
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
          Sign Up
        </button>
      </form>
      <p className="text-sm text-gray-600 mt-4 text-center">
        Already have an account?
        {type === "initial" ? (
          <button
            onClick={toggleForm}
            className="text-indigo-500 hover:underline"
          >
            Sign Up
          </button>
        ) : (
          <Link href="/login" className="text-indigo-500 hover:underline">
            login
          </Link>
        )}
      </p>
    </div>
  );
}

export default Signup;
