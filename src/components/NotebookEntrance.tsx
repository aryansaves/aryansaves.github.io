import { type ReactNode } from "react";
import { preload } from "react-dom";
import styles from "./NotebookEntrance.module.css";

export function NotebookEntrance({ children, paperSrc }: {
  children: ReactNode;
  paperSrc: string;
}) {
  preload(paperSrc, { as: "image", fetchPriority: "high" });

  return <div className={styles.shell} data-notebook-entrance>{children}</div>;
}
