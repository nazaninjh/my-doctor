import {
  DEFAULT_VALUES,
  IFilterContext,
  useFilter,
} from "@/providers/filters.provider";
import { IFilter } from "@/types/filter.type";
import clsx from "clsx";
import styles from "./selectedFilters.module.css";

export default function SelectedFiltersComponent({
  filter,
}: {
  filter: IFilterContext;
}) {
  const { resetFilter } = useFilter();
  const areValuesDefault = () => {
    return Object.entries(filter).every(
      ([key, value]) => value === DEFAULT_VALUES[key as keyof IFilterContext],
    );
  };

  const valuesAreDefault = areValuesDefault();

  if (valuesAreDefault) {
    return null;
  }

  return (
    <div className={styles.wrapper}>
      <p>فیلترهای انتخاب شده</p>
      <div className={styles.filtersContainer}>
        {Object.entries(filter).map(([key, value]) => {
          if (value === DEFAULT_VALUES[key as keyof IFilterContext]) {
            return null;
          }

          return (
            <div className={clsx(styles.filter)} key={`${key}-${value}`}>
              <span>{getDisplayValue(key as keyof IFilter, value)}</span>
              <button
                type="button"
                className={styles.removeButton}
                onClick={() => resetFilter(key as keyof IFilterContext)}
              >
                ×
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// Helper function for display values
function getDisplayValue(key: keyof IFilter, value: string) {
  if (key === "gender") {
    return value === "male" ? "مرد" : "زن";
  }
  if (key === "serviceType") {
    return value === "online" ? "ویزیت آنلاین" : "ویزیت حضوری";
  }
  return value;
}
