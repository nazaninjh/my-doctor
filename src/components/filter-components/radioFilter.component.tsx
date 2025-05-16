// RadioFilterComponent.tsx
import { IFilter } from "@/types/filter.type";
import styles from "./radioFilter.module.css";

type Option = {
  label: string;
  value: IFilter["gender"] | IFilter["serviceType"];
};

type Props = {
  title: string;
  name: string;
  value: string;
  onChange: (value: IFilter["gender"] | IFilter["serviceType"]) => void;
  options: Option[];
};

export default function RadioFilterComponent({
  title,
  name,
  value,
  onChange,
  options,
}: Props) {
  return (
    <div className={styles.wrapper}>
      <p>{title}</p>
      <div className={styles.inputs}>
        {options.map((option, index) => {
          const inputId = `${name}-${index}`;
          return (
            <div key={inputId} className={styles["container"]}>
              <input
                type="radio"
                name={name}
                id={inputId}
                value={option.value}
                checked={value === option.value}
                onChange={() => onChange(option.value)}
              />
              <label htmlFor={inputId}>{option.label}</label>
            </div>
          );
        })}
      </div>
    </div>
  );
}
