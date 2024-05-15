import { Link, Outlet, useNavigate } from "react-router-dom";
import React from "react";
import { AppContext } from "./app-context";
import { IoMdLogOut, IoMdLogIn, IoMdPersonAdd } from "react-icons/io";
import { MdDashboard } from "react-icons/md";

export function Layout() {
  const { loggedIn, logoff } = React.useContext(AppContext);

  const navigate = useNavigate();

  return (
    <div className="w-full h-screen bg-gray-100 text-black flex flex-col">
      <div className="px-6 py-4 bg-slate-700 text-lg text-white flex justify-between items-center">
        <h1 className="uppercase font-bold">Admin Dashboard</h1>
        {loggedIn ? (
          <div className="flex gap-5 items-center text-slate-300">
            <Link to="/">
              <MdDashboard />
            </Link>
            <Link to="/create">
              <IoMdPersonAdd />
            </Link>
            <a
              className="cursor-pointer"
              onClick={() => {
                logoff();
                navigate("/");
              }}
            >
              <IoMdLogOut />
            </a>
          </div>
        ) : (
          <Link to="/login">
            <IoMdLogIn />
          </Link>
        )}
      </div>
      <div className="flex-grow px-6 py-4 flex flex-col">
        <Outlet />
      </div>
    </div>
  );
}
