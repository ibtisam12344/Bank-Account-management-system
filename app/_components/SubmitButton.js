"use client";

import { useFormStatus } from "react-dom";

function SubmitButton({ children, pendingLabel, type }) {
  const { pending } = useFormStatus();

  return (
    <button
      type={type}
      disabled={pending}
      className="w-full px-4 py-2 flex items-center justify-center text-white bg-indigo-600 hover:bg-indigo-700 rounded-md shadow-sm transition-all disabled:cursor-not-allowed disabled:bg-gray-500 disabled:text-gray-300"
    >
      {pending ? pendingLabel : children}
    </button>
  );
}
export default SubmitButton;
