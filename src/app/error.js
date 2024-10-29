"use client";

export default function ErrorPage() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-black text-gray-200">
            <h1 className="text-5xl font-bold mb-4">Oops! Something went wrong.</h1>
            <p className="text-lg">We couldn't fetch the vehicle data at this time.</p>
            <a href="/" className="mt-6 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500 transition duration-200">
                Go Back Home
            </a>
        </div>
    );
}
