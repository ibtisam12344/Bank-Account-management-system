"use client";

import SmallSubmitButton from "./SmallSubmitButton";

function LimitBox({ limit, setLimit }) {
  // Handle Increase (limit up to 30)
  const handleIncrease = () => {
    if (limit < 30) {
      setLimit((prevLimit) => prevLimit + 1);
    }
  };

  // Handle Decrease (limit down to 0)
  const handleDecrease = () => {
    if (limit > 0) {
      setLimit((prevLimit) => prevLimit - 1);
    }
  };

  // Handle Range Input Change
  const handleRangeChange = (e) => {
    setLimit(Number(e.target.value)); // Update limit based on range input
  };

  return (
    <form action={jj} autoComplete="true" className="mb-4">
      <div className="flex items-center justify-between gap-4">
        {/* Decrease Button */}
        <button
          type="button"
          onClick={handleDecrease}
          className="w-8 h-8 bg-gray-200 text-gray-600 rounded-full hover:bg-gray-300 transition"
          aria-label="Decrease limit"
        >
          -
        </button>

        {/* Range Input with Displayed Value */}
        <div className="flex items-center justify-center gap-2">
          <input
            id="limit"
            name="limit" // Add name for form submission
            type="range"
            min="0"
            max="30"
            value={limit}
            onChange={handleRangeChange}
            className="w-full h-2 bg-gray-200 rounded-full accent-blue-500"
            aria-label="Set limit"
          />
          <div className="text-lg text-gray-800 font-semibold">{limit}</div>
        </div>

        {/* Increase Button */}
        <button
          type="button"
          onClick={handleIncrease}
          className="w-8 h-8 bg-gray-200 text-gray-600 rounded-full hover:bg-gray-300 transition"
          aria-label="Increase limit"
        >
          +
        </button>
      </div>

      {/* Limit Range Display */}
      <div className="flex justify-between text-xs text-gray-500 my-2 mx-2">
        <span>0</span>
        <span>30</span>
      </div>

      {/* Submit Button */}
      <SmallSubmitButton color="green" />
    </form>
  );
}

export default LimitBox;
