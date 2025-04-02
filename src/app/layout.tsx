import type { Metadata } from "next";
import { NextFont } from "next/dist/compiled/@next/font";
import { Vazirmatn } from "next/font/google";

import Header from "@/components/header/header.component";
import Footer from "@/components/footer/footer.component";

import "@/styles/typography.css";
import "./globals.css";

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
        <p className="tagline">
          نوبت دهی پزشکی، سامانه نوبت دهی اینترنتی بیمارستان و پزشکان
        </p>
        <Footer />
      </body>
    </html>
  );
}
