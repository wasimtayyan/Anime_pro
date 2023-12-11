"use server";

import AnimeCard, { AnimeProp } from "@/components/AnimeCard";

export const fetchAnime = async (page: number) => {
  const res = await fetch(
    `https://shikimori.one/api/animes?page=${page}&limit=8&order=popularity`
  );
  const data = await res.json();
  return data.map((item: AnimeProp, index: number) => (
    <AnimeCard key={item.id} anime={item} index={index} />
  ));
};
export const fetchManga = async (page: number) => {
  const res = await fetch(
    `https://shikimori.one/api/mangas?page=${page}&limit=8&order=popularity`
  );
  const data = await res.json();

  return data.map((item: AnimeProp, index: number) => (
    <AnimeCard key={item.id} anime={item} index={index} />
  ));
};
export const fetchSearch = async (name: string, type: string = "animes") => {
  const res = await fetch(
    `https://shikimori.one/api/${type}?search=${name}&page=1&limit=8`
  );
  const SearchData = await res.json();

  return SearchData.map((item: AnimeProp, index: number) => (
    <AnimeCard key={item.id} anime={item} index={index} />
  ));
};
