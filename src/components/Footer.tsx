import { Link } from "react-router-dom";
import { BRAND, ROUTES } from "../constants";
import { NAV_ITEMS } from "../mockData";
import { Mail, Phone, MapPin, ExternalLink } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-brand-black text-gray-500 py-16 border-t border-white/5">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row justify-between gap-12">
          {/* Company Info */}
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-brand-red flex items-center justify-center font-bold text-white uppercase italic">S</div>
              <span className="font-extrabold text-white text-lg tracking-tight uppercase">{BRAND.nameEn}</span>
            </div>
            <p className="text-gray-300 font-bold mb-1">삼원기업(주) | 대표이사: 홍길동</p>
            <p className="text-sm">주소: 서울특별시 서초구 서초대로 397 서초빌딩 12층 (06620)</p>
            <p className="text-sm">TEL: 02-1234-5678 | FAX: 02-1234-5679 | Email: contact@samwon.com</p>
          </div>

          <div className="flex flex-col md:flex-row gap-8 lg:gap-16 text-right lg:items-end">
            <div className="flex gap-6 justify-end text-sm">
              <Link to="#" className="hover:text-white transition-colors">이용약관</Link>
              <Link to="#" className="hover:text-white font-bold transition-colors">개인정보처리방침</Link>
              <Link to="#" className="hover:text-white transition-colors">이메일무단수집거부</Link>
            </div>
            <p className="text-[10px] uppercase tracking-widest text-gray-600">
              © {new Date().getFullYear()} {BRAND.nameEn}. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
