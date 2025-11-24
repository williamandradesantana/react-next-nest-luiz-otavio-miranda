import styles from "./styles.module.css";

export function Heading() {
  console.log(styles);
  return <h1 className={`${styles.heading} ${styles.cyan}`}>Hello World!</h1>;
}
