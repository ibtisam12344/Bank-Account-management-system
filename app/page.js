import SlidingContainer from "./_components/SlidingContainer";

export const metadata = {
  title: "IE Bankings",
  description: "Student's Banking application",
};

export default function Page() {
  return (
    <>
      {/* Header */}
      <header className="bg-indigo-600 text-white py-4">
        <h1 className="text-center text-xl font-bold">Welcome to IE Banking</h1>
      </header>

      {/* Main Content */}
      <main className="flex-grow bg-gray-100 flex items-center justify-center">
        <div className="relative bg-white rounded-lg shadow-lg overflow-hidden max-w-md w-full mx-auto sm:max-w-lg p-6">
          {/* SlidingContainer */}
          <SlidingContainer />
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-indigo-600 text-white py-2">
        <p className="text-center text-sm">
          &copy; {new Date().getFullYear()} IE Banking. All Rights Reserved.
        </p>
      </footer>
    </>
  );
}
