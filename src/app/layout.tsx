import type { Metadata } from "next";
import { NextFont } from "next/dist/compiled/@next/font";
import { Vazirmatn } from "next/font/google";

import "./globals.css";
import Header from "@/components/header/header.component";

const vazirmatn: NextFont = Vazirmatn({
  subsets: ["latin", "arabic"],
  display: "swap",
});
export const metadata: Metadata = {
  title: "دکتر من",
  description: "پلتفرم جامع جستجو و رزرو نوبت دکتر",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl" className={vazirmatn.className}>
      <body>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
