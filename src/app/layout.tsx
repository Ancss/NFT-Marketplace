import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NFTMarketplaceProvider } from "@/Context/NFTMarketplaceContext";

const inter = Inter({
  subsets: ["latin"], variable: "--font-sans",
});
//INTRNAL IMPORT
import NavBar from "@/components/NavBar/Navbar";
import Footer from "@/components/Footer";
import { cn } from "@/lib/utils";


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
      <body className={cn(
        "min-h-screen bg-background font-sans antialiased",
        'text-sm bg-main-bg text-icons m-0 p-0',

        inter.className
      )}>
        <div className="w-11/12  sm:w-4/5 mx-auto">
          <NFTMarketplaceProvider>
            <NavBar />
            {children}
            <Footer />
          </NFTMarketplaceProvider>
        </div>
      </body>
    </html>
  );
}

