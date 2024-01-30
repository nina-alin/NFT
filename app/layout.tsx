import type { Metadata } from "next";
import { Rajdhani } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar/navbar";
import MetaMaskProviderWrapper from "./components/providers/metamask-provider-wrapper";

const rajdhani = Rajdhani({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Nft app",
  description: "Nft app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={rajdhani.className}>
        <div className="py-8 px-28">
          <MetaMaskProviderWrapper>
            <Navbar />
            {children}
          </MetaMaskProviderWrapper>
        </div>
      </body>
    </html>
  );
}
