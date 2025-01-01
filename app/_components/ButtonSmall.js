"use client";

import PropTypes from "prop-types";

function ButtonSmall({ onClick, color }) {
  return (
    <button
      onClick={onClick} // Directly invoke the passed `onClick` handler
      className={`py-2 px-4 text-white font-semibold rounded-md transition ${
        color === "red"
          ? "bg-red-500 hover:bg-red-600"
          : color === "green"
          ? "bg-green-500 hover:bg-green-600"
          : "bg-gray-500 hover:bg-gray-600"
      }`}
    >
      Done
    </button>
  );
}

ButtonSmall.propTypes = {
  onClick: PropTypes.func.isRequired,
  color: PropTypes.string,
};

export default ButtonSmall;
