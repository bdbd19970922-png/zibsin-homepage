"use client";

import Image from "next/image";
import { useRef, useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Props = { images: string[] };

export default function HeroCarousel({ images }: Props) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [idx, setIdx] = useState(0);

  // 현재 인덱스로 스크롤(반응형 리사이즈 시 재정렬용)
  const scrollToIndex = useCallback(
    (next: number, smooth = true) => {
      const el = scrollerRef.current;
      if (!el) return;
      const clamped = Math.max(0, Math.min(images.length - 1, next));
      const x = clamped * el.clientWidth;
      el.scrollTo({ left: x, behavior: smooth ? "smooth" : "auto" });
      setIdx(clamped);
    },
    [images.length]
  );

  // 화살표 클릭
  function go(next: number) {
    scrollToIndex(next, true);
  }

  // 스크롤로 인덱스 반영 (스냅 기준)
  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    const onScroll = () => {
      const i = Math.round(el.scrollLeft / el.clientWidth);
      setIdx(i);
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  // 창 크기 변경 시 현재 인덱스 위치로 재정렬 (모바일↔PC 전환 안정화)
  useEffect(() => {
    const onResize = () => scrollToIndex(idx, false);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [idx, scrollToIndex]);

  // 키보드 내비게이션(접근성)
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") go(idx - 1);
      if (e.key === "ArrowRight") go(idx + 1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [idx]);

  return (
    <div className="card relative select-none overflow-hidden p-0">
      {/* 뷰포트: 모바일 340px, md 이상 420px 유지(PC 레이아웃 유지) */}
      <div
        ref={scrollerRef}
        role="region"
        aria-roledescription="carousel"
        aria-label="작업 사례 캐러셀"
        className="
          w-full h-[340px] md:h-[420px]
          overflow-x-auto
          snap-x snap-mandatory
          scroll-smooth
          touch-pan-y
          overscroll-x-contain
          [-ms-overflow-style:none] [scrollbar-width:none]
        "
        // Firefox는 [scrollbar-width:none], WebKit은 아래 스타일로 숨김
        style={{ scrollbarWidth: "none" }}
      >
        <style jsx>{`
          /* WebKit 스크롤바 숨김 */
          div::-webkit-scrollbar {
            display: none;
          }
        `}</style>

        <div className="flex h-full">
          {images.map((src, i) => (
            <div
              key={src + i}
              className="relative h-full min-w-full snap-center"
              aria-hidden={i !== idx}
            >
              <Image
                src={src}
                alt={`hero-${i + 1}`}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
                draggable={false}
                priority={i === 0}
              />
            </div>
          ))}
        </div>
      </div>

      {/* 좌우 화살표: 모바일에서도 큰 터치 타겟(44px+) */}
      {images.length > 1 && (
        <>
          <button
            aria-label="이전"
            onClick={() => go(idx - 1)}
            className="
              absolute left-3 top-1/2 -translate-y-1/2
              rounded-full p-3 shadow
              bg-white/80 hover:bg-white
              backdrop-blur
              md:p-2
            "
          >
            <ChevronLeft />
          </button>
          <button
            aria-label="다음"
            onClick={() => go(idx + 1)}
            className="
              absolute right-3 top-1/2 -translate-y-1/2
              rounded-full p-3 shadow
              bg-white/80 hover:bg-white
              backdrop-blur
              md:p-2
            "
          >
            <ChevronRight />
          </button>
        </>
      )}

      {/* 인디케이터 */}
      {images.length > 1 && (
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
          {images.map((_, i) => (
            <span
              key={i}
              aria-label={`슬라이드 ${i + 1}`}
              className={`h-2 w-2 rounded-full ${
                i === idx ? "bg-brand" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
