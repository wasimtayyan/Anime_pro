import React from "react";
import { fetchManga } from "../actions";
import LoadMore from "@/components/LoadMore";

async function Manga() {
  const data = await fetchManga(1);
  return (
    <main className="sm:p-16 py-16 px-8 flex flex-col gap-10">
      <h2 className="text-3xl text-white font-bold">Explore Manga</h2>
      <section className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
        {data}
      </section>

      <LoadMore kind="Manga" />
    </main>
  );
}

export default Manga;
