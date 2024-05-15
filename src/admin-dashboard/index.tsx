import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./Layout";
import { Home, Login } from "./pages";
import { AppContextProvider } from "./app-context";
import AuthGuard from "./auth-guard";

export function AdminDashboard() {
  return (
    <AppContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route
              index
              element={
                <AuthGuard pageName="Admin Dashboard">
                  <Home />
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
