import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import "./App.css";

import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import App from "./App.jsx"; // <== ตอนนี้มี default export แล้ว
import AdminDashboard from "./pages/AdminDashboard";

const router = createBrowserRouter([
  { path: "/", element: <Navigate to="/login" replace /> },
  { path: "/login", element: <LoginPage /> },
  { path: "/register", element: <RegisterPage /> },

  // Layout ของ admin
  {
    path: "/admin",
    element: <App />, // ✅ ใช้ App เป็น Layout
    children: [
      {
        path: "dashboard",
        element: <AdminDashboard />,
      },
      {
        path: "settings",
        element: <h2 className="text-white">ตั้งค่าระบบ</h2>,
      },
    ],
  },

  { path: "*", element: <Navigate to="/login" replace /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);