import { Outlet } from "react-router-dom";

export function Layout() {
  return (
    <div className="w-full h-screen bg-gray-100 text-black flex flex-col">
      <div className="p-4 bg-slate-700 text-lg text-white font-bold">
        <h1 className="uppercase">Admin Dashboard</h1>
      </div>
      <div className="flex-grow p-9 flex flex-col">
        <Outlet />
      </div>
    </div>
  );
}
