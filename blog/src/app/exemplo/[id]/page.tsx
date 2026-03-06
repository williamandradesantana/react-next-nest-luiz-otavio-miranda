import { revalidateExampleAction } from "@/app/actions/revalidate-example";
import { formatHour } from "@/utils/format-datetime";

// export const dynamic = "force-static";
// export const revalidate = 30;

export default async function ExemploIdPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const hour = formatHour(Date.now());

  const response = await fetch("https://randomuser.me/api/?results=2", {
    next: {
      tags: ["randomuser"],
      revalidate: 30,
    },
  });

  const json = await response.json();
  const name = json.results[0].name.first;

  return (
    <main className="min-h-[600px] text-xl font-bold">
      <div>
        {" "}
        {hour} - id {id} - Name: {name}
      </div>

      <form className="py-16" action={revalidateExampleAction}>
        <input type="hidden" name="path" defaultValue={`/exemplo/${id}`} />

        <button
          type="submit"
          className="bg-amber-500 text-white rounded hover:bg-amber-600 transition cursor-pointer"
        >
          Revalidate
        </button>
      </form>
    </main>
  );
}
