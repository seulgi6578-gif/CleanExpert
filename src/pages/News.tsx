import { useState } from "react";
import SubBanner from "../components/SubBanner";
import SectionTitle from "../components/SectionTitle";
import { NEWS_DATA } from "../mockData";
import { Link, Routes, Route, useLocation } from "react-router-dom";
import { ROUTES } from "../constants";
import { MessageSquare, FileText, ChevronRight } from "lucide-react";

export default function News() {
  const location = useLocation();
  
  return (
    <div>
      <SubBanner 
        title="소식 및 자료" 
        subtitle="삼원기업의 주요 소식과 업계 트렌드를 가장 빠르게 전달합니다." 
        bgImage="https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&q=80&w=1600"
      />
      
      <div className="bg-white border-b border-brand-border sticky top-20 z-40">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-8 md:gap-16">
            {[
              { label: "공지사항", path: ROUTES.NEWS.NOTICE, icon: MessageSquare },
              { label: "마케팅 자료실", path: ROUTES.NEWS.MATERIALS, icon: FileText },
            ].map(tab => (
              <Link 
                key={tab.path}
                to={tab.path}
                className={`py-6 flex items-center gap-2 font-bold text-sm md:text-lg border-b-4 transition-all duration-300 ${
                  location.pathname === tab.path ? "text-brand-red border-brand-red" : "text-brand-muted border-transparent hover:text-brand-black"
                }`}
              >
                <tab.icon size={20} />
                {tab.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="py-24 container mx-auto px-4 min-h-[400px]">
        <Routes>
          <Route index element={<NewsList category="notice" />} />
          <Route path="notice" element={<NewsList category="notice" />} />
          <Route path="materials" element={<NewsList category="material" />} />
        </Routes>
      </div>
    </div>
  );
}

function NewsList({ category }: { category: "notice" | "material" }) {
  const filtered = NEWS_DATA.filter(item => item.category === category);
  
  return (
    <div>
       <SectionTitle 
        title={category === "notice" ? "공지사항" : "마케팅 자료실"} 
        subtitle={category === "notice" ? "삼원기업의 공식 안내 및 보도자료입니다." : "광고주분들을 위한 실무 마케팅 자료 및 리포트입니다."} 
        align="left"
       />
       
       <div className="mt-8 space-y-4">
         {filtered.map((item, idx) => (
           <div 
            key={item.id}
            className="flex flex-col sm:flex-row sm:items-center justify-between p-6 bg-white border border-brand-border rounded-2xl hover:border-brand-red transition-all cursor-pointer group shadow-sm hover:shadow-md"
           >
              <div className="flex items-center gap-4">
                 <span className="w-10 h-10 bg-brand-soft rounded-lg flex items-center justify-center text-brand-muted font-bold text-sm">
                   {idx + 1}
                 </span>
                 <h4 className="font-bold text-brand-black group-hover:text-brand-red transition-colors text-lg">{item.title}</h4>
              </div>
              <div className="flex items-center gap-4 mt-4 sm:mt-0">
                 <span className="text-sm text-brand-muted">{item.date}</span>
                 <ChevronRight className="text-brand-border group-hover:text-brand-red transition-colors" />
              </div>
           </div>
         ))}
       </div>
    </div>
  );
}
