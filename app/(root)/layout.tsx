import type {Metadata} from "next";
import {Geist, Geist_Mono} from "next/font/google";
import Header from "@/components/shared-components/header";
import {Toaster} from "@/components/ui/sonner";

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
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <main className={"min-h-screen"}>
            <Header/>
            {children}
        </main>
    );
}
