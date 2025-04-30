/* eslint-disable @typescript-eslint/no-explicit-any */
// pagination.component.tsx
import Link from "next/link";
import styles from "./pagination.module.css";
import clsx from "clsx";

function buildSearchString(searchParams: Record<string, any>, newPage: number) {
  const params = new URLSearchParams(searchParams as any);
  params.set("pageNum", String(newPage));
  return `?${params.toString()}`;
}

export default function PaginationComponent({
  length,
  cardsPerPage,
  currentPage,
  searchParams,
}: {
  length: number;
  cardsPerPage: number;
  currentPage: number;
  searchParams: Record<string, any>;
}) {
  const totalPages = Math.ceil(length / cardsPerPage);

  const pageNumbers = Array.from(
    { length: totalPages },
    (_, index) => index + 1,
  );

  return (
    <div className={styles.wrapper}>
      {currentPage > 1 && (
        <Link
          href={buildSearchString(searchParams, currentPage - 1)}
          className={styles.pageLink}
        >
          &lt;
        </Link>
      )}

      {pageNumbers.map((page) => (
        <Link
          key={page}
          href={buildSearchString(searchParams, page)}
          className={clsx(styles.pageLink, {
            [styles.active]: page === currentPage,
          })}
        >
          {page}
        </Link>
      ))}

      {currentPage < totalPages && (
        <Link
          href={buildSearchString(searchParams, currentPage + 1)}
          className={styles.pageLink}
        >
          &gt;
        </Link>
      )}
    </div>
  );
}
