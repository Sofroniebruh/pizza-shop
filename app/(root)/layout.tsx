import type {Metadata} from "next";
import {Geist, Geist_Mono} from "next/font/google";
import Header from "@/components/shared-components/header";
import React from "react";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "PizzaStore",
    description: "Fresh and delicious pizza",
};

export default function RootLayout({
                                       children,
                                       modal
                                   }: Readonly<{
    children: React.ReactNode;
    modal: React.ReactNode;
}>) {
    return (
        <main className={"min-h-screen"}>
            <Header/>
            {modal}
            {children}
        </main>
    );
}
