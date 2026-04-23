import { Routes, Route, Link, useLocation } from "react-router-dom";
import SubBanner from "../components/SubBanner";
import SectionTitle from "../components/SectionTitle";
import { ROUTES } from "../constants";
import { motion } from "motion/react";
import { MapPin, Target, Eye, ShieldCheck } from "lucide-react";

export default function About() {
  const location = useLocation();
  
  return (
    <div>
      <SubBanner 
        title="회사소개" 
        subtitle="도시와 브랜드를 연결하는 광고 솔루션 솔러, 삼원기업을 소개합니다." 
        bgImage="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=1600"
      />
      
      {/* Tab Navigation */}
      <div className="bg-white border-b border-brand-border sticky top-20 z-40">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-8 md:gap-16">
            {[
              { label: "인사말", path: ROUTES.ABOUT.GREETING },
              { label: "비전 및 가치", path: ROUTES.ABOUT.VISION },
              { label: "오시는길", path: ROUTES.ABOUT.LOCATION },
            ].map(tab => (
              <Link 
                key={tab.path}
                to={tab.path}
                className={`py-6 font-bold text-sm md:text-lg border-b-4 transition-all duration-300 ${
                  location.pathname === tab.path ? "text-brand-red border-brand-red" : "text-brand-muted border-transparent hover:text-brand-black"
                }`}
              >
                {tab.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="min-h-[500px]">
        <Routes>
          <Route index element={<Greeting />} />
          <Route path="greeting" element={<Greeting />} />
          <Route path="vision" element={<Vision />} />
          <Route path="location" element={<Location />} />
        </Routes>
      </div>
    </div>
  );
}

function Greeting() {
  return (
    <div className="py-24 container mx-auto px-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
           initial={{ opacity: 0, x: -30 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
        >
          <SectionTitle align="left" title="CEO 인사말" subtitle="삼원기업은 신뢰와 전문성을 바탕으로 성장해왔습니다." />
          <div className="space-y-6 text-brand-muted leading-relaxed text-lg">
            <p>
              안녕하십니까. 삼원기업을 방문해주셔서 감사합니다.<br />
              저희 삼원기업은 1980년 설립 이래, 대한민국 옥외광고 시장의 발전과 궤를 같이하며 성장해 온 광고 전문 기업입니다.
            </p>
            <p>
              격변하는 미디어 환경 속에서도 저희가 변치 않고 지켜온 것은 바로 ‘상생의 가치’와 ‘신뢰’입니다. 시민들에게는 가치 있는 정보를 제공하고, 기업에게는 최고의 마케팅 성과를 돌려드리는 가교 역할을 충실히 수행하기 위해 매 순간 최선을 다하고 있습니다.
            </p>
            <p>
              단순한 광고 집행을 넘어, 브랜드의 철학을 도시의 결에 자연스럽게 녹여내는 파트너가 되겠습니다. 앞으로도 끊임없는 혁신과 성실함으로 귀사의 든든한 동반자가 될 것을 약속드립니다.
            </p>
            <p className="pt-4 font-bold text-brand-black">삼원기업 임직원 일동</p>
          </div>
        </motion.div>
        
        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           className="relative"
        >
          <img src="https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?auto=format&fit=crop&q=80&w=800" className="rounded-2xl shadow-2xl" referrerPolicy="no-referrer" />
          <div className="absolute -top-6 -left-6 w-32 h-32 border-l-8 border-t-8 border-brand-red opacity-20" />
          <div className="absolute -bottom-6 -right-6 w-32 h-32 border-r-8 border-b-8 border-brand-red opacity-20" />
        </motion.div>
      </div>
    </div>
  );
}

function Vision() {
  return (
    <div className="py-24 bg-brand-soft">
      <div className="container mx-auto px-4">
         <SectionTitle title="비전 및 핵심 가치" subtitle="삼원기업이 나아가는 방향과 최우선으로 생각하는 핵심 가치입니다." />
         
         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {[
              { icon: Target, title: "Precision", desc: "정확한 데이터 분석을 통한 타겟팅 최적화", color: "bg-red-500" },
              { icon: Eye, title: "Impact", desc: "몰입도 높은 광고 경험과 브랜드 인지도 강화", color: "bg-brand-black" },
              { icon: ShieldCheck, title: "Integrity", desc: "품질과 서비스에 대한 흔들림 없는 정직함", color: "bg-red-700" },
            ].map((item, idx) => (
              <motion.div
                 key={item.title}
                 initial={{ opacity: 0, y: 30 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: idx * 0.2 }}
                 className="bg-white p-12 rounded-3xl text-center shadow-xl hover:shadow-2xl transition-all"
              >
                 <div className={`w-20 h-20 ${item.color} text-white rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-lg`}>
                    <item.icon size={36} />
                 </div>
                 <h4 className="text-2xl font-bold text-brand-black mb-4">{item.title}</h4>
                 <p className="text-brand-muted leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
         </div>

         <div className="mt-24 p-16 bg-brand-red rounded-3xl text-center text-white shadow-2xl">
            <h3 className="text-3xl md:text-5xl font-black mb-6">VISION 2030</h3>
            <p className="text-xl md:text-2xl font-light opacity-80">
              "기술과 가치를 연결하는 No.1 스마트 마케팅 솔루션 플랫폼"
            </p>
         </div>
      </div>
    </div>
  );
}

function Location() {
  return (
    <div className="py-24 container mx-auto px-4">
      <SectionTitle title="오시는 길" subtitle="언제든 편하게 방문해 주세요. 삼원기업은 여러분을 기다리고 있습니다." />
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mt-16">
         <div className="lg:col-span-2 rounded-3xl overflow-hidden shadow-2xl border border-brand-border h-[500px] bg-brand-soft flex items-center justify-center relative">
            <div className="text-center p-8">
               <MapPin size={64} className="text-brand-red mx-auto mb-4 opacity-20" />
               <p className="text-brand-muted">Google Maps API (Placeholder)</p>
               <p className="text-sm opacity-50 mt-2">API key required to render live map</p>
            </div>
            {/* Map Overlay Info */}
            <div className="absolute bottom-6 left-6 bg-white p-6 rounded-2xl shadow-xl border border-brand-border max-w-sm hidden sm:block">
               <h4 className="font-bold text-brand-black mb-2">Samwon Enterprise HQ</h4>
               <p className="text-sm text-brand-muted">서울특별시 서초구 서초대로 397 서초빌딩 12층</p>
            </div>
         </div>

         <div className="space-y-8">
            <div className="p-8 bg-brand-soft rounded-3xl border border-brand-border h-full">
              <h4 className="text-2xl font-bold text-brand-black mb-8 pb-4 border-b border-brand-border inline-block">Contact Info</h4>
              <ul className="space-y-8">
                <li className="flex gap-4">
                   <div className="w-12 h-12 bg-white rounded-xl shadow-md flex items-center justify-center text-brand-red flex-shrink-0">
                      <MapPin size={24} />
                   </div>
                   <div>
                      <p className="font-bold text-brand-black mb-1 text-lg">주소</p>
                      <p className="text-brand-muted leading-relaxed">서울특별시 서초구 서초대로 397 (서초동, 서초빌딩) 12층 1205호</p>
                   </div>
                </li>
                <li className="flex gap-4">
                   <div className="w-12 h-12 bg-white rounded-xl shadow-md flex items-center justify-center text-brand-red flex-shrink-0">
                      <Target size={24} />
                   </div>
                   <div>
                      <p className="font-bold text-brand-black mb-1 text-lg">고객센터</p>
                      <p className="text-brand-muted">02-1234-5678</p>
                      <p className="text-sm opacity-60">월~금 09:00 - 18:00</p>
                   </div>
                </li>
                <li className="flex gap-4">
                   <div className="w-12 h-12 bg-white rounded-xl shadow-md flex items-center justify-center text-brand-red flex-shrink-0">
                      <ShieldCheck size={24} />
                   </div>
                   <div>
                      <p className="font-bold text-brand-black mb-1 text-lg">팩스</p>
                      <p className="text-brand-muted">02-1234-5679</p>
                   </div>
                </li>
              </ul>
            </div>
         </div>
      </div>
    </div>
  );
}
