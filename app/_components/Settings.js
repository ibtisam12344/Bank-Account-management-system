"use client";

import ModalBox from "./ModalBox";
import GenerateTxt from "./GenerateTxt";
import GeneratePdf from "./GeneratePdf";
import { useAccountDetails } from "./AccountDetailsContext";

import toast from "react-hot-toast";
import { useState } from "react";
import { useRouter } from "next/navigation";

function Settings() {
  const router = useRouter();

  const { accountDetails, setAccountDetails } = useAccountDetails();

  const [limit, setLimit] = useState(accountDetails?.limit || 0);
  const [frozen, setFrozen] = useState(accountDetails?.frozen || false);

  // Helper function for freezing/unfreezing account
  const toggleFreezeAccount = () => {
    const updatedFrozen = !frozen;
    setFrozen(updatedFrozen);
    setAccountDetails((prevDetails) => ({
      ...prevDetails,
      frozen: updatedFrozen,
    }));
    toast.success(`Account has been ${updatedFrozen ? "frozen" : "unfrozen"}!`);
  };

  // Helper function for setting daily transaction limit
  const setDailyLimit = () => {
    setAccountDetails((prevDetails) => ({
      ...prevDetails,
      limit: Number(limit),
    }));
    toast.success(`Transaction limit set to ${limit}.`);
  };

  // Helper function for deleting account
  const deleteAccount = () => {
    if (confirm("Are you sure you want to delete this account?")) {
      setAccountDetails(null);
      router.push("/signup");
      toast.success("Account deleted successfully!");
    }
  };

  const settings = [
    {
      id: 1,
      name: "Generate Bank Statements",
      description: "Generate bank statements for the account.",
    },
    {
      id: 2,
      name: frozen ? "Unfreeze Account" : "Freeze Account",
      description: frozen ? "Unfreeze the account." : "Freeze the account.",
      working: toggleFreezeAccount,
    },
    {
      id: 3,
      name: "Set Limit",
      description: "Set a daily limit for transactions.",
      working: setDailyLimit,
    },
    {
      id: 4,
      name: "Update Account",
      description: "Update account details.",
    },
    {
      id: 5,
      name: "Delete Account",
      description: "Delete the account. This action cannot be undone.",
      working: deleteAccount,
    },
  ];

  return (
    <div>
      {settings.map((setting) => (
        <ModalBox
          key={setting.id}
          setting={setting}
          accountDetails={accountDetails}
          limit={limit}
          setLimit={setLimit}
        />
      ))}
    </div>
  );
}

export default Settings;
