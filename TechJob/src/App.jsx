import React from "react";
import { Outlet } from "react-router-dom";
import AdminSidebar from "./components/AdminSidebar";
import "./App.css";
export default function App() {
  return (
    <div className="flex min-h-screen bg-black text-white">
      <AdminSidebar />
      <div className="flex-1 p-8">
        {/* Outlet คือจุดที่ route ลูกๆ จะมา render */}
        <Outlet />
      </div>
    </div>
  );
}
