import Feed from "@/components/Feed";
import LoadMore from "@/components/LoadMore";

async function Manga() {
  return (
    <main className="sm:p-16 py-16 px-8 flex flex-col gap-10">
      <h2 className="text-3xl text-white font-bold">Explore Manga</h2>

      <Feed kind="Manga" />
      <LoadMore kind="Manga" />
    </main>
  );
}

export default Manga;
