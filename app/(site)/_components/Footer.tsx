export default function Footer() {
  return (
    <footer className="border-t border-gray-100 mt-20">
      <div className="container py-10 text-sm text-mute">
        {/* 모바일에서는 세로 쌓기, PC에서는 가로 정렬 */}
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <p className="text-center md:text-left">
            © {new Date().getFullYear()} 집신(Zibsin). All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            <a href="#" className="hover:text-ink">
              이용약관
            </a>
            <a href="#" className="hover:text-ink">
              개인정보처리방침
            </a>
            <a href="#contact" className="hover:text-ink">
              문의
            </a>
          </div>
        </div>

        {/* 모바일에서는 자동 줄바꿈되도록 break-words 적용 */}
        <p className="mt-4 text-center md:text-left break-words">
          사업자등록번호 000-00-00000 | 대표 김진광 | 대전광역시 ○○구 ○○로 123
        </p>
      </div>
    </footer>
  );
}
