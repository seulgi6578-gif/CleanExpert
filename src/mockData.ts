import { NavItem, BusinessItem, PortfolioItem, NewsItem } from "./types";
import { ROUTES } from "./constants";
import { Monitor, Newspaper, Globe } from "lucide-react";

export const NAV_ITEMS: NavItem[] = [
  {
    label: "회사소개",
    href: ROUTES.ABOUT.MAIN,
    children: [
      { label: "인사말", href: ROUTES.ABOUT.GREETING },
      { label: "비전 및 가치", href: ROUTES.ABOUT.VISION },
      { label: "오시는길", href: ROUTES.ABOUT.LOCATION },
    ]
  },
  {
    label: "사업영역",
    href: ROUTES.BUSINESS.MAIN,
    children: [
      { label: "시민 게시판", href: ROUTES.BUSINESS.CITIZEN_BOARD },
      { label: "디지털 게시판", href: ROUTES.BUSINESS.DIGITAL_BOARD },
      { label: "온라인 마케팅", href: ROUTES.BUSINESS.ONLINE_MARKETING },
    ]
  },
  { label: "포트폴리오", href: ROUTES.PORTFOLIO },
  {
    label: "소식 및 자료",
    href: ROUTES.NEWS.MAIN,
    children: [
      { label: "공지사항", href: ROUTES.NEWS.NOTICE },
      { label: "마케팅 자료실", href: ROUTES.NEWS.MATERIALS },
    ]
  },
  { label: "문의 및 상담", href: ROUTES.INQUIRY },
  { label: "업무지원", href: ROUTES.SUPPORT },
];

export const BUSINESS_DATA: BusinessItem[] = [
  {
    id: "citizen",
    title: "시민 게시판",
    description: "도시 곳곳 시민들의 시선이 머무는 공익 게시판 광고 솔루션",
    icon: Newspaper,
    href: ROUTES.BUSINESS.CITIZEN_BOARD,
    image: "https://images.unsplash.com/photo-1542744094-24638eff58bb?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "digital",
    title: "디지털 게시판",
    description: "고해상도 디스플레이를 통한 효율적인 브랜드 노출과 메시지 전달",
    icon: Monitor,
    href: ROUTES.BUSINESS.DIGITAL_BOARD,
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "online",
    title: "온라인 마케팅",
    description: "데이터 기반 타겟팅 기술로 극대화된 통합 온라인 광고 마케팅",
    icon: Globe,
    href: ROUTES.BUSINESS.ONLINE_MARKETING,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
  }
];

export const PORTFOLIO_DATA: PortfolioItem[] = [
  {
    id: "1",
    title: "2024 서울시 공익 캠페인",
    category: "시민 게시판",
    client: "서울특별시",
    thumbnail: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=600",
    date: "2024.03"
  },
  {
    id: "2",
    title: "글로벌 IT 브랜드 런칭 캠페인",
    category: "온라인 마케팅",
    client: "Tech Brand X",
    thumbnail: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=600",
    date: "2024.02"
  },
  {
    id: "3",
    title: "강남대로 디지털 샤이니지 광고",
    category: "디지털 게시판",
    client: "Luxury Watch Co.",
    thumbnail: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=600",
    date: "2024.01"
  },
  {
    id: "4",
    title: "친환경 제품 프로모션",
    category: "온라인 마케팅",
    client: "Eco Life",
    thumbnail: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=600",
    date: "2023.12"
  }
];

export const NEWS_DATA: NewsItem[] = [
  { id: "1", title: "삼원기업 홈페이지 리뉴얼 안내", date: "2024.04.10", category: "notice" },
  { id: "2", title: "2024 상반기 신규 광고 지점 확대 소식", date: "2024.03.25", category: "notice" },
  { id: "3", title: "[자료] 옥외광고 효과 측정 가이드라인", date: "2024.04.15", category: "material" },
  { id: "4", title: "[리포트] 2024 디지털 마케팅 트렌드 분석", date: "2024.04.05", category: "material" },
];
