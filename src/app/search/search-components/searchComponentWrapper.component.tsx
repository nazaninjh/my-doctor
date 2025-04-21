"use client";

import { useDoctors } from "@/providers/doctors.provider";
import { Doctor } from "@/types/doctor";
import CardComponent from "./card.component";
import clsx from "clsx";

export default function SearchComponentWrapper() {
  const { doctorsList } = useDoctors();
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
    content = <p>Loading data...</p>;
  }

  return content;
}
