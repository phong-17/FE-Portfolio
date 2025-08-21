"use client";

import LazyLoad from "@/components/LazyLoad";
import Information from "./Information";
import Technical from "./Technical";
import { motion } from "framer-motion";
import Image from "next/image";

export default function ComponentsPortfolio() {
  const sections = ["information", "technical"];

  const handleScroll = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div className="fixed top-0 left-0 w-full z-50 p-3">
        <div className="flex items-center justify-between max-w-screen-sm mx-auto border border-white/20 backdrop-blur-sm rounded-full py-3 px-4">
          <a
            href="/portfolio"
            className="flex gap-2 items-center hover:scale-105 transition-transform duration-200 cursor-pointer"
          >
            {/* // icon */}
            <Image
              src="/images/home.png"
              alt="HOME"
              width={20}
              height={20}
              className="w-5 h-auto"
            />

            <div className="font-bold flex gap-1 text-white">
              <p>{"nguyendinhphong.com"}</p>
            </div>
          </a>

          <div className="flex gap-3 md:gap-6 text-sm font-semibold">
            {sections.map((item) => (
              <motion.button
                key={item}
                onClick={() => handleScroll(item)}
                whileHover={{ scale: 1.1, y: -2 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="hover:text-yellow-600 capitalize cursor-pointer font-semibold text-sm"
              >
                {item}
              </motion.button>
            ))}
          </div>
        </div>
      </div>

      <LazyLoad>
        <header
          id="information"
          className="min-h-screen flex items-center justify-center overflow-hidden grid-dark-background"
        >
          <Information />
        </header>
      </LazyLoad>

      <LazyLoad delay={0.3}>
        <section
          id="technical"
          className="min-h-screen relative md:py-20 py-10 mx-auto md:px-32 px-20 flex items-center"
        >
          <Technical />
        </section>
      </LazyLoad>
    </>
  );
}
