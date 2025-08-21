import "@/styles/index.css";
import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";

const notoSans = Noto_Sans({
  variable: "--font-noto-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Phong Dinh - Developer",
  description:
    "Mình tạo ra những sản phẩm kỹ thuật số bằng khả năng làm việc với frontend đến backend, database.",
  icons: {
    icon: "/favicon.svg", // hoặc .svg
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${notoSans.variable} antialiased`}>{children}</body>
    </html>
  );
}
