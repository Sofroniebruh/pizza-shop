"use client";

import React from "react";
import { Toaster } from "react-hot-toast";
import { SessionProvider } from "next-auth/react";
import NextTopLoader from "nextjs-toploader";

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <NextTopLoader
        color={"bg-primary"}
        shadow={"shadow-md shadow-primary"}
      ></NextTopLoader>
      <SessionProvider>{children}</SessionProvider>
      <Toaster></Toaster>
    </>
  );
};
