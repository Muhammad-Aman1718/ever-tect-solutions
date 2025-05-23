import type { Metadata } from "next";
import { DM_Sans, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import StoreProvider from "./providers/storeProvide";
import { ToastContainer } from "react-toastify";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"], // jitne weight chahiye specify karein
  variable: "--font-dm-sans", // CSS variable ka naam
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${dmSans.className} antialiased`}
        cz-shortcut-listen="true"
      >
        <ToastContainer />
        <StoreProvider> {children}</StoreProvider>
      </body>
    </html>
  );
}
