import { ReactNode } from "react";
import { motion } from "motion/react";
import { cn } from "../lib/utils";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  light?: boolean;
}

export default function SectionTitle({ title, subtitle, align = "center", light = false }: SectionTitleProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className={cn(
        "mb-10",
        align === "center" ? "text-center flex flex-col items-center" : "text-left border-l-4 border-brand-red pl-4"
      )}
    >
      {align === "center" && <div className="w-12 h-1 bg-brand-red mb-6" />}
      <h2 className={cn(
        "text-2xl md:text-3xl font-extrabold tracking-tight mb-4 uppercase",
        light ? "text-white" : "text-brand-black"
      )}>
        {title}
      </h2>
      {subtitle && (
        <p className={cn(
          "text-base max-w-2xl leading-relaxed",
          light ? "text-white/70" : "text-brand-muted"
        )}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
