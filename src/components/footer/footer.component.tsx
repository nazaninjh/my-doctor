import { ReactElement } from "react";

import Image from "next/image";
import Link from "next/link";

import idkLogo from "@/assets/logo/idk.svg";
import certificateLogo from "@/assets/logo/certificate.svg";
import enamadLogo from "@/assets/logo/enamad.svg";

import styles from "./footer.module.css";
import MingcuteTelegramFill from "@/icons/MingcuteTelegramFill";
import MingcuteLinkedinFill from "@/icons/MingcuteLinkedinFill";
import MingcuteYoutubeFill from "@/icons/MingcuteYoutubeFill";

export default function Footer(): ReactElement {
  const certificateItems = [
    {
      src: idkLogo,
      alt: "IDK Logo",
    },
    {
      src: certificateLogo,
      alt: "Certificate Logo",
    },
    {
      src: enamadLogo,
      alt: "Enamad Logo",
    },
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.writings}>
        <div className={styles.logo}>دکتر من</div>
        <p className={styles.description}>
          تجربه مشاوره آنلاین و دریافت نوبت از بهترین پزشکان و بیمارستان‌های
          ایران
        </p>
      </div>

      <div className={styles.visuals}>
        <ul className={styles.certificates}>
          {certificateItems.map((item) => {
            return (
              <li key={item.src}>
                <Link href="#">
                  <Image src={item.src} alt={item.alt} />
                </Link>
              </li>
            );
          })}
        </ul>

        <ul className={styles.socials}>
          <li>
            <Link href="https://t.me/Codective" target="_blank">
              <MingcuteTelegramFill />
            </Link>
          </li>
          <li>
            <Link
              href="https://www.linkedin.com/in/bijanprogrammer/"
              target="_blank"
            >
              <MingcuteLinkedinFill />
            </Link>
          </li>
          <li>
            <Link
              href="https://www.youtube.com/@BijanProgrammer"
              target="_blank"
            >
              <MingcuteYoutubeFill />
            </Link>
          </li>
        </ul>
      </div>

      <p className={styles.copy}>
        تمامی حقوق مادی و معنوی این وب‌سایت، خدمات و محتوای مربوط به آن متعلق به
        من می‌باشد!
      </p>
    </footer>
  );
}
