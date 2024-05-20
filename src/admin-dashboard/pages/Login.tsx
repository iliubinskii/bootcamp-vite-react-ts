import React from "react";
import { AppContext } from "../app-context";
import { useLocation, useNavigate } from "react-router-dom";

export function Login() {
  const navigate = useNavigate();

  const { state } = useLocation();

  const { loginAsAdmin } = React.useContext(AppContext);

  const [error, setError] = React.useState("");

  const [username, setUsername] = React.useState("");

  const [password, setPassword] = React.useState("");

  const disabled = !(username.length && password.length);

  const submit: React.FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();

    const result = await loginAsAdmin(username, password);

    if (result) navigate("/dashboard");
    else setError("Invalid username or password");
  };

  React.useEffect(() => {
    if (state?.error) setError(state.error);
  }, [state?.error]);

  return (
    <div className="flex-grow flex flex-col justify-center items-center">
      <form
        className="w-96 p-5 bg-slate-700 border-2 border-slate-500 flex flex-col gap-3"
        onSubmit={submit}
      >
        <h2 className="text-white text-lg font-bold">Login</h2>
        {error.length ? (
          <div className="border-2 border-red-300 rounded p-4 bg-red-100 text-red-700">
            {error}
          </div>
        ) : undefined}
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
            disabled
              ? "bg-slate-500 text-white py-2 px-4 rounded-md opacity-50"
              : "bg-slate-500 text-white py-2 px-4 rounded-md hover:bg-slate-400 focus:outline-none focus:bg-slate-600"
          }
          type="submit"
          disabled={disabled}
        >
          Login
        </button>
      </form>
    </div>
  );
}
