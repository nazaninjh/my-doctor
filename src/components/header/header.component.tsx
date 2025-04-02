"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { ReactElement } from "react";

import clsx from "clsx";

import styles from "./header.module.css";
export default function Header(): ReactElement {
  const pathname = usePathname();

  const items = [
    { title: "خانه", path: "/" },
    { title: "جستجو", path: "/search" },
  ];

  return (
    <header className={styles.header}>
      <nav>
        <ul>
          {items.map((item) => {
            return (
              <li key={item.title}>
                <Link
                  href={item.path}
                  className={clsx(pathname === item.path && styles.active)}
                >
                  {item.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      <button type="button" className={styles.cta}>
        ورود | ثبت نام
      </button>
    </header>
  );
}
