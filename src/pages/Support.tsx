import SubBanner from "../components/SubBanner";
import SectionTitle from "../components/SectionTitle";
import { Download, FileCheck, HelpCircle } from "lucide-react";
import { motion } from "motion/react";

export default function Support() {
  const documents = [
    { title: "삼원기업 회사소개서 (PDF/2024)", size: "4.5MB" },
    { title: "시민 게시판 광고 가이드 및 규격", size: "1.2MB" },
    { title: "디지털 샤이니지 영상 제작 가이드", size: "2.8MB" },
    { title: "마케팅 파트너십 협력 신청서", size: "0.8MB" },
  ];

  return (
    <div className="pb-24">
      <SubBanner 
        title="업무지원" 
        subtitle="삼원기업과 함께하는 파트너들을 위한 실무 지원 창구입니다." 
        bgImage="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80&w=1600"
      />
      
      <div className="container mx-auto px-4 mt-20">
        <SectionTitle title="Partner Support Center" subtitle="원활한 업무 진행을 위한 필요 양식과 가이드를 다운로드 하실 수 있습니다." />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-16 text-left">
           {/* Download List */}
           <div className="space-y-6">
              <h3 className="text-2xl font-bold text-brand-black mb-8 flex items-center gap-3">
                 <Download className="text-brand-red" />
                 표준 문서 다운로드
              </h3>
              <div className="space-y-3">
                 {documents.map((doc, idx) => (
                    <motion.div 
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className="flex items-center justify-between p-6 bg-brand-soft border border-brand-border rounded-2xl hover:bg-white hover:border-brand-red transition-all cursor-pointer group"
                    >
                       <div className="flex items-center gap-4">
                          <FileCheck className="text-brand-muted group-hover:text-brand-red" />
                          <div>
                             <p className="font-bold text-brand-black">{doc.title}</p>
                             <p className="text-xs text-brand-muted">{doc.size}</p>
                          </div>
                       </div>
                       <button className="text-brand-red font-bold text-sm underline-offset-4 hover:underline">Download</button>
                    </motion.div>
                 ))}
              </div>
           </div>

           {/* Help Section */}
           <div className="bg-brand-black text-white p-12 rounded-3xl shadow-2xl self-start">
              <HelpCircle size={48} className="text-brand-red mb-6" />
              <h3 className="text-3xl font-black mb-6 tracking-tight">도움이 필요하신가요?</h3>
              <p className="text-white/60 mb-10 leading-relaxed">
                 자료를 찾을 수 없거나 시스템 이용에 어려움이 있는 경우, 담당 부서로 연락주시면 신속히 해결해 드리겠습니다.
              </p>
              <div className="space-y-4 mb-10">
                 <div className="flex justify-between border-b border-white/10 pb-4">
                    <span className="text-white/40">업무 지원팀</span>
                    <span className="font-bold tracking-wider">02-1234-5680</span>
                 </div>
                 <div className="flex justify-between border-b border-white/10 pb-4">
                    <span className="text-white/40">전략 기획팀</span>
                    <span className="font-bold tracking-wider">02-1234-5681</span>
                 </div>
              </div>
              <button className="w-full bg-brand-red text-white py-4 rounded-xl font-bold hover:bg-white hover:text-brand-black transition-all">
                 실시간 업무 협동 요청하기
              </button>
           </div>
        </div>
      </div>
    </div>
  );
}
