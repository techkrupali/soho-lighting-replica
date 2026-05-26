import { ChevronLeft, ChevronRight, Search, User, ShoppingCart, Menu, ArrowRight, Zap, Factory, Award, Globe, Wrench, Leaf, Mail, MapPin, Twitter, Instagram, Linkedin, Send, Phone, ChevronDown } from "lucide-react";
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useMotionValue, useTransform, useSpring } from "framer-motion";
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const GlobalStyles = () => (
  <style dangerouslySetInnerHTML={{ __html: `
    @keyframes slideInRight { from { transform: translateX(100%); opacity: 0; } to { transform: translateX(0); opacity: 1; } }
    @keyframes slideInLeft  { from { transform: translateX(-100%); opacity: 0; } to { transform: translateX(0); opacity: 1; } }
    @keyframes slideOutRight { from { transform: translateX(0); opacity: 1; } to { transform: translateX(100%); opacity: 0; } }
    @keyframes slideOutLeft  { from { transform: translateX(0); opacity: 1; } to { transform: translateX(-100%); opacity: 0; } }
    @keyframes fadeSlideIn { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
    @keyframes float { 
      0%, 100% { transform: translate(0, 0) rotate(15deg); }
      50% { transform: translate(-10px, -10px) rotate(10deg); }
    }
    .animate-fadeSlideIn { animation: fadeSlideIn 0.8s ease forwards; }
    
    /* Hero video full cover */
    video {
      background: transparent;
    }
    
    /* Counter card animation */
    .counter-card {
      opacity: 0;
      transform: translateY(30px) scale(0.95);
      transition: all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
    }
    .counter-card.visible {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
    .counter-card:nth-child(1).visible { transition-delay: 0s; }
    .counter-card:nth-child(2).visible { transition-delay: 0.1s; }
    .counter-card:nth-child(3).visible { transition-delay: 0.2s; }
    .counter-card:nth-child(4).visible { transition-delay: 0.3s; }

    .perspective-container {
      perspective: 2000px;
      perspective-origin: center 40%;
    }
  `}} />
);

const testimonials = [
  { name: "Ashish Kumar", role: "Ashiana Interiors", text: "", avatar: "AK", videoId: "879Pi-2lFHA" },
  { name: "Meghna Shah", role: "The Mark Decor", text: "", avatar: "MS", videoId: "Io-YXYDhuqE" },
  { name: "Neeraj Surana", role: "Ruh Fitness Studio", text: "", avatar: "NS", videoId: "lTs5tMDtIis" },
  { name: "Arihant Parakh", role: "ORBIT Group", text: "", avatar: "AP", videoId: "jWGmdVsTPK0" },
  { name: "Payal Manaksia", role: "Homemaker", text: "", avatar: "PM", videoId: "yohC4LkGKVI" },
  { name: "Vasudha Chaudhary Jalan", role: "Interior Designer", text: "", avatar: "VCJ", videoId: "Hn7WmlGaKfM" },
];

type B2BCard = { img: string; title: string; location: string; objectPosition: string };

function B2BCarousel({ cards }: { cards: B2BCard[] }) {
  return (
    <div className="relative w-full bg-white py-10" style={{ overflow: 'hidden' }}>
      <style>{`
        .b2b-swiper { padding: 40px 0 60px !important; }
        .b2b-swiper .swiper-slide { width: 72% !important; height: 550px; }
        .b2b-swiper .swiper-slide img { width: 100%; height: 100%; object-fit: cover; display: block; }
        .b2b-swiper .swiper-slide:not(.swiper-slide-active) { filter: blur(3px) brightness(0.6); transition: filter 0.5s ease; }
        .b2b-swiper .swiper-slide-active { filter: blur(0px) brightness(1); transition: filter 0.5s ease; }
        .b2b-swiper .swiper-pagination-bullet { background: #373A36; opacity: 0.2; width: 8px; height: 4px; border-radius: 9999px; transition: all 0.4s; }
        .b2b-swiper .swiper-pagination-bullet-active { background: #C9A961; opacity: 1; width: 40px; }
        .b2b-swiper .swiper-button-prev,
        .b2b-swiper .swiper-button-next { width: 40px; height: 40px; background: rgba(255,255,255,0.85); border-radius: 9999px; box-shadow: 0 4px 12px rgba(0,0,0,0.15); top: 50%; transform: translateY(-60%); }
        .b2b-swiper .swiper-button-prev::after,
        .b2b-swiper .swiper-button-next::after { font-size: 14px; color: #373A36; font-weight: 700; }
        .b2b-swiper .swiper-button-prev { left: 16px; }
        .b2b-swiper .swiper-button-next { right: 16px; }
      `}</style>
      <Swiper
        className="b2b-swiper"
        modules={[EffectCoverflow, Pagination, Navigation]}
        effect="coverflow"
        grabCursor
        centeredSlides
        slidesPerView="auto"
        loop
        coverflowEffect={{
          rotate: 40,
          stretch: 0,
          depth: 200,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{ clickable: true }}
        navigation
      >
        {cards.map((card, i) => (
          <SwiperSlide key={i}>
            <div className="relative w-full h-full overflow-hidden shadow-2xl">
              <img src={card.img} alt={card.title} style={{ objectPosition: card.objectPosition }} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
                <h3 className="text-white text-xl md:text-3xl font-serif font-light leading-tight mb-3">{card.title}</h3>
                <div className="flex items-center gap-4">
                  <div className="h-px w-12 bg-[#6B8E7F]" />
                  <p className="text-white/60 text-xs md:text-sm tracking-[0.2em] uppercase">{card.location}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}


const blogPosts = [
  { category: "TRENDS",    img: "/indorr lighting.png",                    title: "Top 5 Lighting Trends for Luxury Hospitality in 2024",          excerpt: "From warm tunable whites to architectural accent lighting — what top hotels are choosing.",          date: "Feb 28, 2024", read: "4 min read" },
  { category: "QUALITY",   img: "/The Agri Horticulture, Kolkata2.png",    title: "BIS Certification: Why It Matters for Your LED Purchase",        excerpt: "Understanding quality certifications and why BIS-certified LEDs are the only safe choice.",          date: "Feb 10, 2024", read: "3 min read" },
  { category: "INDUSTRIAL",img: "/starcementplant.png",                    title: "Industrial Lighting: High-Bay LEDs for Maximum Output",          excerpt: "A complete guide to choosing the right high-bay LED fixtures for warehouses and factories.",          date: "Jan 22, 2024", read: "6 min read" },
  { category: "TRENDS",    img: "/towerimage.png",                         title: "Smart Lighting Controls: Dimming & Automation Guide",            excerpt: "How smart dimming systems and automation can reduce energy waste and improve ambiance.",              date: "Jan 10, 2024", read: "5 min read" },
  { category: "INDUSTRIAL",img: "/Durgapur Steel Plant, West Bengal.jpeg", title: "Outdoor LED Flood Lights: Installation Tips",                   excerpt: "Everything you need to know about choosing and installing outdoor flood lights.",                    date: "Dec 18, 2023", read: "4 min read" },
  { category: "QUALITY",   img: "/Kolkata Airport.jpeg",                   title: "Energy Saving with LED: A Complete ROI Analysis",               excerpt: "Calculate your return on investment when switching from traditional lighting to LED solutions.",       date: "Dec 5, 2023",  read: "7 min read" },
];

const categoryColors: Record<string, string> = {
  TRENDS: "#6B8E7F", QUALITY: "#4A7FA5", INDUSTRIAL: "#C9A961",
};

function MagikBlog() {
  const [activeTab, setActiveTab] = useState("ALL");
  const scrollRef = useRef<HTMLDivElement>(null);
  const tabs = ["ALL", "ENERGY SAVING", "TRENDS", "QUALITY", "INDUSTRIAL"];
  const filtered = activeTab === "ALL" ? blogPosts : blogPosts.filter(p => p.category === activeTab);

  const scroll = (dir: 'left' | 'right') => {
    scrollRef.current?.scrollBy({ left: dir === 'right' ? 364 : -364, behavior: 'smooth' });
  };

  const tagColors: Record<string, string> = {
    TRENDS: "bg-[#E9D5FF] text-[#A855F7]",
    QUALITY: "bg-[#DBEAFE] text-[#3B82F6]",
    INDUSTRIAL: "bg-[#FFEDD5] text-[#F97316]",
    "ENERGY SAVING": "bg-[#DCFCE7] text-[#22C55E]"
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-8">
        {/* Header */}
        <div className="relative mb-4">
          <div className="flex flex-col items-center text-center">
            <p className="text-[#C9A961] text-xs tracking-widest uppercase mb-1">Our Journal</p>
            <h2 className="text-4xl md:text-5xl font-serif font-light tracking-widest uppercase text-[#373A36]">
              Magik <strong className="font-bold">Blog</strong>
            </h2>
            <div className="flex justify-center mt-3 mb-4">
              <div className="h-1 w-16 bg-[#6B8E7F] rounded-full" />
            </div>
          </div>
          <div className="md:absolute md:right-0 md:bottom-0 mt-4 text-center md:text-right">
            <a href="#" className="flex items-center justify-center md:justify-end gap-2 text-xs font-bold text-[#373A36]/60 hover:text-[#373A36] transition-all tracking-[0.1em] uppercase border-b border-transparent hover:border-[#373A36]">
              View All <span className="text-lg">→</span>
            </a>
          </div>
        </div>

        {/* Filter tabs + arrows */}
        <div className="relative flex items-center justify-center mb-4">
          <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide" style={{ scrollbarWidth: 'none' }}>
            {tabs.map(tab => (
              <button key={tab} onClick={() => setActiveTab(tab)}
                className={`px-6 py-2 rounded-full text-[10px] font-bold tracking-widest uppercase transition-all duration-300 flex-shrink-0 ${
                  activeTab === tab 
                  ? "bg-[#373A36] text-white shadow-lg" 
                  : "bg-white border border-[#E8E8E0] text-[#373A36]/60 hover:border-[#373A36] hover:text-[#373A36]"
                }`}
              >{tab}</button>
            ))}
          </div>
          <div className="absolute right-0 hidden md:flex gap-3">
            <button onClick={() => scroll('left')} className="w-10 h-10 rounded-full border border-[#E8E8E0] flex items-center justify-center hover:bg-[#373A36] hover:text-white transition-all duration-300 bg-white shadow-sm">
              <ChevronLeft size={18} />
            </button>
            <button onClick={() => scroll('right')} className="w-10 h-10 rounded-full border border-[#E8E8E0] flex items-center justify-center hover:bg-[#373A36] hover:text-white transition-all duration-300 bg-white shadow-sm">
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        <div ref={scrollRef} className="flex gap-6 overflow-x-auto pb-6 scrollbar-hide" style={{ scrollbarWidth: 'none' }}>
          {filtered.map((post, idx) => (
            <div key={idx} className="flex-shrink-0 group bg-white rounded-3xl overflow-hidden border border-[#F0F0F0] hover:shadow-2xl transition-all duration-500" style={{ width: '340px' }}>
              <div className="relative h-44 overflow-hidden">
                <img src={post.img} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <span className={`absolute top-2 left-3 text-[7px] font-black tracking-[0.2em] px-2 py-1 rounded-full uppercase shadow-sm ${tagColors[post.category] || "bg-gray-100 text-gray-600"}`}>
                  {post.category}
                </span>
              </div>
              <div className="p-4">
                <h3 className="text-[#373A36] text-sm font-serif font-bold leading-tight mb-2 group-hover:text-[#6B8E7F] transition-colors line-clamp-2">{post.title}</h3>
                <p className="text-gray-400 text-[11px] leading-relaxed mb-3 line-clamp-2 font-light">{post.excerpt}</p>
                <div className="flex items-center justify-between pt-3 border-t border-gray-50">
                  <div className="flex items-center gap-2 text-gray-300 text-[10px] font-medium tracking-wide uppercase">
                    <span>{post.date}</span>
                    <span className="w-1 h-1 rounded-full bg-gray-200" />
                    <span>{post.read}</span>
                  </div>
                  <span className="text-[#C9A961] text-xl transform group-hover:translate-x-2 transition-transform duration-300">→</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const reels = [
  'https://www.instagram.com/reel/DViyiJHj0nM/?igsh=enM4MjNyYmtzeGc0',
  'https://www.instagram.com/reel/DTu4n6vD7nm/?igsh=ZzZxanhsbXF4eDNk',
  'https://www.instagram.com/reel/DTc3BVOlHIA/?igsh=MWxzamljbW5oNzUyeQ==',
  'https://www.instagram.com/reel/DSXVfzAiMus/?igsh=MXJzaWZkaWl4N3FqNg==',
  'https://www.instagram.com/reel/DPin2xPjnZA/?igsh=MW91MDNyMHdkeTF2ag==',
  'https://www.instagram.com/reel/DSNCZFZlKxI/?igsh=MXR2OG8xM2F5bGVycA==',
];

function getReelId(url: string) {
  const match = url.match(/reel\/([^/?]+)/);
  return match ? match[1] : '';
}

const InstagramIcon = ({ size = 28, color = 'white' }: { size?: number; color?: string }) => (
  <svg width={size} height={size} fill={color} viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

const clientLogos = [
  '/logos/logo-1.jpeg', '/logos/logo-2.jpeg', '/logos/logo-3.jpeg',
  '/logos/logo-4.jpeg', '/logos/logo-5.jpeg', '/logos/logo-6.jpeg',
  '/logos/logo-7.jpeg', '/logos/logo-8.jpeg', '/logos/logo-9.jpeg',
  '/logos/logo-10.jpeg', '/logos/logo-11.jpeg', '/logos/logo-12.jpeg',
];
const logoRow1 = clientLogos.slice(0, 6);
const logoRow2 = clientLogos.slice(6);

function LogoCard({ src }: { src: string }) {
  return (
    <div className="flex-shrink-0 mx-4 w-44 h-24 rounded-xl bg-white border border-[#E8E8E0] flex items-center justify-center px-6 hover:border-[#C9A961]/40 transition-all duration-300 shadow-sm">
      <img src={src} alt="client logo" className="max-h-14 w-auto object-contain" />
    </div>
  );
}

function MarqueeRow({ items, reverse = false }: { items: string[]; reverse?: boolean }) {
  const doubled = [...items, ...items, ...items, ...items];
  return (
    <div className="flex overflow-hidden">
      <div className="flex" style={{ animation: `${reverse ? 'marqueeReverse' : 'marquee'} ${reverse ? 22 : 28}s linear infinite` }}>
        {doubled.map((src, i) => <LogoCard key={i} src={src} />)}
      </div>
    </div>
  );
}

function MagikClients() {
  return (
    <section className="py-20 bg-[#F5F0E8] overflow-hidden relative -mt-10 md:-mt-16 rounded-t-[40px] md:rounded-t-[80px] z-20">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-14">
          <p className="text-[#C9A961] text-xs tracking-widest uppercase mb-3">Trusted By The Best</p>
          <h2 className="text-4xl md:text-5xl font-serif font-light tracking-widest text-[#373A36] mb-4">
            Our <strong className="font-bold">Partners</strong>
          </h2>
          <div className="flex justify-center mb-4">
            <div className="h-1 w-16 bg-[#6B8E7F] rounded-full" />
          </div>
          <p className="text-[#666] text-sm max-w-md mx-auto">
            From Fortune 500 corporations to iconic institutions — powering India's most prestigious spaces.
          </p>
        </div>
      </div>
      <div className="relative space-y-4">
        <div className="absolute left-0 top-0 bottom-0 w-32 z-10 pointer-events-none" style={{ background: 'linear-gradient(to right, #FFFFFF, transparent)' }} />
        <div className="absolute right-0 top-0 bottom-0 w-32 z-10 pointer-events-none" style={{ background: 'linear-gradient(to left, #FFFFFF, transparent)' }} />
        <MarqueeRow items={logoRow1} />
        <MarqueeRow items={logoRow2} reverse />
      </div>
    </section>
  );
}

function InstagramReels() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const scroll = (dir: 'left' | 'right') => {
    scrollRef.current?.scrollBy({ left: dir === 'right' ? 320 : -320, behavior: 'smooth' });
  };
  return (
    <section className="py-16 px-6 bg-[#F7F7F0]">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-10 items-start">
          {/* Left Text */}
          <div className="lg:w-64 flex-shrink-0 lg:pt-4">
            <h2 className="text-[#373A36] text-5xl font-serif leading-tight mb-3">Stay inspired with us on Instagram</h2>
            <div className="h-1 w-16 bg-[#6B8E7F] rounded-full mb-6" />
            <a
              href="https://www.instagram.com/magiklighting?igsh=ZDNpYnRmZGtxa3N3"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-[#373A36] text-[#373A36] px-5 py-2.5 rounded-full text-sm hover:bg-[#373A36] hover:text-white transition-all duration-200 mb-8"
            >
              <InstagramIcon size={16} color="currentColor" />
              Follow us
            </a>
          </div>
          {/* Reels Carousel */}
          <div className="flex-1 relative">
            <button onClick={() => scroll('left')} className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-white hover:bg-[#E8E8E0] flex items-center justify-center transition-all border border-[#E8E8E0]">
              <svg className="w-4 h-4 text-[#373A36]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            </button>
            <button onClick={() => scroll('right')} className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-white hover:bg-[#E8E8E0] flex items-center justify-center transition-all border border-[#E8E8E0]">
              <svg className="w-4 h-4 text-[#373A36]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </button>
            <div ref={scrollRef} className="flex gap-3 overflow-x-auto scroll-smooth" style={{ scrollbarWidth: 'none' }}>
              {reels.map((url) => {
                const id = getReelId(url);
                return (
                  <a key={id} href={url} target="_blank" rel="noopener noreferrer"
                    className="flex-shrink-0 relative rounded-2xl overflow-hidden block"
                    style={{ width: 220, height: 390 }}
                  >
                    <div className="absolute" style={{ top: '80%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                      <iframe
                        src={`https://www.instagram.com/reel/${id}/embed/captioned/`}
                        width="300" height="700" allowFullScreen scrolling="no"
                        style={{ border: 'none', pointerEvents: 'none', transform: 'scale(1.1)', transformOrigin: 'center center' }}
                      />
                    </div>
                    <div className="absolute inset-0 z-10" />
                    <div className="absolute bottom-3 right-3 z-20 pointer-events-none">
                      <InstagramIcon size={26} color="white" />
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ClientLove() {
  const trackRef = useRef<HTMLDivElement>(null);
  const animRef = useRef<number>(0);
  const posRef = useRef(0);
  const pausedRef = useRef(false);
  const [playingVideo, setPlayingVideo] = useState<string | null>(null);
  const doubled = [...testimonials, ...testimonials];

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const cardWidth = 400 + 24; // w-[400px] + gap-6
    const totalWidth = cardWidth * testimonials.length;

    const step = () => {
      if (!pausedRef.current) {
        posRef.current += 0.5;
        if (posRef.current >= totalWidth) posRef.current = 0;
        track.style.transform = `translateX(-${posRef.current}px)`;
      }
      animRef.current = requestAnimationFrame(step);
    };
    animRef.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animRef.current);
  }, []);

  return (
    <section className="py-10 pb-16 bg-[#F7F7F0] overflow-hidden">
      <div className="container mx-auto px-4 mb-10 text-center">
        <p className="text-[#C9A961] text-xs tracking-widest uppercase font-sans mb-1">Client Love</p>
        <h2 className="text-3xl md:text-4xl font-serif font-light tracking-widest text-[#373A36]">
          Customer <strong className="font-bold">Voices</strong>
        </h2>
        <div className="flex justify-center mt-3 mb-4">
          <div className="h-1 w-16 bg-[#6B8E7F] rounded-full" />
        </div>
        <p className="text-[#666] text-sm max-w-xl mx-auto">
          Hear from the visionaries who have transformed their spaces with Magik Lighting.
        </p>
      </div>

      {/* Autoscroll track */}
      <div
        className="relative"
        onMouseEnter={() => { pausedRef.current = true; }}
        onMouseLeave={() => { pausedRef.current = false; }}
      >
        <div ref={trackRef} className="flex gap-6 w-max">
          {doubled.map((t, idx) => (
            <div
              key={idx}
              className="w-[400px] flex-shrink-0 bg-[#F7F7F0] rounded-2xl overflow-hidden border border-[#E8E8E0] hover:border-[#6B8E7F] hover:shadow-md transition-all duration-300"
              onMouseEnter={() => { pausedRef.current = true; }}
              onMouseLeave={() => { pausedRef.current = false; }}
            >
              {t.videoId ? (
                <>
                  <div className="relative" style={{ height: 220 }}>
                    {playingVideo === `${t.videoId}-${idx}` ? (
                      <iframe
                        src={`https://www.youtube.com/embed/${t.videoId}?autoplay=1&rel=0`}
                        title={t.name}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="w-full h-full"
                      />
                    ) : (
                      <button
                        onClick={() => setPlayingVideo(`${t.videoId}-${idx}`)}
                        className="w-full h-full absolute inset-0 group"
                      >
                        <img
                          src={`https://img.youtube.com/vi/${t.videoId}/mqdefault.jpg`}
                          alt={t.name}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-all" />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-14 h-14 rounded-full bg-[#6B8E7F] flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                            <svg className="w-6 h-6 ml-1" viewBox="0 0 10 10" fill="white"><polygon points="2,1 9,5 2,9" /></svg>
                          </div>
                        </div>
                      </button>
                    )}
                  </div>
                  <div className="flex items-center gap-3 px-5 py-4">
                    <div className="w-10 h-10 rounded-full bg-[#6B8E7F] flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                      {t.avatar}
                    </div>
                    <div>
                      <p className="text-[#373A36] text-sm font-semibold">{t.name}</p>
                      {t.role && <p className="text-[#999] text-xs">{t.role}</p>}
                    </div>
                  </div>
                </>
              ) : (
                <div className="p-6">
                  <div className="text-[#C9A961] text-5xl font-serif leading-none mb-2">"</div>
                  <p className="text-[#444] text-sm leading-relaxed mb-6">{t.text}</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#6B8E7F] flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                      {t.avatar}
                    </div>
                    <div>
                      <p className="text-[#373A36] text-sm font-semibold">{t.name}</p>
                      <p className="text-[#999] text-xs">{t.role}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const videos = [
  { id: 'jhpxzG74XOM', category: 'BRAND',      title: 'Magik Brand Story',        subtitle: 'Our Journey',      duration: '3:42' },
  { id: 'tNFuuZqOto0', category: 'FACTORY',    title: 'Manufacturing Excellence', subtitle: 'Behind the Scenes', duration: '5:18' },
  { id: 'vwPxVQ6_1og', category: 'TECHNOLOGY', title: 'Smart LED Technology',     subtitle: 'Innovation',        duration: '4:07' },
  { id: 'atZ1rTuyxfE', category: 'PRODUCT',    title: 'CONNECT — IoT Lighting',   subtitle: 'Smart Solutions',   duration: '2:55' },
  { id: 'dOPRrnumq9w', category: 'B2B',        title: 'B2B Solutions Overview',   subtitle: 'Partner With Us',   duration: '6:12' },
];

function CorporateVideos() {
  const [playing, setPlaying] = useState<string | null>(null);
  const [featured, setFeatured] = useState(videos[0]);

  return (
    <section className="py-10 px-6 bg-[#EEF3F1]">
      <div className="container mx-auto">
        <div className="mb-6 text-center">
          <p className="text-[#6B8E7F] text-xs tracking-widest uppercase font-sans mb-1">Watch & Explore</p>
          <h2 className="text-[#373A36] text-3xl md:text-4xl font-bold font-serif uppercase tracking-wide">Corporate Videos</h2>
          <div className="flex justify-center mt-3">
            <div className="h-1 w-16 bg-[#6B8E7F] rounded-full"></div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="flex-1 rounded-2xl overflow-hidden relative" style={{ minHeight: 380 }}>
            {playing === featured.id ? (
              <iframe
                src={`https://www.youtube.com/embed/${featured.id}?autoplay=1&rel=0`}
                title={featured.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full"
                style={{ height: 380, display: 'block' }}
              />
            ) : (
              <button onClick={() => setPlaying(featured.id)} className="w-full h-full absolute inset-0 group cursor-pointer text-left">
                <img src={`https://img.youtube.com/vi/${featured.id}/maxresdefault.jpg`} alt={featured.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full flex items-center justify-center transition-transform duration-200 group-hover:scale-110 bg-[#6B8E7F]">
                    <svg className="w-8 h-8 ml-1" viewBox="0 0 10 10" fill="white"><polygon points="2,1 9,5 2,9" /></svg>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-xs tracking-widest uppercase font-sans mb-1 text-[#C9A961]">{featured.category}</p>
                  <h3 className="text-white text-2xl font-bold font-serif mb-1">{featured.title}</h3>
                  <p className="text-white/60 text-sm font-sans">{featured.subtitle} &bull; {featured.duration}</p>
                </div>
              </button>
            )}
          </div>
          <div className="lg:w-96 flex flex-col gap-3">
            {videos.map((v) => {
              const isActive = v.id === featured.id;
              return (
                <button key={v.id} onClick={() => { setFeatured(v); setPlaying(null); }}
                  className={`flex items-center gap-3 rounded-xl p-3 text-left transition-all duration-200 ${isActive ? 'border border-[#6B8E7F] bg-[#6B8E7F]/10' : 'border border-[#E8E8E0] bg-white hover:bg-[#F7F7F0]'}`}
                >
                  <div className="relative w-28 h-20 rounded-lg overflow-hidden flex-shrink-0">
                    <img src={`https://img.youtube.com/vi/${v.id}/mqdefault.jpg`} alt={v.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                      <div className="w-7 h-7 rounded-full flex items-center justify-center" style={{ background: isActive ? '#6B8E7F' : 'rgba(255,255,255,0.85)' }}>
                        <svg className="w-3 h-3 ml-0.5" viewBox="0 0 10 10" fill={isActive ? 'white' : '#373A36'}><polygon points="2,1 9,5 2,9" /></svg>
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs tracking-widest uppercase font-sans mb-0.5 text-[#C9A961]">{v.category}</p>
                    <p className="text-[#373A36] text-sm font-semibold font-sans truncate">{v.title}</p>
                    <p className="text-[#999] text-xs font-sans mt-0.5">{v.duration}</p>
                  </div>
                  {isActive && <div className="w-1 h-10 rounded-full flex-shrink-0 bg-[#6B8E7F]" />}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

/**
 * Design Philosophy: Luxury Craft
 * - Warm cream background with sage green and brass accents
 * - Elegant serif typography (Lora) for display, Proxima Nova for body
 * - Generous whitespace and subtle shadows
 * - Smooth transitions and refined interactions
 */

function QuickEnquiry() {
  const [enquiryOpen, setEnquiryOpen] = useState(false);
  return (
    <div className="fixed bottom-0 right-0 z-50 flex flex-col items-end">
      {/* WhatsApp */}
      <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer"
        className="w-12 h-12 bg-green-500 hover:bg-green-600 text-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 mr-3 mb-2"
        aria-label="Chat on WhatsApp">
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>
      {/* Quick Enquiry */}
      <div className="w-full">
        <button onClick={() => setEnquiryOpen((v) => !v)}
          className="flex items-center gap-3 bg-[#373A36] text-white px-6 py-3 font-semibold text-sm w-full">
          Quick Enquiry
          <svg className={`w-4 h-4 transition-transform ${enquiryOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="m18 15-6-6-6 6" />
          </svg>
        </button>
        {enquiryOpen && (
          <div className="bg-white shadow-xl p-6 w-80 border border-gray-200">
            <h3 className="font-bold text-[#373A36] mb-4">Quick Enquiry</h3>
            <div className="space-y-3">
              <input type="text" placeholder="Your Name" className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-[#373A36]" />
              <input type="email" placeholder="Email Address" className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-[#373A36]" />
              <input type="tel" placeholder="Phone Number" className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-[#373A36]" />
              <textarea placeholder="Message" rows={3} className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-[#373A36] resize-none" />
              <button className="w-full bg-[#373A36] text-white py-2 rounded text-sm font-medium hover:bg-[#6B8E7F] transition-colors">Submit</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [heroIndex, setHeroIndex] = useState(0);
  const [videoMuted, setVideoMuted] = useState(true);
  const [userUnmuted, setUserUnmuted] = useState(false);
  const heroSectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [currentProductIndex, setCurrentProductIndex] = useState(0);
  const [kitchenLights, setKitchenLights] = useState({
    tapeLights: true,
    pendants: true,
    downlights: true,
    dayNight: true,
  });
  const [bathroomLights, setBathroomLights] = useState({
    light1: true,
    light2: true,
    light3: true,
    light4: true,
    dayNight: true,
  });
  const [showSpaceModal, setShowSpaceModal] = useState(false);
  const [showProductModal, setShowProductModal] = useState<string | null>(null);
  const [activeSpace, setActiveSpace] = useState<'Kitchen' | 'Bathroom' | 'Livingroom' | 'Bedroom'>('Bedroom');
  const [livingroomLights, setLivingroomLights] = useState({
    light1: true,
    light2: true,
    light3: true,
    dayNight: true,
  });
  const [bedroomLights, setBedroomLights] = useState({
    light1: true,
    light2: true,
    light3: true,
    dayNight: true,
  });

  const kitchenProducts = {
    tapeLights: {
      name: "Stream",
      image: "/Experience/Kitchen/Tape-Lights.jpeg",
      description: "",
    },
    pendants: {
      name: "Spectrum",
      image: "/Experience/Kitchen/Pendants.jpeg",
      description: "",
    },
    downlights: {
      name: "Aura Slim Plus RD",
      image: "/Experience/Kitchen/Downlights.jpeg",
      description: "",
    },
  };

  const bathroomProducts = {
    light1: {
      name: "Tape Lights",
      image: "/Experience/Bathroom/Tape-Lights.jpeg",
      description: "",
    },
    light2: {
      name: "Pendants",
      image: "/Experience/Bathroom/Pendants.jpeg",
      description: "",
    },
    light3: {
      name: "Fabio Bollard",
      image: "/Experience/Bathroom/Fabio Bollard.jpg",
      description: "",
    },
    light4: {
      name: "Downlights",
      image: "/Experience/Bathroom/Downlights.jpeg",
      description: "",
    },
  };

  const livingroomProducts = {
    light1: {
      name: "Celina",
      image: "/Experience/livingroom/Celina.jpg",
      description: "",
    },
    light2: {
      name: "Shine Wall Spot",
      image: "/Experience/livingroom/Shine Wall Spot.jpg",
      description: "",
    },
    light3: {
      name: "Tape Lights",
      image: "/Experience/livingroom/Tape-Lights.jpeg",
      description: "",
    },
  };

  const bedroomProducts = {
    light1: {
      name: "Tape Lights",
      image: "/Experience/badroom/Tape-Lights.jpeg",
      description: "",
    },
    light2: {
      name: "Pendants",
      image: "/Experience/badroom/Pendants.jpeg",
      description: "",
    },
    light3: {
      name: "Downlights",
      image: "/Experience/badroom/Downlights.jpeg",
      description: "",
    },
  };

  const spaces = [
    { name: "Living Room", image: "/Experience/LivingRoom.jpeg", description: "Create the perfect ambiance for relaxation" },
    { name: "Bedroom", image: "/Experience/badroom.jpeg", description: "Soft curves and smooth lighting for peaceful rest" },
    { name: "Kitchen", image: "/Experience/Kitchen.jpeg", description: "Bright and functional lighting for your space" },
    { name: "Bathroom", image: "/Experience/Bathroom.jpeg", description: "Illuminate your exterior spaces beautifully" },
  ];

  const heroSlides = [  
    {
      type: "video" as const,
      src: "/hero.mp4",
      heading: "It's in the detail",
      sub: "Engineered by experts | Handcrafted by artisans",
      btn: true,
    },
  ];

  useEffect(() => {
    const onScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Update scrolled state for background changes
      setScrolled(currentScrollY > 10);
      
      // Handle hide/show logic
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down
        setIsVisible(false);
      } else {
        // Scrolling up
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [lastScrollY]);

  // Sync muted state to actual video element whenever it changes
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = videoMuted;
    }
  }, [videoMuted]);

  useEffect(() => {
    const timer = setInterval(() => {
      setHeroIndex((prev) => {
        const next = (prev + 1) % heroSlides.length;
        // Only auto-mute if user has NOT manually unmuted
        setVideoMuted((currentMuted) => {
          if (heroSlides[next].type !== "video") return true;
          // If user explicitly unmuted, keep unmuted; otherwise keep current state
          return currentMuted;
        });
        return next;
      });
    }, 5000);
    return () => clearInterval(timer);
  }, []);
  const [activeAbout, setActiveAbout] = useState(0);

  const aboutItems = [
    {
      title: "Company Profile",
      heading: "Made in India",
      description:
        "MAGIK is a trusted pan-India brand offering innovative solutions for Home, Office, Industry, Retail, and Hospitality sectors. With 10+ years of experience, 1000+ distributors, and a production capacity of 1 lakh+ products per day, MAGIK delivers quality products backed by advanced manufacturing and strict quality standards.",
      image: "/centuryhousehdimage.png",
    },
    {
      title: "Factory and Machinery",
      heading: "Made in India",
      description:
        "MAGIK has rapidly grown into a reputed and trusted brand with a strong pan-India presence, offering innovative solutions for Home, Office, Industry, Infrastructure, Retail, and Hospitality sectors. With 10+ years in the industry, a strong network of 1000+ distributors, and the capacity to produce 1 lakh+ products per day, MAGIK ensures reliable service and widespread accessibility across the country. Backed by a world-class manufacturing facility equipped with advanced automated machinery and stringent quality control systems, every product is crafted with precision, durability, and international quality standards.",
      image: "/magiklight factory.JPG.jpg",
    },
  ];

  const safeAbout = Math.min(activeAbout, aboutItems.length - 1);

  const shopCategoryList = [
    { name: "PANEL & SPOTLIGHT", image: "/panel and spotlights.png", objectPosition: "center top" },
    { name: "OUTDOOR LIGHTS", image: "/outdorr lightsss.png", objectPosition: "center top" },
    { name: "TABLE LAMPS", image: "/lamppp.png", objectPosition: "center center" },
    { name: "LAMPS", image: "/lamppppppp.png", objectPosition: "center center" },
    { name: "BATTEN", image: "/batteenn.png", objectPosition: "center center" },
    { name: "ACCESSORIES", image: "/accessries.png", objectPosition: "center top" },
    { name: "STREET LIGHTING", image: "/Streetlightss.png", objectPosition: "center top" },
    { name: "SOLAR LIGHTING", image: "/solarrlightss.png", objectPosition: "center center" },
    { name: "AREA LIGHTING", image: "/arealighting.png", objectPosition: "center 50%" },
    { name: "INDUSTRIAL LIGHTING", image: "/starcementplant.png", objectPosition: "center 80%" },
    { name: "LANDSCAPE LIGHTING", image: "/The Agri Horticulture, Kolkata.jpeg", objectPosition: "center top" },
    { name: "RETAIL LIGHTING", image: "/showroom.png", objectPosition: "center 30%" },
    { name: "INDOOR LIGHTING", image: "/indorr lighting.png", objectPosition: "center top" },
    { name: "ARCHITECTURAL LIGHTING", image: "/towerimage.png", objectPosition: "center top" },
    { name: "SMART LIGHTING", image: "/smrt.png", objectPosition: "center center" },
    { name: "WIRE", image: "/wireee.png", objectPosition: "center center" },
  ];

  const products = [
    {
      id: 1,
      name: "Soho Lighting Tote Bag",
      price: "£8.00",
      image:
        "https://d2xsxph8kpxj0f.cloudfront.net/310519663523553213/fVQNCj9t7YeSb6RPJnExaF/sockets-switches-detail-a6rpo3PXVGBFy2s8rhwVJK.webp",
    },
    {
      id: 2,
      name: "The Charterhouse Collection",
      price: "£19.45",
      image:
        "https://d2xsxph8kpxj0f.cloudfront.net/310519663523553213/fVQNCj9t7YeSb6RPJnExaF/hero-lighting-fixture-aEf92pd6n8dppZebKTynZE.webp",
    },
    {
      id: 3,
      name: "The Edison Collection",
      price: "£19.45",
      image:
        "https://d2xsxph8kpxj0f.cloudfront.net/310519663523553213/fVQNCj9t7YeSb6RPJnExaF/pendant-lights-collection-VkKopmr7jLVY2oK5HwMfbo.webp",
    },
    {
      id: 4,
      name: "The Charterhouse Calle",
      price: "£15.46",
      image:
        "https://d2xsxph8kpxj0f.cloudfront.net/310519663523553213/fVQNCj9t7YeSb6RPJnExaF/outdoor-lighting-wall-RaB9Dem5DoAtwqv2vYPnkd.webp",
    },
  ];

  const nextProduct = () => {
    setCurrentProductIndex((prev) => (prev + 1) % products.length);
  };

  const prevProduct = () => {
    setCurrentProductIndex(
      (prev) => (prev - 1 + products.length) % products.length
    );
  };

  return (
    <div className="min-h-screen bg-[#F7F7F0]" style={{ backgroundColor: '#F7F7F0' }}>
      <GlobalStyles />
      
      {/* Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 bg-white transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>

        {/* Top row: Logo center, icons right */}
        <div className="hidden md:flex items-center px-8 pt-5 pb-2 relative">

          {/* Center: Magik Logo */}
          <div className="absolute left-1/2 -translate-x-1/2">
            <img src="/companylogo-2.png" alt="Magik Lighting" className="h-16 w-auto object-contain" />
          </div>

          {/* Right: icons + CenturyPly */}
          <div className="ml-auto flex items-center gap-4">
            <button className="p-1.5 hover:opacity-70 transition-opacity">
              <Search size={20} className="text-[#373A36]" />
            </button>
            <button className="p-1.5 hover:opacity-70 transition-opacity">
              <User size={20} className="text-[#373A36]" />
            </button>
            <button className="p-1.5 hover:opacity-70 transition-opacity">
              <ShoppingCart size={20} className="text-[#373A36]" />
            </button>
            <div className="w-px h-6 bg-[#E8E8E0]" />
            <img src="/blackcentury.png" alt="Century Ply" className="h-9 w-auto object-contain" />
          </div>
        </div>

        {/* Bottom row: Nav links centered */}
        <div className="hidden md:block">
          <nav className="flex items-center justify-center gap-10 pb-4 pt-6">
            {["HOME", "ABOUT US", "PRODUCTS", "CONTACT US", "MORE"].map((item) => (
              <a key={item} href="#"
                className="text-sm font-semibold tracking-widest text-[#373A36] hover:text-[#6B8E7F] transition-colors duration-200"
              >
                {item}
              </a>
            ))}
          </nav>
        </div>

        {/* Mobile top row */}
        <div className="md:hidden flex items-center justify-between px-4 py-3">
          <button onClick={() => setMenuOpen(!menuOpen)} className="p-2">
            <Menu size={24} className="text-[#373A36]" />
          </button>
          <img src="/companylogo-2.png" alt="Magik Lighting" className="h-10 w-auto object-contain" />
          <button className="p-1.5">
            <ShoppingCart size={20} className="text-[#373A36]" />
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <nav className="md:hidden border-t border-[#E8E8E0] bg-white p-4 space-y-3">
            <a href="#" className="block text-[#373A36] text-sm">Home</a>
            <a href="#" className="block text-[#373A36] text-sm">About Us</a>
            <a href="#" className="block text-[#373A36] text-sm">Products</a>
            <a href="#" className="block text-[#373A36] text-sm">Contact Us</a>
            <a href="#" className="block text-[#373A36] text-sm">More</a>
          </nav>
        )}
      </header>

      {/* Hero Section */}
      <section ref={heroSectionRef} className="relative overflow-hidden" style={{ marginTop: 0, height: '100vh', minHeight: '600px' }}>
        {heroSlides.map((slide, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-opacity duration-1000 ${idx === heroIndex ? "opacity-100 z-10" : "opacity-0 z-0"}`}
          >
            {slide.type === "video" ? (
              <video
                key={slide.src}
                className="absolute top-0 left-0 w-full h-full object-cover"
                style={{ objectPosition: "center center", display: 'block' }}
                src={slide.src}
                poster="/Magiklight factory.jpeg"
                autoPlay
                muted
                loop
                playsInline
                ref={(el) => {
                  (videoRef as React.MutableRefObject<HTMLVideoElement | null>).current = el;
                  if (!el) return;
                  el.muted = videoMuted;
                  el.play().catch(() => {});
                }}
              />
            ) : (
              <img src={slide.src} alt={slide.heading} className="w-full h-full object-cover" style={{ objectPosition: (slide as any).objectPosition || "center" }} />
            )}
            <div className="" />
            <div className="absolute inset-0 flex flex-col items-center justify-end text-center text-white px-4 pb-24">
              <h1 className="text-4xl md:text-7xl font-serif font-light mb-4 tracking-tight">{slide.heading}</h1>
              <p className="text-sm md:text-base mb-8 tracking-wide">{slide.sub}</p>
              {slide.btn && (
                <a
                  href="https://www.youtube.com/watch?v=jhpxzG74XOM"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-3 border-2 border-white text-white hover:bg-white hover:text-[#373A36] transition-all duration-300 font-medium tracking-widest text-sm"
                >
                  WATCH FULL VIDEO
                </a>
              )}
            </div>
          </div>
        ))}
        {/* Dots */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {heroSlides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => { setHeroIndex(idx); if (heroSlides[idx].type !== "video") setVideoMuted(true); }}
              className={`h-2 rounded-full transition-all duration-300 ${idx === heroIndex ? "bg-white w-6" : "bg-white/50 w-2"}`}
            />
          ))}
        </div>

        {/* Sound toggle */}
        {heroSlides[heroIndex]?.type === "video" && (
          <button
            onClick={() => { const newMuted = !videoMuted; setVideoMuted(newMuted); setUserUnmuted(!newMuted); }}
            className="absolute bottom-6 right-6 z-20 w-10 h-10 rounded-full bg-black/40 hover:bg-black/60 border border-white/30 flex items-center justify-center transition-all duration-200"
            title={videoMuted ? "Unmute" : "Mute"}
          >
            {videoMuted ? (
              <svg className="w-5 h-5 text-white" fill="white" viewBox="0 0 24 24">
                <path d="M16.5 12A4.5 4.5 0 0 0 14 7.97v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51A8.796 8.796 0 0 0 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06A8.99 8.99 0 0 0 17.73 18l1.73 1.73L21 18.46 5.54 3 4.27 3zM12 4L9.91 6.09 12 8.18V4z"/>
              </svg>
            ) : (
              <svg className="w-5 h-5 text-white" fill="white" viewBox="0 0 24 24">
                <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3A4.5 4.5 0 0 0 14 7.97v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
              </svg>
            )}
          </button>
        )}
      </section>

      {/* Shop By Category */}
      <section className="py-16 md:py-24 bg-white" id="shop-by-category">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-serif font-light text-[#373A36] mb-2 text-center tracking-widest">
            SHOP BY <strong className="font-bold">CATEGORY</strong>
          </h2>
          <div className="flex justify-center mb-12">
            <div className="h-1 w-16 bg-[#6B8E7F] rounded-full"></div>
          </div>

          <div className="relative">
            <div
              className="overflow-x-auto"
              style={{ scrollbarWidth: "none" }}
              id="shop-category-scroll"
            >
              <div className="grid gap-1" style={{ display: "grid", gridTemplateRows: "1fr 1fr", gridAutoFlow: "column", gridAutoColumns: "calc((100% - 4px) / 4)" }}>
                {shopCategoryList.map((cat) => (
                  <div key={cat.name} className="relative overflow-hidden cursor-pointer group" style={{ height: "240px" }}>
                    <img
                      src={cat.image}
                      alt={cat.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      style={{ objectPosition: cat.objectPosition || "center" }}
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-500" />
                    <div className="absolute inset-0 flex items-end justify-center pb-4">
                      <span className="text-white text-xs font-bold tracking-[0.2em] uppercase text-center px-2">{cat.name}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Left Arrow */}
            <button
              onClick={() => {
                const el = document.getElementById("shop-category-scroll");
                if (el) {
                  if (el.scrollLeft <= 0) el.scrollTo({ left: el.scrollWidth, behavior: "auto" });
                  el.scrollBy({ left: -600, behavior: "smooth" });
                }
              }}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-20 bg-black/60 hover:bg-black/80 flex items-center justify-center transition-all duration-200"
              style={{ borderRadius: '0 40px 40px 0' }}
            >
              <ChevronLeft size={22} className="text-white" />
            </button>

            {/* Right Arrow */}
            <button
              onClick={() => {
                const el = document.getElementById("shop-category-scroll");
                if (el) {
                  const maxScroll = el.scrollWidth - el.clientWidth;
                  if (el.scrollLeft >= maxScroll) el.scrollTo({ left: 0, behavior: "auto" });
                  el.scrollBy({ left: 600, behavior: "smooth" });
                }
              }}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-20 bg-black/60 hover:bg-black/80 flex items-center justify-center transition-all duration-200"
              style={{ borderRadius: '40px 0 0 40px' }}
            >
              <ChevronRight size={22} className="text-white" />
            </button>
          </div>
        </div>
      </section>

      {/* Experience Section - Kitchen/Bathroom/Livingroom */}
      <section className="relative h-[90vh] overflow-hidden z-0" id="experience-section">
        {activeSpace === 'Kitchen' ? (
        <>
        {/* Base Image - Changes based on Day/Night toggle */}
        <div className="absolute inset-0">
          <img
            src={kitchenLights.dayNight 
              ? "/Experience/Kitchen/day.png"
              : "/Experience/Kitchen/night.png"
            }
            alt="Kitchen Base"
            className="w-full h-full object-cover transition-opacity duration-500"
          />
        </div>

        {/* Stream Layer */}
        {kitchenLights.tapeLights && (
          <div className="absolute inset-0" style={{ mixBlendMode: 'lighten' }}>
            <img
              src="/Experience/Kitchen/light3.png"
              alt="Stream"
              className="w-full h-full object-cover"
            />
          </div>
        )}

        {/* Lamps Layer */}
        {kitchenLights.pendants && (
          <div className="absolute inset-0" style={{ mixBlendMode: 'lighten' }}>
            <img
              src="/Experience/Kitchen/light2.png"
              alt="Lamps"
              className="w-full h-full object-cover"
            />
          </div>
        )}

        {/* Downlights Layer */}
        {kitchenLights.downlights && (
          <div className="absolute inset-0" style={{ mixBlendMode: 'lighten' }}>
            <img
              src="/Experience/Kitchen/light1.png"
              alt="Downlights"
              className="w-full h-full object-cover"
              style={{ transform: 'translateY(-2px)' }}
            />
          </div>
        )}
        <div className="absolute inset-0 bg-black/20" />

        {/* Product Detail Modal */}
        {showProductModal && (
          <div className="absolute inset-0 flex items-start justify-start z-40 pointer-events-none" style={{ padding: '20px' }}>
            <div 
              className="relative bg-white rounded-md w-64 overflow-hidden shadow-2xl pointer-events-auto"
              style={{
                position: 'absolute',
                top: (() => {
                  const buttonTop = showProductModal === 'tapeLights' ? 43 : showProductModal === 'pendants' ? 30 : 8;
                  return `max(20px, min(calc(${buttonTop}% - 120px), calc(100% - 380px)))`;
                })(),
                left: (() => {
                  const buttonLeft = showProductModal === 'tapeLights' ? '77%' : showProductModal === 'pendants' ? '43%' : '52%';
                  if (showProductModal === 'tapeLights') {
                    return `max(20px, calc(${buttonLeft} - 240px))`;
                  }
                  return `min(calc(${buttonLeft} + 60px), calc(100% - 244px))`;
                })(),
              }}
            >
              <div className="relative h-48 bg-gray-100 p-4">
                <img
                  src={kitchenProducts[showProductModal as keyof typeof kitchenProducts].image}
                  alt={kitchenProducts[showProductModal as keyof typeof kitchenProducts].name}
                  className="w-full h-full object-cover shadow-[0_4px_6px_-1px_rgba(0,0,0,0.3)]"
                />
              </div>

              <div className="p-4">
                <h3 className="text-base font-light text-[#373A36] mb-3">
                  {kitchenProducts[showProductModal as keyof typeof kitchenProducts].name}
                </h3>
                <button className="w-full px-4 py-2 bg-[#6B8E7F] text-white hover:bg-[#5a7669] transition-all duration-300 text-sm tracking-wide rounded">
                  Explore
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Space Selection Modal - Inside Section */}
        {showSpaceModal && (
          <div className="absolute inset-0 bg-black/90 flex items-center justify-center p-4 z-30">
            <div className="w-full max-w-7xl relative">
              <button
                onClick={() => setShowSpaceModal(false)}
                className="absolute -top-4 right-0 text-white hover:text-gray-300 transition-colors z-10"
              >
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>

              <div className="text-center mb-8">
                <p className="text-white/60 text-xs tracking-widest uppercase mb-2">FRESH IDEAS TO LIGHT YOUR SPACE</p>
                <h2 className="text-white text-4xl md:text-5xl font-light tracking-wider">CHOOSE A SPACE TO EXPLORE</h2>
                <div className="flex justify-center mt-4">
                  <div className="h-0.5 w-16 bg-[#C9A961]"></div>
                </div>
              </div>

              <div className="relative">
                <div 
                  id="space-scroll-container"
                  className="overflow-x-auto scrollbar-hide"
                  style={{ scrollbarWidth: 'none' }}
                >
                  <div className="flex gap-6 pb-4">
                    {[...spaces, ...spaces].map((space, idx) => (
                      <button
                        key={`${space.name}-${idx}`}
                        onClick={() => {
                          setShowSpaceModal(false);
                          if (space.name === 'Kitchen') {
                            setActiveSpace('Kitchen');
                          } else if (space.name === 'Bathroom') {
                            setActiveSpace('Bathroom');
                          } else if (space.name === 'Living Room') {
                            setActiveSpace('Livingroom');
                          } else if (space.name === 'Bedroom') {
                            setActiveSpace('Bedroom');
                          }
                        }}
                        className="group flex-shrink-0 cursor-pointer"
                        style={{ width: '400px' }}
                      >
                        <div className="relative overflow-hidden rounded-lg" style={{ height: '300px' }}>
                          <img
                            src={space.image}
                            alt={space.name}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                        </div>
                        <div className="mt-4">
                          <h3 className="text-white text-xl font-light mb-1 tracking-wide">{space.name.toUpperCase()} &gt;</h3>
                          <p className="text-white/70 text-sm">{space.description}</p>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                <button 
                  onClick={() => {
                    const el = document.getElementById('space-scroll-container');
                    if (el) {
                      const scrollAmount = el.scrollLeft - 420;
                      if (scrollAmount < 0) {
                        el.scrollTo({ left: el.scrollWidth / 2, behavior: 'auto' });
                      }
                      el.scrollBy({ left: -420, behavior: 'smooth' });
                    }
                  }}
                  className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 w-12 h-12 rounded-full border-2 border-white/40 flex items-center justify-center text-white hover:bg-white/10 transition-all bg-black/50"
                >
                  <ChevronLeft size={20} />
                </button>
                <button 
                  onClick={() => {
                    const el = document.getElementById('space-scroll-container');
                    if (el) {
                      const maxScroll = el.scrollWidth - el.clientWidth;
                      if (el.scrollLeft + 420 >= maxScroll) {
                        el.scrollTo({ left: el.scrollWidth / 2 - el.clientWidth, behavior: 'auto' });
                      }
                      el.scrollBy({ left: 420, behavior: 'smooth' });
                    }
                  }}
                  className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 w-12 h-12 rounded-full border-2 border-white/40 flex items-center justify-center text-white hover:bg-white/10 transition-all bg-black/50"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Hotspot Buttons */}
        <div className="absolute inset-0 pointer-events-none z-10">
          {/* Stream (Stream) + Button - moved to right side */}
          <button
            onClick={() => setShowProductModal(showProductModal === 'tapeLights' ? null : 'tapeLights')}
            className="absolute pointer-events-auto w-8 h-8 rounded-full bg-white border-2 border-white flex items-center justify-center text-[#6B8E7F] hover:bg-[#6B8E7F] hover:text-white transition-all duration-500 shadow-lg group"
            style={{ top: '43%', left: '77%' }}
          >
            {/* Animated pulse ring - only show when not active */}
            {showProductModal !== 'tapeLights' && (
              <span className="absolute inset-0 rounded-full border-2 border-white animate-slow-pulse"></span>
            )}
            {showProductModal === 'tapeLights' ? (
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="transition-all duration-500">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            ) : (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="transition-all duration-500">
                <path d="M12 5v14M5 12h14" />
              </svg>
            )}
          </button>

          {/* Spectrum (Lamps) + Button - moved to left side */}
          <button
            onClick={() => setShowProductModal(showProductModal === 'pendants' ? null : 'pendants')}
            className="absolute pointer-events-auto w-8 h-8 rounded-full bg-white border-2 border-white flex items-center justify-center text-[#6B8E7F] hover:bg-[#6B8E7F] hover:text-white transition-all duration-500 shadow-lg group"
            style={{ top: '30%', left: '43%' }}
          >
            {/* Animated pulse ring - only show when not active */}
            {showProductModal !== 'pendants' && (
              <span className="absolute inset-0 rounded-full border-2 border-white animate-slow-pulse"></span>
            )}
            {showProductModal === 'pendants' ? (
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="transition-all duration-500">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            ) : (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="transition-all duration-500">
                <path d="M12 5v14M5 12h14" />
              </svg>
            )}
          </button>

          {/* Aura Slim Plus RD (Downlights) + Button */}
          <button
            onClick={() => setShowProductModal(showProductModal === 'downlights' ? null : 'downlights')}
            className="absolute pointer-events-auto w-8 h-8 rounded-full bg-white border-2 border-white flex items-center justify-center text-[#6B8E7F] hover:bg-[#6B8E7F] hover:text-white transition-all duration-500 shadow-lg group"
            style={{ top: '8%', left: '52%' }}
          >
            {/* Animated pulse ring - only show when not active */}
            {showProductModal !== 'downlights' && (
              <span className="absolute inset-0 rounded-full border-2 border-white animate-slow-pulse"></span>
            )}
            {showProductModal === 'downlights' ? (
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="transition-all duration-500">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            ) : (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="transition-all duration-500">
                <path d="M12 5v14M5 12h14" />
              </svg>
            )}
          </button>
        </div>

        {/* Content */}
        <div className="absolute inset-0 flex flex-col justify-between p-8 md:p-12">
          {/* Top Left Text */}
          <div>
            <p className="text-white text-xs md:text-sm tracking-widest uppercase mb-4">
              FRESH IDEAS TO LIGHT YOUR SPACE
            </p>
            <h2 className="text-white text-5xl md:text-7xl font-light mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
              Kitchen
            </h2>
            <button 
              onClick={() => setShowSpaceModal(true)}
              className="px-6 py-2.5 bg-white text-[#373A36] hover:bg-white/90 transition-all duration-300 text-sm tracking-wide flex items-center gap-2"
            >
              Explore More Spaces
              <ArrowRight size={16} />
            </button>
          </div>

          {/* Bottom Controls */}
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
            {/* Toggle Buttons */}
            <div className="flex flex-wrap gap-8">
              {[
                { label: "Stream", key: "tapeLights", active: kitchenLights.tapeLights },
                { label: "Lamps", key: "pendants", active: kitchenLights.pendants },
                { label: "Downlights", key: "downlights", active: kitchenLights.downlights },
                { label: "Day / Night", key: "dayNight", active: kitchenLights.dayNight },
              ].map((btn) => (
                <div key={btn.key} className="flex flex-col items-center gap-2">
                  <button
                    onClick={() => setKitchenLights(prev => ({ ...prev, [btn.key]: !prev[btn.key as keyof typeof prev] }))}
                    className={`flex flex-col items-center gap-1 px-2 py-3 rounded-full transition-all duration-300 ${
                      btn.active
                        ? "bg-white"
                        : "bg-black/40 backdrop-blur-sm hover:bg-black/50"
                    }`}
                  >
                    {btn.active ? (
                      <>
                        <div
                          className="w-6 h-6 rounded-full border border-[#373A36] bg-[#373A36] flex items-center justify-center shadow-sm"
                        >
                        </div>
                        <div className="text-[#373A36] text-[9px] font-semibold tracking-wide">
                          ON
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="text-white text-[9px] font-semibold tracking-wide">
                          OFF
                        </div>
                        <div
                          className="w-6 h-6 rounded-full border border-white bg-white flex items-center justify-center shadow-sm"
                        >
                        </div>
                      </>
                    )}
                  </button>
                  <span className={`text-sm tracking-wide font-semibold ${
                    btn.active ? "text-white" : "text-white"
                  }`}>
                    {btn.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
        </>
        ) : activeSpace === 'Bathroom' ? (
        <>
        {/* Base Image - Changes based on Day/Night toggle */}
        <div className="absolute inset-0">
          <img
            src={bathroomLights.dayNight 
              ? "/Experience/Bathroom/day.webp"
              : "/Experience/Bathroom/night.png"
            }
            alt="Bathroom Base"
            className="w-full h-full object-cover transition-opacity duration-500"
          />
        </div>

        {/* Light 1 Layer */}
        {bathroomLights.light1 && (
          <div className="absolute inset-0" style={{ mixBlendMode: 'lighten' }}>
            <img
              src="/Experience/Bathroom/light1.webp"
              alt="Light 1"
              className="w-full h-full object-cover"
            />
          </div>
        )}

        {/* Light 2 Layer */}
        {bathroomLights.light2 && (
          <div className="absolute inset-0" style={{ mixBlendMode: 'lighten' }}>
            <img
              src="/Experience/Bathroom/light2.webp"
              alt="Light 2"
              className="w-full h-full object-cover"
            />
          </div>
        )}

        {/* Light 3 Layer */}
        {bathroomLights.light3 && (
          <div className="absolute inset-0" style={{ mixBlendMode: 'lighten' }}>
            <img
              src="/Experience/Bathroom/light3.webp"
              alt="Light 3"
              className="w-full h-full object-cover"
            />
          </div>
        )}

        {/* Light 4 Layer (Downlights) */}
        {bathroomLights.light4 && (
          <div className="absolute inset-0" style={{ mixBlendMode: 'lighten' }}>
            <img
              src="/Experience/Bathroom/light4.png"
              alt="Downlights"
              className="w-full h-full object-cover"
            />
          </div>
        )}
        <div className="absolute inset-0 bg-black/20" />

        {/* Product Detail Modal */}
        {showProductModal && activeSpace === 'Bathroom' && (
          <div className="absolute inset-0 flex items-start justify-start z-40 pointer-events-none" style={{ padding: '20px' }}>
            <div 
              className="relative bg-white rounded-md w-64 overflow-hidden shadow-2xl pointer-events-auto"
              style={{
                position: 'absolute',
                top: (() => {
                  const buttonTop = showProductModal === 'light1' ? 9 : showProductModal === 'light2' ? 10 : showProductModal === 'light4' ? 9 : 43;
                  return `max(20px, min(calc(${buttonTop}% - 120px), calc(100% - 380px)))`;
                })(),
                left: (() => {
                  const buttonLeft = showProductModal === 'light1' ? '72%' : showProductModal === 'light2' ? '36%' : showProductModal === 'light4' ? '55%' : '77%';
                  if (showProductModal === 'light1' || showProductModal === 'light3') {
                    return `max(20px, calc(${buttonLeft} - 240px))`;
                  }
                  return `min(calc(${buttonLeft} + 60px), calc(100% - 244px))`;
                })(),
              }}
            >
              <div className="relative h-48 bg-gray-100 p-4">
                <img
                  src={bathroomProducts[showProductModal as 'light1' | 'light2' | 'light3' | 'light4']?.image || ''}
                  alt={bathroomProducts[showProductModal as 'light1' | 'light2' | 'light3' | 'light4']?.name || ''}
                  className="w-full h-full object-cover shadow-[0_4px_6px_-1px_rgba(0,0,0,0.3)]"
                />
              </div>

              <div className="p-4">
                <h3 className="text-base font-light text-[#373A36] mb-3">
                  {bathroomProducts[showProductModal as 'light1' | 'light2' | 'light3' | 'light4']?.name || ''}
                </h3>
                <button className="w-full px-4 py-2 bg-[#6B8E7F] text-white hover:bg-[#5a7669] transition-all duration-300 text-sm tracking-wide rounded">
                  Explore
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Space Selection Modal - Inside Section */}
        {showSpaceModal && (
          <div className="absolute inset-0 bg-black/90 flex items-center justify-center p-4 z-30">
            <div className="w-full max-w-7xl relative">
              <button
                onClick={() => setShowSpaceModal(false)}
                className="absolute -top-4 right-0 text-white hover:text-gray-300 transition-colors z-10"
              >
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>

              <div className="text-center mb-8">
                <p className="text-white/60 text-xs tracking-widest uppercase mb-2">FRESH IDEAS TO LIGHT YOUR SPACE</p>
                <h2 className="text-white text-4xl md:text-5xl font-light tracking-wider">CHOOSE A SPACE TO EXPLORE</h2>
                <div className="flex justify-center mt-4">
                  <div className="h-0.5 w-16 bg-[#C9A961]"></div>
                </div>
              </div>

              <div className="relative">
                <div 
                  id="space-scroll-container-bathroom"
                  className="overflow-x-auto scrollbar-hide"
                  style={{ scrollbarWidth: 'none' }}
                >
                  <div className="flex gap-6 pb-4">
                    {[...spaces, ...spaces].map((space, idx) => (
                      <button
                        key={`${space.name}-${idx}`}
                        onClick={() => {
                          setShowSpaceModal(false);
                          if (space.name === 'Kitchen') {
                            setActiveSpace('Kitchen');
                          } else if (space.name === 'Bathroom') {
                            setActiveSpace('Bathroom');
                          } else if (space.name === 'Living Room') {
                            setActiveSpace('Livingroom');
                          } else if (space.name === 'Bedroom') {
                            setActiveSpace('Bedroom');
                          }
                        }}
                        className="group flex-shrink-0 cursor-pointer"
                        style={{ width: '400px' }}
                      >
                        <div className="relative overflow-hidden rounded-lg" style={{ height: '300px' }}>
                          <img
                            src={space.image}
                            alt={space.name}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                        </div>
                        <div className="mt-4">
                          <h3 className="text-white text-xl font-light mb-1 tracking-wide">{space.name.toUpperCase()} &gt;</h3>
                          <p className="text-white/70 text-sm">{space.description}</p>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                <button 
                  onClick={() => {
                    const el = document.getElementById('space-scroll-container-bathroom');
                    if (el) {
                      const scrollAmount = el.scrollLeft - 420;
                      if (scrollAmount < 0) {
                        el.scrollTo({ left: el.scrollWidth / 2, behavior: 'auto' });
                      }
                      el.scrollBy({ left: -420, behavior: 'smooth' });
                    }
                  }}
                  className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 w-12 h-12 rounded-full border-2 border-white/40 flex items-center justify-center text-white hover:bg-white/10 transition-all bg-black/50"
                >
                  <ChevronLeft size={20} />
                </button>
                <button 
                  onClick={() => {
                    const el = document.getElementById('space-scroll-container-bathroom');
                    if (el) {
                      const maxScroll = el.scrollWidth - el.clientWidth;
                      if (el.scrollLeft + 420 >= maxScroll) {
                        el.scrollTo({ left: el.scrollWidth / 2 - el.clientWidth, behavior: 'auto' });
                      }
                      el.scrollBy({ left: 420, behavior: 'smooth' });
                    }
                  }}
                  className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 w-12 h-12 rounded-full border-2 border-white/40 flex items-center justify-center text-white hover:bg-white/10 transition-all bg-black/50"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Hotspot Buttons */}
        <div className="absolute inset-0 pointer-events-none z-10">
          {/* Tape Lights (Light 1) + Button - TOP */}
          <button
            onClick={() => setShowProductModal(showProductModal === 'light1' ? null : 'light1')}
            className="absolute pointer-events-auto w-8 h-8 rounded-full bg-white border-2 border-white flex items-center justify-center text-[#6B8E7F] hover:bg-[#6B8E7F] hover:text-white transition-all duration-500 shadow-lg group"
            style={{ top: '9%', left: '72%' }}
          >
            {showProductModal !== 'light1' && (
              <span className="absolute inset-0 rounded-full border-2 border-white animate-slow-pulse"></span>
            )}
            {showProductModal === 'light1' ? (
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="transition-all duration-500">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            ) : (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="transition-all duration-500">
                <path d="M12 5v14M5 12h14" />
              </svg>
            )}
          </button>

          {/* Pendants (Light 2) + Button - MIDDLE */}
          <button
            onClick={() => setShowProductModal(showProductModal === 'light2' ? null : 'light2')}
            className="absolute pointer-events-auto w-8 h-8 rounded-full bg-white border-2 border-white flex items-center justify-center text-[#6B8E7F] hover:bg-[#6B8E7F] hover:text-white transition-all duration-500 shadow-lg group"
            style={{ top: '10%', left: '36%' }}
          >
            {showProductModal !== 'light2' && (
              <span className="absolute inset-0 rounded-full border-2 border-white animate-slow-pulse"></span>
            )}
            {showProductModal === 'light2' ? (
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="transition-all duration-500">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            ) : (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="transition-all duration-500">
                <path d="M12 5v14M5 12h14" />
              </svg>
            )}
          </button>

          {/* Fabio Bollard (Light 3) + Button - BOTTOM RIGHT */}
          <button
            onClick={() => setShowProductModal(showProductModal === 'light3' ? null : 'light3')}
            className="absolute pointer-events-auto w-8 h-8 rounded-full bg-white border-2 border-white flex items-center justify-center text-[#6B8E7F] hover:bg-[#6B8E7F] hover:text-white transition-all duration-500 shadow-lg group"
            style={{ top: '43%', left: '77%' }}
          >
            {showProductModal !== 'light3' && (
              <span className="absolute inset-0 rounded-full border-2 border-white animate-slow-pulse"></span>
            )}
            {showProductModal === 'light3' ? (
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="transition-all duration-500">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            ) : (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="transition-all duration-500">
                <path d="M12 5v14M5 12h14" />
              </svg>
            )}
          </button>

          {/* Downlights (Light 4) + Button - BOTTOM CENTER */}
          <button
            onClick={() => setShowProductModal(showProductModal === 'light4' ? null : 'light4')}
            className="absolute pointer-events-auto w-8 h-8 rounded-full bg-white border-2 border-white flex items-center justify-center text-[#6B8E7F] hover:bg-[#6B8E7F] hover:text-white transition-all duration-500 shadow-lg group"
            style={{ top: '9%', left: '55%' }}
          >
            {showProductModal !== 'light4' && (
              <span className="absolute inset-0 rounded-full border-2 border-white animate-slow-pulse"></span>
            )}
            {showProductModal === 'light4' ? (
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="transition-all duration-500">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            ) : (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="transition-all duration-500">
                <path d="M12 5v14M5 12h14" />
              </svg>
            )}
          </button>
        </div>

        {/* Content */}
        <div className="absolute inset-0 flex flex-col justify-between p-8 md:p-12">
          {/* Top Left Text */}
          <div>
            <p className="text-white text-xs md:text-sm tracking-widest uppercase mb-4">
              FRESH IDEAS TO LIGHT YOUR SPACE
            </p>
            <h2 className="text-white text-5xl md:text-7xl font-light mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
              Bathroom
            </h2>
            <button 
              onClick={() => setShowSpaceModal(true)}
              className="px-6 py-2.5 bg-white text-[#373A36] hover:bg-white/90 transition-all duration-300 text-sm tracking-wide flex items-center gap-2"
            >
              Explore More Spaces
              <ArrowRight size={16} />
            </button>
          </div>

          {/* Bottom Controls */}
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
            {/* Toggle Buttons */}
            <div className="flex flex-wrap gap-8">
              {[
                { label: "Pendants", key: "light1", active: bathroomLights.light1 },
                { label: "Fabio Bollard", key: "light2", active: bathroomLights.light2 },
                { label: "Tape Lights", key: "light3", active: bathroomLights.light3 },
                { label: "Downlights", key: "light4", active: bathroomLights.light4 },
                { label: "Day / Night", key: "dayNight", active: bathroomLights.dayNight },
              ].map((btn) => (
                <div key={btn.key} className="flex flex-col items-center gap-2">
                  <button
                    onClick={() => setBathroomLights(prev => ({ ...prev, [btn.key]: !prev[btn.key as keyof typeof prev] }))}
                    className={`flex flex-col items-center gap-1 px-2 py-3 rounded-full transition-all duration-300 ${
                      btn.active
                        ? "bg-white"
                        : "bg-black/40 backdrop-blur-sm hover:bg-black/50"
                    }`}
                  >
                    {btn.active ? (
                      <>
                        <div
                          className="w-6 h-6 rounded-full border border-[#373A36] bg-[#373A36] flex items-center justify-center shadow-sm"
                        >
                        </div>
                        <div className="text-[#373A36] text-[9px] font-semibold tracking-wide">
                          ON
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="text-white text-[9px] font-semibold tracking-wide">
                          OFF
                        </div>
                        <div
                          className="w-6 h-6 rounded-full border border-white bg-white flex items-center justify-center shadow-sm"
                        >
                        </div>
                      </>
                    )}
                  </button>
                  <span className={`text-sm tracking-wide font-semibold ${
                    btn.active ? "text-white" : "text-white"
                  }`}>
                    {btn.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
        </>
        ) : activeSpace === 'Livingroom' ? (
        <>
        {/* Livingroom Experience */}
        <div className="absolute inset-0">
          <img
            src={livingroomLights.dayNight 
              ? "/Experience/livingroom/day.png"
              : "/Experience/livingroom/night.png"
            }
            alt="Livingroom Base"
            className="w-full h-full object-cover transition-opacity duration-500"
          />
        </div>

        {livingroomLights.light1 && (
          <div className="absolute inset-0" style={{ mixBlendMode: 'lighten' }}>
            <img
              src="/Experience/livingroom/light1.png"
              alt="Light 1"
              className="w-full h-full object-cover"
            />
          </div>
        )}

        {livingroomLights.light2 && (
          <div className="absolute inset-0" style={{ mixBlendMode: 'lighten' }}>
            <img
              src="/Experience/livingroom/light2.png"
              alt="Light 2"
              className="w-full h-full object-cover"
            />
          </div>
        )}

        {livingroomLights.light3 && (
          <div className="absolute inset-0" style={{ mixBlendMode: 'lighten' }}>
            <img
              src="/Experience/livingroom/light3.png"
              alt="Light 3"
              className="w-full h-full object-cover"
            />
          </div>
        )}
        <div className="absolute inset-0 bg-black/20" />

        {/* Product Detail Modal */}
        {showProductModal && activeSpace === 'Livingroom' && (
          <div className="absolute inset-0 flex items-start justify-start z-40 pointer-events-none" style={{ padding: '20px' }}>
            <div 
              className="relative bg-white rounded-md w-64 overflow-hidden shadow-2xl pointer-events-auto"
              style={{
                position: 'absolute',
                top: (() => {
                  const buttonTop = showProductModal === 'light1' ? 6 : showProductModal === 'light2' ? 10 : 45;
                  return `max(20px, min(calc(${buttonTop}% - 120px), calc(100% - 380px)))`;
                })(),
                left: (() => {
                  const buttonLeft = showProductModal === 'light1' ? '45%' : showProductModal === 'light2' ? '75%' : '50%';
                  if (showProductModal === 'light2') {
                    return `max(20px, calc(${buttonLeft} - 240px))`;
                  }
                  return `min(calc(${buttonLeft} + 60px), calc(100% - 244px))`;
                })(),
              }}
            >
              <div className="relative h-48 bg-gray-100 p-4">
                <img
                  src={livingroomProducts[showProductModal as 'light1' | 'light2' | 'light3']?.image || ''}
                  alt={livingroomProducts[showProductModal as 'light1' | 'light2' | 'light3']?.name || ''}
                  className="w-full h-full object-cover shadow-[0_4px_6px_-1px_rgba(0,0,0,0.3)]"
                />
              </div>

              <div className="p-4">
                <h3 className="text-base font-light text-[#373A36] mb-3">
                  {livingroomProducts[showProductModal as 'light1' | 'light2' | 'light3']?.name || ''}
                </h3>
                <button className="w-full px-4 py-2 bg-[#6B8E7F] text-white hover:bg-[#5a7669] transition-all duration-300 text-sm tracking-wide rounded">
                  Explore
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Hotspot Buttons */}
        <div className="absolute inset-0 pointer-events-none z-10">
          {/* Celina (Light 1) + Button */}
          <button
            onClick={() => setShowProductModal(showProductModal === 'light1' ? null : 'light1')}
            className="absolute pointer-events-auto w-8 h-8 rounded-full bg-white border-2 border-white flex items-center justify-center text-[#6B8E7F] hover:bg-[#6B8E7F] hover:text-white transition-all duration-500 shadow-lg group"
            style={{ top: '6%', left: '45%' }}
          >
            {showProductModal !== 'light1' && (
              <span className="absolute inset-0 rounded-full border-2 border-white animate-slow-pulse"></span>
            )}
            {showProductModal === 'light1' ? (
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="transition-all duration-500">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            ) : (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="transition-all duration-500">
                <path d="M12 5v14M5 12h14" />
              </svg>
            )}
          </button>

          {/* Shine Wall Spot (Light 2) + Button */}
          <button
            onClick={() => setShowProductModal(showProductModal === 'light2' ? null : 'light2')}
            className="absolute pointer-events-auto w-8 h-8 rounded-full bg-white border-2 border-white flex items-center justify-center text-[#6B8E7F] hover:bg-[#6B8E7F] hover:text-white transition-all duration-500 shadow-lg group"
            style={{ top: '10%', left: '75%' }}
          >
            {showProductModal !== 'light2' && (
              <span className="absolute inset-0 rounded-full border-2 border-white animate-slow-pulse"></span>
            )}
            {showProductModal === 'light2' ? (
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="transition-all duration-500">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            ) : (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="transition-all duration-500">
                <path d="M12 5v14M5 12h14" />
              </svg>
            )}
          </button>

          {/* Tape Lights (Light 3) + Button */}
          <button
            onClick={() => setShowProductModal(showProductModal === 'light3' ? null : 'light3')}
            className="absolute pointer-events-auto w-8 h-8 rounded-full bg-white border-2 border-white flex items-center justify-center text-[#6B8E7F] hover:bg-[#6B8E7F] hover:text-white transition-all duration-500 shadow-lg group"
            style={{ top: '45%', left: '50%' }}
          >
            {showProductModal !== 'light3' && (
              <span className="absolute inset-0 rounded-full border-2 border-white animate-slow-pulse"></span>
            )}
            {showProductModal === 'light3' ? (
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="transition-all duration-500">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            ) : (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="transition-all duration-500">
                <path d="M12 5v14M5 12h14" />
              </svg>
            )}
          </button>
        </div>

        {showSpaceModal && (
          <div className="absolute inset-0 bg-black/90 flex items-center justify-center p-4 z-30">
            <div className="w-full max-w-7xl relative">
              <button
                onClick={() => setShowSpaceModal(false)}
                className="absolute -top-4 right-0 text-white hover:text-gray-300 transition-colors z-10"
              >
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>

              <div className="text-center mb-8">
                <p className="text-white/60 text-xs tracking-widest uppercase mb-2">FRESH IDEAS TO LIGHT YOUR SPACE</p>
                <h2 className="text-white text-4xl md:text-5xl font-light tracking-wider">CHOOSE A SPACE TO EXPLORE</h2>
                <div className="flex justify-center mt-4">
                  <div className="h-0.5 w-16 bg-[#C9A961]"></div>
                </div>
              </div>

              <div className="relative">
                <div 
                  id="space-scroll-container-livingroom"
                  className="overflow-x-auto scrollbar-hide"
                  style={{ scrollbarWidth: 'none' }}
                >
                  <div className="flex gap-6 pb-4">
                    {[...spaces, ...spaces].map((space, idx) => (
                      <button
                        key={`${space.name}-${idx}`}
                        onClick={() => {
                          setShowSpaceModal(false);
                          if (space.name === 'Kitchen') {
                            setActiveSpace('Kitchen');
                          } else if (space.name === 'Bathroom') {
                            setActiveSpace('Bathroom');
                          } else if (space.name === 'Living Room') {
                            setActiveSpace('Livingroom');
                          } else if (space.name === 'Bedroom') {
                            setActiveSpace('Bedroom');
                          }
                        }}
                        className="group flex-shrink-0 cursor-pointer"
                        style={{ width: '400px' }}
                      >
                        <div className="relative overflow-hidden rounded-lg" style={{ height: '300px' }}>
                          <img
                            src={space.image}
                            alt={space.name}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                        </div>
                        <div className="mt-4">
                          <h3 className="text-white text-xl font-light mb-1 tracking-wide">{space.name.toUpperCase()} &gt;</h3>
                          <p className="text-white/70 text-sm">{space.description}</p>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                <button 
                  onClick={() => {
                    const el = document.getElementById('space-scroll-container-livingroom');
                    if (el) {
                      const scrollAmount = el.scrollLeft - 420;
                      if (scrollAmount < 0) {
                        el.scrollTo({ left: el.scrollWidth / 2, behavior: 'auto' });
                      }
                      el.scrollBy({ left: -420, behavior: 'smooth' });
                    }
                  }}
                  className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 w-12 h-12 rounded-full border-2 border-white/40 flex items-center justify-center text-white hover:bg-white/10 transition-all bg-black/50"
                >
                  <ChevronLeft size={20} />
                </button>
                <button 
                  onClick={() => {
                    const el = document.getElementById('space-scroll-container-livingroom');
                    if (el) {
                      const maxScroll = el.scrollWidth - el.clientWidth;
                      if (el.scrollLeft + 420 >= maxScroll) {
                        el.scrollTo({ left: el.scrollWidth / 2 - el.clientWidth, behavior: 'auto' });
                      }
                      el.scrollBy({ left: 420, behavior: 'smooth' });
                    }
                  }}
                  className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 w-12 h-12 rounded-full border-2 border-white/40 flex items-center justify-center text-white hover:bg-white/10 transition-all bg-black/50"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          </div>
        )}

        <div className="absolute inset-0 flex flex-col justify-between p-8 md:p-12">
          <div>
            <p className="text-white text-xs md:text-sm tracking-widest uppercase mb-4">
              FRESH IDEAS TO LIGHT YOUR SPACE
            </p>
            <h2 className="text-white text-5xl md:text-7xl font-light mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
              Living Room
            </h2>
            <button 
              onClick={() => setShowSpaceModal(true)}
              className="px-6 py-2.5 bg-white text-[#373A36] hover:bg-white/90 transition-all duration-300 text-sm tracking-wide flex items-center gap-2"
            >
              Explore More Spaces
              <ArrowRight size={16} />
            </button>
          </div>

          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
            <div className="flex flex-wrap gap-8">
              {[
                { label: "Shine Wall Spot", key: "light1", active: livingroomLights.light1 },
                { label: "Tape Lights", key: "light2", active: livingroomLights.light2 },
                { label: "Celina", key: "light3", active: livingroomLights.light3 },
                { label: "Day / Night", key: "dayNight", active: livingroomLights.dayNight },
              ].map((btn) => (
                <div key={btn.key} className="flex flex-col items-center gap-2">
                  <button
                    onClick={() => setLivingroomLights(prev => ({ ...prev, [btn.key]: !prev[btn.key as keyof typeof prev] }))}
                    className={`flex flex-col items-center gap-1 px-2 py-3 rounded-full transition-all duration-300 ${
                      btn.active
                        ? "bg-white"
                        : "bg-black/40 backdrop-blur-sm hover:bg-black/50"
                    }`}
                  >
                    {btn.active ? (
                      <>
                        <div
                          className="w-6 h-6 rounded-full border border-[#373A36] bg-[#373A36] flex items-center justify-center shadow-sm"
                        >
                        </div>
                        <div className="text-[#373A36] text-[9px] font-semibold tracking-wide">
                          ON
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="text-white text-[9px] font-semibold tracking-wide">
                          OFF
                        </div>
                        <div
                          className="w-6 h-6 rounded-full border border-white bg-white flex items-center justify-center shadow-sm"
                        >
                        </div>
                      </>
                    )}
                  </button>
                  <span className={`text-sm tracking-wide font-semibold ${
                    btn.active ? "text-white" : "text-white"
                  }`}>
                    {btn.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
        </>
        ) : activeSpace === 'Bedroom' ? (
        <>
        {/* Bedroom Experience */}
        <div className="absolute inset-0">
          <img
            src={bedroomLights.dayNight 
              ? "/Experience/badroom/day.png"
              : "/Experience/badroom/night.png"
            }
            alt="Bedroom Base"
            className="w-full h-full object-cover transition-opacity duration-500"
          />
        </div>

        {bedroomLights.light1 && (
          <div className="absolute inset-0" style={{ mixBlendMode: 'lighten' }}>
            <img
              src="/Experience/badroom/light1.png"
              alt="Light 1"
              className="w-full h-full object-cover"
            />
          </div>
        )}

        {bedroomLights.light2 && (
          <div className="absolute inset-0" style={{ mixBlendMode: 'lighten' }}>
            <img
              src="/Experience/badroom/light2.png"
              alt="Light 2"
              className="w-full h-full object-cover"
            />
          </div>
        )}

        {bedroomLights.light3 && (
          <div className="absolute inset-0" style={{ mixBlendMode: 'lighten' }}>
            <img
              src="/Experience/badroom/light3.png"
              alt="Light 3"
              className="w-full h-full object-cover"
            />
          </div>
        )}
        <div className="absolute inset-0 bg-black/20" />

        {/* Product Detail Modal */}
        {showProductModal && activeSpace === 'Bedroom' && (
          <div className="absolute inset-0 flex items-start justify-start z-40 pointer-events-none" style={{ padding: '20px' }}>
            <div 
              className="relative bg-white rounded-md w-64 overflow-hidden shadow-2xl pointer-events-auto"
              style={{
                position: 'absolute',
                top: (() => {
                  const buttonTop = showProductModal === 'light1' ? 80 : showProductModal === 'light2' ? 55 : 12;
                  return `max(20px, min(calc(${buttonTop}% - 120px), calc(100% - 380px)))`;
                })(),
                left: (() => {
                  const buttonLeft = showProductModal === 'light1' ? '70%' : showProductModal === 'light2' ? '80%' : '52%';
                  if (showProductModal === 'light1' || showProductModal === 'light2') {
                    return `max(20px, calc(${buttonLeft} - 240px))`;
                  }
                  return `min(calc(${buttonLeft} + 60px), calc(100% - 244px))`;
                })(),
              }}
            >
              <div className="relative h-48 bg-gray-100 p-4">
                <img
                  src={bedroomProducts[showProductModal as 'light1' | 'light2' | 'light3']?.image || ''}
                  alt={bedroomProducts[showProductModal as 'light1' | 'light2' | 'light3']?.name || ''}
                  className="w-full h-full object-cover shadow-[0_4px_6px_-1px_rgba(0,0,0,0.3)]"
                />
              </div>

              <div className="p-4">
                <h3 className="text-base font-light text-[#373A36] mb-3">
                  {bedroomProducts[showProductModal as 'light1' | 'light2' | 'light3']?.name || ''}
                </h3>
                <button className="w-full px-4 py-2 bg-[#6B8E7F] text-white hover:bg-[#5a7669] transition-all duration-300 text-sm tracking-wide rounded">
                  Explore
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Hotspot Buttons */}
        <div className="absolute inset-0 pointer-events-none z-10">
          {/* Tape Lights (Light 1) + Button */}
          <button
            onClick={() => setShowProductModal(showProductModal === 'light1' ? null : 'light1')}
            className="absolute pointer-events-auto w-8 h-8 rounded-full bg-white border-2 border-white flex items-center justify-center text-[#6B8E7F] hover:bg-[#6B8E7F] hover:text-white transition-all duration-500 shadow-lg group"
            style={{ top: '80%', left: '70%' }}
          >
            {showProductModal !== 'light1' && (
              <span className="absolute inset-0 rounded-full border-2 border-white animate-slow-pulse"></span>
            )}
            {showProductModal === 'light1' ? (
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="transition-all duration-500">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            ) : (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="transition-all duration-500">
                <path d="M12 5v14M5 12h14" />
              </svg>
            )}
          </button>

          {/* Pendants (Light 2) + Button */}
          <button
            onClick={() => setShowProductModal(showProductModal === 'light2' ? null : 'light2')}
            className="absolute pointer-events-auto w-8 h-8 rounded-full bg-white border-2 border-white flex items-center justify-center text-[#6B8E7F] hover:bg-[#6B8E7F] hover:text-white transition-all duration-500 shadow-lg group"
            style={{ top: '55%', left: '80%' }}
          >
            {showProductModal !== 'light2' && (
              <span className="absolute inset-0 rounded-full border-2 border-white animate-slow-pulse"></span>
            )}
            {showProductModal === 'light2' ? (
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="transition-all duration-500">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            ) : (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="transition-all duration-500">
                <path d="M12 5v14M5 12h14" />
              </svg>
            )}
          </button>

          {/* Downlights (Light 3) + Button */}
          <button
            onClick={() => setShowProductModal(showProductModal === 'light3' ? null : 'light3')}
            className="absolute pointer-events-auto w-8 h-8 rounded-full bg-white border-2 border-white flex items-center justify-center text-[#6B8E7F] hover:bg-[#6B8E7F] hover:text-white transition-all duration-500 shadow-lg group"
            style={{ top: '12%', left: '52%' }}
          >
            {showProductModal !== 'light3' && (
              <span className="absolute inset-0 rounded-full border-2 border-white animate-slow-pulse"></span>
            )}
            {showProductModal === 'light3' ? (
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="transition-all duration-500">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            ) : (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="transition-all duration-500">
                <path d="M12 5v14M5 12h14" />
              </svg>
            )}
          </button>
        </div>

        {showSpaceModal && (
          <div className="absolute inset-0 bg-black/90 flex items-center justify-center p-4 z-30">
            <div className="w-full max-w-7xl relative">
              <button
                onClick={() => setShowSpaceModal(false)}
                className="absolute -top-4 right-0 text-white hover:text-gray-300 transition-colors z-10"
              >
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>

              <div className="text-center mb-8">
                <p className="text-white/60 text-xs tracking-widest uppercase mb-2">FRESH IDEAS TO LIGHT YOUR SPACE</p>
                <h2 className="text-white text-4xl md:text-5xl font-light tracking-wider">CHOOSE A SPACE TO EXPLORE</h2>
                <div className="flex justify-center mt-4">
                  <div className="h-0.5 w-16 bg-[#C9A961]"></div>
                </div>
              </div>

              <div className="relative">
                <div 
                  id="space-scroll-container-bedroom"
                  className="overflow-x-auto scrollbar-hide"
                  style={{ scrollbarWidth: 'none' }}
                >
                  <div className="flex gap-6 pb-4">
                    {[...spaces, ...spaces].map((space, idx) => (
                      <button
                        key={`${space.name}-${idx}`}
                        onClick={() => {
                          setShowSpaceModal(false);
                          if (space.name === 'Kitchen') {
                            setActiveSpace('Kitchen');
                          } else if (space.name === 'Bathroom') {
                            setActiveSpace('Bathroom');
                          } else if (space.name === 'Living Room') {
                            setActiveSpace('Livingroom');
                          } else if (space.name === 'Bedroom') {
                            setActiveSpace('Bedroom');
                          }
                        }}
                        className="group flex-shrink-0 cursor-pointer"
                        style={{ width: '400px' }}
                      >
                        <div className="relative overflow-hidden rounded-lg" style={{ height: '300px' }}>
                          <img
                            src={space.image}
                            alt={space.name}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                        </div>
                        <div className="mt-4">
                          <h3 className="text-white text-xl font-light mb-1 tracking-wide">{space.name.toUpperCase()} &gt;</h3>
                          <p className="text-white/70 text-sm">{space.description}</p>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                <button 
                  onClick={() => {
                    const el = document.getElementById('space-scroll-container-bedroom');
                    if (el) {
                      const scrollAmount = el.scrollLeft - 420;
                      if (scrollAmount < 0) {
                        el.scrollTo({ left: el.scrollWidth / 2, behavior: 'auto' });
                      }
                      el.scrollBy({ left: -420, behavior: 'smooth' });
                    }
                  }}
                  className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 w-12 h-12 rounded-full border-2 border-white/40 flex items-center justify-center text-white hover:bg-white/10 transition-all bg-black/50"
                >
                  <ChevronLeft size={20} />
                </button>
                <button 
                  onClick={() => {
                    const el = document.getElementById('space-scroll-container-bedroom');
                    if (el) {
                      const maxScroll = el.scrollWidth - el.clientWidth;
                      if (el.scrollLeft + 420 >= maxScroll) {
                        el.scrollTo({ left: el.scrollWidth / 2 - el.clientWidth, behavior: 'auto' });
                      }
                      el.scrollBy({ left: 420, behavior: 'smooth' });
                    }
                  }}
                  className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 w-12 h-12 rounded-full border-2 border-white/40 flex items-center justify-center text-white hover:bg-white/10 transition-all bg-black/50"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          </div>
        )}

        <div className="absolute inset-0 flex flex-col justify-between p-8 md:p-12">
          <div>
            <p className="text-white text-xs md:text-sm tracking-widest uppercase mb-4">
              FRESH IDEAS TO LIGHT YOUR SPACE
            </p>
            <h2 className="text-white text-5xl md:text-7xl font-light mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
              Bedroom
            </h2>
            <button 
              onClick={() => setShowSpaceModal(true)}
              className="px-6 py-2.5 bg-white text-[#373A36] hover:bg-white/90 transition-all duration-300 text-sm tracking-wide flex items-center gap-2"
            >
              Explore More Spaces
              <ArrowRight size={16} />
            </button>
          </div>

          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
            <div className="flex flex-wrap gap-8">
              {[
                { label: "Downlights", key: "light1", active: bedroomLights.light1 },
                { label: "Pendants", key: "light2", active: bedroomLights.light2 },
                { label: "Tape Lights", key: "light3", active: bedroomLights.light3 },
                { label: "Day / Night", key: "dayNight", active: bedroomLights.dayNight },
              ].map((btn) => (
                <div key={btn.key} className="flex flex-col items-center gap-2">
                  <button
                    onClick={() => setBedroomLights(prev => ({ ...prev, [btn.key]: !prev[btn.key as keyof typeof prev] }))}
                    className={`flex flex-col items-center gap-1 px-2 py-3 rounded-full transition-all duration-300 ${
                      btn.active
                        ? "bg-white"
                        : "bg-black/40 backdrop-blur-sm hover:bg-black/50"
                    }`}
                  >
                    {btn.active ? (
                      <>
                        <div
                          className="w-6 h-6 rounded-full border border-[#373A36] bg-[#373A36] flex items-center justify-center shadow-sm"
                        >
                        </div>
                        <div className="text-[#373A36] text-[9px] font-semibold tracking-wide">
                          ON
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="text-white text-[9px] font-semibold tracking-wide">
                          OFF
                        </div>
                        <div
                          className="w-6 h-6 rounded-full border border-white bg-white flex items-center justify-center shadow-sm"
                        >
                        </div>
                      </>
                    )}
                  </button>
                  <span className={`text-sm tracking-wide font-semibold ${
                    btn.active ? "text-white" : "text-white"
                  }`}>
                    {btn.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
        </>
        ) : null}
      </section>

      {/* Statistics Counter - Glassmorphism */}
      <section className="py-16 bg-gradient-to-br from-[#F7F7F0] via-[#EEF3F1] to-[#F7F7F0] relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-[#C9A961]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-[#6B8E7F]/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { number: 10, suffix: "+", label: "Years in Industry", duration: 2000 },
              { number: 1000, suffix: "+", label: "Distributors", duration: 2500 },
              { number: 100000, suffix: "+", label: "Products Production per Day", duration: 3000 },
              { number: 500, suffix: "+", label: "Commercial Projects", duration: 2500 },
            ].map((stat, idx) => (
              <div 
                key={idx} 
                className="counter-card relative group"
                ref={(el) => {
                  if (!el) return;
                  const observer = new IntersectionObserver(
                    ([entry]) => {
                      if (entry.isIntersecting) {
                        el.classList.add('visible');
                        
                        // Counter animation
                        const counter = el.querySelector('.counter-number');
                        if (counter && !counter.classList.contains('counted')) {
                          counter.classList.add('counted');
                          let current = 0;
                          const increment = stat.number / (stat.duration / 16);
                          const timer = setInterval(() => {
                            current += increment;
                            if (current >= stat.number) {
                              counter.textContent = stat.number.toLocaleString();
                              clearInterval(timer);
                            } else {
                              counter.textContent = Math.floor(current).toLocaleString();
                            }
                          }, 16);
                        }
                        observer.disconnect();
                      }
                    },
                    { threshold: 0.3 }
                  );
                  observer.observe(el);
                }}
              >
                {/* Glassmorphism card */}
                <div className="relative bg-white/40 backdrop-blur-xl border border-white/60 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 overflow-hidden">
                  {/* Shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Content */}
                  <div className="relative z-10 text-center">
                    <div className="flex items-center justify-center mb-3">
                      <h3 className="text-4xl md:text-5xl font-light text-[#C9A961] tracking-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
                        <span className="counter-number">0</span>
                        <span className="counter-suffix">{stat.suffix}</span>
                      </h3>
                    </div>
                    <p className="text-[#373A36] text-sm font-medium tracking-wide uppercase">{stat.label}</p>
                  </div>
                  
                  {/* Bottom accent line */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#C9A961] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Us */}
      <section className="relative h-[650px] md:h-[90vh] overflow-hidden mt-16">
        <img
          src="/centuryhouse33.png"
          alt="About Us"
          className="w-full h-full object-cover"
          style={{ objectPosition: "20% 30%" }}
        />
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Left: Dynamic Text — image style layout */}
        <div className="absolute inset-0 flex items-start" style={{ paddingLeft: "5%", paddingRight: "50%", paddingTop: "4%" }}>
          <div key={activeAbout} className="animate-fadeSlideIn">
            <h2 className="text-white leading-tight mb-3"
                style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2rem, 4vw, 3.5rem)", fontWeight: 700 }}>
              <span style={{ fontWeight: 300 }}>ABOUT </span>Magik Lighting
            </h2>
            
            <div className="text-white/90 leading-relaxed" style={{ maxWidth: "520px" }}>
              {aboutItems[safeAbout].description.split("\n\n").map((para, i) => (
                <p key={i} style={{ fontSize: "16px", marginBottom: "8px" }}>{para}</p>
              ))}
            </div>
            <a
              href="#"
              className="inline-block mt-6 text-white border border-white hover:bg-white hover:text-[#373A36] transition-all duration-300"
              style={{ fontSize: "14px", padding: "10px 32px", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase" }}
            >
              Read More
            </a>
          </div>
        </div>

      </section>

      {/* Why Choose Magik Lighting */}
      <section className="py-10 md:py-14 bg-[#F7F7F0]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <p className="text-[#C9A961] text-sm tracking-widest uppercase mb-3">Our Advantage</p>
            <h2 className="text-3xl md:text-5xl font-serif font-light tracking-widest text-[#373A36] leading-tight">
              Why Choose <strong className="font-bold">Magik Lighting</strong>
            </h2>
            <div className="flex justify-center mt-4">
              <div className="h-1 w-16 bg-[#6B8E7F] rounded-full"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-6">
            {[
              {
                icon: <svg className="w-10 h-10 text-[#C9A961]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" /></svg>,
                title: "ENERGY EFFICIENT",
                desc: "Up to 80% less energy than traditional lighting.",
              },
              {
                icon: <svg className="w-10 h-10 text-[#C9A961]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" /></svg>,
                title: "ISO CERTIFIED QUALITY",
                desc: "ISO, CE & RoHS certified for international standards.",
                featured: true,
              },
              {
                icon: <svg className="w-10 h-10 text-[#C9A961]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" /></svg>,
                title: "PAN-INDIA NETWORK",
                desc: "10 Years in Industry | 1000+ Distributors | 1 Lakh+ products per day.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className={`flex flex-col items-center text-center p-8 rounded-2xl border transition-all duration-300 card-animate border-[#E8E8E0] shadow-sm hover:shadow-md hover:border-[#373A36]`}
                ref={(el) => {
                  if (!el) return;
                  const observer = new IntersectionObserver(([entry]) => {
                    if (entry.isIntersecting) { setTimeout(() => el.classList.add('visible'), idx * 100); observer.disconnect(); }
                  }, { threshold: 0.1 });
                  observer.observe(el);
                }}
              >
                <div className="mb-6">{item.icon}</div>
                <h3 className="text-base font-bold text-[#373A36] mb-3 tracking-widest">{item.title}</h3>
                <p className="text-[#666] text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              {
                icon: <svg className="w-10 h-10 text-[#C9A961]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 3v1.5M3 21v-6m0 0l2.77-.693a9 9 0 016.208.682l.108.054a9 9 0 006.086.71l3.114-.732a48.524 48.524 0 01-.005-10.499l-3.11.732a9 9 0 01-6.085-.711l-.108-.054a9 9 0 00-6.208-.682L3 4.5M3 15V4.5" /></svg>,
                title: "MADE IN INDIA",
                desc: "State-of-the-art facility with world-class machinery.",
              },
              {
                icon: <svg className="w-10 h-10 text-[#C9A961]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" /></svg>,
                title: "END-TO-END SOLUTIONS",
                desc: "Complete lighting solutions for every project scale.",
              },
              {
                icon: <svg className="w-10 h-10 text-[#C9A961]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" /></svg>,
                title: "SUSTAINABLE FUTURE",
                desc: "Eco-friendly materials for a greener tomorrow.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center text-center p-8 rounded-2xl border border-[#E8E8E0] shadow-sm hover:shadow-md hover:border-[#373A36] transition-all duration-300 card-animate"
                ref={(el) => {
                  if (!el) return;
                  const observer = new IntersectionObserver(([entry]) => {
                    if (entry.isIntersecting) { setTimeout(() => el.classList.add('visible'), idx * 100); observer.disconnect(); }
                  }, { threshold: 0.1 });
                  observer.observe(el);
                }}
              >
                <div className="mb-6">{item.icon}</div>
                <h3 className="text-base font-bold text-[#373A36] mb-3 tracking-widest">{item.title}</h3>
                <p className="text-[#666] text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* B2B Solutions */}
      <section className="pt-2 pb-0 bg-white">
        {/* Header */}
        <div className="mb-0 pt-8 text-center container mx-auto px-4">
          <p className="text-[#C9A961] text-xs tracking-widest uppercase mb-2">B2B Solutions</p>
          <h2 className="text-4xl md:text-5xl font-serif font-light tracking-widest text-[#373A36] mb-2 leading-tight">
            Projects We've Illuminated
          </h2>
          <div className="flex justify-center mb-4">
            <div className="h-1 w-16 bg-[#6B8E7F] rounded-full"></div>
          </div>
          <p className="text-[#666] text-base max-w-xl leading-relaxed mx-auto">
            Trusted by builders, contractors, and enterprises across India —
            delivering end-to-end lighting solutions for every scale.
          </p>
        </div>

        {/* Carousel: full width, no clipping */}
        <div className="w-full">
          {(() => {
            const cards = [
              { img: "/starcementplant2.png",                    title: "Star Cement Plant",       location: "Meghalaya",   objectPosition: "center center" },
              { img: "/The Agri Horticulture, Kolkata2.png",    title: "The Agri Horticulture",   location: "Kolkata",     objectPosition: "center center" },
              { img: "/Kolkata Airport2.png",                   title: "Kolkata Airport",         location: "Kolkata",     objectPosition: "center center" },
              { img: "/Durgapur Steel Plant, West Bengal2.png", title: "Durgapur Steel Plant",    location: "West Bengal", objectPosition: "center center" },
              { img: "/indorr lighting2.png",                    title: "Eden Gardens Club House", location: "Kolkata",     objectPosition: "center center" },
              { img: "/towerimage2.png",                         title: "Air Traffic Control",     location: "Bhubaneswar", objectPosition: "center 40%"   },
            ];
            return <B2BCarousel cards={cards} />;
          })()}
        </div>
      </section>

      {/* OUR PARTNERS / Magik Clients */}
      <MagikClients />

      {/* Client Love */}
      <ClientLove />

      {/* Distributor Network */}
      <section className="w-full relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #F5F0E8 0%, #EEF3F1 40%, #F0EDE6 70%, #F5F0E8 100%)' }}>

        {/* Decorative background elements */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          {/* Gold glow top center */}
          <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full opacity-30" style={{ background: 'radial-gradient(ellipse, #C9A961 0%, transparent 70%)' }} />
          {/* Green glow bottom left */}
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full opacity-20" style={{ background: 'radial-gradient(ellipse, #6B8E7F 0%, transparent 70%)' }} />
          {/* Gold glow bottom right */}
          <div className="absolute bottom-0 right-0 w-[300px] h-[300px] rounded-full opacity-15" style={{ background: 'radial-gradient(ellipse, #C9A961 0%, transparent 70%)' }} />
          {/* Subtle dot grid */}
          <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: 'radial-gradient(circle, #C9A961 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
          {/* Diagonal light streak */}
          <div className="absolute top-0 left-1/3 w-px h-full opacity-20" style={{ background: 'linear-gradient(to bottom, transparent, #C9A961, transparent)' }} />
          <div className="absolute top-0 right-1/3 w-px h-full opacity-10" style={{ background: 'linear-gradient(to bottom, transparent, #6B8E7F, transparent)' }} />
        </div>

        <div className="relative z-10 container mx-auto px-6 py-8 md:py-12">

          {/* Top label */}
          <div className="text-center mb-6">
            <span className="inline-flex items-center gap-2 bg-[#373A36]/10 border border-[#373A36]/20 text-[#373A36] text-[10px] tracking-[0.3em] uppercase px-5 py-2 rounded-full font-semibold mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C9A961] animate-pulse" />
              Join Our Network
            </span>

          </div>

          {/* Main card */}
          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-3xl shadow-[0_8px_60px_rgba(0,0,0,0.08)] overflow-hidden border border-[#E8E8E0]">
              <div className="flex flex-col lg:flex-row">

                {/* Left: Benefits panel */}
                <div className="lg:w-2/5 bg-gradient-to-br from-[#373A36] to-[#2a2d2a] p-10 md:p-14 flex flex-col justify-between relative overflow-hidden">
                  {/* Decorative circle */}
                  <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full border border-white/5" />
                  <div className="absolute -bottom-10 -left-10 w-48 h-48 rounded-full border border-white/5" />
                  <div className="absolute top-1/2 right-0 w-32 h-32 bg-[#6B8E7F]/10 rounded-full blur-3xl" />

                  <div className="relative z-10">
                    <p className="text-[#C9A961] text-[10px] tracking-[0.3em] uppercase font-bold mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>Why Partner With Us</p>
                    <h3 className="text-white text-2xl md:text-3xl font-light leading-snug mb-8" style={{ fontFamily: "'Playfair Display', serif" }}>
                      Partner with <strong className="font-bold">Eastern India's</strong> Fastest Growing Lighting Brand
                    </h3>

                    <div className="space-y-5">
                      {[
                        { icon: '◈', title: "Eastern India's Largest LED Manufacturing Facility", desc: '' },
                        { icon: '◈', title: 'NABL Certified Lab & In-House R&D Centre', desc: '' },
                        { icon: '◈', title: '750+ Top Quality Products', desc: '' },
                        { icon: '◈', title: 'High ROI', desc: '' },
                      ].map((item, i) => (
                        <div key={i} className="flex items-start gap-4 group">
                          <span className="text-[#C9A961] text-lg mt-0.5 flex-shrink-0">{item.icon}</span>
                          <div>
                            <p className="text-white text-sm font-semibold tracking-wide" style={{ fontFamily: "'Lora', serif" }}>{item.title}</p>
                            <p className="text-white/40 text-xs mt-0.5" style={{ fontFamily: "'Lora', serif" }}>{item.desc}</p>
                          </div>
                        </div>
                      ))}}
                    </div>
                  </div>

                  {/* Contact info */}
                  <div className="relative z-10 mt-10 pt-8 border-t border-white/10 space-y-3">
                    <div className="flex items-center gap-3">
                      <Mail size={14} className="text-[#C9A961] flex-shrink-0" />
                      <span className="text-white/60 text-xs" style={{ fontFamily: "'Lora', serif" }}>Info@magiklights.com</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone size={14} className="text-[#C9A961] flex-shrink-0" />
                      <span className="text-white/60 text-xs" style={{ fontFamily: "'Lora', serif" }}>Toll Free: 18003451345</span>
                    </div>
                  </div>
                </div>

                {/* Right: Form */}
                <div className="lg:w-3/5 p-10 md:p-14">
                  <h4 className="text-3xl md:text-4xl font-light text-[#373A36] mb-8" style={{ fontFamily: "'Lora', serif" }}>
                    Become a <strong className="font-bold">Distributor</strong>
                  </h4>

                  <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {[
                        { label: 'Full Name', type: 'text', placeholder: 'Your full name' },
                        { label: 'Company Name', type: 'text', placeholder: 'Your company' },
                        { label: 'Email Address', type: 'email', placeholder: 'you@company.com' },
                        { label: 'Phone Number', type: 'tel', placeholder: '+91 00000 00000' },
                      ].map((field) => (
                        <div key={field.label} className="group">
                          <label className="text-[#373A36] text-[10px] uppercase tracking-widest font-bold block mb-2" style={{ fontFamily: "'Proxima Nova', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" }}>{field.label}</label>
                          <input
                            type={field.type}
                            placeholder={field.placeholder}
                            className="w-full bg-[#F7F7F0] border border-[#E8E8E0] rounded-xl px-4 py-3 text-sm text-[#373A36] placeholder:text-[#aaa] focus:outline-none focus:border-[#6B8E7F] focus:bg-white transition-all duration-300"
                          />
                        </div>
                      ))}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="text-[#373A36] text-[10px] uppercase tracking-widest font-bold block mb-2" style={{ fontFamily: "'Proxima Nova', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" }}>City / State</label>
                        <input
                          type="text"
                          placeholder="Where are you based?"
                          className="w-full bg-[#F7F7F0] border border-[#E8E8E0] rounded-xl px-4 py-3 text-sm text-[#373A36] placeholder:text-[#aaa] focus:outline-none focus:border-[#6B8E7F] focus:bg-white transition-all duration-300"
                        />
                      </div>
                      <div>
                        <label className="text-[#373A36] text-[10px] uppercase tracking-widest font-bold block mb-2" style={{ fontFamily: "'Proxima Nova', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" }}>Investment</label>
                        <input
                          type="text"
                          placeholder="e.g. ₹1L – ₹5L"
                          className="w-full bg-[#F7F7F0] border border-[#E8E8E0] rounded-xl px-4 py-3 text-sm text-[#373A36] placeholder:text-[#aaa] focus:outline-none focus:border-[#6B8E7F] focus:bg-white transition-all duration-300"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="text-[#373A36] text-[10px] uppercase tracking-widest font-bold block mb-2" style={{ fontFamily: "'Proxima Nova', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" }}>Distribution Area</label>
                        <input
                          type="text"
                          placeholder="e.g. West Bengal, Odisha"
                          className="w-full bg-[#F7F7F0] border border-[#E8E8E0] rounded-xl px-4 py-3 text-sm text-[#373A36] placeholder:text-[#aaa] focus:outline-none focus:border-[#6B8E7F] focus:bg-white transition-all duration-300"
                        />
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-2">
                      <p className="text-[#999] text-xs" style={{ fontFamily: "'Proxima Nova', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" }}>We'll get back to you within 24 hours.</p>
                      <button
                        type="submit"
                        className="flex items-center gap-3 bg-[#373A36] text-white px-8 py-3.5 rounded-xl text-sm font-bold tracking-widest uppercase hover:bg-[#6B8E7F] transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 group"
                      >
                        Submit
                        <Send size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                      </button>
                    </div>
                  </form>
                </div>

              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Magik Blog */}
      <MagikBlog />

      {/* Instagram Reels */}
      <InstagramReels />

      {/* Find a Store — Redesigned Light */}
      <section className="w-full relative overflow-hidden bg-[#EEF3F1]" style={{ minHeight: '520px' }}>
        {/* Ambient glow blobs */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full bg-[#C9A961]/10 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full bg-[#6B8E7F]/10 blur-[100px] pointer-events-none" />

        {/* Subtle dot-grid texture */}
        <div className="absolute inset-0 opacity-[0.4] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #C9A961 1px, transparent 1px)', backgroundSize: '32px 32px' }} />

        <div className="relative z-10 container mx-auto px-6 py-8 md:py-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

            {/* LEFT */}
            <div className="lg:w-[42%] w-full">
              {/* Label */}
              <div className="inline-flex items-center gap-2 bg-[#C9A961]/10 border border-[#C9A961]/30 px-4 py-1.5 rounded-full mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C9A961] animate-pulse" />
                <span className="text-[#C9A961] text-[10px] tracking-[0.3em] uppercase font-semibold">1000+ Stores Across India</span>
              </div>

              {/* Heading */}
              <h2 className="text-[#373A36] text-5xl md:text-6xl font-light leading-tight mb-3" style={{ fontFamily: "'Lora', serif" }}>
                Find Your<br />
                <span className="text-[#C9A961]">Nearest</span> Store
              </h2>
              <div className="h-px w-16 bg-[#6B8E7F] mb-8" />

              {/* City pills */}
              <div className="flex flex-wrap gap-2 mb-8">
                {['Kolkata', 'Mumbai', 'Delhi', 'Bangalore', 'Nagpur', 'Hyderabad'].map((city) => (
                  <button key={city}
                    className="px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide border border-[#E8E8E0] text-[#373A36]/60 hover:border-[#C9A961] hover:text-[#C9A961] transition-all duration-200 bg-white hover:bg-[#C9A961]/10"
                  >
                    {city}
                  </button>
                ))}
              </div>

              {/* Search bar */}
              <div className="relative flex items-center bg-white border border-[#E8E8E0] rounded-2xl overflow-hidden shadow-md hover:border-[#C9A961]/60 transition-all duration-300">
                <svg className="w-4 h-4 text-[#C9A961] ml-5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
                </svg>
                <input
                  type="text"
                  placeholder="Enter city or pincode…"
                  className="flex-1 bg-transparent text-[#373A36] px-4 py-4 text-sm focus:outline-none placeholder:text-[#aaa]"
                />
                <button className="m-1.5 bg-[#373A36] hover:bg-[#C9A961] text-white px-6 py-3 rounded-xl text-xs font-black tracking-widest uppercase transition-all duration-200 hover:scale-105">
                  Locate
                </button>
              </div>


            </div>

            {/* RIGHT — Map */}
            <div className="lg:w-[58%] w-full">
              <div className="relative group">
                {/* Soft border frame */}
                <div className="absolute -inset-px rounded-3xl bg-gradient-to-br from-[#C9A961]/30 via-[#6B8E7F]/15 to-[#C9A961]/10 blur-sm" />
                <div className="relative rounded-3xl overflow-hidden border border-[#E8E8E0] shadow-xl" style={{ height: '420px' }}>
                  <iframe
                    title="Magik Store Locator"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.072223403328!2d88.361309315403!3d22.576404985181285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02764f6974241d%3A0xc3f12467a840e5a6!2sMagik%20Lighting!5e0!3m2!1sen!2sin!4v1652610000000!5m2!1sen!2sin&markers=color:red%7C22.5764,88.3636"
                    width="100%" height="100%"
                    style={{ border: 0 }}
                    allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                  />
                  {/* Top overlay bar */}
                  <div className="absolute top-0 left-0 right-0 h-12 bg-gradient-to-b from-white/40 to-transparent pointer-events-none" />
                  {/* Bottom overlay bar */}
                  <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white/40 to-transparent pointer-events-none" />
                  {/* Custom map point markers */}
                  {[
                    { top: '38%', left: '52%', label: 'Kolkata HQ' },
                    { top: '28%', left: '30%', label: 'Patna' },
                    { top: '55%', left: '68%', label: 'Bhubaneswar' },
                    { top: '20%', left: '58%', label: 'Siliguri' },
                  ].map((pin) => (
                    <div key={pin.label} className="absolute pointer-events-none" style={{ top: pin.top, left: pin.left, transform: 'translate(-50%, -100%)' }}>
                      <div className="flex flex-col items-center">
                        <div className="bg-white rounded-full px-2 py-0.5 text-[9px] font-bold text-[#373A36] shadow mb-1 whitespace-nowrap">{pin.label}</div>
                        <img src="/map point.png" alt="store" className="w-7 h-7 object-contain drop-shadow-lg" />
                      </div>
                    </div>
                  ))}
                  {/* Floating badge */}
                  <div className="absolute top-4 left-4 flex items-center gap-2 bg-white/90 backdrop-blur-md border border-[#E8E8E0] px-3 py-1.5 rounded-full shadow-sm">
                    <span className="w-2 h-2 rounded-full bg-[#C9A961] animate-pulse" />
                    <span className="text-[#373A36] text-[10px] font-semibold tracking-widest uppercase">Live Map</span>
                  </div>
                  {/* Bottom store badge */}
                  <div className="absolute bottom-4 right-4 bg-[#C9A961] text-white px-4 py-2 rounded-xl text-xs font-black tracking-wide shadow-lg">
                    📍 Magik Lighting, Kolkata
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative bg-[#1a1c18] text-white overflow-hidden">

        {/* Decorative glow orbs */}
        <div className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[260px] rounded-full opacity-20"
          style={{ background: 'radial-gradient(ellipse at center, #C9A961 0%, transparent 70%)' }} />
        <div className="pointer-events-none absolute top-0 left-0 w-[300px] h-[300px] rounded-full opacity-10"
          style={{ background: 'radial-gradient(ellipse at center, #C9A961 0%, transparent 70%)' }} />
        <div className="pointer-events-none absolute bottom-0 right-0 w-[400px] h-[300px] rounded-full opacity-10"
          style={{ background: 'radial-gradient(ellipse at center, #C9A961 0%, transparent 70%)' }} />

        {/* Top accent line */}
        <div className="w-full h-px" style={{ background: 'linear-gradient(90deg, transparent 0%, #C9A961 30%, #fff8e7 50%, #C9A961 70%, transparent 100%)' }} />

        {/* Main grid */}
        <div className="relative container mx-auto px-6 pb-14">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 border-t border-white/10 pt-12">

            {/* Col 1 — Brand + Contact + Social */}
            <div className="md:col-span-1 flex flex-col gap-7">
              <p className="text-white/50 text-sm leading-relaxed font-sans">
                Premium LED solutions engineered for brilliance — from residential warmth to industrial power.
              </p>
              <div>
                <h4 className="text-[10px] tracking-[0.3em] font-bold text-[#C9A961] uppercase mb-4">Get In Touch</h4>
                <ul className="space-y-3 text-sm text-white/70">
                  <li className="flex items-start gap-2.5">
                    <svg className="w-4 h-4 mt-0.5 shrink-0 text-[#C9A961]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                    <span>Info@magiklights.com</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <svg className="w-4 h-4 mt-0.5 shrink-0 text-[#C9A961]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                    <span>helpdesk@magiklights.com</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <svg className="w-4 h-4 mt-0.5 shrink-0 text-[#C9A961]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6 6l.95-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 16.92z"/></svg>
                    <span>Toll Free: 18003451345</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-[10px] tracking-[0.3em] font-bold text-[#C9A961] uppercase mb-4">Follow Us</h4>
                <div className="flex gap-2.5 flex-wrap">
                  {[
                    { label: 'Facebook', href: 'https://facebook.com', icon: <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg> },
                    { label: 'Instagram', href: 'https://instagram.com/magiklighting', icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" /></svg> },
                    { label: 'YouTube', href: 'https://youtube.com', icon: <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" /><polygon fill="white" points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" /></svg> },
                    { label: 'LinkedIn', href: 'https://linkedin.com', icon: <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg> },
                    { label: 'Twitter', href: 'https://twitter.com', icon: <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg> },
                  ].map((s) => (
                    <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}
                      className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-[#C9A961] hover:border-[#C9A961] hover:shadow-[0_0_12px_rgba(201,169,97,0.4)] transition-all duration-300">
                      {s.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Col 2 — Footer Links */}
            <div>
              <h4 className="text-[10px] tracking-[0.3em] font-bold text-[#C9A961] uppercase mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {[
                  { label: 'Home', href: '#' },
                  { label: 'About Us', href: '#' },
                  { label: 'Shop By Category', href: '#shop-by-category' },
                  { label: 'Contact Us', href: '#' },
                  { label: 'Brochures', href: '#' },
                  { label: 'Ledpedia', href: '#' },
                  { label: 'Become a Distributor', href: '#' },
                  { label: 'News & Media', href: '#' },
                  { label: 'Gallery', href: '#' },
                  { label: 'Blogs', href: '#' },
                  { label: 'Career', href: '#' },
                ].map((link) => (
                  <li key={link.label}>
                    <a href={link.href}
                      className="group flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors duration-200">
                      <span className="w-0 group-hover:w-3 h-px bg-[#C9A961] transition-all duration-300 shrink-0" />
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 3 — Shop By Category */}
            <div>
              <h4 className="text-[10px] tracking-[0.3em] font-bold text-[#C9A961] uppercase mb-6">Shop By Category</h4>
              <ul className="space-y-3">
                {[
                  'Panel & Spotlight', 'Outdoor Lights', 'Table Lamps', 'Lamps',
                  'Batten', 'Accessories', 'Street Lighting', 'Solar Lighting',
                  'Area Lighting', 'Industrial Lighting', 'Landscape Lighting',
                  'Retail Lighting', 'Indoor Lighting', 'Architectural Lighting',
                  'Smart Lighting', 'Wire',
                ].map((cat) => (
                  <li key={cat}>
                    <a href="#shop-by-category"
                      className="group flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors duration-200">
                      <span className="w-0 group-hover:w-3 h-px bg-[#C9A961] transition-all duration-300 shrink-0" />
                      {cat}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 4 — Glowing CTA card + Certifications */}
            <div className="flex flex-col gap-6">
              <div className="relative rounded-2xl overflow-hidden border border-white/10 p-6"
                style={{ background: 'linear-gradient(135deg, rgba(201,169,97,0.12) 0%, rgba(255,255,255,0.03) 100%)' }}>
                <div className="absolute top-0 right-0 w-32 h-32 rounded-full opacity-20 -translate-y-8 translate-x-8"
                  style={{ background: 'radial-gradient(circle, #C9A961 0%, transparent 70%)' }} />
                <svg className="w-10 h-10 text-[#C9A961] mb-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path d="M9 21h6M12 3a6 6 0 0 1 6 6c0 2.22-1.21 4.16-3 5.2V17H9v-2.8A6 6 0 0 1 6 9a6 6 0 0 1 6-6z" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <h5 className="text-white font-serif text-lg mb-2">Light Up Your Space</h5>
                <p className="text-white/50 text-xs leading-relaxed mb-4">Explore our full range of premium LED solutions crafted for every environment.</p>
                <a href="#shop-by-category"
                  className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-[#C9A961] hover:text-white transition-colors duration-200">
                  Explore Products
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </a>
              </div>
              <div>
                <h4 className="text-[10px] tracking-[0.3em] font-bold text-[#C9A961] uppercase mb-4">Certifications</h4>
                <div className="flex flex-wrap gap-2">
                  {['BIS Certified', 'ISO 9001', 'Energy Star', 'RoHS'].map((badge) => (
                    <span key={badge}
                      className="text-[10px] tracking-wider uppercase px-3 py-1.5 rounded-full border border-white/20 text-white/50 font-medium">
                      {badge}
                    </span>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom bar */}
        <div className="relative border-t border-white/10">
          <div className="container mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-xs text-white/40 tracking-wide">
              © 2026 Magik LED Pvt. Ltd. All rights reserved.
            </p>
            <div className="flex items-center gap-5 text-xs text-white/40">
              <a href="#" className="hover:text-[#C9A961] transition-colors duration-200">Terms of Use</a>
              <span className="w-px h-3 bg-white/20" />
              <a href="#" className="hover:text-[#C9A961] transition-colors duration-200">Privacy Policy</a>
              <span className="w-px h-3 bg-white/20" />
              <a href="#" className="hover:text-[#C9A961] transition-colors duration-200">Sitemap</a>
            </div>
          </div>
        </div>
      </footer>

      {/* WhatsApp + Quick Enquiry */}
      <QuickEnquiry />
    </div>
  );
}