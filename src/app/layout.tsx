import type { Metadata } from "next";
import "./globals.css";
import { Inter, Space_Grotesk, Noto_Nastaliq_Urdu } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const space = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  weight: ["400", "500", "600", "700"],
});

const urdu = Noto_Nastaliq_Urdu({
  subsets: ["arabic"],
  variable: "--font-urdu",
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: "PARCHAM — Coming Soon",
  description: "Street. Formal. PARCHAM. Launching 25 March 2026.",
  robots: { index: false, follow: false }, // coming soon pages usually noindex
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${space.variable} ${urdu.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}