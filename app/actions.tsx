"use server";

import AnimeCard, { AnimeProp } from "@/components/AnimeCard";
type Props = {
  page: number;
  name?: string;
};
export const fetchAnime = async ({ page, name }: Props) => {
  const res = await fetch(
    `https://shikimori.one/api/animes?page=${page}&limit=8&${
      !name && "order=popularity"
    }&${name && `search=${name}`}`
  );
  const data = await res.json();
  return data;
};
export const fetchManga = async ({ page, name }: Props) => {
  const res = await fetch(
    `https://shikimori.one/api/mangas?page=${page}&limit=8&${
      !name && "order=popularity"
    }&${name && `search=${name}`}`
  );
  const data = await res.json();

  return data;
};

// "use server";

// import AnimeCard, { AnimeProp } from "@/components/AnimeCard";

// export const fetchAnime = async (page: number) => {
//   const res = await fetch(
//     `https://shikimori.one/api/animes?page=${page}&limit=8&order=popularity`
//   );
//   const data = await res.json();
//   return data.map((item: AnimeProp, index: number) => (
//     <AnimeCard key={item.id} anime={item} index={index} />
//   ));
// };
// export const fetchManga = async (page: number) => {
//   const res = await fetch(
//     `https://shikimori.one/api/mangas?page=${page}&limit=8&order=popularity`
//   );
//   const data = await res.json();

//   return data.map((item: AnimeProp, index: number) => (
//     <AnimeCard key={item.id} anime={item} index={index} />
//   ));
// };
// export const fetchSearch = async (name: string, type: string = "animes") => {
//   const res = await fetch(
//     `https://shikimori.one/api/${type}?search=${name}&page=1&limit=8`
//   );
//   const SearchData = await res.json();

//   return SearchData.map((item: AnimeProp, index: number) => (
//     <AnimeCard key={item.id} anime={item} index={index} />
//   ));
// };
