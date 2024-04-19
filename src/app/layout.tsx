import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NDCFT",
  description: "Buy NFTs of your choice",
  icons: { icon: "/Logo.png" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className + " " + "dark bg-[#18181b]"}>
        {children}
      </body>
    </html>
  );
}
