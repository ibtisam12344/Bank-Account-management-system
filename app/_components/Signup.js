import Link from "next/link";
import SignupForm from "./SignupForm";

function Signup({ toggleForm, type = "initial" }) {
  return (
    <div
      className={`w-full px-4 py-6  ${
        type === "initial" ? "sm:w-1/2 sm:ml-4 ml-4" : "sm:w-full"
      }`}
    >
      <h2 className="text-xl font-bold text-gray-800 text-center">Sign Up</h2>
      <SignupForm />
      <p className="text-sm text-gray-600 mt-4 text-center">
        Already have an account?
        {type === "initial" ? (
          <button
            onClick={toggleForm}
            className="text-indigo-500 hover:underline"
          >
            login
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
