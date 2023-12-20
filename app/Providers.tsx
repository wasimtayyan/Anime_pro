"use client";
import { NextUIProvider } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { SearchProvider } from "@/app/context/SearchContext";
import Loading from "./loding";
import ScrollToTop from "@/components/ScrollToTop";
const Providers = ({ children }: { children: React.ReactNode }) => {
  const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   const loadingTimer = setTimeout(() => {
  //     setIsLoading(false);
  //   }, 500);

  //   return () => clearTimeout(loadingTimer);
  // }, []);
  return (
    <>
      <NextUIProvider>
        <SearchProvider>{children}</SearchProvider>
      </NextUIProvider>
      <ScrollToTop />
      {/* {isLoading ? (
        <Loading />
      ) : (
        <NextUIProvider>
          <SearchProvider>{children}</SearchProvider>
        </NextUIProvider>
      )}
      <ScrollToTop /> */}
    </>
  );
};

export default Providers;
