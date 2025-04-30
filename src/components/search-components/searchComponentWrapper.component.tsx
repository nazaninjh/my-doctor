"use client";

import { Doctor } from "@/types/doctor";
import CardComponent from "./card.component";

import styles from "./card.module.css";
import clsx from "clsx";

export default function SearchComponentWrapper({
  doctorsList,
}: {
  doctorsList: Doctor[] | null;
}) {
  let content;
  if (doctorsList) {
    content = doctorsList.map((doctor: Doctor) => {
      return (
        <CardComponent
          key={clsx(doctor.id, doctor.speciality)}
          doctor={doctor}
        />
      );
    });
  } else {
    content = <p>متاسفانه پزشکی با این مشخصات پیدا نشد...</p>;
  }

  return <div className={styles["doctors-wrapper"]}>{content}</div>;
}
