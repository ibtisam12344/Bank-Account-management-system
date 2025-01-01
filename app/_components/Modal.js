"use client";

import { useState } from "react";

import StatementGenerateBox from "./StatementGenerateBox";
import LimitBox from "./LimitBox";
import UpdateBox from "./UpdateBox";
import ButtonSmall from "./ButtonSmall";

const Modal = ({ isOpen, onClose, setting, limit, setLimit }) => {
  if (!isOpen) return null;

  const limitBox = setting.id === 3;
  const statementBox = setting.id === 1;
  const updateBox = setting.id === 4;

  const handleWorking = () => {
    if (statementBox) {
      setting.working(fileFormat.toLowerCase());
      return;
    }
    setting.working();
    onClose();
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
      onClick={handleOverlayClick} // Close modal if background is clicked
    >
      <div className="bg-white p-8 rounded-lg shadow-lg relative w-full sm:w-96 max-w-lg">
        {/* Close Icon */}
        <button
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-800"
          onClick={onClose}
        >
          <span className="text-xl">&times;</span>
        </button>

        <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
          {setting.name}
        </h2>
        <p className="text-gray-600 text-sm mb-6 text-center">
          {setting.description}
        </p>

        {/* Limit Box */}
        {limitBox && <LimitBox setLimit={setLimit} limit={limit} />}

        {/* Statement Box */}
        {statementBox && <StatementGenerateBox />}

        {/* Update Box */}
        {updateBox && <UpdateBox handleWorking={handleWorking} />}
      </div>
    </div>
  );
};

export default Modal;
