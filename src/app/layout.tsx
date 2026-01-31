import type { Metadata } from "next";
import { Inter, Lora } from "next/font/google";
import "./globals.css";
import { clsx } from "clsx";

const inter = Inter({
  subsets: ["latin", "vietnamese"],
  variable: "--font-inter",
  display: "swap",
});

const fontHeading = Lora({
  subsets: ["latin", "vietnamese"],
  variable: "--font-serif",
  display: "swap",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "TP.HCM: The Price of Development",
  description: "An urgent look at environmental pollution in Ho Chi Minh City.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={clsx(
          inter.variable,
          fontHeading.variable,
          "antialiased bg-pollution-black text-white font-sans selection:bg-clean-green selection:text-pollution-black"
        )}
      >
        {children}
      </body>
    </html>
  );
}
