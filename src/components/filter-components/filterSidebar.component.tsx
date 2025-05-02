"use client";
import { useState } from "react";
import RadioFiltercomponent from "./radioFilter.component";
import styles from "./filtersSidebar.module.css";
import { useFilter } from "@/providers/filters.provider";
export default function FilterSidebarComponent() {
  const { updateFilter } = useFilter();
  const [isFemale, setIsFemale] = useState(true);
  console.log(isFemale);

  return (
    <div className={styles.wrapper}>
      <RadioFiltercomponent
        title="جنسیت"
        radioName="gender"
        value={isFemale}
        labels={["مرد", "زن"]}
        onChange={(value: boolean) => {
          setIsFemale(value);
          updateFilter("gender", value ? "female" : "male");
        }}
      />
    </div>
  );
}
