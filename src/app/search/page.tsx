import data from "@/data/doctors_mock_data.json";
import PaginationComponent from "../../components/search-components/pagination-conponents/pagination.component";

import SearchComponentWrapper from "../../components/search-components/searchComponentWrapper.component";
import { Doctor } from "@/types/doctor";

import { IFilter, LOCATION_CODES } from "@/types/filter.type";
import FilterSidebarComponent from "@/components/filter-components/filterSidebar.component";
import GlobalSearchBoxComponent from "@/components/global-search-box/global-search-box.component";
import styles from "./page.module.css";

const DOCTORS_PER_PAGE = 10;

// todo: add new filters

const filterDoctors = (
  data: Doctor[],
  filter: {
    gender: string;
    location: "ALL" | LOCATION_CODES;
    query: string;
    serviceType: "online" | "on-site";
  },
) => {
  const {
    gender = "both",
    location = "ALL",
    query,
    serviceType = "on-site",
  } = filter;

  return data.filter((doctor) => {
    const genderMatch = gender === "both" || doctor.gender === gender;
    const locationMatch =
      location === "ALL" ||
      (doctor.locationCode as LOCATION_CODES) === location;

    const queryMatch =
      doctor.name.includes(query) || doctor.address.includes(query) || "";

    const serviceTypeMatch =
      doctor.serviceType === serviceType || serviceType === "on-site";

    return genderMatch && locationMatch && queryMatch && serviceTypeMatch;
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
  const query = searchParams.query || "";

  const filteredDoctors = filterDoctors(data, {
    gender: gender,
    location: location,
    query: query,
    serviceType: "on-site",
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
        <div className={styles["filters-wrapper"]}>
          <FilterSidebarComponent />
        </div>

        <div className={styles.search}>
          <GlobalSearchBoxComponent />
        </div>
        <div className={styles.cards}>
          <SearchComponentWrapper doctorsList={finalResult} />
        </div>
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
