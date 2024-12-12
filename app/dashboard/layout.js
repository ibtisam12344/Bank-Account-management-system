"use client";

import localFont from "next/font/local";
import "../_styles/globals.css";

import AccountDetailsProvider from "../_components/AccountDetailsContext";
import Menu from "../_components/Menu";

const geistSans = localFont({
  src: "../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Layout({ children }) {
  return (
    <AccountDetailsProvider>
      <div className="flex flex-row min-h-screen bg-gray-50">
        {/* Left Section */}
        <Menu />

        {/* Main Section */}

        <main className="flex-1 bg-white max-w-full overflow-y-auto max-h-screen">
          {children}
        </main>
      </div>
    </AccountDetailsProvider>
  );
}
