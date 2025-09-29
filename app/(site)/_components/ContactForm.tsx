"use client";

import { useState } from "react";

export default function ContactForm() {
  const [submitting, setSubmitting] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      alert("데모 제출 완료! (실제 저장은 아직 안 붙음)");
      setSubmitting(false);
    }, 600);
  }

  return (
    <form
      className="card grid gap-4 mt-6 md:grid-cols-2"
      onSubmit={onSubmit}
      aria-busy={submitting}
    >
      {/* 이름 */}
      <div className="min-w-0">
        <label htmlFor="name" className="text-sm font-medium">
          이름
        </label>
        <input
          id="name"
          name="name"
          required
          autoComplete="name"
          className="mt-1 w-full h-12 px-3 rounded-xl border text-base md:text-sm
                     focus:outline-none focus:ring-2 focus:ring-brand/40"
          placeholder="홍길동"
        />
      </div>

      {/* 연락처 */}
      <div className="min-w-0">
        <label htmlFor="tel" className="text-sm font-medium">
          연락처
        </label>
        <input
          id="tel"
          name="tel"
          required
          type="tel"
          inputMode="tel"
          autoComplete="tel"
          className="mt-1 w-full h-12 px-3 rounded-xl border text-base md:text-sm
                     focus:outline-none focus:ring-2 focus:ring-brand/40"
          placeholder="010-0000-0000"
        />
      </div>

      {/* 주소/지역 */}
      <div className="md:col-span-2 min-w-0">
        <label htmlFor="addr" className="text-sm font-medium">
          주소 또는 지역
        </label>
        <input
          id="addr"
          name="addr"
          autoComplete="street-address"
          className="mt-1 w-full h-12 px-3 rounded-xl border text-base md:text-sm
                     focus:outline-none focus:ring-2 focus:ring-brand/40"
          placeholder="대전 ○○구 ○○동"
        />
      </div>

      {/* 설명 */}
      <div className="md:col-span-2 min-w-0">
        <label htmlFor="desc" className="text-sm font-medium">
          설명
        </label>
        <textarea
          id="desc"
          name="desc"
          rows={4}
          className="mt-1 w-full px-3 py-2 rounded-xl border text-base md:text-sm
                     focus:outline-none focus:ring-2 focus:ring-brand/40"
          placeholder="증상을 간단히 적어주세요. 사진은 카카오톡으로 보내주셔도 됩니다."
        />
      </div>

      {/* 버튼 + 안내문구: 모바일 세로 스택, PC 가로 정렬 유지 */}
      <div className="md:col-span-2 flex flex-col gap-3 sm:flex-row sm:items-center">
        <button
          className="btn-primary w-full sm:w-auto text-center"
          type="submit"
          disabled={submitting}
        >
          {submitting ? "접수 중..." : "접수하기(데모)"}
        </button>
        <span className="text-sm text-mute">
          * 지금은 데모라 저장되지 않음
        </span>
      </div>
    </form>
  );
}
