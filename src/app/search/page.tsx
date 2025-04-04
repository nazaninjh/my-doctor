import styles from "./page.module.css";
import CardComponent from "@/components/card/card.component";
export default async function Page() {
  let results = [];
  const data = await fetch("http://localhost:3000/api/doctors");
  results = await data.json();
  console.log(results);

  return (
    <div>
      <div className={styles.filters}>
        <CardComponent>
          <div className={styles.title}>زوج یا فرد</div>
          <button type="button">زوج</button>
          <button type="button">فرد</button>
        </CardComponent>
      </div>
      <div className={styles.results}></div>
    </div>
  );
}
