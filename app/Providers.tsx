"use client";
import { NextUIProvider } from "@nextui-org/react";
import { useEffect, useState } from "react";
import Loading from "./loding";
const Providers = ({ children }: { children: React.ReactNode }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(loadingTimer);
  }, []);
  return isLoading ? <Loading /> : <NextUIProvider>{children}</NextUIProvider>;
};

export default Providers;
