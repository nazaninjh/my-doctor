import Image from "next/image";
import { Doctor } from "@/types/doctor";

import { ReactNode } from "react";
import MingcuteStarFill from "./MingcuteStarFill";
import MingcuteMapPinFill from "./MingcuteMapPinFill";
import styles from "./card.module.css";

export default function CardComponent({
  doctor,
}: {
  doctor: Doctor;
}): ReactNode {
  return (
    <div>
      <div className={styles.header}>
        <Image src={doctor.image} alt="" width={70} height={70} />
        <div className={styles.texts}>
          <p>{doctor.fullName}</p>
          <p>{doctor.speciality}</p>
        </div>
        <div className={styles.rating}>
          <MingcuteStarFill />
          <p>{doctor.rating}</p>
        </div>
      </div>
      <div className={styles.address}>
        <MingcuteMapPinFill />
        <p>{doctor.address}</p>
      </div>
      <div className={styles.btns}>
        <button type="button">ویزیت آنلاین</button>
        <button type="button">نوبت دهی</button>
      </div>
    </div>
  );
}
