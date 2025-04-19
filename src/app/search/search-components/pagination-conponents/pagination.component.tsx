import Link from "next/link";
import styles from "./pagination.module.css";
import clsx from "clsx";

export default function PaginationComponent({
  length,
  cardsPerPage,
  currentPage,
}: {
  length: number;
  cardsPerPage: number;
  currentPage: number;
}) {
  const pageCount = Math.ceil(length / cardsPerPage);
  const pageLimit = 5;
  const currentGroup = Math.ceil(currentPage / pageLimit);
  const startPage = (currentGroup - 1) * pageLimit + 1;
  const endPage = Math.min(currentGroup * pageLimit, pageCount);

  const pages = [];
  for (let i = startPage; i <= endPage; i++) pages.push(i);

  return (
    <div className={styles.wrapper}>
      {/* Prev arrow */}
      {currentPage > 1 && (
        <Link href={`/search/${currentPage - 1}`} className={styles.pageLink}>
          ‹
        </Link>
      )}

      {pages.map((p) => (
        <Link
          href={`/search/${p}`}
          key={p}
          className={clsx(styles.pageLink, {
            [styles.active]: p === currentPage,
          })}
        >
          {p}
        </Link>
      ))}

      {/* Next arrow */}
      {currentPage < pageCount && (
        <Link href={`/search/${currentPage + 1}`} className={styles.pageLink}>
          ›
        </Link>
      )}
    </div>
  );
}
