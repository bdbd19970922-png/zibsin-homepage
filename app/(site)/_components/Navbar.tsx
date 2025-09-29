"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";
import clsx from "clsx";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // 모바일 메뉴 열렸을 때 배경 스크롤 방지
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      {/* 높이를 모바일 48px, 태블릿 이상 56px 로 낮춤 */}
      <div className="mx-auto flex h-12 w-full max-w-screen-xl items-center justify-between px-3 sm:h-14 sm:px-4">
        {/* 로고 영역: 모바일에서 아이콘+짧은 텍스트, 데스크톱에서 더 큰 텍스트 */}
        <Link href="/" className="flex min-w-0 items-center gap-2">
          <Image
            src="/logo/jibsin.png"
            alt="집신 Zibsin"
            width={28}
            height={28}
            priority
          />
          <span
            className="truncate font-bold text-sm sm:text-base"
            style={{ color: "#0c2a73" }}
          >
            집수리의 신
          </span>
        </Link>

        {/* 데스크톱 내비게이션 */}
        <nav className="hidden items-center gap-6 md:flex">
          <Link href="#services" className="text-sm text-gray-700 hover:text-gray-900">
            서비스
          </Link>
          <Link href="#how" className="text-sm text-gray-700 hover:text-gray-900">
            이용방법
          </Link>
          <Link href="#cases" className="text-sm text-gray-700 hover:text-gray-900">
            사례
          </Link>
          <Link href="#regions" className="text-sm text-gray-700 hover:text-gray-900">
            지역
          </Link>
          <Link href="#contact" className="text-sm text-gray-700 hover:text-gray-900">
            문의
          </Link>
        </nav>

        {/* 우측 액션: 모바일은 햄버거만, 데스크톱은 전화 버튼 표시 */}
        <div className="flex items-center gap-1">
          <a
            href="tel:010-0000-0000"
            className="btn-ghost hidden items-center rounded-md px-3 py-2 text-sm md:inline-flex"
          >
            <Phone size={16} className="mr-2" />
            전화문의
          </a>

          <button
            className="inline-flex items-center rounded-md p-2 md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="메뉴 열기"
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* 모바일 드롭다운 메뉴: 화면 폭에 맞춰 전체 너비, 큰 터치 타겟, 줄바꿈 안전 */}
      <div
        id="mobile-menu"
        className={clsx(
          "md:hidden",
          open ? "block" : "hidden",
        )}
      >
        <nav className="border-t border-black/5 bg-white">
          <ul className="mx-auto w-full max-w-screen-xl px-3 py-2">
            {[
              { href: "#services", label: "서비스" },
              { href: "#how", label: "이용방법" },
              { href: "#cases", label: "사례" },
              { href: "#regions", label: "지역" },
              { href: "#contact", label: "문의" },
            ].map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block w-full truncate rounded-md px-3 py-3 text-[15px] text-gray-800 hover:bg-gray-50"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="mt-1">
              <a
                href="tel:010-0000-0000"
                className="flex items-center justify-center rounded-md px-3 py-3 text-[15px] font-medium text-gray-900 ring-1 ring-gray-200 hover:bg-gray-50"
              >
                <Phone size={16} className="mr-2" />
                전화문의
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
