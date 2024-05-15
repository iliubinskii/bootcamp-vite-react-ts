import React from "react";
import { useNavigate } from "react-router";
import { db } from "../db";

export function CreateUser() {
  const navigate = useNavigate();

  const [error, setError] = React.useState("");

  const [firstName, setFirstName] = React.useState("");

  const [lastName, setLastName] = React.useState("");

  const [username, setUsername] = React.useState("");

  const [password, setPassword] = React.useState("");

  const submit: React.FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();

    const result = await db.addUser({
      admin: false,
      username,
      password,
      firstName,
      lastName,
    });

    if (result) navigate("/dashboard");
    else setError("Username already exists");
  };

  return (
    <div className="flex-grow flex flex-col justify-center items-center">
      <form
        className="w-96 p-5 bg-slate-700 border-2 border-slate-500 flex flex-col gap-3"
        onSubmit={submit}
      >
        <h2 className="text-white text-lg font-bold">Create a user</h2>
        {error.length ? (
          <div className="border-2 border-red-300 rounded p-4 bg-red-100 text-red-700">
            {error}
          </div>
        ) : undefined}
        <input
          className="p-2 border-2 border-slate-500 rounded-md focus:outline-none focus:border-slate-300"
          type="text"
          name="firstName"
          autoComplete="name"
          placeholder="First name"
          value={firstName}
          onChange={(event) => setFirstName(event.target.value)}
        />
        <input
          className="p-2 border-2 border-slate-500 rounded-md focus:outline-none focus:border-slate-300"
          type="text"
          name="lastName"
          autoComplete="lastName"
          placeholder="Last name"
          value={lastName}
          onChange={(event) => setLastName(event.target.value)}
        />
        <input
          className="p-2 border-2 border-slate-500 rounded-md focus:outline-none focus:border-slate-300"
          type="text"
          name="username"
          autoComplete="username"
          placeholder="Username"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
        <input
          className="p-2 border-2 border-slate-500 rounded-md focus:outline-none focus:border-slate-300"
          type="password"
          name="password"
          autoComplete="current-password"
          placeholder="Password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <button
          className={
            username.length && password.length
              ? "bg-slate-500 text-white py-2 px-4 rounded-md hover:bg-slate-400 focus:outline-none focus:bg-slate-600"
              : "bg-slate-500 text-white py-2 px-4 rounded-md opacity-50"
          }
          type="submit"
          disabled={!(username.length && password.length)}
        >
          Submit
        </button>
      </form>
    </div>
  );
}
