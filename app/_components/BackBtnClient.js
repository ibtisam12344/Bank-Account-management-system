"use client";

import { useRouter } from "next/navigation";
function BackBtnClient() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className="mb-6 inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold"
    >
      ← Back
    </button>
  );
}

export default BackBtnClient;
