import { SpinLoader } from "@/components/SpinLoader";
import clsx from "clsx";

export default async function HomePage() {
  console.log("HomePage");

  return (
    <div>
      <SpinLoader containerClasses={clsx("min-h-12", "bg-red-500")} />
    </div>
  );
}
