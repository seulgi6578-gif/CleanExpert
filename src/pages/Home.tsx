import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, Trophy, Users, Zap } from "lucide-react";
import { ROUTES } from "../constants";
import { BUSINESS_DATA, PORTFOLIO_DATA, NEWS_DATA } from "../mockData";
import SectionTitle from "../components/SectionTitle";
import { cn } from "../lib/utils";

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* 1. Hero Section */}
      <section className="relative h-[600px] flex items-center overflow-hidden bg-brand-black mt-16">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1577733966973-d680babb25f4?auto=format&fit=crop&q=80&w=1920')` }}
        />
        <div className="absolute inset-0 bg-brand-black/70" />
        
        {/* Design Theme Accent */}
        <div className="absolute right-0 top-0 w-1/3 h-full bg-brand-red opacity-10 skew-x-[-12deg] translate-x-32 hidden lg:block"></div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <p className="text-brand-red font-bold tracking-[0.2em] mb-4 uppercase">Since 1980</p>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight tracking-tighter">
              도시와 브랜드를 연결하는<br />광고 솔루션, <span className="text-brand-red">삼원기업</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-10 font-normal leading-relaxed max-w-xl">
              옥외광고와 온라인 마케팅, 전문성과 업력을 바탕으로 한 최적의 맞춤 제안을 경험하세요.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to={ROUTES.BUSINESS.MAIN}
                className="px-8 py-4 border border-white text-white font-bold hover:bg-white hover:text-brand-black transition-all rounded-none"
              >
                사업영역 보기
              </Link>
              <Link
                to={ROUTES.INQUIRY}
                className="px-8 py-4 bg-brand-red text-white font-bold hover:bg-red-800 transition-all rounded-none"
              >
                문의 바로가기
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. Trust Section (Since 1980) */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square bg-brand-soft rounded-2xl overflow-hidden shadow-2xl">
                 <img 
                  src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=800" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 hover:scale-110"
                  alt="Office"
                  referrerPolicy="no-referrer"
                 />
              </div>
              <div className="absolute -bottom-10 -right-10 bg-brand-red text-white p-12 rounded-2xl shadow-2xl hidden md:block">
                <p className="text-sm font-bold tracking-widest opacity-80 mb-2 uppercase">Establishment</p>
                <h3 className="text-6xl font-black">1980</h3>
              </div>
            </motion.div>
            
            <div>
              <SectionTitle 
                title="40여 년간 지켜온 광고의 가치" 
                subtitle="삼원기업은 변하지 않는 신뢰를 바탕으로 변화하는 미디어 환경에 발맞춰 왔습니다."
                align="left"
              />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-12">
                {[
                  { icon: Trophy, title: "업계 최고 수준 전문성", desc: "40년 이상의 실무 경험과 성공 사례" },
                  { icon: Zap, title: "신속한 매체 집행력", desc: "전국 주요 거점 직영 및 파트너 보유" },
                  { icon: Users, title: "맞춤형 제안 시스템", desc: "빅데이터 기반 정밀한 타겟팅 분석" },
                  { icon: CheckCircle2, title: "철저한 유지보수", desc: "전문 사후 관리팀 운영을 통한 퀄리티 보장" },
                ].map((item, idx) => (
                  <motion.div 
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex gap-4"
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-brand-red/10 flex items-center justify-center text-brand-red">
                      <item.icon size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-brand-black mb-1">{item.title}</h4>
                      <p className="text-brand-muted text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Business Section */}
      <section className="py-24 bg-brand-soft">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="저희의 주요 사업을 소개합니다" 
            subtitle="삼원기업은 오프라인과 온라인을 아우르는 하이브리드 광고 전략을 선도합니다."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {BUSINESS_DATA.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group bg-white border border-brand-border flex flex-col md:flex-row lg:flex-col lg:items-start p-6 gap-6 cursor-pointer hover:shadow-xl transition-shadow"
              >
                <div className="w-16 h-16 bg-brand-soft flex items-center justify-center shrink-0 group-hover:bg-brand-red group-hover:text-white transition-colors">
                  <item.icon size={32} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-brand-black mb-2">{item.title}</h3>
                  <p className="text-brand-muted text-sm leading-relaxed mb-4">{item.description}</p>
                  <Link 
                    to={item.href}
                    className="text-xs font-bold text-brand-red uppercase tracking-wider flex items-center gap-1"
                  >
                    View Project <ArrowRight size={14} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Portfolio Preview */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-xl">
               <SectionTitle align="left" title="성공적인 캠페인 실적" subtitle="수많은 파트너사들과 함께 만들어낸 성과들을 확인하세요." />
            </div>
            <Link to={ROUTES.PORTFOLIO} className="bg-brand-black text-white px-8 py-3 rounded-full font-bold hover:bg-brand-red transition-all mb-4">
              전체 포트폴리오
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {PORTFOLIO_DATA.slice(0, 4).map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group relative h-[300px] overflow-hidden bg-brand-soft border border-brand-border"
              >
                <img src={item.thumbnail} alt={item.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-brand-red/90 opacity-0 group-hover:opacity-100 flex flex-col justify-center items-center text-white p-6 transition-opacity duration-300">
                  <span className="text-xs uppercase tracking-widest mb-2 opacity-80">{item.category}</span>
                  <p className="font-bold text-center text-lg mb-4">{item.title}</p>
                  <div className="w-10 h-px bg-white/40" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CTABanner */}
      <section className="relative py-32 bg-brand-red overflow-hidden">
        {/* Background Accents */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 skew-x-[-20deg] translate-x-1/2" />
        <div className="container mx-auto px-4 relative z-10 text-center">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-8 tracking-tight">
              광고가 필요할 때,<br className="md:hidden" /> 가장 먼저 떠오르는 파트너
            </h2>
            <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto font-light">
              지금 삼원기업의 전문가들과 상담하고, 귀사의 최적화된 마케팅 전략을 구축하세요.
            </p>
            <Link
                to={ROUTES.INQUIRY}
                className="inline-block bg-white text-brand-red px-12 py-5 rounded-full font-black text-xl hover:bg-brand-black hover:text-white transition-all shadow-2xl shadow-black/20"
            >
              지금 바로 문의하기
            </Link>
        </div>
      </section>

      {/* 6. News Preview */}
      <section className="py-24 bg-brand-soft">
         <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Notice */}
              <div>
                <div className="flex justify-between items-center mb-8 pb-4 border-b border-brand-border">
                   <h3 className="text-2xl font-bold text-brand-black">공지사항</h3>
                   <Link to={ROUTES.NEWS.NOTICE} className="text-sm font-bold text-brand-muted hover:text-brand-red">전체보기 +</Link>
                </div>
                <div className="space-y-6">
                  {NEWS_DATA.filter(n => n.category === "notice").map(item => (
                    <Link key={item.id} to={ROUTES.NEWS.NOTICE} className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 group">
                       <span className="text-brand-black font-medium group-hover:text-brand-red transition-colors line-clamp-1">{item.title}</span>
                       <span className="text-sm text-brand-muted whitespace-nowrap">{item.date}</span>
                    </Link>
                  ))}
                </div>
              </div>

               {/* Materials */}
               <div>
                <div className="flex justify-between items-center mb-8 pb-4 border-b border-brand-border">
                   <h3 className="text-2xl font-bold text-brand-black">자료실</h3>
                   <Link to={ROUTES.NEWS.MATERIALS} className="text-sm font-bold text-brand-muted hover:text-brand-red">전체보기 +</Link>
                </div>
                <div className="space-y-6">
                  {NEWS_DATA.filter(n => n.category === "material").map(item => (
                    <Link key={item.id} to={ROUTES.NEWS.MATERIALS} className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 group">
                       <span className="text-brand-black font-medium group-hover:text-brand-red transition-colors line-clamp-1">{item.title}</span>
                       <span className="text-sm text-brand-muted whitespace-nowrap">{item.date}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
         </div>
      </section>
    </div>
  );
}
