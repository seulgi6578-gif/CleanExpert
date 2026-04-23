import { useState, FormEvent } from "react";
import SubBanner from "../components/SubBanner";
import SectionTitle from "../components/SectionTitle";
import { Send, Phone, MessageSquare, Clock } from "lucide-react";
import { motion } from "motion/react";

export default function Inquiry() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    category: "outdoor",
    message: ""
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    alert("상담 신청이 접수되었습니다. 빠른 시일 내에 연락드리겠습니다.");
    console.log(formData);
  };

  const faqs = [
    { q: "광고 매체 선정이 처음인데 어떻게 진행되나요?", a: "전화나 메일을 통해 1차 상담을 진행하신 후, 브랜드 성격과 타겟 고객층에 맞는 최적의 매체 제안서를 전달해 드립니다." },
    { q: "광고 집행 기간은 최소 얼마인가요?", a: "시민 게시판의 경우 보통 1개월 단위, 온라인 마케팅은 전략에 따라 상이하지만 기본적으로 3개월 이상의 장기 플랜을 권장합니다." },
    { q: "정확한 견적은 언제 확인할 수 있나요?", a: "희망 구좌(위치)와 기간, 노출 빈도에 따라 단가가 결정됩니다. 상담 신청을 남겨주시면 24시간 이내에 가용 구좌와 견적을 안내해 드립니다." },
  ];

  return (
    <div>
      <SubBanner 
        title="문의 및 상담" 
        subtitle="귀사의 성공적인 파트너가 되겠습니다. 상세 내용을 남겨주세요." 
        bgImage="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=1600"
      />
      
      <div className="py-24 container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          
          {/* Inquiry Form */}
          <div className="lg:col-span-2">
            <motion.div
               initial={{ opacity: 0, y: 10 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="bg-white p-8 md:p-12 border border-brand-border"
            >
              <h3 className="text-2xl font-bold text-brand-black mb-8 border-l-4 border-brand-red pl-4 uppercase">상담 신청서 작성</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-brand-muted uppercase tracking-wider">성함</label>
                    <input 
                      required
                      type="text" 
                      placeholder="홍길동"
                      className="w-full px-4 py-3 bg-brand-soft border border-brand-border rounded-none focus:border-brand-red outline-none transition-all"
                      value={formData.name}
                      onChange={e => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-brand-muted uppercase tracking-wider">회사/단체명</label>
                    <input 
                      required
                      type="text" 
                      placeholder="(주)삼원기업"
                      className="w-full px-4 py-3 bg-brand-soft border border-brand-border rounded-none focus:border-brand-red outline-none transition-all"
                      value={formData.company}
                      onChange={e => setFormData({...formData, company: e.target.value})}
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-brand-muted uppercase tracking-wider">연락처</label>
                    <input 
                      required
                      type="tel" 
                      placeholder="010-0000-0000"
                      className="w-full px-4 py-3 bg-brand-soft border border-brand-border rounded-none focus:border-brand-red outline-none transition-all"
                      value={formData.phone}
                      onChange={e => setFormData({...formData, phone: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-brand-muted uppercase tracking-wider">이메일</label>
                    <input 
                      required
                      type="email" 
                      placeholder="sample@domain.com"
                      className="w-full px-4 py-3 bg-brand-soft border border-brand-border rounded-none focus:border-brand-red outline-none transition-all"
                      value={formData.email}
                      onChange={e => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-brand-muted uppercase tracking-wider">관심 사업분야</label>
                  <select 
                    className="w-full px-4 py-3 bg-brand-soft border border-brand-border rounded-none focus:border-brand-red outline-none transition-all"
                    value={formData.category}
                    onChange={e => setFormData({...formData, category: e.target.value})}
                  >
                    <option value="outdoor">옥외광고 (시민/디지털 게시판)</option>
                    <option value="online">온라인 마케팅</option>
                    <option value="report">종합 광고 컨설팅</option>
                    <option value="other">기타 문의</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-brand-muted uppercase tracking-wider">문의내용</label>
                  <textarea 
                    rows={6}
                    placeholder="광고 목적 및 예산 규모 등 구체적인 내용을 남겨주시면 더욱 정확한 상담이 가능합니다."
                    className="w-full px-4 py-3 bg-brand-soft border border-brand-border rounded-none focus:border-brand-red outline-none transition-all resize-none"
                    value={formData.message}
                    onChange={e => setFormData({...formData, message: e.target.value})}
                  />
                </div>

                <button 
                  type="submit"
                  className="w-full bg-brand-red text-white py-4 rounded-none font-bold text-lg hover:bg-brand-black transition-all flex items-center justify-center gap-3"
                >
                  <Send size={20} />
                  상담 신청하기
                </button>
              </form>
            </motion.div>
          </div>

          {/* FAQ & Contact Cards */}
          <div className="space-y-12">
            <div>
               <h3 className="text-2xl font-bold text-brand-black mb-8 flex items-center gap-2">
                  <MessageSquare size={28} className="text-brand-red" />
                  자주 묻는 질문
               </h3>
               <div className="space-y-4">
                  {faqs.map((faq, idx) => (
                    <motion.div 
                      key={idx}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      className="p-6 bg-brand-soft rounded-2xl border border-brand-border"
                    >
                      <p className="font-bold text-brand-black mb-2">Q. {faq.q}</p>
                      <p className="text-sm text-brand-muted">{faq.a}</p>
                    </motion.div>
                  ))}
               </div>
            </div>

            <div className="p-10 bg-brand-black text-white rounded-3xl shadow-2xl relative overflow-hidden">
               <div className="absolute top-0 right-0 w-32 h-32 bg-brand-red/20 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl" />
               <h4 className="text-xl font-bold mb-8">Direct Contact</h4>
               <ul className="space-y-8">
                  <li className="flex gap-4">
                     <Phone className="text-brand-red" />
                     <div>
                        <p className="text-white/60 text-xs uppercase tracking-widest mb-1">Office Number</p>
                        <p className="text-xl font-bold">02-1234-5678</p>
                     </div>
                  </li>
                  <li className="flex gap-4">
                     <Clock className="text-brand-red" />
                     <div>
                        <p className="text-white/60 text-xs uppercase tracking-widest mb-1">Operating Hours</p>
                        <p className="font-bold">Mon - Fri : 09:00 - 18:00</p>
                        <p className="text-sm text-white/40">Lunch : 12:00 - 13:00</p>
                     </div>
                  </li>
               </ul>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
