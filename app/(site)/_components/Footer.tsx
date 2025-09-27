export default function Footer() {
  return (
    <footer className="border-t border-gray-100 mt-20">
      <div className="container py-10 text-sm text-mute">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <p>© {new Date().getFullYear()} 집신(Zibsin). All rights reserved.</p>
          <div className="space-x-5">
            <a href="#" className="hover:text-ink">이용약관</a>
            <a href="#" className="hover:text-ink">개인정보처리방침</a>
            <a href="#contact" className="hover:text-ink">문의</a>
          </div>
        </div>
        <p className="mt-4">사업자등록번호 000-00-00000 | 대표 홍길동 | 대전광역시 ○○구 ○○로 123</p>
      </div>
    </footer>
  );
}
