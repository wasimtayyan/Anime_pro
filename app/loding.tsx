"use client";
import { Card, Skeleton } from "@nextui-org/react";

const Loading = () => {
  const Cards = ["1", "2", "3", "4"];
  return (
    <main className="h-screen bg-[#0F1117]">
      <section className="min-h-[75vh] flex justify-center">
        <div className="sm:p-16 py-16 px-8 flex justify-start lg:items-center max-lg:flex-col w-full sm:gap-16 gap-0">
          <div className=" w-3/5 flex items-center gap-3">
            <div className="w-full flex flex-col gap-2">
              <Skeleton className="h-3 w-2/5 rounded-lg" />
              <Skeleton className="h-3 w-5/5 rounded-lg" />
              <Skeleton className="h-3 w-4/5 rounded-lg" />
            </div>
          </div>
        </div>
      </section>
      <section className="h-fit grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 px-4">
        {Cards.map((item) => (
          <Card
            key={item}
            className="w-full space-y-5 p-4 bg-black h-[45vh]"
            radius="lg"
          >
            <Skeleton className="rounded-lg">
              <div className=" rounded-lg bg-[#0F1117]"></div>
            </Skeleton>
            <div className="space-y-10">
              <Skeleton className="w-full rounded-lg">
                <div className="h-32 w-5/5 rounded-lg bg-[#0F1117]"></div>
              </Skeleton>
              <Skeleton className="w-4/5 rounded-lg">
                <div className="h-3 w-4/5 rounded-lg bg-[#0F1117]"></div>
              </Skeleton>
              <Skeleton className="w-2/5 rounded-lg">
                <div className="h-3 w-2/5 rounded-lg bg-[#0F1117]"></div>
              </Skeleton>
            </div>
          </Card>
        ))}
      </section>
    </main>
  );
};

export default Loading;
