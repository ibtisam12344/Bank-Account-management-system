"use client";

import { useFormStatus } from "react-dom";
import SpinnerMini from "./SpinnerMini";

function SmallSubmitButton({ color }) {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className={`py-2 px-4 text-white font-semibold rounded-md transition ${
        color === "red"
          ? "bg-red-500 hover:bg-red-600"
          : color === "green"
          ? "bg-green-500 hover:bg-green-600"
          : "bg-gray-500 hover:bg-gray-600" // Default color
      }`}
    >
      {pending ? <SpinnerMini /> : "Done"}
    </button>
  );
}

export default SmallSubmitButton;
