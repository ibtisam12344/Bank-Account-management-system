import Form from "next/form";
import { useFormStatus } from "react-dom";

export default function SignupForm({ FormData }) {
  const status = useFormStatus();

  console.log(FormData);

  return (
    <Form className="mt-4 space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Full Name
        </label>
        <input
          name="name"
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
          name="email"
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
          name="password"
          type="password"
          className="mt-1 w-full px-4 py-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          placeholder="********"
        />
      </div>
      <button
        type="submit"
        className="w-full px-4 py-2 text-white bg-indigo-600 hover:bg-indigo-700 rounded-md shadow-sm"
      >
        {!status.pending ? "Sign Up" : "Signing Up"}
      </button>
    </Form>
  );
}
