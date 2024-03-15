"use client";

import React from "react";
import Link from "next/link";
import Price from "@/components/subscription/price";
import { Button } from "@/components/ui/button";
import useUser from "@/app/hook/useUser";

export default function HomePage() {
  const { isFetching, data } = useUser();

  if (isFetching) {
    return <></>;
  }

  return (
    <div className="flex mx-auto justify-center items-center h-[80vh]">
      {!data?.id ? (
        <div className=" p-4 max-w-7xl mx-auto relative z-10  w-full pt-20 md:pt-0">
          <h1 className="text-4xl md:text-6xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
            Welcome to
            <br /> the best Next JS starter
            <br /> for Supabase + Stripe
          </h1>
          <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto mb-10">
            Easy way to integrate Supabase with Stripe API on Next JS. Built in Shadcn | React Query
            | Tailwinds
          </p>
          <div className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto mb-10">
            <Link href="/auth">
              <Button variant="secondary" className="mt-10 animate-fade">
                Sign in to get Started
              </Button>
            </Link>
          </div>
        </div>
      ) : (
        <Price />
      )}
    </div>
  );
}
