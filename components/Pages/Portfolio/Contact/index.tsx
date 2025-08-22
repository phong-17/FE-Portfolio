import ConnectIcon from "@/components/Icons/ConnectIcon";
import EmailIcon from "@/components/Icons/EmailIcon";
import FacebookIcon from "@/components/Icons/FacebookIcon";
import SendIcon from "@/components/Icons/SendIcon";
import Link from "next/link";

export default function Contact() {
  return (
    <>
      <div className="text-center w-full">
        <div className="bg-blue-opacity-10 px-4 py-2 items-center gap-2 rounded-full border border-[var(--color-blue-400)] inline-flex">
          <ConnectIcon className="text-[var(--color-blue-400)] w-5 h-auto" />
          <p className="text-[var(--color-blue-400)] md:text-sm text-xs font-medium">
            {"Kết nối với tôi"}
          </p>
        </div>

        <h2 className="text-2xl md:text-5xl md:pt-10 md:py-20 py-15 pt-8">
          <span className="text-[var(--color-blue-400)] font-bold">
            {"LET'S"}
          </span>{" "}
          <span className="font-bold">{"CONNECT"}</span>
        </h2>

        <div className="max-w-2xl mx-auto p-8 bg-white/5 border border-white/10 rounded-3xl backdrop-blur-sm">
          <div className="flex justify-center">
            <div className="rounded-2xl bg-gradient-to-r to-purple-500 from-blue-600 p-5">
              <SendIcon className="text-white h-auto w-7" />
            </div>
          </div>

          <p className="md:text-xl text-lg font-semibold md:py-6 py-4">
            {"Bắt đầu cuộc trò chuyện với tôi"}
          </p>

          <p className="md:text-base text-sm">
            {
              "Tôi luôn sẵn sàng thảo luận về các ý tưởng mới, cơ hội hợp tác hoặc chỉ đơn giản là trò chuyện về công việc hay về bất cứ điều gì."
            }
          </p>

          <div className="flex flex-wrap gap-4 justify-center md:pt-8 pt-5">
            <Link
              href="mailto:phong.dev17@gmail.com"
              className="inline-flex items-center gap-2 px-6 py-2 md:px-8 md:py-3 bg-blue-500 hover:bg-blue-600 text-white text-sm md:text-base font-medium md:font-bold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              <EmailIcon className="h-auto w-7 text-white font-bold" />
              {"Email"}
            </Link>
            <Link
              href="https://www.facebook.com/nguyen.inh.phong.205470"
              className="inline-flex items-center gap-2 px-6 py-2 md:px-8 md:py-3 bg-white/10 hover:bg-white/20 text-white text-sm md:text-base font-medium md:font-bold rounded-full border border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105"
              target="_blank"
            >
              <FacebookIcon className="h-auto w-7 text-white font-bold" />
              {"Facebook"}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
