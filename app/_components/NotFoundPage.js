import Link from "next/link";

function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-full bg-gray-100">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-indigo-600">404</h1>
        <h2 className="text-xl font-semibold text-gray-700 mt-2">
          Oops! Page not found.
        </h2>
        <p className="text-gray-600 mt-4">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            className="px-6 py-2 text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg"
            href="/"
          >
            Go Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NotFoundPage;
