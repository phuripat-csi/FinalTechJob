import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { FaCog, FaClipboardList } from "react-icons/fa";
import "./components.css";

export default function AdminSidebar() {
  const navigate = useNavigate();

  const handleSignOut = () => {
    // ลบ token/session ถ้ามี
    // localStorage.removeItem("token");
    navigate("/login", { replace: true }); // กลับไปหน้า login
  };

  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="w-64 bg-[#111014] flex flex-col justify-between border-r border-[#222] fixed h-screen">
        <div>
          <div className="p-4 text-white text-xl font-bold">TECH JOB</div>
          <nav className="flex flex-col gap-2 px-4">
            <Link
              to="/admin/admindashboard"
              className="bg-[#19182A] text-white py-2 px-4 rounded-lg hover:bg-[#222]"
            >
              <FaClipboardList className="inline mr-2" /> ข้อมูลภาพรวม
            </Link>
            <Link
              to="/admin/datauser"
              className="bg-[#19182A] text-white py-2 px-4 rounded-lg hover:bg-[#222]"
            >
              <FaCog className="inline mr-2" /> การตั้งค่า
            </Link>
          </nav>
        </div>

        <div className="p-4">
          <button
            onClick={handleSignOut}
            className="w-full bg-red-600 text-white py-2 rounded-lg font-semibold hover:bg-red-700 transition"
          >
            ออกจากระบบ
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 ml-64 p-6 text-white">
        <Outlet /> {/* ✅ เนื้อหาจะอยู่ทางขวาของ Sidebar */}
      </div>
    </div>
  );
}
