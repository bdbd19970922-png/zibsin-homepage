import "./(site)/styles/globals.css";
import type { Metadata, Viewport } from "next";
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

// ✅ 모바일 렌더링/줌 기준을 명시 (iOS/안드 포함)
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

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
  icons: {
    icon: [{ url: "/favicon.png", type: "image/png", sizes: "32x32" }],
    apple: [{ url: "/favicon.png", type: "image/png", sizes: "180x180" }],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko" className={`${noto.variable} ${inter.variable} scroll-smooth`}>
      {/* 
        - break-words: 모바일 긴 단어/URL 줄바꿈
        - overflow-x-hidden: 가로 스크롤 깨짐 방지
        - min-h-dvh: 모바일 주소창 높이 변화 대응
      */}
      <body className="font-sans antialiased text-gray-900 bg-white break-words overflow-x-hidden min-h-dvh">
        {/* 
          모바일에서만 좌우 패딩 부여로 글자 깨짐/붙음 방지.
          데스크톱은 px-0로 유지하여 기존 레이아웃 영향 최소화.
        */}
        <div id="page-root" className="w-full sm:px-4 md:px-6 lg:px-0">
          {children}
        </div>
      </body>
    </html>
  );
}
