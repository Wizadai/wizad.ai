import Link from "next/link";
import HomeHeader from "@/app/_elements/HomeHeader";
import Footer from "@/app/_elements/Footer";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <div className="flex-1 flex flex-col items-center justify-center px-4">
        <div className="text-center space-y-6 max-w-md">
          <h1 className="text-6xl font-bold text-purple-500">404</h1>
          <h2 className="text-3xl font-semibold">Poster Not Found</h2>
          <p className="text-gray-400 text-lg">
            The poster you&apos;re looking for doesn&apos;t exist or has been removed.
          </p>
          <Link
            href="/"
            className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-8 rounded-full transition-colors"
          >
            Back to Home
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}
