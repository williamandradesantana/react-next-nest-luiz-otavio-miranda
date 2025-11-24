import styles from "./styles.module.css";

export function Heading(props) {
  return (
    <h1 className={`${styles.heading} ${styles.cyan}`}>{props.children}</h1>
  );
}
