import React, { useState } from "react";
import { FaWrench, FaUserShield, FaUserCog } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./pages.css";

export default function LoginPage() {
  const [role, setRole] = useState("ช่าง");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // mock login check
    if (email && password) {
      if (role === "ผู้ดูแล") {
        navigate("/admin/dashboard"); // ไปหน้า dashboard ของ admin
      } else {
        navigate("/technician/jobs"); // ไปหน้า technician
      }
    }
  };

  const handleRegisterClick = () => {
    navigate("/register");
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-6">
  <div className="flex flex-col md:flex-row w-full max-w-[1000px] gap-6">
    {/* Left Side */}
    <div className="flex-1 flex flex-col justify-center space-y-6">
      <div className="flex items-center gap-3">
        <div className="bg-[#5F5AFF] rounded-xl p-3">
          <FaWrench className="text-white text-3xl" />
        </div>
        <div>
          <h1 className="text-white text-3xl font-bold">Tech Job</h1>
          <div className="text-gray-300 text-lg">ระบบจัดการในงานช่าง</div>
        </div>
      </div>
      <p className="text-gray-300 text-sm">
        ระบบจัดการงานช่างที่ทันสมัย สำหรับการติดตามและจัดการในงานซ่อมบำรุงอย่างมีประสิทธิภาพ
      </p>

      <div className="flex gap-4">
        <div className="bg-[#111014] rounded-xl p-4 flex-1 border border-[#222]">
          <div className="flex items-center gap-2 mb-1">
            <FaUserCog className="text-[#5F5AFF]" />
            <span className="text-white font-semibold">สำหรับช่าง</span>
          </div>
          <div className="text-gray-400 text-sm">รับงาน ติดตาม อัปเดตสถานะ</div>
        </div>
        <div className="bg-[#111014] rounded-xl p-4 flex-1 border border-[#222]">
          <div className="flex items-center gap-2 mb-1">
            <FaUserShield className="text-[#5F5AFF]" />
            <span className="text-white font-semibold">สำหรับผู้ดูแล</span>
          </div>
          <div className="text-gray-400 text-sm">สร้างงาน มอบหมาย รายงาน</div>
        </div>
      </div>
    </div>

    {/* Right Side */}
    <div className="flex-1 flex justify-center items-center">
      <div className="bg-[#111014] rounded-xl p-8 w-full max-w-[400px] border border-[#222]">
        <h2 className="text-white text-2xl font-bold text-center mb-2">เข้าสู่ระบบ</h2>
        <p className="text-gray-400 text-center mb-6 text-sm">
          เลือกประเภทผู้ใช้และกรอกข้อมูลเพื่อเข้าสู่ระบบ
        </p>

        {/* Role Select */}
        <div className="flex mb-6 gap-2">
          <button
            type="button"
            className={`flex-1 py-2 rounded-l-lg font-semibold transition ${
              role === "ช่าง"
                ? "bg-[#19182A] text-white border border-[#5F5AFF]"
                : "bg-[#19182A] text-gray-400"
            }`}
            onClick={() => setRole("ช่าง")}
          >
            <span className="inline-flex items-center gap-2 justify-center">
              <FaUserCog /> ช่าง
            </span>
          </button>
          <button
            type="button"
            className={`flex-1 py-2 rounded-r-lg font-semibold transition ${
              role === "ผู้ดูแล"
                ? "bg-[#19182A] text-white border border-[#5F5AFF]"
                : "bg-[#19182A] text-gray-400"
            }`}
            onClick={() => setRole("ผู้ดูแล")}
          >
            <span className="inline-flex items-center gap-2 justify-center">
              <FaUserShield /> ผู้ดูแล
            </span>
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit}>
          <label className="block text-gray-300 mb-1">อีเมล</label>
          <input
            type="email"
            placeholder="กรอกอีเมลของคุณ"
            className="w-full mb-4 px-4 py-2 rounded-lg bg-[#19182A] text-white border border-[#222] focus:outline-none focus:border-[#5F5AFF]"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label className="block text-gray-300 mb-1">รหัสผ่าน</label>
          <input
            type="password"
            placeholder="••••"
            className="w-full mb-6 px-4 py-2 rounded-lg bg-[#19182A] text-white border border-[#222] focus:outline-none focus:border-[#5F5AFF]"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="flex gap-2">
            <button
              type="submit"
              className="flex-1 bg-[#5F5AFF] text-white py-2 rounded-lg font-semibold hover:bg-[#4b48c7] transition"
            >
              เข้าสู่ระบบ
            </button>
            <button
              type="button"
              onClick={() => navigate("/technician/register")}
              className="bg-[#19182A] text-white py-2 px-6 rounded-lg border border-[#5F5AFF] font-semibold hover:bg-[#222] transition"
            >
              ช่าง
            </button>
          </div>
        </form>

        <div className="text-center mt-6 text-gray-400 text-sm">
          ยังไม่มีบัญชี?{" "}
          <button
            className="text-[#5F5AFF] hover:underline"
            onClick={handleRegisterClick}
            type="button"
          >
            สมัครสมาชิก
          </button>
        </div>
      </div>
    </div>
  </div>
</div>

  );
}