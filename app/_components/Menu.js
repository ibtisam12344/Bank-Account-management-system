"use client";

import { useState } from "react";
import { HiEye, HiEyeOff } from "react-icons/hi";
import { TbLayoutDashboard } from "react-icons/tb";
import { useAccountDetails } from "./AccountDetailsContext";
import Menus from "./Menus";
import Link from "next/link";

function Menu() {
  const [showDetails, setShowDetails] = useState(false);
  const { accountDetails } = useAccountDetails() || {}; // Safe access with optional chaining

  // Provide fallback values if accountDetails is missing
  const name = accountDetails?.name || "User";
  const balance = accountDetails?.balance || 0;
  const accountNumber = accountDetails?.accountNumber || "N/A";

  return (
    <aside className="w-full md:max-w-xs lg:max-w-sm bg-gradient-to-b from-blue-500 to-blue-700 text-white flex-shrink-0 p-6 shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Welcome, {name}</h2>

      <p className="text-sm leading-relaxed flex items-center">
        Account Balance :
        <span className="font-semibold ml-2">
          ${showDetails ? balance : "*".repeat(balance.toString().length)}
        </span>
        <button
          className="ml-auto p-1 text-white rounded"
          onClick={() => setShowDetails(!showDetails)}
        >
          {showDetails ? (
            <HiEyeOff className="w-5 h-5" />
          ) : (
            <HiEye className="w-5 h-5" />
          )}
        </button>
      </p>

      <p className="text-sm leading-relaxed">
        Account Number :
        <span className="font-semibold ml-1">
          {showDetails
            ? accountNumber
            : "*".repeat(accountNumber.toString().length)}
        </span>
      </p>

      <Link className="flex justify-end" href="/dashboard">
        <TbLayoutDashboard className="w-7 h-7" />
      </Link>

      <Menus accountDetails={accountDetails} />
    </aside>
  );
}

export default Menu;
