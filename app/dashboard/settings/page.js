import Settings from "@/app/_components/Settings";

export const metadata = {
  title: "Settings",
  description:
    "Manage your account settings, including account details, limits, and more.",
};

export default function Page() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white shadow-md rounded-lg p-8 max-w-md w-full">
        <h1 className="text-2xl font-semibold text-gray-700 mb-6 text-center">
          Settings
        </h1>

        <Settings />
      </div>
    </div>
  );
}
