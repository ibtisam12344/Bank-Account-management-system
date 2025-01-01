import "../_styles/globals.css"; // Ensure this path is correct

import { Toaster } from "react-hot-toast";
import Menu from "../_components/Menu";

export default function Layout({ children }) {
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} gutter={8} />
      <div className="flex flex-row min-h-screen bg-gray-50">
        {/* Left Section */}
        <Menu />

        {/* Main Section */}
        <main className="flex-1 bg-white max-w-full overflow-y-auto max-h-screen">
          {children}
        </main>
      </div>
    </>
  );
}
