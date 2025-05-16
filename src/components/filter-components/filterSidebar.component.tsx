"use client";
import { useState } from "react";
import { useFilter } from "@/providers/filters.provider";
import RadioFilterComponent from "./radioFilter.component";
import SelectedFiltersComponent from "./selectedFilters.component";
import { IFilter } from "@/types/filter.type";
import styles from "./filtersSidebar.module.css";

export default function FilterSidebarComponent() {
  const { updateFilter, filter } = useFilter();
  const [gender, setGender] = useState<"both" | "male" | "female">("female");
  const [serviceType, setserviceType] = useState<"online" | "on-site">(
    "on-site",
  );

  const handleChange = (value: IFilter["gender"] | IFilter["serviceType"]) => {
    if (!value) return;

    if (value === "female" || value === "male") {
      setGender(value);
      updateFilter("gender", value);
    }
    if (value === "online" || value === "on-site") {
      setserviceType(value);
      updateFilter("serviceType", value);
    }
  };

  return (
    <div className={styles.wrapper}>
      <SelectedFiltersComponent filter={filter} />

      <RadioFilterComponent
        title="جنسیت"
        name="gender"
        value={gender}
        onChange={handleChange}
        options={[
          { label: "خانم", value: "female" },
          { label: "آقا", value: "male" },
        ]}
      />
      <RadioFilterComponent
        title="خدمت"
        name="serviceType"
        value={serviceType}
        onChange={handleChange}
        options={[
          { label: "حضوری", value: "on-site" },
          { label: "آنلاین", value: "online" },
        ]}
      />
    </div>
  );
}
