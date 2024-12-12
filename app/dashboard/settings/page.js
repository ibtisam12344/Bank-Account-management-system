import ModalBox from "@/app/_components/ModalBox";

// SettingsPage Component
export default function Page() {
  const settings = [
    {
      id: 1,
      name: "Generate Bank Statements",
      description: "Generate bank statements for the account",
    },
    { id: 2, name: "Freeze Account", description: "Freeze the account" },
    { id: 3, name: "Set Limit", description: "Set a limit for transactions" },
    { id: 4, name: "Delete Account", description: "Delete the account" },
    { id: 5, name: "Update Account", description: "Update account details" },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white shadow-md rounded-lg p-8 max-w-md w-full">
        <h1 className="text-2xl font-semibold text-gray-700 mb-6 text-center">
          Settings
        </h1>
        <div>
          {settings.map((setting) => (
            <ModalBox key={setting.id} setting={setting} />
          ))}
        </div>
      </div>
    </div>
  );
}
