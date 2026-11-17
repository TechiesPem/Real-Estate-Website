import type { Metadata } from "next";
import { Geist, Source_Serif_4 } from "next/font/google";
import "./globals.css";

const sans = Geist({
  variable: "--font-sans-family",
  subsets: ["latin"],
});

const serif = Source_Serif_4({
  variable: "--font-serif-family",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "TONIA Evergreen Properties | Verified homes and land in Nigeria",
  description:
    "Buy, rent or invest in verified property in Abuja, Lagos and the South East. Every listing is inspected and its title checked before we show it to you.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${sans.variable} ${serif.variable} antialiased`}>
      <body>{children}</body>
    </html>
  );
}
