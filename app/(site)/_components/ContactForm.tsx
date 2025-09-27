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
    <form className="card grid md:grid-cols-2 gap-4 mt-6" onSubmit={onSubmit}>
      <div>
        <label className="text-sm font-medium">이름</label>
        <input required className="mt-1 w-full h-11 px-3 border rounded-xl" placeholder="홍길동" />
      </div>
      <div>
        <label className="text-sm font-medium">연락처</label>
        <input required className="mt-1 w-full h-11 px-3 border rounded-xl" placeholder="010-0000-0000" />
      </div>
      <div className="md:col-span-2">
        <label className="text-sm font-medium">주소 또는 지역</label>
        <input className="mt-1 w-full h-11 px-3 border rounded-xl" placeholder="대전 ○○구 ○○동" />
      </div>
      <div className="md:col-span-2">
        <label className="text-sm font-medium">설명</label>
        <textarea rows={4} className="mt-1 w-full px-3 py-2 border rounded-xl" placeholder="증상을 간단히 적어주세요. 사진은 카카오톡으로 보내주셔도 됩니다." />
      </div>
      <div className="md:col-span-2 flex gap-3">
        <button className="btn-primary" type="submit" disabled={submitting}>
          {submitting ? "접수 중..." : "접수하기(데모)"}
        </button>
        <span className="self-center text-sm text-mute">* 지금은 데모라 저장되지 않음</span>
      </div>
    </form>
  );
}
