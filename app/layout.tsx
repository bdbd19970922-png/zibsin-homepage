import "./(site)/styles/globals.css";
import type { Metadata } from "next";
import { Noto_Sans_KR, Inter } from "next/font/google";

const noto = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  variable: "--font-noto",
  display: "swap",
});
const inter = Inter({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "집신 | Zibsin",
  description: "간단한 집수리도 집신에게 맡기세요.",
  metadataBase: new URL("https://zibsin.kr"),
  openGraph: {
    title: "집신 | Zibsin",
    description: "간단한 집수리도 집신에게 맡기세요.",
    url: "https://zibsin.kr",
    siteName: "집신",
    images: ["/og.png"],
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko" className={`${noto.variable} ${inter.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
