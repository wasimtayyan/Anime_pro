"use client";

import { fetchAnime, fetchManga } from "@/app/actions";
import { useEffect, useState } from "react";
import useSearch from "@/app/context/SearchContext";
import { LoadProps } from "./LoadMore";
import AnimeCard, { AnimeProp } from "./AnimeCard";
const Feed = ({ kind }: LoadProps) => {
  const { search } = useSearch();
  const [data, setData] = useState<AnimeProp[]>();
  useEffect(() => {
    kind == "Anime"
      ? fetchAnime({ page: 1, name: search })
      : fetchManga({ page: 1, name: search }).then((res) => setData(res));
  }, [search, kind]);
  return (
    <section className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
      {data?.map((item: AnimeProp, index: number) => (
        <AnimeCard key={item.id} anime={item} index={index} />
      ))}
    </section>
  );
};

export default Feed;
