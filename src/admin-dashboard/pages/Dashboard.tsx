import React from "react";
import { User, db } from "../db";
import { FaUserEdit, FaUserAltSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { PiCrownSimpleThin } from "react-icons/pi";

export function Dashboard() {
  const [users, setUsers] = React.useState<readonly User[]>([]);

  React.useEffect(() => {
    db.getUsers().then((users) => {
      setUsers([...users].sort((a, b) => a.username.localeCompare(b.username)));
    });
  }, []);

  return (
    <div className="flex flex-col gap-6">
      <div>
        <div className="border-t-2 border-gray-400 bg-gray-500 px-4 py-2 grid grid-cols-4 text-white">
          <div>Username</div>
          <div>First name</div>
          <div>Last name</div>
        </div>
        {users.map((user) => (
          <div
            key={user.username}
            className="border-t-2 border-gray-400 px-4 py-2 grid grid-cols-4 items-center"
          >
            <div className="flex items-center gap-1">
              {user.username}
              {user.admin ? <PiCrownSimpleThin /> : undefined}
            </div>
            <div>{user.firstName}</div>
            <div>{user.lastName}</div>
            <div className="flex items-center gap-5">
              <Link to={`/dashboard/${user.username}/edit`}>
                <FaUserEdit className="text-gray-700" />
              </Link>
              {user.admin ? undefined : (
                <a
                  className="cursor-pointer"
                  onClick={() => {
                    db.deleteUser(user.username).then(() => {
                      setUsers((users) =>
                        users.filter(
                          (candidate) => candidate.username !== user.username
                        )
                      );
                    });
                  }}
                >
                  <FaUserAltSlash className="text-red-700" />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
