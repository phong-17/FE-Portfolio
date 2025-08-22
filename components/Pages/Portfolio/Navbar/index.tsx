"use client";

import HomeIcon from "@/components/Icons/HomeIcon";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Navbar() {
  const sections = ["information", "technical", "contact"];

  const handleScroll = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 p-3">
      <div className="flex items-center justify-between max-w-screen-sm mx-auto border border-white/20 backdrop-blur-sm rounded-full py-3 px-4">
        <Link
          href="/"
          className="flex gap-2 items-center hover:scale-105 transition-transform duration-200 cursor-pointer"
        >
          <HomeIcon className="w-8 h-auto" />

          <div className="font-bold gap-1 text-white hidden md:block">
            <p>{"nguyendinhphong.com"}</p>
          </div>
        </Link>

        <div className="flex gap-3 md:gap-6 text-sm font-semibold">
          {sections.map((item) => (
            <motion.button
              key={item}
              onClick={() => handleScroll(item)}
              whileHover={{ scale: 1.05, y: -1 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="hover:text-[var(--color-yellow-400)] capitalize cursor-pointer font-semibold text-sm"
            >
              {item}
            </motion.button>
          ))}
        </div>
      </div>
    </nav>
  );
}
