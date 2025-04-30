import data from "@/data/doctors_with_full_data.json";
import PaginationComponent from "../../components/search-components/pagination-conponents/pagination.component";

import SearchComponentWrapper from "../../components/search-components/searchComponentWrapper.component";
import { Doctor } from "@/types/doctor";

import styles from "./page.module.css";

const DOCTORS_PER_PAGE = 10;

export type IFilter = {
  pageNum?: number;
  gender?: string;
  location?: "ALL" | LOCATION_CODES;
};

type LOCATION_CODES = [
  "TH" | "ES" | "AH" | "TB" | "SH" | "RS" | "UR" | "MS" | "YZ" | "KR",
];

const filterDoctors = (
  data: Doctor[],
  filter: { gender: string; location: "ALL" | LOCATION_CODES },
) => {
  const { gender = "both", location = "ALL" } = filter;

  return data.filter((doctor) => {
    const genderMatch = gender === "both" || doctor.sex === gender;
    const locationMatch =
      location === "ALL" ||
      (doctor.locationCode as LOCATION_CODES) === location;

    return genderMatch && locationMatch;
  });
};

export default async function Page({
  searchParams,
}: {
  searchParams: IFilter;
}) {
  const pageNum = Number(searchParams.pageNum) || 1;
  const gender = searchParams.gender || "both";
  const location = searchParams.location || "ALL";

  const filteredDoctors = filterDoctors(data, {
    gender: gender,
    location: location,
  });

  const startingPoint = (pageNum - 1) * DOCTORS_PER_PAGE;
  const paginatedDoctors = filteredDoctors.slice(
    startingPoint,
    startingPoint + DOCTORS_PER_PAGE,
  );

  const finalResult = paginatedDoctors.length > 0 ? paginatedDoctors : null;

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <SearchComponentWrapper doctorsList={finalResult} />
      </div>

      <PaginationComponent
        length={filteredDoctors.length}
        cardsPerPage={DOCTORS_PER_PAGE}
        currentPage={pageNum}
        searchParams={searchParams}
      />
    </div>
  );
}
