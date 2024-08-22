import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { OverlayNavbar } from "@/components";
import { RootLayout as PortfolioLayout } from "./_root/layout";
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: "400",
});
const inverse = localFont({
  src: "../public/fonts/inverse.ttf",
  variable: "--font-inverse",
});

const futura = localFont({
  src: "../public/fonts/futura.ttf",
  variable: "--font-futura",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: {
    default: "Sahil Makhija | Portfolio",
    template: "Sahil Makhija | %s",
  },
  description:
    "Experienced Frontend Developer specializing in React and Node.js, showcasing projects in web development, software engineering, and cybersecurity.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`h-screen bg-gradient-to-b from-bg-primary to-black ${inter.className} ${inverse.variable} ${futura.variable} ${poppins.variable}`}
      >
        <PortfolioLayout />
        {/* <FollowCursor /> */}
        <OverlayNavbar />
      </body>
    </html>
  );
}
