import data from "@/data/doctors_iran_100.json";

import styles from "./../page.module.css";
import PaginationComponent from "../search-components/pagination-conponents/pagination.component";
import FiltersProvider from "@/providers/filters.provider";
import DoctorsProvider from "@/providers/doctors.provider";
import SearchComponentWrapper from "../search-components/searchComponentWrapper.component";
export default async function Page({
  params,
}: {
  params: { pageNum: number };
}) {
  const { pageNum } = params;

  return (
    <div className={styles.wrapper}>
      <FiltersProvider>
        <DoctorsProvider doctors={data}>
          {" "}
          <SearchComponentWrapper />
        </DoctorsProvider>
      </FiltersProvider>

      <PaginationComponent
        length={data.length}
        cardsPerPage={10}
        currentPage={Number(pageNum)}
      />
    </div>
  );
}
