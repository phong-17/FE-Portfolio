"use client";

import CVIcon from "@/components/Icons/CVIcon";
import FBIcon from "@/components/Icons/FBIcon";
import GithubIcon from "@/components/Icons/GithubIcon";
import GmailIcon from "@/components/Icons/GmailIcon";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Information() {
  const fullText: string = "Software Engineer";
  const [displayed, setDisplayed] = useState<string>("");
  const [isTyping, setIsTyping] = useState<boolean>(true);

  useEffect(() => {
    console.log(123);

    let i = 0;
    let typing: NodeJS.Timeout;

    function startTyping() {
      setIsTyping(true);
      typing = setInterval(() => {
        setDisplayed(fullText.slice(0, i + 1));
        i++;
        if (i === fullText.length) {
          clearInterval(typing);
          setTimeout(() => {
            setIsTyping(false);
          }, 2000); // dừng 2s sau khi gõ xong
        }
      }, 80);
    }

    function startDeleting() {
      typing = setInterval(() => {
        setDisplayed(fullText.slice(0, i - 1));
        i--;
        if (i === 0) {
          clearInterval(typing);
          setTimeout(() => {
            startTyping();
            i = 0;
          }, 500); // dừng 1s sau khi xóa xong
        }
      }, 40);
    }

    if (isTyping) {
      i = 0;
      startTyping();
    } else {
      i = fullText.length;
      startDeleting();
    }

    return () => {
      clearInterval(typing);
    };
  }, [isTyping, fullText]);

  return (
    <div className="relative z-10 max-w-5xl mx-auto px-4">
      <div className="text-center space-y-6 flex justify-center">
        <motion.div
          className="relative [transform-style:preserve-3d]"
          style={{
            width: "300px",
            height: "300px",
          }}
          initial={{ rotateX: 10, rotateY: 10, scale: 1 }}
          whileHover={{ rotateX: -10, rotateY: -10, scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300, duration: 0.6 }}
        >
          <Image
            alt="Title Image"
            className="absolute top-0 left-0 object-cover rounded-4xl will-change-transform [transform:translateZ(0)]"
            src="/images/avatar.jpg"
            width={300}
            height={300}
            style={{ width: "300px", height: "300px" }}
            loading="lazy"
          />

          <div className="absolute left-0 z-[2] will-change-transform [transform:translateZ(30px)]">
            <div className="mt-4 ml-4 bg-black/50 rounded-xl px-2 py-1 font-medium text-white text-sm border border-white/50">
              {"Nguyễn Đình Phong"}
            </div>
          </div>
        </motion.div>
      </div>

      <div className="block pt-5 text-center">
        <p className="uppercase font-bold md:text-xl text-lg">
          {"Xin chào, mình là phong / 17-10-1999"}
        </p>

        <p className="md:text-lg text-base mt-2">
          {`Mình là: ${displayed}`}
          <span className="animate-pulse">|</span>
        </p>
      </div>

      <div className="flex items-center gap-5 justify-center pt-3">
        <Link href="/" target="_blank" title="CV Phong">
          <CVIcon className="h-auto w-8 transform transition-transform duration-300 hover:scale-110 cursor-pointer" />
        </Link>

        <Link
          href="https://github.com/phong-17?tab=repositories"
          title="phong-17"
          target="_blank"
        >
          <GithubIcon className="h-auto w-8 transform transition-transform duration-300 hover:scale-110 cursor-pointer" />
        </Link>

        <Link
          href="https://www.facebook.com/nguyen.inh.phong.205470"
          title="Nguyễn Đình Phong"
          target="_blank"
        >
          <FBIcon className="h-auto w-8 transform transition-transform duration-300 hover:scale-110 cursor-pointer" />
        </Link>

        <Link href="mailto:phong.dev17@gmail.com" title="phong.dev17@gmail.com">
          <GmailIcon className="h-auto w-8 transform transition-transform duration-300 hover:scale-110 cursor-pointer" />
        </Link>
      </div>
    </div>
  );
}
