import React, { useState, useEffect } from "react";
import HomePage from "./components/HomePage";
import LoginPage from "./components/LoginPage";
import RegisterPage from "./components/RegisterPage";
import AdminDashboard from "./components/AdminDashboard";

function App() {
  const [page, setPage] = useState("home");
  const [role, setRole] = useState(null);

  useEffect(() => {
    const onPopState = () => {
      const current = window.location.pathname;
      if (current === "/login") setPage("login");
      else if (current === "/register") setPage("register");
      else if (current === "/admin") setPage("admin");
      else setPage("home");
    };
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  const goTo = (target) => {
    setPage(target);
    window.history.pushState({}, "", 
      target === "login" ? "/login" : 
      target === "register" ? "/register" : 
      target === "admin" ? "/admin" : "/"
    );
  };

  const handleLogin = ({ role }) => {
    setRole(role);
    if (role === "ผู้ดูแล") goTo("admin");
  };

  const handleSignOut = () => {
    setRole(null);
    goTo("login");
  };

  // เพิ่มปุ่มกลับหน้า Home ใน LoginPage และ RegisterPage
  const renderLogin = () => (
    <div className="relative">
      <button
        className="absolute left-6 top-6 px-4 py-1 rounded text-white bg-[#22223A] hover:bg-[#5F5AFF] transition"
        onClick={() => goTo("home")}
      >
        กลับหน้าแรก
      </button>
      <LoginPage
        onRegisterClick={() => goTo("register")}
        onLogin={handleLogin}
      />
    </div>
  );

  const renderRegister = () => (
    <div className="relative">
      <button
        className="absolute left-6 top-6 px-4 py-1 rounded text-white bg-[#22223A] hover:bg-[#5F5AFF] transition"
        onClick={() => goTo("home")}
      >
        กลับหน้าแรก
      </button>
      <RegisterPage onLoginClick={() => goTo("login")} />
    </div>
  );

  if (page === "admin" && role === "ผู้ดูแล") {
    return <AdminDashboard onSignOut={handleSignOut} />;
  }

  return (
    <div className="bg-black min-h-screen">
      {page === "home" && (
        <HomePage
          onLogin={() => goTo("login")}
          onRegister={() => goTo("register")}
        />
      )}
      {page === "login" && renderLogin()}
      {page === "register" && renderRegister()}
    </div>
  );
}

export default App;
