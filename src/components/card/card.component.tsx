import { PropsWithChildren } from "react";
import styles from "./card.module.css";
type Props = PropsWithChildren;

export default function CardComponent({ children }: Props) {
  return <div className={styles.card}>{children}</div>;
}
