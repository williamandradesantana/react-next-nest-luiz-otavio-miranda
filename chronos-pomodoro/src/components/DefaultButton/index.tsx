import styles from "./styles.module.css";

type DefaultButtonProps = React.ComponentProps<"button"> & {
  icon: React.ReactNode;
  color?: "green" | "red";
};

export function DefaultButton({
  icon,
  color = "green",
  ...props
}: DefaultButtonProps) {
  return (
    <>
      <button className={`${styles.button} ${styles[color]}`} {...props}>
        {icon}
      </button>
    </>
  );
}
