"use client";

import { useState } from "react";
import Modal from "./Modal";

// ModalBox Component
export default function ModalBox({ setting }) {
  const [isModalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  };

  return (
    <>
      <button
        onClick={toggleModal}
        className="w-full bg-blue-500 hover:bg-blue-600 text-white mb-4 font-semibold py-2 px-4 rounded-lg"
      >
        {setting.name}
      </button>
      {isModalOpen && (
        <Modal isOpen={isModalOpen} onClose={toggleModal} setting={setting} />
      )}
    </>
  );
}
