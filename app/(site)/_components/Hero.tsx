"use client";

import { CheckCircle2 } from "lucide-react";
import HeroCarousel from "./HeroCarousel";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="hero-bg">
      <div className="container relative py-14 sm:py-16 md:py-24">
        <div className="grid items-center gap-10 md:grid-cols-2">
          {/* 왼쪽 텍스트 */}
          <div>
            <span className="badge">전국 지점 확대 중</span>

            {/* 
              - 모바일: text-3xl / 줄간격 여유
              - 데스크톱: 기존 느낌 유지 (md:text-5xl, leading-tight)
              - 긴 문구 줄바꿈 안전 (break-words)
            */}
            <h1 className="mt-4 break-words text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.2] md:leading-tight tracking-[-0.02em]">
              간단한 집수리도{" "}
              {/* 로고 + '에게 맡기세요'를 같은 줄에 두되, 화면폭 좁으면 자동 줄바꿈 */}
              <span className="inline-flex items-center align-baseline gap-2">
                <Image
                  src="/logo/jibsin.png"
                  alt="집신 로고"
                  width={64}
                  height={26}
                  className="inline-block align-middle sm:w-[80px] sm:h-[32px] md:w-[96px] md:h-[38px]"
                  priority
                />
                <span>에게 맡기세요</span>
              </span>
            </h1>

            {/* 본문 설명: 모바일 폰트 약간 축소, 줄간격 확보 */}
            <p className="mt-4 text-base sm:text-lg leading-relaxed text-mute">
              소소한 수리부터 누수·전기·마감보수까지, 검증된 기사님이 신속하게 처리합니다.
            </p>

            {/* 버튼: 모바일 세로 스택 → 태블릿부터 가로 배열 */}
            <div className="mt-6 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
              <a href="#contact" className="btn-primary sm:min-w-[160px] text-center">
                수리 요청하기
              </a>
              <a href="#services" className="btn-ghost sm:min-w-[160px] text-center">
                가능한 서비스 보기
              </a>
            </div>

            {/* 특징 3개: 모바일 1열 → sm 부터 3열 */}
            <ul className="mt-8 grid grid-cols-1 gap-3 text-sm sm:grid-cols-3">
              {["빠른접수", "합리요금", "1년보증"].map((t) => (
                <li key={t} className="flex items-center gap-2">
                  <CheckCircle2 className="text-brand" size={18} /> {t}
                </li>
              ))}
            </ul>
          </div>

          {/* 오른쪽 이미지 캐러셀 (기존 PC 레이아웃 유지) */}
          <HeroCarousel images={["/hero/01.jpg"]} />
          {/*
            여러 장 사용하려면:
            <HeroCarousel images={["/hero/01.jpg", "/hero/02.jpg", "/hero/03.jpg"]} />
          */}
        </div>
      </div>
    </section>
  );
}
