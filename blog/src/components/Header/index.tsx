"use client";

import clsx from "clsx";

export function Header() {
  console.log("Header");
  return (
    <h1
      className={clsx(
        "text-xl",
        "font-bold",
        "hover:text-blue-50",
        "hover:bg-blue-500",
        "transition",
        "duration-300",
        "text-blog"
      )}
      onClick={() => alert(123)}
    >
      Texto do meu h1
    </h1>
  );
}
