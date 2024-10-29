export default function NotFoundPage() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-black text-gray-200">
            <h1 className="text-5xl font-bold mb-4">404 - Page Not Found</h1>
            <p className="text-lg">Sorry, the page you are looking for does not exist.</p>
            <a href="/" className="mt-6 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500 transition duration-200">
                Go Back Home
            </a>
        </div>
    );
}
