import React, { useState } from "react";

function Navbar({ onLogin, onRegister }) {
  const [active, setActive] = useState(null);

  const menu = [
    { label: "หน้าแรก", key: "home" },
    { label: "ฟีเจอร์", key: "features" },
    { label: "ราคา", key: "pricing" },
    { label: "ติดต่อเรา", key: "contact" },
  ];

  return (
    <nav className="flex items-center justify-between px-10 py-4 bg-transparent">
      <div className="flex items-center gap-3">
        <img src="/logo192.png" alt="logo" className="w-8 h-8" />
        <span className="text-white text-2xl font-bold">Tech Job</span>
      </div>
      <div className="flex gap-8">
        {menu.map((item) => (
          <button
            key={item.key}
            className={`relative text-white text-lg px-2 py-1 transition 
              ${active === item.key ? "font-bold" : "font-normal"}
            `}
            onMouseDown={() => setActive(item.key)}
            onMouseUp={() => setActive(null)}
            onTouchStart={() => setActive(item.key)}
            onTouchEnd={() => setActive(null)}
          >
            <span
              className={`transition-all duration-200 
                ${active === item.key ? "scale-110 text-[#5F5AFF]" : ""}
              `}
            >
              {item.label}
            </span>
            {/* Animated underline */}
            <span
              className={`absolute left-0 right-0 -bottom-1 h-0.5 bg-[#5F5AFF] rounded transition-all duration-200
                ${active === item.key ? "w-full opacity-100" : "w-0 opacity-0"}
              `}
            />
          </button>
        ))}
      </div>
      <div className="flex gap-3">
        <button
          className="px-5 py-2 rounded-lg text-white bg-transparent border border-[#5F5AFF] hover:bg-[#22223A] transition"
          onClick={onLogin}
        >
          เข้าสู่ระบบ
        </button>
        <button
          className="px-5 py-2 rounded-lg text-white bg-[#5F5AFF] hover:bg-[#4b48c7] transition"
          onClick={onRegister}
        >
          สมัครสมาชิก
        </button>
      </div>
    </nav>
  );
}

function HeroSection() {
  return (
    <section className="flex flex-col items-center justify-center text-center py-32">
      <h1 className="text-white text-5xl font-bold mb-6 drop-shadow-lg">
        ระบบจัดการงานช่าง <span className="text-[#5F5AFF]">Tech Job</span>
      </h1>
      <p className="text-gray-300 text-xl mb-10 max-w-2xl">
        ระบบบริหารงานซ่อมบำรุงและติดตามงานช่างสำหรับองค์กรยุคใหม่ <br />
        เพิ่มประสิทธิภาพการทำงานและการสื่อสารระหว่างทีมช่างและผู้ดูแล
      </p>
      <div className="flex gap-4">
        <a
          href="#"
          className="px-8 py-3 rounded-lg text-white bg-[#5F5AFF] hover:bg-[#4b48c7] text-lg font-semibold transition"
        >
          เริ่มต้นใช้งาน
        </a>
        <a
          href="#features"
          className="px-8 py-3 rounded-lg text-[#5F5AFF] border border-[#5F5AFF] bg-transparent hover:bg-[#22223A] text-lg font-semibold transition"
        >
          ดูฟีเจอร์
        </a>
      </div>
    </section>
  );
}

function FeaturesSection() {
  const features = [
    {
      title: "ติดตามงานแบบเรียลไทม์",
      desc: "ตรวจสอบสถานะงานและความคืบหน้าได้ตลอดเวลา",
      icon: (
        <svg className="w-8 h-8 text-[#5F5AFF]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10" stroke="currentColor" />
          <path d="M12 6v6l4 2" stroke="currentColor" />
        </svg>
      ),
    },
    {
      title: "มอบหมายงานง่าย",
      desc: "เลือกช่างและมอบหมายงานได้ทันทีผ่านระบบ",
      icon: (
        <svg className="w-8 h-8 text-[#5F5AFF]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M9 17v-2a4 4 0 0 1 8 0v2" />
          <circle cx="12" cy="7" r="4" />
        </svg>
      ),
    },
    {
      title: "รายงานสรุปอัตโนมัติ",
      desc: "ดูสถิติและรายงานงานซ่อมบำรุงได้อย่างครบถ้วน",
      icon: (
        <svg className="w-8 h-8 text-[#5F5AFF]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <path d="M9 17V9M15 17V13" />
        </svg>
      ),
    },
  ];
  return (
    <section id="features" className="py-24 bg-[#111014]">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-white text-3xl font-bold mb-8 text-center">ฟีเจอร์เด่น</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((f, idx) => (
            <div key={idx} className="bg-[#19182A] rounded-xl p-8 flex flex-col items-center shadow hover:scale-105 transition-transform">
              {f.icon}
              <div className="text-white text-xl font-semibold mt-4 mb-2">{f.title}</div>
              <div className="text-gray-400 text-center">{f.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-8 text-center text-gray-500 text-sm bg-transparent">
      © {new Date().getFullYear()} Tech Job. All rights reserved.
    </footer>
  );
}

export default function HomePage({ onLogin, onRegister }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-[#19182A] to-black">
      <Navbar onLogin={onLogin} onRegister={onRegister} />
      <HeroSection />
      <FeaturesSection />
      <Footer />
    </div>
  );
}