"use client";

import { useRouter } from "next/navigation";

function ViewDetails({ accountId }) {
  const router = useRouter();

  // Function to navigate to the transactions page for the selected account
  const viewDetails = () => {
    // Perform the navigation action when the button is clicked
    router.push(`/dashboard/accounts/details?id=${accountId}`);
  };

  return (
    <button onClick={viewDetails} className="text-blue-500 hover:underline">
      View Details
    </button>
  );
}

export default ViewDetails;
