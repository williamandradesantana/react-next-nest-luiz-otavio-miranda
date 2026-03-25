import clsx from "clsx";
import { useId } from "react";

type InputCheckboxProps = {
  labelText?: string;
  type?: "checkbox";
} & React.ComponentProps<"input">;

export function InputCheckbox({
  labelText = "",
  type,
  ...props
}: InputCheckboxProps) {
  const id = useId();

  return (
    <div className="flex gap-3 items-center">
      <input
        {...props}
        className={clsx(
          "w-4 h-4 outline-none focus:ring-2 focus:ring-blue-500",
          props.className,
        )}
        id={id}
        type={type}
      />

      {labelText && (
        <label htmlFor={id} className="text-base">
          {labelText}
        </label>
      )}
    </div>
  );
}
