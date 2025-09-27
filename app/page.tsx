import Navbar from "./(site)/_components/Navbar";
import Hero from "./(site)/_components/Hero";
import Footer from "./(site)/_components/Footer";
import ContactForm from "./(site)/_components/ContactForm";
import { Wrench, ShowerHead, PlugZap, Droplets } from "lucide-react";

function ServiceCard({
  icon: Icon,
  title,
  desc,
}: {
  icon: any;
  title: string;
  desc: string;
}) {
  return (
    <div className="card group">
      <div className="icon-ring group-hover:scale-105 transition-transform ease-swift">
        <Icon className="text-brand" />
      </div>
      <h3 className="mt-3 font-semibold">{title}</h3>
      <p className="text-sm text-mute mt-1">{desc}</p>
    </div>
  );
}

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />

        {/* Services */}
        <section id="services" className="container">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">어떤 수리를 도와드릴까요?</h2>
          <p className="text-mute mt-2">가장 문의가 많은 항목들만 모았어요.</p>
          <div className="grid md:grid-cols-4 gap-6 mt-6">
            {[
              { icon: Wrench, title: "도어·창문", desc: "수정·교체·하드웨어 점검" },
              { icon: ShowerHead, title: "욕실 보수", desc: "실리콘·부품 교체·누수점검" },
              { icon: PlugZap, title: "전기 공사", desc: "콘센트·스위치·조명 교체" },
              { icon: Droplets, title: "누수 점검", desc: "누수 탐지·배관 점검" },
            ].map((s) => (
              <ServiceCard key={s.title} {...s} />
            ))}
          </div>
        </section>

        {/* How it works */}
        <section id="how" className="container mt-16">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">이용 방법</h2>
          <div className="grid md:grid-cols-3 gap-6 mt-6">
            {[
              { step: "요청", desc: "사진과 함께 간단히 접수" },
              { step: "배정", desc: "가까운 기사님과 연결" },
              { step: "완료", desc: "현장 방문·수리·정산" },
            ].map((s, i) => (
              <div key={s.step} className="card">
                <div className="badge">{i + 1} 단계</div>
                <h3 className="mt-3 font-semibold">{s.step}</h3>
                <p className="text-sm text-mute mt-1">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Regions */}
        <section id="regions" className="container mt-16">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">이용 가능 지역</h2>
          <p className="text-mute mt-2">대전 · 평택부터 시작해서 확장 예정</p>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6">
            {["대전", "평택", "천안(예정)", "세종(예정)", "수원(예정)", "청주(예정)"].map((r) => (
              <div key={r} className="card">{r}</div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="container mt-16 mb-20">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">수리 요청 / 문의</h2>
          <p className="text-mute mt-2">아래 정보를 남겨주시면 빠르게 연락드립니다.</p>
          <ContactForm />
        </section>
      </main>
      <Footer />
    </>
  );
}
