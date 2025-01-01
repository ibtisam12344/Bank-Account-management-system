"use client";

import { handleUpdate } from "../_lib/action";
import { useAccountDetails } from "./AccountDetailsContext";
import SmallSubmitButton from "./SmallSubmitButton";

function UpdateBox() {
  const { accountDetails } = useAccountDetails();

  return (
    <div className="mb-6">
      <h3 className="text-xl font-semibold text-gray-800 mb-4">Update Info</h3>
      <form className="space-y-4" autoComplete="true" action={handleUpdate}>
        {/* Name Input */}
        <div>
          <label htmlFor="name" className="block text-gray-600">
            Name
          </label>
          <input type="hidden" name="id" value={accountDetails?.id} />
          <input
            id="name"
            type="text"
            name="name"
            className="w-full p-2 border border-gray-300 rounded-md"
            defaultValue={accountDetails.name}
          />
        </div>

        {/* Email Input */}
        <div>
          <label htmlFor="email" className="block text-gray-600">
            Email
          </label>
          <input
            id="email"
            type="email"
            name="email"
            className="w-full p-2 border border-gray-300 rounded-md"
            defaultValue={accountDetails.email}
          />
        </div>

        {/* Password Input */}
        <div>
          <label htmlFor="password" className="block text-gray-600">
            Password
          </label>
          <input
            id="password"
            type="password"
            name="password"
            className="w-full p-2 border border-gray-300 rounded-md"
            defaultValue={accountDetails.password}
          />
        </div>

        <SmallSubmitButton color="green" />
      </form>
    </div>
  );
}

export default UpdateBox;
