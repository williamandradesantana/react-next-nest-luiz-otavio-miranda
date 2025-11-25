import styles from "./styles.module.css";

type DefaultInputProps = React.ComponentProps<"input"> & {
  id: string;
};

export function DefaultInput({ id, type, ...rest }: DefaultInputProps) {
  return (
    <>
      <label htmlFor="input">task</label>
      <input id={id} type={type} {...rest} />
    </>
  );
}
