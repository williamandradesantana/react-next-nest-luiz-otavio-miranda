import styles from "./styles.module.css";

type DefaultInputProps = React.ComponentProps<"input"> & {
  id: string;
  labelText?: string;
};

export function DefaultInput({
  id,
  type,
  labelText,
  ...rest
}: DefaultInputProps) {
  return (
    <>
      {/* {labelText && <label htmlFor={id}>{labelText}</label>} */}
      {/* {labelText ? <label htmlFor={id}>{labelText}</label> : ""} */}

      <label htmlFor={id}>{labelText}</label>
      <input className={styles.input} id={id} type={type} {...rest} />
    </>
  );
}
