"use client";

import BackEndIcon from "@/components/Icons/BackEndIcon";
import DatabaseIcon from "@/components/Icons/DatabaseIcon";
import FrontEndIcon from "@/components/Icons/FrontEndIcon";
import { motion } from "framer-motion";
import Image from "next/image";

type TechnicalProps = {};

export default function Technical(props: TechnicalProps) {
  return (
    <div>
      <div className="grid lg:grid-cols-2 md:gap-16 gap-10">
        <div className="block">
          <div className="border rounded-full border-[var(--color-yellow-400)] px-4 py-2 bg-yellow-opacity-10 w-fit">
            <p className="md:text-sm text-xs font-medium text-[var(--color-yellow-400)]">
              {"3+ Năm Kinh Nghiệm"}
            </p>
          </div>

          <p className="md:text-5xl text-2xl uppercase font-bold pt-5">
            {"Software"}
          </p>

          <p className="md:text-5xl text-2xl uppercase font-bold">
            {"Engineer"}
          </p>

          <p className="md:text-xl text-lg md:pt-4 pt-2">
            {
              "Mình tạo ra những sản phẩm kỹ thuật số bằng khả năng làm việc với frontend đến backend, database."
            }
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2  gap-5">
          <motion.div
            className="border border-[var(--color-blue-400)] rounded-3xl flex items-center justify-center gap-2 min-h-[80px]"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <FrontEndIcon className="cursor-none w-10 h-10 text-[var(--color-blue-400)]" />
            <p className="font-bold text-[var(--color-blue-400)] md:text-xl text-lg">
              {"Frontend"}
            </p>
          </motion.div>

          <motion.div
            className="border border-[var(--color-green-400)] rounded-3xl flex items-center justify-center gap-2 min-h-[80px]"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <BackEndIcon className="cursor-none w-10 h-10 text-[var(--color-green-400)]" />
            <p className="font-bold text-[var(--color-green-400)] md:text-xl text-lg">
              {"Backend"}
            </p>
          </motion.div>

          <motion.div
            className="border border-[var(--color-purple-400)] rounded-3xl flex items-center justify-center gap-2 min-h-[80px]"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <DatabaseIcon className="cursor-none w-10 h-10 text-[var(--color-purple-400)]" />
            <p className="font-bold text-[var(--color-purple-400)] md:text-xl text-lg">
              {"Database"}
            </p>
          </motion.div>
        </div>
      </div>

      <div className="pt-24 md:pt-32">
        <p className="uppercase md:text-lg text-base font-medium pb-5 text-center">
          {"Công nghệ chính"}
        </p>

        <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6">
          <div
            title="Laravel"
            className="group flex flex-col items-center space-y-2 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-amber-500/50 transition-all duration-300 hover:scale-105"
          >
            <Image
              src="/images/laravel.png"
              alt="Laravel"
              width={60}
              height={60}
              className="w-14 h-auto"
            />
          </div>

          <div
            title="Javascript"
            className="group flex flex-col items-center space-y-2 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-amber-500/50 transition-all duration-300 hover:scale-105"
          >
            <Image
              src="/images/javascript.png"
              alt="javascript"
              width={60}
              height={60}
              className="w-14 h-auto"
            />
          </div>

          <div
            title="Typescript"
            className="group flex flex-col items-center space-y-2 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-amber-500/50 transition-all duration-300 hover:scale-105"
          >
            <Image
              src="/images/typescript.png"
              alt="typescript"
              width={60}
              height={60}
              className="w-14 h-auto"
            />
          </div>

          <div
            title="Reactjs"
            className="group flex flex-col items-center space-y-2 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-amber-500/50 transition-all duration-300 hover:scale-105"
          >
            <Image
              src="/images/react.png"
              alt="react"
              width={60}
              height={60}
              className="w-14 h-auto"
            />
          </div>

          <div
            title="Nextjs"
            className="group flex flex-col items-center space-y-2 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-amber-500/50 transition-all duration-300 hover:scale-105"
          >
            <Image
              src="/images/nextjs.png"
              alt="nextjs"
              width={60}
              height={60}
              className="w-14 h-auto"
            />
          </div>

          <div
            title="HTML"
            className="group flex flex-col items-center space-y-2 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-amber-500/50 transition-all duration-300 hover:scale-105"
          >
            <Image
              src="/images/html.png"
              alt="html"
              width={60}
              height={60}
              className="w-14 h-auto"
            />
          </div>

          <div
            title="CSS"
            className="group flex flex-col items-center space-y-2 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-amber-500/50 transition-all duration-300 hover:scale-105"
          >
            <Image
              src="/images/css.png"
              alt="css"
              width={60}
              height={60}
              className="w-14 h-auto"
            />
          </div>

          <div
            title="Tailwind CSS"
            className="group flex flex-col items-center space-y-2 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-amber-500/50 transition-all duration-300 hover:scale-105"
          >
            <Image
              src="/images/tailwind.png"
              alt="tailwind"
              width={60}
              height={60}
              className="w-14 h-auto"
            />
          </div>

          <div
            title="Bootstrap"
            className="group flex flex-col items-center space-y-2 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-amber-500/50 transition-all duration-300 hover:scale-105"
          >
            <Image
              src="/images/bootstrap.png"
              alt="bootstrap"
              width={60}
              height={60}
              className="w-14 h-auto"
            />
          </div>

          <div
            title="My SQL"
            className="group flex flex-col items-center space-y-2 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-amber-500/50 transition-all duration-300 hover:scale-105"
          >
            <Image
              src="/images/mysql.png"
              alt="mysql"
              width={60}
              height={60}
              className="w-14 h-auto"
            />
          </div>

          <div
            title="GIT"
            className="group flex flex-col items-center space-y-2 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-amber-500/50 transition-all duration-300 hover:scale-105"
          >
            <Image
              src="/images/git.png"
              alt="git"
              width={60}
              height={60}
              className="w-14 h-auto"
            />
          </div>

          <div
            title="Figma"
            className="group flex flex-col items-center space-y-2 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-amber-500/50 transition-all duration-300 hover:scale-105"
          >
            <Image
              src="/images/figma.png"
              alt="Figma"
              width={60}
              height={60}
              className="w-14 h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
