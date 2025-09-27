import React from "react";
import { FaChartBar, FaUsersCog, FaCog, FaSignOutAlt, FaUser } from "react-icons/fa";

function Sidebar({ onSignOut }) {
  return (
    <aside className="bg-[#111014] w-64 min-h-screen flex flex-col justify-between py-6 px-4">
      <div>
        <div className="mb-8">
          <h1 className="text-white text-xl font-bold">Tech Job System</h1>
          <div className="text-gray-400 text-sm">Admin Dashboard</div>
        </div>
        <nav className="flex flex-col gap-2">
          <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-lg bg-[#19182A] text-white font-semibold">
            <FaChartBar /> Overview
          </a>
          <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-300 hover:bg-[#19182A]">
            <FaUsersCog /> Technicians
          </a>
          <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-300 hover:bg-[#19182A]">
            <FaCog /> Settings
          </a>
        </nav>
      </div>
      <button
        className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-300 hover:bg-[#19182A] transition"
        onClick={onSignOut}
      >
        <FaSignOutAlt /> Sign Out
      </button>
    </aside>
  );
}

function StatCard({ title, value, subtitle, icon, color }) {
  return (
    <div className="bg-[#19182A] rounded-xl p-5 flex-1 min-w-[180px]">
      <div className="flex items-center gap-2 mb-2">
        {icon && <span className={`text-xl ${color}`}>{icon}</span>}
        <span className="text-gray-300 text-sm">{title}</span>
      </div>
      <div className="text-white text-2xl font-bold">{value}</div>
      <div className="text-gray-400 text-xs">{subtitle}</div>
    </div>
  );
}

function JobStatusDistribution() {
  return (
    <div className="bg-[#19182A] rounded-xl p-5 flex-1">
      <div className="text-gray-300 font-semibold mb-2">Job Status Distribution</div>
      <div className="text-gray-400 text-sm mb-3">Current job status breakdown</div>
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-[#5F5AFF]" /> <span className="text-gray-300 text-sm">New</span>
          <span className="ml-auto text-gray-400">2</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-yellow-400" /> <span className="text-gray-300 text-sm">In Progress</span>
          <span className="ml-auto text-gray-400">1</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-green-400" /> <span className="text-gray-300 text-sm">Completed</span>
          <span className="ml-auto text-gray-400">1</span>
        </div>
      </div>
    </div>
  );
}

function ActiveTechnicians() {
  return (
    <div className="bg-[#19182A] rounded-xl p-5 flex-1">
      <div className="text-gray-300 font-semibold mb-2">Active Technicians</div>
      <div className="text-gray-400 text-sm mb-3">Current workforce status</div>
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <span className="flex items-center gap-2 text-gray-200"><FaUser /> John Smith</span>
          <span className="bg-[#19182A] text-xs text-white px-2 py-1 rounded">1 active</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="flex items-center gap-2 text-gray-200"><FaUser /> Sarah Johnson</span>
          <span className="bg-[#19182A] text-xs text-white px-2 py-1 rounded">2 active</span>
        </div>
      </div>
    </div>
  );
}

function JobCard({ title, company, phone, date, assigned, status, statusColor, statusLabel }) {
  return (
    <div className="bg-[#111014] rounded-lg p-4 mb-3 flex flex-col gap-2 border border-[#222]">
      <div className="flex items-center gap-2">
        <span className="text-white font-semibold">{title}</span>
        {status && (
          <span className={`ml-2 text-xs px-2 py-1 rounded ${statusColor}`}>{statusLabel}</span>
        )}
      </div>
      <div className="flex flex-wrap gap-4 text-gray-400 text-sm">
        <span>{company}</span>
        <span>{phone}</span>
        <span>{date}</span>
        <span>Assigned to: {assigned}</span>
      </div>
      <div className="flex justify-end">
        <button className="bg-[#22223A] text-white px-4 py-1 rounded hover:bg-[#5F5AFF] transition text-sm">
          View Details
        </button>
      </div>
    </div>
  );
}

function AllJobs() {
  return (
    <div className="bg-[#19182A] rounded-xl p-5 mt-4">
      <div className="text-gray-300 font-semibold mb-2">All Jobs (4)</div>
      <div className="text-gray-400 text-sm mb-3">Manage and track all work orders</div>
      <div className="mb-4 flex gap-2">
        <input
          className="flex-1 bg-[#111014] text-white px-4 py-2 rounded-lg border border-[#222] focus:outline-none"
          placeholder="Search jobs by title or customer..."
        />
        <select className="bg-[#111014] text-gray-300 px-3 py-2 rounded-lg border border-[#222]">
          <option>All Status</option>
        </select>
        <button className="bg-[#22223A] text-white px-4 py-2 rounded hover:bg-[#5F5AFF] transition text-sm">
          Export PDF
        </button>
      </div>
      <JobCard
        title="TI see"
        company="AK8 co.th"
        phone="022229788"
        date="26/9/2568"
        assigned="Sarah Johnson"
        status
        statusColor="bg-[#5F5AFF] text-white"
        statusLabel="new"
      />
      <JobCard
        title="AC Unit Repair"
        company="ABC Restaurant"
        phone="555-0123"
        date="15/1/2567"
        assigned="John Smith"
        status
        statusColor="bg-[#5F5AFF] text-white"
        statusLabel="new"
      />
      <JobCard
        title="Electrical Wiring Check"
        company="Tech Corp Office"
        phone="555-0456"
        date="14/1/2567"
        assigned="Sarah Johnson"
        status
        statusColor="bg-yellow-400 text-black"
        statusLabel="in progress"
      />
    </div>
  );
}

export default function AdminDashboard({ onSignOut }) {
  return (
    <div className="flex min-h-screen bg-black">
      <Sidebar onSignOut={onSignOut} />
      <main className="flex-1 p-8">
        <h2 className="text-white text-3xl font-bold mb-1">Admin Dashboard</h2>
        <div className="text-gray-400 mb-6">Manage work orders and technicians</div>
        <div className="flex gap-4 mb-4">
          <StatCard title="Total Jobs" value="4" subtitle="All time" icon={<FaChartBar />} color="text-[#5F5AFF]" />
          <StatCard title="New Jobs" value="2" subtitle="Awaiting assignment" icon={<FaChartBar />} color="text-[#5F5AFF]" />
          <StatCard title="In Progress" value="1" subtitle="Active work" icon={<FaChartBar />} color="text-yellow-400" />
          <StatCard title="Completed" value="1" subtitle="This month" icon={<FaChartBar />} color="text-green-400" />
        </div>
        <div className="flex gap-4 mb-4">
          <JobStatusDistribution />
          <ActiveTechnicians />
        </div>
        <AllJobs />
      </main>
    </div>
  );
}