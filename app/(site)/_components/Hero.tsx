import { CheckCircle2 } from "lucide-react";
import HeroCarousel from "./HeroCarousel";
import Image from "next/image";   // ⬅ 로고 이미지 사용을 위해 추가

export default function Hero() {
  return (
    <section className="hero-bg">
      <div className="container py-20 md:py-24 relative">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* 왼쪽 텍스트 */}
          <div>
            <span className="badge">전국 지점 확대 중</span>
            <h1 className="mt-4 text-4xl md:text-5xl font-bold leading-tight tracking-[-0.02em]">
              간단한 집수리도{" "}
              <span className="inline-flex align-baseline">
                {/* 집신 텍스트 대신 로고 이미지 삽입 */}
                <Image
  src="/logo/jibsin.png"       // 파일명 확실히 맞춤
  alt="집신 로고"
  width={75} height={30}      // 기본 사이즈
  className="inline-block align-middle relative top-[35px]" 
  priority
/>

              </span>
              {" "}에게 맡기세요
            </h1>
            <p className="mt-4 text-mute text-lg">
              소소한 수리부터 누수·전기·마감보수까지, 검증된 기사님이 신속하게 처리합니다.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a href="#contact" className="btn-primary">수리 요청하기</a>
              <a href="#services" className="btn-ghost">가능한 서비스 보기</a>
            </div>
            <ul className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm">
              {["빠른접수", "합리요금", "1년보증"].map((t) => (
                <li key={t} className="flex items-center gap-2">
                  <CheckCircle2 className="text-brand" size={18} /> {t}
                </li>
              ))}
            </ul>
          </div>

          {/* 오른쪽 이미지 캐러셀 */}
          <HeroCarousel images={["/hero/01.jpg"]} />
          {/*
            여러 장 넘기고 싶으면 배열에 추가:
            <HeroCarousel images={["/hero/01.jpg", "/hero/02.jpg", "/hero/03.jpg"]} />
          */}
        </div>
      </div>
    </section>
  );
}
