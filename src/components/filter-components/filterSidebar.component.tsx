"use client";
import { useState } from "react";
import RadioFiltercomponent from "./radioFilter.component";
import styles from "./filtersSidebar.module.css";
import { useFilter } from "@/providers/filters.provider";
import SelectedFiltersComponent from "./selectedFilters.component";
export default function FilterSidebarComponent() {
  const { updateFilter, filter } = useFilter();
  const [isFemale, setIsFemale] = useState(true);

  return (
    <div className={styles.wrapper}>
      <SelectedFiltersComponent filter={filter} />
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
