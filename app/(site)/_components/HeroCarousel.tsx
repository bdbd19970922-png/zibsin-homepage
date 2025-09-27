"use client";

import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Props = { images: string[] };

export default function HeroCarousel({ images }: Props) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [idx, setIdx] = useState(0);

  // 화살표 클릭
  function go(next: number) {
    const el = scrollerRef.current;
    if (!el) return;
    const clamped = Math.max(0, Math.min(images.length - 1, next));
    const x = clamped * el.clientWidth;
    el.scrollTo({ left: x, behavior: "smooth" });
    setIdx(clamped);
  }

  // 스크롤로도 인덱스 반영
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

  return (
    <div className="card p-0 overflow-hidden relative select-none">
      {/* 뷰포트 */}
      <div
        ref={scrollerRef}
        className="w-full h-[340px] md:h-[420px] overflow-x-auto snap-x snap-mandatory scroll-smooth"
        style={{ scrollbarWidth: "none" }}
      >
        <div className="flex h-full">
          {images.map((src, i) => (
            <div
              key={src + i}
              className="min-w-full h-full relative snap-center"
            >
              <Image
                src={src}
                alt={`hero-${i + 1}`}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
                priority={i === 0}
              />
            </div>
          ))}
        </div>
      </div>

      {/* 좌우 화살표 */}
      {images.length > 1 && (
        <>
          <button
            aria-label="이전"
            onClick={() => go(idx - 1)}
            className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow"
          >
            <ChevronLeft />
          </button>
          <button
            aria-label="다음"
            onClick={() => go(idx + 1)}
            className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow"
          >
            <ChevronRight />
          </button>
        </>
      )}

      {/* 인디케이터 점 */}
      {images.length > 1 && (
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
          {images.map((_, i) => (
            <span
              key={i}
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
