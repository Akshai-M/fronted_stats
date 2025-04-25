"use client";
import { useState } from "react";
import {
  Menu,
  X,
  LogOut,
  Home,
  FileText,
  Upload,
  Layers,
  Code,
  Target,
  Settings,
  MessageSquare,
} from "lucide-react";
import House from "./home";

export default function DashboardLayout() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => setIsOpen(!isOpen);
  const closeSidebar = () => setIsOpen(false);

  const navItems = [
    { name: "Home", icon: Home },
    { name: "Stages & Checklist", icon: FileText },
    { name: "Upload Docs", icon: Upload },
    { name: "Preferred Vendors", icon: Layers },
    { name: "Tech Stack", icon: Code },
    { name: "Targets", icon: Target },
    { name: "Zee Sales Targets", icon: Target },
    { name: "MAL Settings", icon: Settings },
    { name: "Pending Questions", icon: MessageSquare },
  ];

  return (
    <div className="flex h-screen overflow-hidden relative">
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-30 md:hidden"
          onClick={closeSidebar}
        ></div>
      )}

      <div
        className={`fixed z-40 h-full inset-y-0 left-0 w-64 bg-[#1a3d6b] text-white transform transition-transform duration-300 ease-in-out 
          ${isOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}
      >
        <nav className="p-6 space-y-2 relative">
          {navItems.map(({ name, icon: Icon }) => (
            <div
              key={name}
              onClick={closeSidebar}
              className="flex text-3xl items-center gap-3 p-2 mt-5 hover:bg-blue-700 rounded cursor-pointer"
            >
              <Icon size={18} />
              <span className="text-sm">{name}</span>
            </div>
          ))}
          <div className="flex absolute items-center  gap-3 p-2 mt-32 text-red-500 cursor-pointer">
            <LogOut size={18} />
            <span className="text-sm">Logout</span>
          </div>
        </nav>
      </div>

      <button
        onClick={toggleSidebar}
        className="md:hidden fixed top-4 left-4 z-50 bg-white text-[#1a3d6b] p-2 rounded-md shadow-md"
      >
        <Menu />
      </button>

      <div className="flex-1 overflow-y-auto h-full bg-gray-100 md:ml-64">
        <House />
      </div>
    </div>
  );
}
