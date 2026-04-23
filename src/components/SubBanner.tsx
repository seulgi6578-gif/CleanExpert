import { motion } from "motion/react";
import { cn } from "../lib/utils";

interface SubBannerProps {
  title: string;
  subtitle?: string;
  bgImage?: string;
}

export default function SubBanner({ 
  title, 
  subtitle, 
  bgImage = "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1600" 
}: SubBannerProps) {
  return (
    <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 scale-105"
        style={{ backgroundImage: `url(${bgImage})` }}
      />
      <div className="absolute inset-0 bg-brand-black/60" />

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight">
            {title}
          </h1>
          {subtitle && (
            <p className="text-white/80 text-lg md:text-xl font-light tracking-wide">
              {subtitle}
            </p>
          )}
          
          {/* Breadcrumbs Placeholder */}
          <div className="mt-8 flex items-center justify-center gap-2 text-white/50 text-sm font-medium uppercase tracking-widest">
            <span>Home</span>
            <span className="w-1 h-1 rounded-full bg-brand-red" />
            <span className="text-white/80">{title}</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
