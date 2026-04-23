import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ChevronDown, PhoneCall } from "lucide-react";
import { BRAND, ROUTES } from "../constants";
import { NAV_ITEMS } from "../mockData";
import { cn } from "../lib/utils";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSubMenu, setActiveSubMenu] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b",
        isScrolled ? "bg-white shadow-sm py-3 border-brand-border" : "bg-white/95 py-4 border-white/10"
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-brand-red flex items-center justify-center font-bold text-white text-xl">S</div>
          <div className="flex items-baseline gap-1">
            <span className="text-xl font-extrabold text-brand-black tracking-tight leading-none uppercase">
              {BRAND.name}
            </span>
            <span className="text-[10px] font-normal tracking-widest text-brand-muted leading-none uppercase ml-1">
              {BRAND.nameEn}
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <div
              key={item.label}
              className="relative group"
              onMouseEnter={() => setActiveSubMenu(item.label)}
              onMouseLeave={() => setActiveSubMenu(null)}
            >
              <Link
                to={item.href}
                className={cn(
                  "flex items-center gap-1 font-semibold transition-colors py-2 text-sm",
                  item.href === location.pathname ? "text-brand-red" : "text-brand-black hover:text-brand-red"
                )}
              >
                {item.label}
                {item.children && <ChevronDown size={14} className="opacity-60" />}
              </Link>

              {/* Submenu */}
              {item.children && (
                <AnimatePresence>
                  {activeSubMenu === item.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-full left-0 w-48 bg-white shadow-xl rounded-md overflow-hidden border border-brand-border"
                    >
                      {item.children.map((child) => (
                        <Link
                          key={child.label}
                          to={child.href}
                          className="block px-5 py-3 text-sm text-brand-black hover:bg-brand-red hover:text-white transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              )}
            </div>
          ))}
        </nav>

        {/* Desktop Right */}
        <div className="hidden lg:flex items-center gap-4">
          <Link
            to={ROUTES.INQUIRY}
            className="bg-brand-red text-white px-5 py-2.5 rounded-sm text-sm font-semibold hover:bg-red-800 transition-all active:scale-95"
          >
            상담 신청하기
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className={cn("lg:hidden p-2", isScrolled ? "text-brand-black" : "text-white")}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-brand-border overflow-hidden absolute top-full left-0 w-full shadow-2xl"
          >
            <nav className="flex flex-col p-4 max-h-[80vh] overflow-y-auto">
              {NAV_ITEMS.map((item) => (
                <div key={item.label} className="py-2">
                  <div className="flex items-center justify-between py-2 font-bold text-lg text-brand-black">
                    <Link to={item.href}>{item.label}</Link>
                    {item.children && <ChevronDown size={18} />}
                  </div>
                  {item.children && (
                    <div className="pl-4 mt-2 space-y-3 border-l-2 border-brand-border">
                      {item.children.map((child) => (
                        <Link
                          key={child.label}
                          to={child.href}
                          className="block text-brand-muted hover:text-brand-red transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <Link
                to={ROUTES.INQUIRY}
                className="mt-6 w-full bg-brand-red text-white py-4 rounded-xl flex items-center justify-center gap-3 font-bold text-lg"
              >
                <PhoneCall size={20} />
                상담문의 신청하기
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
