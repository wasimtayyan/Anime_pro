import React, { createContext, useContext, useState } from "react";

type Search = string;
type SearchState = {
  search: Search;
  setSearch(search: Search): void;
};

const SearchContext = createContext<SearchState | null>(null);

const useSearch = (): SearchState => {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error("Please use SearchProvider in parent component");
  }
  return context;
};
type Children = {
  children: React.ReactNode;
};
export const SearchProvider = ({ children }: Children) => {
  const [search, setSearch] = useState<Search>("");
  return (
    <SearchContext.Provider value={{ search, setSearch }}>
      {children}
    </SearchContext.Provider>
  );
};
export default useSearch;
