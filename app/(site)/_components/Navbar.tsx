"use client";

import Link from "next/link";
import Image from "next/image";            // ⬅ 추가
import { Menu, Phone } from "lucide-react";
import { useState } from "react";
import clsx from "clsx";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/40 bg-white/70 backdrop-blur-md">
      <div className="container h-14 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          {/* ⬇ 기존 동그라미 + 텍스트 제거하고 로고 이미지로 교체 */}
          <Image
            src="/logo/jibsin2.png"
            alt="집신 Zibsin"
            width={45}           // 로고 폭은 여기서 조절(예: 120~160)
            height={30}
            priority
          />
           {/* 텍스트 */}
  <span className="font-bold text-lg" style={{ color: "#0c2a73" }}>
  집수리의 신
</span>
        </Link>

        <nav className={clsx("items-center gap-6 md:flex", open ? "flex" : "hidden")}>
          <Link href="#services" className="nav-link">서비스</Link>
          <Link href="#how" className="nav-link">이용방법</Link>
          <Link href="#cases" className="nav-link">사례</Link>
          <Link href="#regions" className="nav-link">지역</Link>
          <Link href="#contact" className="nav-link">문의</Link>
        </nav>

        <div className="flex items-center gap-2">
          <a href="tel:010-0000-0000" className="btn-ghost hidden md:inline-flex">
            <Phone size={18} className="mr-2" />전화문의
          </a>
          <button className="md:hidden p-2" onClick={() => setOpen(v=>!v)} aria-label="메뉴">
            <Menu />
          </button>
        </div>
      </div>
    </header>
  );
}
