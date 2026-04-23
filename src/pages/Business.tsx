import SubBanner from "../components/SubBanner";
import SectionTitle from "../components/SectionTitle";
import { BUSINESS_DATA } from "../mockData";
import { motion } from "motion/react";
import { CheckCircle2, ArrowRight } from "lucide-react";

export default function Business() {
  return (
    <div className="pb-24">
      <SubBanner 
        title="사업영역" 
        subtitle="옥외부터 온라인까지, 브랜드 영향력을 극대화하는 멀티 채널 솔루션" 
        bgImage="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1600"
      />
      
      <div className="container mx-auto px-4 pt-20">
        <SectionTitle title="Integrated Marketing Service" subtitle="삼원기업은 매체의 특성을 정확히 이해하고 최적의 조합을 찾아냅니다." />
        
        <div className="mt-12 space-y-32">
          {BUSINESS_DATA.map((item, idx) => (
            <div 
              key={item.id}
              className={`flex flex-col lg:items-center gap-16 ${idx % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}
            >
              <motion.div 
                initial={{ opacity: 0, x: idx % 2 === 1 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex-1"
              >
                <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl">
                   <img src={item.image} alt={item.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                   <div className="absolute inset-0 bg-gradient-to-tr from-brand-red/20 to-transparent" />
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: idx % 2 === 1 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex-1 space-y-8"
              >
                <div className="inline-flex items-center gap-3 text-brand-red font-bold text-xl uppercase tracking-widest">
                  <item.icon size={32} />
                  <span>Business {idx + 1}</span>
                </div>
                <h3 className="text-4xl md:text-5xl font-black text-brand-black">{item.title}</h3>
                <p className="text-xl text-brand-muted leading-relaxed">
                  {item.description} 뿐만 아니라, 고객사의 니즈에 맞춘 세부적인 매체 기획과 사후 분석을 통해 광고 효과를 입증합니다.
                </p>
                
                <ul className="space-y-4">
                  {["차별화된 전략 기획", "고도화된 효과 분석 리포트", "실시간 광고 물량 제어", "유동인구 데이터 기반 매체 제안"].map(feature => (
                    <li key={feature} className="flex items-center gap-3 font-bold text-brand-black">
                      <CheckCircle2 className="text-brand-red" size={24} />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <div className="pt-4">
                  <button className="group flex items-center gap-4 text-brand-black font-black text-lg hover:text-brand-red transition-all">
                    자세한 프로세스 알아보기
                    <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                  </button>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>

      {/* Global Reach / Map Section */}
      <div className="mt-32 bg-brand-soft py-24">
         <div className="container mx-auto px-4 text-center">
            <h3 className="text-3xl md:text-4xl font-bold text-brand-black mb-8">전국 네트워크 기반의 집행 역량</h3>
            <p className="text-lg text-brand-muted mb-12 max-w-3xl mx-auto">
              서울 수도권부터 제주까지 전국 주요 도심의 핵심 거점에 당사만의 네트워크를 보유하고 있습니다.
            </p>
            <div className="aspect-[21/9] bg-white rounded-3xl shadow-inner border border-brand-border flex items-center justify-center">
               <p className="text-brand-muted opacity-40 font-bold uppercase tracking-[1em]">National Map Coverage (UI Placeholder)</p>
            </div>
         </div>
      </div>
    </div>
  );
}
