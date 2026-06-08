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
    <div className="w-full bg-white">
      <style>{`
        .proj-card { position: relative; cursor: pointer; border-radius: 16px; overflow: hidden; }
        .proj-card img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; transition: transform 0.7s cubic-bezier(0.25,0.46,0.45,0.94); }
        .proj-card:hover img { transform: scale(1.06); }
        .proj-overlay { position: absolute; inset: 0; background: linear-gradient(to top, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.4) 45%, transparent 100%); transition: background 0.4s ease; z-index: 1; }
        .proj-card:hover .proj-overlay { background: linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.45) 55%, transparent 100%); }
        .proj-content { position: absolute; bottom: 0; left: 0; right: 0; z-index: 2; padding: 20px 24px 28px 24px; }
        .proj-content h3 { color: white; font-family: 'Lora', serif; font-weight: 300; line-height: 1.35; transition: color 0.3s ease; margin: 0; }
        .proj-card:hover .proj-content h3 { color: #C9A961; }
        .proj-loc { display: flex; align-items: center; gap: 8px; margin-bottom: 6px; }
        .proj-loc span { color: rgba(201,169,97,0.9); font-size: 10px; letter-spacing: 0.25em; text-transform: uppercase; font-weight: 600; }
        .proj-line { height: 1px; width: 20px; background: #C9A961; flex-shrink: 0; }
      `}</style>

      <div className="flex flex-col md:flex-row gap-3 p-4 pb-8">

        {/* BIG LEFT card */}
        <div className="proj-card md:w-[50%] flex-shrink-0" style={{ height: '640px' }}>
          <img src={cards[0].img} alt={cards[0].title} style={{ objectPosition: cards[0].objectPosition }} />
          <div className="proj-overlay" />
          <div className="proj-content" style={{ padding: '24px 32px 28px 32px' }}>
            <div className="proj-loc">
              <div className="proj-line" />
              <span>{cards[0].location}</span>
            </div>
            <h3 style={{ fontSize: '1.75rem' }}>{cards[0].title}</h3>
          </div>
        </div>

        {/* RIGHT 2×2 grid */}
        <div className="md:w-[50%] grid grid-cols-2 gap-3" style={{ height: '640px' }}>
          {cards.slice(1, 5).map((card, i) => (
            <div key={i} className="proj-card" style={{ height: '100%' }}>
              <img src={card.img} alt={card.title} style={{ objectPosition: card.objectPosition }} />
              <div className="proj-overlay" />
              <div className="proj-content">
                <div className="proj-loc">
                  <div className="proj-line" />
                  <span>{card.location}</span>
                </div>
                <h3 style={{ fontSize: '0.92rem' }}>{card.title}</h3>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}


const blogPosts = [
  {
    category: "TRENDS",
    img: "/indorr lighting.png",
    title: "Top 5 Lighting Trends for Luxury Hospitality in 2024",
    excerpt: "From warm tunable whites to architectural accent lighting — discover what top hotels and resorts across India are choosing to elevate guest experience and ambiance.",
    date: "Feb 28, 2024",
    read: "4 min read"
  },
  {
    category: "QUALITY",
    img: "/The Agri Horticulture, Kolkata2.png",
    title: "BIS Certification: Why It Matters for Your LED Purchase",
    excerpt: "BIS, CE, and RoHS labels matter more than you think. We break down what each certification means and how to spot counterfeit LED products before it's too late.",
    date: "Feb 10, 2024",
    read: "3 min read"
  },
  {
    category: "INDUSTRIAL",
    img: "/starcementplant.png",
    title: "Industrial Lighting: High-Bay LEDs for Maximum Output",
    excerpt: "A practical guide to choosing high-bay LED fixtures for warehouses and factories — covering lumen output, beam angles, IP ratings, and energy savings.",
    date: "Jan 22, 2024",
    read: "6 min read"
  },
  {
    category: "TRENDS",
    img: "/towerimage.png",
    title: "Smart Lighting Controls: Dimming & Automation Guide",
    excerpt: "How smart dimming systems and automation can dramatically reduce energy waste while improving ambiance. From DALI protocols to wireless IoT sensors — we explain how to future-proof your lighting infrastructure for homes, offices, and commercial buildings across India.",
    date: "Jan 10, 2024",
    read: "5 min read"
  },
  {
    category: "INDUSTRIAL",
    img: "/Durgapur Steel Plant, West Bengal.jpeg",
    title: "Outdoor LED Flood Lights: Installation Tips & Best Practices",
    excerpt: "Everything you need to know about choosing and installing outdoor LED flood lights for perimeter security, stadiums, parking lots, and architectural facades. We cover wattage selection, weatherproofing, beam spread, and the most common installation mistakes to avoid.",
    date: "Dec 18, 2023",
    read: "4 min read"
  },
  {
    category: "QUALITY",
    img: "/Kolkata Airport.jpeg",
    title: "Energy Saving with LED: A Complete ROI Analysis",
    excerpt: "Calculate your real return on investment when switching from traditional halogen or fluorescent lighting to modern LED solutions. With electricity costs rising across India, we present a full cost-benefit breakdown — including payback periods, maintenance savings, and government subsidy options available in 2024.",
    date: "Dec 5, 2023",
    read: "7 min read"
  },
];

const categoryColors: Record<string, string> = {
  TRENDS: "#6B8E7F", QUALITY: "#4A7FA5", INDUSTRIAL: "#C9A961",
};

function MagikBlog() {
  const featured = blogPosts.slice(0, 3);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 md:px-12">

        {/* Header — matches photo style */}
        <h2 className="text-2xl md:text-3xl font-serif font-light text-[#373A36] mb-4 text-center tracking-widest uppercase">
          Lighting <strong className="font-bold">Insights</strong>
        </h2>
        <div className="flex justify-center mb-10">
          <div className="h-1 w-16 bg-[#6B8E7F] rounded-full"></div>
        </div>

        {/* 3 equal cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {featured.map((post, idx) => (
            <div key={idx} className="flex flex-col group cursor-pointer">
              {/* Square Image */}
              <div className="overflow-hidden mb-5" style={{ aspectRatio: '1 / 1' }}>
                <img
                  src={post.img}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Title */}
              <h3
                className="text-[#1a1a1a] leading-snug mb-3 tracking-wide uppercase"
                style={{ fontFamily: "'Lora', serif", fontWeight: 400, fontSize: '1.05rem', letterSpacing: '0.04em' }}
              >
                {post.title}
              </h3>

              {/* Excerpt — fuller content */}
              <p className="text-[#666] text-[13px] leading-relaxed mb-4 flex-1"
                 style={{ fontFamily: "'Lora', serif", fontWeight: 300 }}>
                {post.excerpt}
              </p>

              {/* Read more */}
              <a
                href="#"
                className="text-[#1a1a1a] text-[12px] underline underline-offset-2 tracking-wide hover:text-[#C9A961] transition-colors"
                style={{ fontFamily: "'Lora', serif" }}
              >
                Read more
              </a>
            </div>
          ))}
        </div>

        {/* View All button — matches photo */}
        <div className="flex justify-center">
          <a
            href="#"
            className="inline-block bg-[#1a1a1a] text-white text-[11px] tracking-[0.25em] uppercase px-10 py-4 hover:bg-[#373A36] transition-colors"
            style={{ fontFamily: "'Lora', serif", fontWeight: 600 }}
          >
            View All Articles
          </a>
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
    <section className="py-20 bg-[#F5F0E8] overflow-hidden relative z-20">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-14">
          <p className="text-[#C9A961] text-xs tracking-widest uppercase mb-3">In Good Company</p>
          <h2 className="text-3xl md:text-5xl font-serif font-light tracking-widest text-[#373A36] mb-4 text-center leading-tight">
              Brands We <strong className="font-bold">Illuminate With</strong>
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
          <div className="lg:w-64 flex-shrink-0 lg:pt-4 flex flex-col items-start">
            <h2 className="text-3xl md:text-5xl font-serif font-light text-[#373A36] mb-2 text-left tracking-widest">Stay Inspired with us on <strong className="font-bold">Instagram</strong></h2>
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
          <h2 className="text-3xl md:text-4xl font-serif font-light text-[#373A36] mb-4 text-center tracking-widest">
            Customer <strong className="font-bold">Voices</strong>
          </h2>
        <div className="flex justify-center mt-3 mb-4">
          <div className="h-1 w-16 bg-[#6B8E7F] rounded-full" />
        </div>
        <p className="text-[#666] text-sm max-w-xl mx-auto">
          Hear from the visionaries who have transformed their spaces with Magik Lights.
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
          <h2 className="text-3xl md:text-4xl font-serif font-light text-[#373A36] mb-2 text-center tracking-widest uppercase">Corporate <strong className="font-bold">Videos</strong></h2>
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
        "MAGIK is a trusted pan-India brand delivering innovative lighting solutions for Home, Office, Industry, Retail, and Hospitality sectors. With 10+ years of experience, 1000+ distributors, and a production capacity of 1 lakh+ products per day, every product is backed by advanced manufacturing and strict quality standards.",
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
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled || menuOpen ? 'bg-white shadow-sm' : 'bg-transparent'} ${!isVisible && scrolled && !menuOpen ? '-translate-y-full' : 'translate-y-0'}`}>

        {/* Top row: Logo center, icons right */}
        <div className="hidden md:flex items-center px-8 pt-5 pb-2 relative">

          {/* Center: Magik Logo */}
          <div className="absolute left-1/2 -translate-x-1/2">
            <img 
              src={scrolled || menuOpen ? "/companylogo-2.png" : "/Magik PNG Logo White.png"} 
              alt="Magik Lights" 
              className="h-16 w-auto object-contain transition-all duration-300" 
            />
          </div>

          {/* Right: icons + CenturyPly */}
          <div className="ml-auto flex items-center gap-4">
            <button className="p-1.5 hover:opacity-70 transition-opacity">
              <Search size={20} className={scrolled || menuOpen ? "text-[#373A36]" : "text-white"} />
            </button>
            <button className="p-1.5 hover:opacity-70 transition-opacity">
              <User size={20} className={scrolled || menuOpen ? "text-[#373A36]" : "text-white"} />
            </button>
            <button className="p-1.5 hover:opacity-70 transition-opacity">
              <ShoppingCart size={20} className={scrolled || menuOpen ? "text-[#373A36]" : "text-white"} />
            </button>
            <div className={`w-px h-6 transition-colors duration-300 ${scrolled || menuOpen ? "bg-[#E8E8E0]" : "bg-white/20"}`} />
            <img 
              src={scrolled || menuOpen ? "/blackcentury.png" : "/Century Ply Logo white.png"} 
              alt="Century Ply" 
              className="h-9 w-auto object-contain transition-all duration-300" 
            />
          </div>
        </div>

        {/* Bottom row: Nav links centered */}
        <div className="hidden md:block">
          <nav className="flex items-center justify-center gap-10 pb-4 pt-6">
            {["HOME", "ABOUT US", "PRODUCTS", "CONTACT US", "MORE"].map((item) => (
              <a key={item} href="#"
                className={`text-sm font-semibold tracking-widest transition-colors duration-200 ${scrolled || menuOpen ? 'text-[#373A36] hover:text-[#6B8E7F]' : 'text-white hover:text-white/70'}`}
              >
                {item}
              </a>
            ))}
          </nav>
        </div>

        {/* Mobile top row */}
        <div className="md:hidden flex items-center justify-between px-4 py-3">
          <button onClick={() => setMenuOpen(!menuOpen)} className="p-2">
            <Menu size={24} className={scrolled || menuOpen ? "text-[#373A36]" : "text-white"} />
          </button>
          <img 
            src={scrolled || menuOpen ? "/companylogo-2.png" : "/Magik PNG Logo White.png"} 
            alt="Magik Lights" 
            className="h-10 w-auto object-contain transition-all duration-300" 
          />
          <button className="p-1.5">
            <ShoppingCart size={20} className={scrolled || menuOpen ? "text-[#373A36]" : "text-white"} />
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
            <h2 className="text-white text-3xl md:text-5xl font-serif font-light mb-6 text-center tracking-widest">
              <strong className="font-bold">Kitchen</strong>
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
            <h2 className="text-white text-3xl md:text-5xl font-serif font-light mb-6 text-center tracking-widest">
              <strong className="font-bold">Bathroom</strong>
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
            <h2 className="text-white text-3xl md:text-5xl font-serif font-light mb-6 text-center tracking-widest">
              Living <strong className="font-bold">Room</strong>
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
            <h2 className="text-white text-3xl md:text-5xl font-serif font-light mb-6 text-center tracking-widest">
              <strong className="font-bold">Bedroom</strong>
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
                      <h3 className="text-4xl md:text-5xl font-light text-[#C9A961] tracking-tight" style={{ fontFamily: "'Lora', serif" }}>
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
      <section className="relative h-[650px] md:h-[90vh] overflow-hidden">
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
            <h2 className="text-white leading-tight mb-3 text-center tracking-widest"
                style={{ fontFamily: "'Lora', serif", fontSize: "clamp(2rem, 4vw, 3.5rem)", fontWeight: 300 }}>
              ABOUT <strong style={{ fontWeight: 700 }}>Magik Lights</strong>
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

      {/* Why Choose Magik Lights */}
      <section className="py-10 md:py-14 bg-[#F7F7F0]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <p className="text-[#C9A961] text-sm tracking-widest uppercase mb-3">Our Advantage</p>
            <h2 className="text-3xl md:text-5xl font-serif font-light tracking-widest text-[#373A36] text-center leading-tight">
              Why Choose <strong className="font-bold">Magik Lights</strong>
            </h2>
            <div className="flex justify-center mt-4">
            <div className="h-1 w-16 bg-[#6B8E7F] rounded-full"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-6">
            {[
              {
                icon: (
                  <svg className="w-20 h-20 text-[#373A36]" fill="none" stroke="currentColor" strokeWidth="1" viewBox="0 0 64 64">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M32 6 L52 14 L52 32 C52 44 42 54 32 58 C22 54 12 44 12 32 L12 14 Z" />
                  </svg>
                ),
                title: "ENERGY EFFICIENT",
                desc: "Up to 80% less energy than traditional lighting.",
              },
              {
                icon: (
                  <svg className="w-20 h-20 text-[#373A36]" fill="none" stroke="currentColor" strokeWidth="1" viewBox="0 0 64 64">
                    <circle cx="32" cy="26" r="14" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M22 40 C18 42 14 46 14 52 L50 52 C50 46 46 42 42 40" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M50 22 C52 18 56 18 56 22 C56 28 50 30 50 30 L50 22" />
                    <circle cx="50" cy="34" r="2" fill="currentColor" />
                  </svg>
                ),
                title: "ISO CERTIFIED QUALITY",
                desc: "ISO, CE & RoHS certified for international standards.",
                featured: true,
              },
              {
                icon: (
                  <svg className="w-20 h-20 text-[#373A36]" fill="none" stroke="currentColor" strokeWidth="1" viewBox="0 0 64 64">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18 10 L46 10 L50 18 L50 46 C50 48 48 50 46 50 L18 50 C16 50 14 48 14 46 L14 18 Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 18 L50 18" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M26 10 L26 18 M38 10 L38 18" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M22 30 L30 30 M34 30 L42 30 M22 38 L30 38 M34 38 L42 38" />
                    <circle cx="48" cy="48" r="8" fill="white" stroke="currentColor" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M44 48 L47 51 L52 45" />
                  </svg>
                ),
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
                icon: (
                  <svg className="w-20 h-20" viewBox="0 0 200 220" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* India map outline */}
                    <path
                      d="M85,8 L88,12 L82,18 L78,16 L72,22 L68,20 L62,26 L58,24 L54,30 L50,32 L46,28 L42,32 L40,38 L36,42 L32,40 L28,46 L24,50 L22,56 L18,62 L16,68 L14,76 L12,84 L10,92 L10,100 L12,108 L14,114 L18,120 L22,126 L26,130 L30,136 L34,142 L36,150 L38,158 L40,164 L42,170 L46,176 L50,180 L54,184 L58,188 L62,192 L66,196 L70,198 L74,196 L76,192 L78,188 L80,184 L82,180 L84,176 L86,172 L88,168 L90,172 L92,176 L94,172 L96,168 L98,164 L100,160 L102,164 L104,168 L108,172 L112,170 L114,166 L116,162 L118,158 L122,154 L126,150 L130,146 L134,142 L138,138 L142,134 L146,128 L150,122 L154,116 L156,110 L158,104 L158,96 L156,88 L154,82 L152,76 L148,70 L144,66 L140,62 L138,56 L140,50 L144,46 L148,42 L152,38 L156,34 L158,28 L154,24 L150,22 L146,26 L142,28 L138,24 L134,20 L130,18 L126,14 L122,10 L118,8 L114,6 L110,8 L106,10 L102,8 L98,6 L94,8 L90,10 L86,8 Z
                      M140,60 L144,56 L148,52 L152,48 L156,44 L158,38 L160,44 L162,50 L164,56 L162,62 L158,66 L154,70 L150,72 L146,68 L142,64 Z
                      M155,30 L158,26 L162,24 L166,26 L168,30 L166,34 L162,36 L158,34 Z"
                      fill="white"
                      stroke="#1a1a1a"
                      strokeWidth="4"
                      strokeLinejoin="round"
                      strokeLinecap="round"
                    />
                    {/* Tricolor stripes — saffron */}
                    <path d="M68,105 Q78,100 88,103 Q98,106 108,102" stroke="#C9A961" strokeWidth="5" strokeLinecap="round" fill="none"/>
                    {/* White stripe */}
                    <path d="M68,115 Q78,110 88,113 Q98,116 108,112" stroke="#aaaaaa" strokeWidth="5" strokeLinecap="round" fill="none"/>
                    {/* Green stripe */}
                    <path d="M68,125 Q78,120 88,123 Q98,126 108,122" stroke="#6B8E7F" strokeWidth="5" strokeLinecap="round" fill="none"/>
                  </svg>
                ),
                title: "MADE IN INDIA",
                desc: "State-of-the-art facility with world-class machinery.",
              },
              {
                icon: (
                  <svg className="w-20 h-20 text-[#373A36]" fill="none" stroke="currentColor" strokeWidth="1" viewBox="0 0 64 64">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M48 20 C48 12 40 8 32 8 C24 8 16 12 16 20 C16 28 22 32 22 32 L42 32 C42 32 48 28 48 20Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M26 32 L26 38 L38 38 L38 32" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M22 38 L42 38" />
                    <path strokeLinecap="round" d="M32 8 L32 14 M32 22 L32 26" />
                    <circle cx="32" cy="18" r="2" fill="currentColor" />
                  </svg>
                ),
                title: "END-TO-END SOLUTIONS",
                desc: "Complete lighting solutions for every project scale.",
              },
              {
                icon: (
                  <svg className="w-20 h-20 text-[#373A36]" fill="none" stroke="currentColor" strokeWidth="1" viewBox="0 0 64 64">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M32 12 C32 12 44 16 50 24 C56 32 54 44 46 50 C38 56 26 56 18 50 C10 44 8 32 14 24 C20 16 32 12 32 12Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20 20 C24 18 28 22 32 20 C36 18 40 22 44 20" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16 34 C20 32 26 36 32 34 C38 32 44 36 48 34" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M32 12 L32 52 M14 32 L50 32" />
                  </svg>
                ),
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
          <h2 className="text-3xl md:text-5xl font-serif font-light tracking-widest text-[#373A36] mb-2 text-center leading-tight">
            Projects We've <strong className="font-bold">Illuminated</strong>
          </h2>
          <div className="flex justify-center mb-4">
            <div className="h-1 w-16 bg-[#6B8E7F] rounded-full"></div>
          </div>

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

      {/* Distributor Network — Jaquar style split panel */}
      <section className="w-full" style={{ minHeight: '560px' }}>
        <style>{`
          .split-panel { position: relative; overflow: hidden; cursor: pointer; }
          .split-panel img { transition: transform 0.8s cubic-bezier(0.25,0.46,0.45,0.94); }
          .split-panel:hover img { transform: scale(1.06); }
          .split-panel .split-overlay { transition: background 0.5s ease; }
          .split-panel:hover .split-overlay { background: rgba(0,0,0,0.55) !important; }
          .split-btn { transition: all 0.3s ease; }
          .split-btn:hover { background: white !important; color: #1a1a1a !important; }
        `}</style>

        <div className="flex flex-col md:flex-row" style={{ minHeight: '560px' }}>

          {/* LEFT — Store Locator */}
          <div className="split-panel flex-1 relative" style={{ minHeight: '560px' }}>
            <img
              src="/indorr lighting2.png"
              alt="Store Locator"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div
              className="split-overlay absolute inset-0"
              style={{ background: 'rgba(0,0,0,0.45)' }}
            />
            {/* Vertical divider line */}
            <div className="hidden md:block absolute right-0 top-[10%] bottom-[10%] w-px bg-white/20 z-10" />

            <div className="absolute inset-0 flex flex-col justify-end p-10 md:p-14 z-10">
              <h2
                className="text-white text-3xl md:text-5xl font-serif font-light leading-tight mb-4 text-left tracking-widest"
              >
                Store <strong className="font-bold">Locator</strong>
              </h2>

              <div>
                <a
                  href="#"
                  className="split-btn inline-flex items-center gap-3 border border-white text-white text-xs tracking-[0.2em] uppercase font-semibold px-7 py-3.5 rounded-full"
                >
                  Find a Store
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT — Become a Distributor */}
          <div className="split-panel flex-1 relative" style={{ minHeight: '560px' }}>
            <img
              src="/become distributor.jpg"
              alt="Become a Distributor"
              className="absolute inset-0 w-full h-full object-cover"
            />


            <div className="absolute inset-0 flex flex-col justify-end p-10 md:p-14 z-10">
              <h2
                className="text-white text-3xl md:text-5xl font-serif font-light leading-tight mb-4 text-left tracking-widest"
              >
                Become a <strong className="font-bold">Distributor</strong>
              </h2>

              <div>
                <a
                  href="#"
                  className="split-btn inline-flex items-center gap-3 border border-white text-white text-xs tracking-[0.2em] uppercase font-semibold px-7 py-3.5 rounded-full"
                >
                  Let's Connect
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Magik Blog */}
      <MagikBlog />

      {/* Instagram Reels */}
      <InstagramReels />

      {/* Footer */}
      <footer className="relative bg-[#111210] text-white overflow-hidden">

        {/* Top gold gradient line */}
        <div className="w-full h-px" style={{ background: 'linear-gradient(90deg, transparent 0%, #C9A961 30%, #fff8e7 50%, #C9A961 70%, transparent 100%)' }} />

        {/* Logo + tagline banner */}
        <div className="border-b border-white/8 py-12">
          <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex flex-col items-center md:items-start gap-2">
              <img src="/companylogo-2.png" alt="Magik Lights" className="h-16 w-auto object-contain brightness-0 invert" />
              <p className="text-white/40 text-xs tracking-[0.25em] uppercase">Illuminating Excellence Since 2014</p>
            </div>
            <div className="flex flex-wrap justify-center md:justify-end gap-3">
              {[
                { label: 'Facebook', href: 'https://facebook.com', icon: <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg> },
                { label: 'Instagram', href: 'https://instagram.com/magiklighting', icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" /></svg> },
                { label: 'YouTube', href: 'https://youtube.com', icon: <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" /><polygon fill="white" points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" /></svg> },
                { label: 'LinkedIn', href: 'https://linkedin.com', icon: <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg> },
              ].map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}
                  className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center text-white/50 hover:text-[#C9A961] hover:border-[#C9A961] transition-all duration-300">
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Main grid */}
        <div className="container mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

            {/* Col 1 — Contact */}
            <div className="flex flex-col gap-6">
              <h4 className="text-[11px] tracking-[0.3em] font-bold text-[#C9A961] uppercase">Contact Us</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center shrink-0 mt-0.5">
                    <svg className="w-3.5 h-3.5 text-[#C9A961]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                  </div>
                  <div>
                    <p className="text-white/30 text-[10px] tracking-widest uppercase mb-1">Email</p>
                    <p className="text-white/70 text-sm">Info@magiklights.com</p>
                    <p className="text-white/70 text-sm">helpdesk@magiklights.com</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center shrink-0 mt-0.5">
                    <svg className="w-3.5 h-3.5 text-[#C9A961]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6 6l.95-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 16.92z"/></svg>
                  </div>
                  <div>
                    <p className="text-white/30 text-[10px] tracking-widest uppercase mb-1">Toll Free</p>
                    <p className="text-white/70 text-sm">18003451345</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center shrink-0 mt-0.5">
                    <svg className="w-3.5 h-3.5 text-[#C9A961]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                  </div>
                  <div>
                    <p className="text-white/30 text-[10px] tracking-widest uppercase mb-1">Address</p>
                    <p className="text-white/70 text-sm leading-relaxed">Kolkata, West Bengal,<br />India — 700001</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Col 2 — Quick Links */}
            <div>
              <h4 className="text-[11px] tracking-[0.3em] font-bold text-[#C9A961] uppercase mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {['Home', 'About Us', 'Shop By Category', 'Contact Us', 'Brochures', 'Ledpedia', 'Become a Distributor', 'News & Media', 'Gallery', 'Blogs', 'Career'].map((link) => (
                  <li key={link}>
                    <a href="#" className="group flex items-center gap-2 text-sm text-white/50 hover:text-white transition-colors duration-200">
                      <span className="w-0 group-hover:w-3 h-px bg-[#C9A961] transition-all duration-300 shrink-0" />
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 3 — Categories */}
            <div>
              <h4 className="text-[11px] tracking-[0.3em] font-bold text-[#C9A961] uppercase mb-6">Shop By Category</h4>
              <ul className="space-y-3">
                {['Panel & Spotlight', 'Outdoor Lights', 'Table Lamps', 'Batten', 'Street Lighting', 'Solar Lighting', 'Industrial Lighting', 'Architectural Lighting', 'Smart Lighting', 'Landscape Lighting', 'Wire'].map((cat) => (
                  <li key={cat}>
                    <a href="#shop-by-category" className="group flex items-center gap-2 text-sm text-white/50 hover:text-white transition-colors duration-200">
                      <span className="w-0 group-hover:w-3 h-px bg-[#C9A961] transition-all duration-300 shrink-0" />
                      {cat}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 4 — Newsletter + Certifications */}
            <div className="flex flex-col gap-8">
              <div>
                <h4 className="text-[11px] tracking-[0.3em] font-bold text-[#C9A961] uppercase mb-4">Newsletter</h4>
                <p className="text-white/40 text-xs leading-relaxed mb-4">Get the latest lighting trends and product updates.</p>
                <div className="flex gap-0 rounded-xl overflow-hidden border border-white/10">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="flex-1 bg-white/5 text-white text-xs px-4 py-3 placeholder:text-white/25 focus:outline-none"
                  />
                  <button className="bg-[#C9A961] hover:bg-[#b8983a] text-[#111210] text-xs font-bold px-4 tracking-wider transition-colors duration-200">
                    →
                  </button>
                </div>
              </div>
              <div>
                <h4 className="text-[11px] tracking-[0.3em] font-bold text-[#C9A961] uppercase mb-4">Certifications</h4>
                <div className="flex flex-wrap gap-2">
                  {['BIS Certified', 'ISO 9001', 'Energy Star', 'RoHS'].map((badge) => (
                    <span key={badge} className="text-[10px] tracking-wider uppercase px-3 py-1.5 rounded-full border border-white/15 text-white/40 font-medium">
                      {badge}
                    </span>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/8">
          <div className="container mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-xs text-white/30 tracking-wide">
              © 2026 Magik LED Pvt. Ltd. All rights reserved.
            </p>
            <div className="flex items-center gap-5 text-xs text-white/30">
              <a href="#" className="hover:text-[#C9A961] transition-colors duration-200">Terms of Use</a>
              <span className="w-px h-3 bg-white/15" />
              <a href="#" className="hover:text-[#C9A961] transition-colors duration-200">Privacy Policy</a>
              <span className="w-px h-3 bg-white/15" />
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