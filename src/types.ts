import { LucideIcon } from "lucide-react";

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export interface BusinessItem {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  href: string;
  image: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  client: string;
  thumbnail: string;
  date: string;
}

export interface NewsItem {
  id: string;
  title: string;
  date: string;
  category: "notice" | "material";
}
