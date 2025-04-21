import data from "@/data/doctors_iran_100.json";
import PaginationComponent from "./search-components/pagination-conponents/pagination.component";
import styles from "./page.module.css";
import FiltersProvider from "@/providers/filters.provider";
import DoctorsProvider from "@/providers/doctors.provider";
import SearchComponentWrapper from "./search-components/searchComponentWrapper.component";
export default async function Page() {
  return (
    <div className={styles.wrapper}>
      <FiltersProvider>
        <DoctorsProvider doctors={data}>
          <SearchComponentWrapper />
        </DoctorsProvider>
      </FiltersProvider>

      <PaginationComponent
        length={data.length}
        cardsPerPage={10}
        currentPage={1}
      />
    </div>
  );
}
