import React, { useState } from "react";
import { FaUser, FaUserShield } from "react-icons/fa";
import { HiOutlineEye, HiOutlineEyeOff } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import "./pages.css";

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // mock register success
    navigate("/login"); // หลังสมัครเสร็จ กลับไปหน้า login
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="flex w-[1100px]">
        {/* Left Side */}
        <div className="flex-1 flex flex-col justify-center pr-12">
          <div className="flex gap-6">
            <div className="bg-[#111014] rounded-xl p-6 flex-1 border border-[#222]">
              <div className="flex items-center mb-2">
                <FaUser className="text-[#5F5AFF] mr-2" />
                <span className="text-white font-semibold">สำหรับช่าง</span>
              </div>
              <div className="text-gray-400 text-sm">
                รับงาน ติดตาม อัปเดตสถานะ
              </div>
            </div>
            <div className="bg-[#111014] rounded-xl p-6 flex-1 border border-[#222]">
              <div className="flex items-center mb-2">
                <FaUserShield className="text-[#5F5AFF] mr-2" />
                <span className="text-white font-semibold">สำหรับผู้ดูแล</span>
              </div>
              <div className="text-gray-400 text-sm">
                สร้างงาน มอบหมาย รายงาน
              </div>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex-1 flex flex-col justify-center items-center">
          <div className="bg-[#111014] rounded-xl px-10 py-8 w-[400px] border border-[#222]">
            <h2 className="text-white text-2xl font-bold text-center mb-8">
              สร้างบัญชี
            </h2>
            <form onSubmit={handleSubmit}>
              <input
                type="email"
                placeholder="ใส่อีเมลของคุณ"
                className="w-full mb-4 px-4 py-2 rounded-lg bg-[#19182A] text-white border border-[#222] focus:outline-none focus:border-[#5F5AFF]"
                required
              />
              <input
                type="tel"
                placeholder="ป้อนหมายเลขโทรศัพท์ของคุณ"
                className="w-full mb-4 px-4 py-2 rounded-lg bg-[#19182A] text-white border border-[#222] focus:outline-none focus:border-[#5F5AFF]"
                required
              />
              <div className="relative mb-6">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="ใส่รหัสผ่านของคุณ"
                  className="w-full px-4 py-2 rounded-lg bg-[#19182A] text-white border border-[#222] focus:outline-none focus:border-[#5F5AFF] pr-10"
                  required
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                  onClick={() => setShowPassword((v) => !v)}
                  tabIndex={-1}
                >
                  {showPassword ? <HiOutlineEyeOff /> : <HiOutlineEye />}
                </button>
              </div>
              <button
                type="submit"
                className="w-full bg-[#5F5AFF] text-white py-2 rounded-lg font-semibold hover:bg-[#4b48c7] transition mb-3"
              >
                Sign Up
              </button>
            </form>

            <div className="text-center mt-2 text-gray-400 text-sm">
              มีบัญชีอยู่แล้วใช่ไหม?{" "}
              <button
                className="text-[#5F5AFF] hover:underline"
                type="button"
                onClick={() => navigate("/login")}
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}