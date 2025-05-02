"use client";
import { ChangeEvent, ReactElement } from "react";

import MingcuteSearchLine from "@/icons/MingcuteSearchLine";
import MingcuteLocationLine from "@/icons/MingcuteLocationLine";

import styles from "./global-search-box.module.css";
import { useFilter } from "@/providers/filters.provider";

export default function GlobalSearchBoxComponent(): ReactElement {
  const { setQuery } = useFilter();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const id = setTimeout(() => {
      setQuery(value);
    }, 200);

    return () => clearTimeout(id);
  };
  return (
    <div className={styles["global-search-box"]}>
      <div className={styles.prefix}>
        <MingcuteSearchLine />
      </div>
      <input
        type="text"
        placeholder="نام بیماری، تخصص، پزشک، بیمارستان و ..."
        onChange={handleChange}
      />
      <div className={styles.divider}></div>
      <div className={styles.suffix}>
        <button type="button">
          <MingcuteLocationLine />
          همه شهرها
        </button>
      </div>
    </div>
  );
}
