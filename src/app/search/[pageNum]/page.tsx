import { Doctor } from "@/types/doctor";

import clsx from "clsx";

import data from "@/data/doctors_iran_100.json";
import CardComponent from "../search-components/card.component";
import styles from "./../page.module.css";
import PaginationComponent from "../search-components/pagination-conponents/pagination.component";
export default async function Page({
  params,
}: {
  params: { pageNum: number };
}) {
  const { pageNum } = params;
  const startingPoint = (Number(pageNum) - 1) * 10;
  let content;
  if (data) {
    const firstResults = data.slice(startingPoint, startingPoint + 10);
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
      {content}
      <PaginationComponent
        length={data.length}
        cardsPerPage={10}
        currentPage={Number(pageNum)}
      />
    </div>
  );
}
