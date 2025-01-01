"use client";

import { useState } from "react";
import Modal from "./Modal";

export default function ModalBox({ setting, setLimit, limit, accountDetails }) {
  const [isModalOpen, setModalOpen] = useState(false);

  const red = setting.id === 5;

  // Toggle modal visibility
  const toggleModal = () => setModalOpen((prevState) => !prevState);

  // Define button styles based on the 'red' setting
  const buttonClass = red
    ? "bg-red-500 hover:bg-red-600"
    : "bg-blue-500 hover:bg-blue-600";

  return (
    <>
      <button
        onClick={toggleModal}
        className={`w-full ${buttonClass} text-white mb-4 font-semibold py-2 px-4 rounded-lg`}
        aria-label={`Open ${setting.name} modal`}
      >
        {setting.name}
      </button>

      {/* Conditionally render Modal if it is open */}
      {isModalOpen && (
        <Modal
          red={red}
          isOpen={isModalOpen}
          onClose={toggleModal}
          setting={setting}
          limit={limit}
          setLimit={setLimit}
        />
      )}
    </>
  );
}
