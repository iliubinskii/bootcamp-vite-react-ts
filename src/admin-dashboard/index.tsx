import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./Layout";
import { Dashboard, Login, EditUser, CreateUser, Home } from "./pages";
import { AppContextProvider } from "./app-context";
import AuthGuard from "./auth-guard";

export function AdminDashboard() {
  return (
    <AppContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route
              path="/dashboard"
              element={
                <AuthGuard pageName="Admin Dashboard">
                  <Dashboard />
                </AuthGuard>
              }
            />
            <Route
              path="/create"
              element={
                <AuthGuard pageName="Create User">
                  <CreateUser />
                </AuthGuard>
              }
            />
            <Route
              path="/edit"
              element={
                <AuthGuard pageName="Edit User">
                  <EditUser />
                </AuthGuard>
              }
            />
            <Route path="/login" element={<Login />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AppContextProvider>
  );
}
