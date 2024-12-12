import React from "react";

// Modal Component
const Modal = ({ isOpen, onClose, setting }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-md relative w-80">
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
          onClick={onClose}
        >
          X
        </button>
        <h2 className="text-xl font-semibold mb-4">{setting.name}</h2>
        <p className="mb-4">{setting.description}</p>
        <div className="flex justify-end space-x-4">
          <button
            className="py-2 px-4 border border-gray-300 rounded-md hover:bg-gray-200"
            onClick={onClose}
          >
            Close
          </button>
          <button className="py-2 px-4 bg-green-500 text-white rounded-md hover:bg-green-600">
            Done
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
