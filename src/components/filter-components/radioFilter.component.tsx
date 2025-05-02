import styles from "./radioFilter.module.css";

type IProps = {
  title: string;
  radioName: string;
  value: boolean;
  labels: string[];
  onChange: (value: boolean) => void;
};

export default function RadioFiltercomponent({
  title,
  radioName,
  value,
  labels,

  onChange,
}: IProps) {
  return (
    <div className={styles.wrapper}>
      <p>{title}</p>
      <div className={styles["inputs"]}>
        <label htmlFor={radioName}>{labels[0]}</label>
        <input
          type="radio"
          name={radioName}
          id={radioName}
          onChange={() => onChange(false)}
          checked={!value}
        />
        <label htmlFor={radioName}>{labels[1]}</label>
        <input
          type="radio"
          name={radioName}
          id={radioName}
          onChange={() => onChange(true)}
          checked={value}
        />
      </div>
    </div>
  );
}
