import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NFTMarketplaceProvider } from "@/Context/NFTMarketplaceContext";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});
//INTRNAL IMPORT
import NavBar from "@/components/NavBar/Navbar";
import Footer from "@/components/Footer";
import { cn } from "@/lib/utils";
import { LoadingSpinnerProvider } from "@/Context/LoadingSpinnerProvider";
import { LoadingSpinner } from "@/components/LoadingSpinner";
import { AccountProvider } from "@/Context/AccountProvider";
import { Suspense } from "react";
import Loader from "@/components/Loader";

export const metadata: Metadata = {
  title: "NFT-Marketplace",
  description: "NFT-Marketplace",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "w-full min-h-screen bg-background font-sans antialiased",
          "text-sm bg-main-bg text-icons m-0 p-0",

          inter.className
        )}
      >
        <div className="w-full px-4 sm:px-12 md:px-16 lg:px-36 mx-auto">
          <LoadingSpinnerProvider>
            <NFTMarketplaceProvider>
              <AccountProvider>
                <Suspense fallback={<Loader></Loader>}>
                  <LoadingSpinner></LoadingSpinner>
                  <NavBar />
                  {children}
                  <Footer />
                </Suspense>
              </AccountProvider>
            </NFTMarketplaceProvider>
          </LoadingSpinnerProvider>
        </div>
      </body>
    </html>
  );
}
