import { Link } from "react-router-dom";

export function Home() {
  return (
    <div className="flex-grow flex flex-col justify-center items-center">
      <div className="border border-blue-300 rounded-lg shadow-md bg-blue-100 p-7 flex flex-col items-center gap-5 text-blue-900">
        Welcome to admin dashboard
        <Link
          to="/login"
          className="rounded px-4 py-2 bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          Login
        </Link>
      </div>
    </div>
  );
}
