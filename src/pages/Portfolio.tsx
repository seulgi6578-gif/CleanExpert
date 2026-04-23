import { useState } from "react";
import SubBanner from "../components/SubBanner";
import SectionTitle from "../components/SectionTitle";
import { PORTFOLIO_DATA } from "../mockData";
import { motion, AnimatePresence } from "motion/react";
import { Search } from "lucide-react";

export default function Portfolio() {
  const [filter, setFilter] = useState("전체");
  
  const categories = ["전체", "시민 게시판", "디지털 게시판", "온라인 마케팅"];
  
  const filteredData = filter === "전체" 
    ? PORTFOLIO_DATA 
    : PORTFOLIO_DATA.filter(item => item.category === filter);

  return (
    <div className="pb-24">
      <SubBanner 
        title="포트폴리오" 
        subtitle="삼원기업만이 가능한 독창적이고 효과적인 광고 캠페인 사례입니다." 
        bgImage="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1600"
      />
      
      <div className="container mx-auto px-4 mt-20">
        <SectionTitle title="공공과 민간을 아우르는 성공 사례" subtitle="다양한 산업군의 클라이언트와 협업하여 최상의 마케팅 결과를 창출합니다." />
        
        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-16">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2.5 rounded-none font-bold transition-all border text-sm ${
                filter === cat 
                  ? "bg-brand-red text-white border-brand-red shadow-md" 
                  : "bg-white text-brand-muted border-brand-border hover:border-brand-red hover:text-brand-red"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <motion.div 
           layout
           className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredData.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group cursor-pointer bg-white rounded-3xl overflow-hidden border border-brand-border shadow-md hover:shadow-2xl transition-all"
              >
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img src={item.thumbnail} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 bg-brand-red/90 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                     <Search size={32} className="text-white" />
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-3 py-1 bg-brand-red/10 text-brand-red text-[10px] font-bold uppercase tracking-wider rounded-md">
                      {item.category}
                    </span>
                    <span className="text-xs text-brand-muted">{item.date}</span>
                  </div>
                  <h4 className="text-xl font-bold text-brand-black group-hover:text-brand-red transition-colors mb-2">{item.title}</h4>
                  <p className="text-sm text-brand-muted font-medium">{item.client}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Stats Counter Placement */}
      <div className="container mx-auto px-4 mt-24 py-12 bg-brand-black text-white">
         <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-white/5">
            <div>
               <p className="text-4xl md:text-5xl font-black mb-2 text-brand-red">40+</p>
               <p className="text-sm text-white/50 tracking-widest font-bold">오랜 역사(년)</p>
            </div>
            <div>
               <p className="text-4xl md:text-5xl font-black mb-2 text-brand-red">15,000+</p>
               <p className="text-sm text-white/50 tracking-widest font-bold">집행 구좌수</p>
            </div>
            <div>
               <p className="text-4xl md:text-5xl font-black mb-2 text-brand-red">3,200+</p>
               <p className="text-sm text-white/50 tracking-widest font-bold">파트너사</p>
            </div>
            <div>
               <p className="text-4xl md:text-5xl font-black mb-2 text-brand-red">98%</p>
               <p className="text-sm text-white/50 tracking-widest font-bold">재계약률</p>
            </div>
         </div>
      </div>
    </div>
  );
}
