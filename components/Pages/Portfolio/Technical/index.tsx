"use client";

import BackEndIcon from "@/components/Icons/BackEndIcon";
import DatabaseIcon from "@/components/Icons/DatabaseIcon";
import FrontEndIcon from "@/components/Icons/FrontEndIcon";
import { DUMMY_TECHNICAL } from "@/utils/dummy";
import { motion } from "framer-motion";
import BoxItem from "./BoxItem";

export default function Technical() {
  return (
    <div className="block">
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
          {(DUMMY_TECHNICAL || []).map((item) => (
            <BoxItem src={item.src} title={item.title} key={item.title} />
          ))}
        </div>
      </div>
    </div>
  );
}
