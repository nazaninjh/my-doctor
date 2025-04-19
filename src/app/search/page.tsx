import { Doctor } from "@/types/doctor";
import CardComponent from "./search-components/card.component";
import clsx from "clsx";

import data from "@/data/doctors_iran_100.json";
import PaginationComponent from "./search-components/pagination-conponents/pagination.component";
import styles from "./page.module.css";
import FiltersProvider from "./search-components/filterProvider";
export default async function Page() {
  let content;
  if (data) {
    const firstResults = data.slice(0, 10);
    content = firstResults.map((doctor: Doctor) => {
      return (
        <CardComponent
          key={clsx(doctor.id, doctor.speciality)}
          doctor={doctor}
        />
      );
    });
  } else {
    content = <p>Loading data...</p>;
  }

  return (
    <div className={styles.wrapper}>
      <FiltersProvider>{content}</FiltersProvider>
      <PaginationComponent
        length={data.length}
        cardsPerPage={10}
        currentPage={1}
      />
    </div>
  );
}
