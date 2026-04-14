import { ChevronLeft, ChevronRight, Search, User, ShoppingCart, Menu, ArrowRight, Zap, Factory, Award, Globe, Wrench, Leaf } from "lucide-react";
import { useState, useEffect, useRef } from "react";

const testimonials = [
  { name: "Rajesh Mehta", role: "Architect, Mumbai", text: "Magik Lighting transformed our commercial project completely. The quality and finish are unmatched — every client who visits is impressed.", avatar: "RM" },
  { name: "Priya Sharma", role: "Interior Designer, Delhi", text: "I've worked with many lighting brands, but Magik stands out for its consistency and innovation. My go-to for every premium project.", avatar: "PS" },
  { name: "Anil Gupta", role: "Contractor, Kolkata", text: "Pan-India delivery, dedicated support, and products that never fail. Magik is the only brand I recommend to my clients.", avatar: "AG" },
  { name: "Sunita Patel", role: "Hotel Owner, Ahmedabad", text: "We installed Magik LEDs across our entire hotel. Energy savings are remarkable and the ambiance is exactly what we envisioned.", avatar: "SP" },
  { name: "Vikram Nair", role: "Project Manager, Bangalore", text: "From street lights to industrial fixtures — Magik delivered on time and within budget. Exceptional B2B experience.", avatar: "VN" },
  { name: "Deepa Joshi", role: "Retail Chain Owner, Pune", text: "Our stores look stunning with Magik retail lighting. Footfall has increased and customers always comment on the atmosphere.", avatar: "DJ" },
  { name: "Suresh Reddy", role: "Civil Engineer, Hyderabad", text: "ISO certified quality you can actually feel. Every product is built to last — we've had zero failures across 3 large projects.", avatar: "SR" },
  { name: "Meena Kapoor", role: "Landscape Designer, Chennai", text: "The landscape lighting range is breathtaking. Magik understands outdoor aesthetics like no other brand in India.", avatar: "MK" },
];

function ClientLove() {
  const trackRef = useRef<HTMLDivElement>(null);
  const animRef = useRef<number>(0);
  const posRef = useRef(0);
  const pausedRef = useRef(false);
  const doubled = [...testimonials, ...testimonials];

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const cardWidth = 320 + 24; // w-80 + gap-6
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
    <section className="py-16 bg-white overflow-hidden">
      <div className="container mx-auto px-4 mb-10 text-center">
        <p className="text-[#C9A961] text-xs tracking-widest uppercase font-sans mb-1">Client Love</p>
        <h2 className="text-3xl md:text-4xl font-serif font-light tracking-widest text-[#373A36]">
          Magik <strong className="font-bold">Voices</strong>
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
              className="w-80 flex-shrink-0 bg-[#F7F7F0] rounded-2xl p-6 border border-[#E8E8E0] hover:border-[#6B8E7F] hover:shadow-md transition-all duration-300"
            >
              {/* Quote mark */}
              <div className="text-[#C9A961] text-5xl font-serif leading-none mb-2">"</div>
              <p className="text-[#444] text-sm leading-relaxed mb-6">{t.text}</p>
              <div className="flex items-center gap-3 mt-auto">
                <div className="w-10 h-10 rounded-full bg-[#6B8E7F] flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                  {t.avatar}
                </div>
                <div>
                  <p className="text-[#373A36] text-sm font-semibold">{t.name}</p>
                  <p className="text-[#999] text-xs">{t.role}</p>
                </div>
              </div>
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

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [heroIndex, setHeroIndex] = useState(0);
  const [currentProductIndex, setCurrentProductIndex] = useState(0);
  const [kitchenLights, setKitchenLights] = useState({
    tapeLights: true,
    pendants: true,
    downlights: true,
    dayNight: true,
  });
  const [showSpaceModal, setShowSpaceModal] = useState(false);

  const spaces = [
    { name: "Living Room", image: "/Experience/LivingRoom.webp", description: "Create the perfect ambiance for relaxation" },
    { name: "Bedroom", image: "/Experience/badroom.webp", description: "Soft curves and smooth lighting for peaceful rest" },
    { name: "Kitchen", image: "/Experience/Kitchen.webp", description: "Bright and functional lighting for your space" },
    { name: "Bathroom", image: "/Experience/Bathroom.webp", description: "Elegant lighting that combines function and beauty" },
    { name: "Outdoor", image: "/Experience/outdoor.webp", description: "Illuminate your exterior spaces beautifully" },
  ];

  const heroSlides = [
    {
      type: "video" as const,
      src: "https://res.cloudinary.com/diint5cus/video/upload/v1775817581/Magik_Video_Low_2_1_1_k0dl6a.mp4",
      heading: "It's in the detail",
      sub: "Engineered by experts | Handcrafted by artisans",
      btn: true,
    },
    {
      type: "image" as const,
      src: "/banner2.png",
      heading: "",
      sub: "",
      btn: false,
    },
    {
      type: "image" as const,
      src: "/banner-2.jpeg",
      heading: "",
      sub: "",
      btn: false,
    },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setHeroIndex((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);
  const [activeAbout, setActiveAbout] = useState(0);

  const aboutItems = [
    {
      title: "Company Profile",
      heading: "Made in India",
      description:
        "In just a few years, MAGIK has established itself as a reputed and trusted brand with a pan-India footprint. Its product range encompasses solutions for Home, Office, Industry, Infrastructure, Retail and Hospitality. With a network of 300+ distributors and 15,000+ retailers, MAGIK is there to serve you anywhere.",
      image: "/centuryhousehdimage.png",
    },
    {
      title: "Factory and Machinery",
      heading: "World-Class Manufacturing",
      description:
        "Our state-of-the-art factory is equipped with advanced automated machinery and rigorous quality control processes. Every product is crafted with precision to meet international standards and ensure long-lasting performance.",
      image: "/centuryhousehdimage.png",
    },
    {
      title: "Certificates",
      heading: "Certified Excellence",
      description:
        "Magiklight holds multiple international certifications including ISO, CE, and RoHS, reflecting our unwavering commitment to quality, safety, and environmental responsibility in every product we manufacture.",
      image: "/centuryhousehdimage.png",
    },
    {
      title: "Company Deck",
      heading: "Our Vision & Mission",
      description:
        "We envision a brighter, more sustainable world powered by intelligent lighting. Our mission is to innovate continuously, reduce energy consumption, and provide lighting solutions that enhance lives and spaces.",
      image: "/centuryhousehdimage.png",
    },
    {
      title: "Brochures",
      heading: "Explore Our Range",
      description:
        "Browse our comprehensive product brochures covering our full range of LED panels, street lights, solar lights, architectural lighting, and more — designed for every application and environment.",
      image: "/centuryhousehdimage.png",
    },
  ];
  const shopCategoryList = [
    { name: "PANEL & SPOTLIGHT", image: "/panel.png", objectPosition: "center top" },
    { name: "OUTDOOR LIGHTS", image: "/outdorr lightsss.png", objectPosition: "center top" },
    { name: "TABLE LAMPS", image: "/Sidelamp 2.png", objectPosition: "85% 0%" },
    { name: "LAMPS", image: "/lampssss.png", objectPosition: "center top" },
    { name: "BATTEN", image: "/Batten.png", objectPosition: "center top" },
    { name: "ACCESSORIES", image: "/accessries.png", objectPosition: "center top" },
    { name: "STREET LIGHTING", image: "/Streetlightss.png", objectPosition: "center top" },
    { name: "SOLAR LIGHTING", image: "/solarlights.png", objectPosition: "70% center" },
    { name: "AREA LIGHTING", image: "/arealighting.png", objectPosition: "center 50%" },
    { name: "INDUSTRIAL LIGHTING", image: "/starcementplant.png", objectPosition: "center 80%" },
    { name: "LANDSCAPE LIGHTING", image: "/The Agri Horticulture, Kolkata.jpeg", objectPosition: "center top" },
    { name: "RETAIL LIGHTING", image: "/retailllhdimage.png", objectPosition: "center top" },
    { name: "INDOOR LIGHTING", image: "/indorr lighting.png", objectPosition: "center top" },
    { name: "ARCHITECTURAL LIGHTING", image: "/towerimage.png", objectPosition: "center top" },
    { name: "SMART LIGHTING", image: "/smartlightingggg.png", objectPosition: "center top" },
    { name: "WIRE", image: "/wirehdimage.png", objectPosition: "center 20%" },
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
    <div className="min-h-screen bg-[#F7F7F0]">
      {/* Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 border-b transition-all duration-300 ${scrolled ? "bg-[#F7F7F0] border-[#E8E8E0]" : "bg-transparent border-transparent"}`}>
        <div className="container mx-auto px-4 py-2 flex items-center justify-between">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2"
          >
            <Menu size={24} className="text-[#373A36]" />
          </button>

          <div className="flex items-center gap-2 md:gap-4">
            <img src="/companylogo-2.png" alt="Soho Lighting" className="h-12 w-auto object-contain" />
          </div>

          <nav className="hidden md:flex gap-8 flex-1 ml-12">
            <a href="#" className={`transition ${scrolled ? "text-[#373A36] hover:text-[#6B8E7F]" : "text-white hover:text-white/70"}`}>Home</a>
            <a href="#" className={`transition ${scrolled ? "text-[#373A36] hover:text-[#6B8E7F]" : "text-white hover:text-white/70"}`}>About Us</a>
            <a href="#" className={`transition ${scrolled ? "text-[#373A36] hover:text-[#6B8E7F]" : "text-white hover:text-white/70"}`}>Products</a>
            <a href="#" className={`transition ${scrolled ? "text-[#373A36] hover:text-[#6B8E7F]" : "text-white hover:text-white/70"}`}>Contact Us</a>
            <a href="#" className={`transition ${scrolled ? "text-[#373A36] hover:text-[#6B8E7F]" : "text-white hover:text-white/70"}`}>More</a>
          </nav>

          <div className="flex items-center gap-4">
            <div className={`hidden md:flex items-center border rounded px-3 py-2 transition-all duration-300 ${scrolled ? "bg-white border-[#E8E8E0]" : "bg-white/10 border-white/40"}`}>
              <input
                type="text"
                placeholder="Search for products"
                className={`outline-none text-sm placeholder-[#999] flex-1 bg-transparent ${scrolled ? "text-[#373A36]" : "text-white placeholder-white/60"}`}
              />
              <Search size={18} className={scrolled ? "text-[#999]" : "text-white/70"} />
            </div>
            <button className="p-2">
              <User size={20} className={scrolled ? "text-[#373A36]" : "text-white"} />
            </button>
            <button className="p-2">
              <ShoppingCart size={20} className={scrolled ? "text-[#373A36]" : "text-white"} />
            </button>
          </div>
        </div>

        {menuOpen && (
          <nav className="md:hidden border-t border-[#E8E8E0] p-4 space-y-3">
            <a href="#" className="block text-[#373A36]">Home</a>
            <a href="#" className="block text-[#373A36]">About Us</a>
            <a href="#" className="block text-[#373A36]">Products</a>
            <a href="#" className="block text-[#373A36]">Contact Us</a>
            <a href="#" className="block text-[#373A36]">More</a>
          </nav>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative h-[90vh] overflow-hidden">
        {heroSlides.map((slide, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-opacity duration-1000 ${idx === heroIndex ? "opacity-100 z-10" : "opacity-0 z-0"}`}
          >
            {slide.type === "video" ? (
              <video
                className="w-full h-full object-cover scale-105"
                style={{ objectPosition: "center center" }}
                src={slide.src}
                autoPlay
                muted
                loop
                playsInline
              />
            ) : (
              <img src={slide.src} alt={slide.heading} className="w-full h-full object-cover" />
            )}
            <div className="" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
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
              onClick={() => setHeroIndex(idx)}
              className={`h-2 rounded-full transition-all duration-300 ${idx === heroIndex ? "bg-white w-6" : "bg-white/50 w-2"}`}
            />
          ))}
        </div>
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
              <div className="grid gap-3" style={{ display: "grid", gridTemplateRows: "1fr 1fr", gridAutoFlow: "column", gridAutoColumns: "calc((100% - 3.2 * 12px) / 4.2)" }}>
                {shopCategoryList.map((cat) => (
                  <div key={cat.name} className="relative overflow-hidden cursor-pointer group" style={{ height: "240px" }}>
                    <img
                      src={cat.image}
                      alt={cat.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      style={{ objectPosition: cat.objectPosition || "center" }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                    <div className="absolute inset-0 flex items-end justify-center p-4">
                      <span className="text-white text-sm font-semibold tracking-widest leading-tight text-center">{cat.name}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Arrow */}
            <button
              onClick={() => {
                const el = document.getElementById("shop-category-scroll");
                if (el) el.scrollBy({ left: 300, behavior: "smooth" });
              }}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-10 w-10 h-10 bg-white border border-[#E8E8E0] rounded-full flex items-center justify-center shadow-md hover:bg-[#F7F7F0] transition"
            >
              <ChevronRight size={20} className="text-[#373A36]" />
            </button>
          </div>
        </div>
      </section>

      {/* Kitchen Experience Section */}
      <section className="relative h-[90vh] overflow-hidden mb-16">
        {/* Base Image - Changes based on Day/Night toggle */}
        <div className="absolute inset-0">
          <img
            src={kitchenLights.dayNight 
              ? "/Experience/Kitchen/Kitchen-Tapelight-6COB116S30WH-Day-Etcher-All-Off.webp"
              : "/Experience/Kitchen/1776165672498.png"
            }
            alt="Kitchen Base"
            className="w-full h-full object-cover transition-opacity duration-500"
          />
        </div>

        {/* Tape Lights Layer */}
        {kitchenLights.tapeLights && (
          <div className="absolute inset-0" style={{ mixBlendMode: 'lighten' }}>
            <img
              src="/Experience/Kitchen/Kitchen-Tapelight-6COB116S30WH-Night-Hero.webp"
              alt="Tape Lights"
              className="w-full h-full object-cover"
            />
          </div>
        )}

        {/* Pendants Layer */}
        {kitchenLights.pendants && (
          <div className="absolute inset-0" style={{ mixBlendMode: 'lighten' }}>
            <img
              src="/Experience/Kitchen/Kitchen-Tapelight-6COB116S30WH-Night-Etcher.webp"
              alt="Pendants"
              className="w-full h-full object-cover"
            />
          </div>
        )}

        {/* Downlights Layer */}
        {kitchenLights.downlights && (
          <div className="absolute inset-0" style={{ mixBlendMode: 'lighten' }}>
            <img
              src="/Experience/Kitchen/Kitchen-Tapelight-6COB116S30WH-Night-Ara.webp"
              alt="Downlights"
              className="w-full h-full object-cover"
            />
          </div>
        )}
        <div className="absolute inset-0 bg-black/20" />

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
                        onClick={() => setShowSpaceModal(false)}
                        className="group flex-shrink-0 cursor-pointer"
                        style={{ width: '400px' }}
                      >
                        <div className="relative overflow-hidden rounded-lg" style={{ height: '300px' }}>
                          <img
                            src={space.image}
                            alt={space.name}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
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
                { label: "Tape Lights", key: "tapeLights", active: kitchenLights.tapeLights },
                { label: "Pendants", key: "pendants", active: kitchenLights.pendants },
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
      </section>

      {/* About Us */}
      <section className="relative h-[750px] md:h-[110vh] overflow-hidden">
        <img
          src={aboutItems[activeAbout].image}
          alt="About Us"
          className="w-full h-full object-cover transition-all duration-700"
          style={{ objectPosition: "20% 30%" }}
        />
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Left: Dynamic Text */}
        <div className="absolute inset-0 flex items-center" style={{ paddingLeft: "10%", paddingRight: "42%" }}>
          <div key={activeAbout} className="animate-fadeSlideIn">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-full bg-[#C9A961]/20 border border-[#C9A961]/50 flex items-center justify-center">
                <Zap size={16} className="text-[#C9A961]" fill="#C9A961" />
              </div>
              <p className="text-white font-sans tracking-widest uppercase" style={{ fontSize: "21px", paddingLeft: "0px", marginBottom: "0px" }}>About Us</p>
            </div>
            <h2 className="text-white text-5xl md:text-7xl font-light mb-8 leading-tight"
                style={{ fontFamily: "'Playfair Display', serif", paddingTop: "10px", marginBottom: "8px" }}>
              {aboutItems[activeAbout].heading}
            </h2>
            <div className="text-white leading-relaxed space-y-0" style={{ maxWidth: "50%" }}>
              {aboutItems[activeAbout].description.split("\n\n").map((para, i) => (
                <p key={i} className="font-sans" style={{ fontSize: "19px", marginBottom: "20px", color: "#FFFFFF" }}>{para}</p>
              ))}
            </div>
            <a
              href="#"
              className="inline-block text-white font-sans border border-white hover:bg-white hover:text-[#373A36] transition-all duration-300"
              style={{ fontSize: "15px", padding: "6px 34px 6px 20px", marginTop: "5px" }}
            >
              Read More
            </a>
          </div>
        </div>

        {/* Right: List — original position */}
        <div className="absolute inset-0 flex items-center" style={{ paddingLeft: "62%", pointerEvents: "none" }}>
          <div className="w-full max-w-xs" style={{ pointerEvents: "auto" }}>
            {aboutItems.map((item, idx) => (
              <div
                key={idx}
                onMouseEnter={() => setActiveAbout(idx)}
                onClick={() => setActiveAbout(idx)}
                className={`py-6 cursor-pointer flex items-center justify-between group transition-all duration-300 ${
                  idx < aboutItems.length - 1 ? `border-b ${activeAbout === idx ? "border-[#C9A961]" : "border-white/40"}` : ""
                }`}
              >
                <span
                  className={`text-xl md:text-2xl font-light tracking-widest transition-all duration-300 ${
                    activeAbout === idx ? "text-[#C9A961] translate-x-2" : "text-white group-hover:text-[#C9A961] group-hover:translate-x-2"
                  }`}
                >
                  {item.title}
                </span>
                <ChevronRight
                  size={18}
                  className={`transition-all duration-300 ${
                    activeAbout === idx ? "text-[#C9A961] opacity-100 translate-x-0" : "text-[#C9A961] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0"
                  }`}
                />
              </div>
            ))}
          </div>
        </div>

      </section>

      {/* Why Choose Magik Lighting */}
      <section className="py-16 md:py-24 bg-[#F7F7F0]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <p className="text-[#C9A961] text-sm tracking-widest uppercase mb-3">Our Advantage</p>
            <h2 className="text-3xl md:text-5xl font-serif font-light tracking-widest text-[#373A36] leading-tight">
              Why Choose <strong className="font-bold">Magik Lighting</strong>
            </h2>
            <div className="flex justify-center mt-4">
              <div className="h-1 w-16 bg-[#6B8E7F] rounded-full"></div>
            </div>
            <p className="text-[#666] text-sm max-w-3xl leading-relaxed mx-auto mt-4">
              LED lights are the latest choice for smart and sustainable functioning. Magik enhances the power of LED lights that illuminates your world with smart solutions empowered by innovative thinking.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5">
            {[
              {
                icon: <Zap size={24} className="text-[#6B8E7F]" />,
                title: "Energy Efficient",
                desc: "Our LED solutions consume up to 80% less energy than traditional lighting, reducing your electricity bills and carbon footprint significantly.",
              },
              {
                icon: <Factory size={24} className="text-[#6B8E7F]" />,
                title: "Made in India",
                desc: "Proudly manufactured in our state-of-the-art facility with world-class machinery, ensuring quality at every step of production.",
              },
              {
                icon: <Award size={24} className="text-[#6B8E7F]" />,
                title: "ISO Certified Quality",
                desc: "Every product meets rigorous international standards. Our ISO, CE, and RoHS certifications are a testament to our commitment to excellence.",
              },
              {
                icon: <Globe size={24} className="text-[#6B8E7F]" />,
                title: "Pan-India Network",
                desc: "With 300+ distributors and 15,000+ retailers across India, Magik Lighting is always within reach — wherever you are.",
              },
              {
                icon: <Wrench size={24} className="text-[#6B8E7F]" />,
                title: "End-to-End Solutions",
                desc: "From residential to large-scale industrial projects, we provide complete lighting solutions tailored to your specific requirements.",
              },
              {
                icon: <Leaf size={24} className="text-[#6B8E7F]" />,
                title: "Sustainable Future",
                desc: "We design with the planet in mind — using eco-friendly materials and processes to build a greener, brighter tomorrow.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="group bg-white rounded-xl p-8 shadow-sm hover:shadow-md border border-[#E8E8E0] hover:border-[#6B8E7F] transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-full bg-[#6B8E7F]/10 flex items-center justify-center mb-6 group-hover:bg-[#6B8E7F]/20 transition-colors duration-300">
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold text-[#373A36] mb-3 tracking-wide">{item.title}</h3>
                <p className="text-[#666] text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* B2B Solutions */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">

          {/* Header */}
          <div className="mb-10 text-center">
            <p className="text-[#C9A961] text-xs tracking-widest uppercase mb-2">B2B Solutions</p>
            <h2 className="text-4xl md:text-5xl font-serif font-light tracking-widest text-[#373A36] mb-2 leading-tight">
              B2B Project Showcase
            </h2>
            <div className="flex justify-center mb-4">
              <div className="h-1 w-16 bg-[#6B8E7F] rounded-full"></div>
            </div>
            <p className="text-[#666] text-base max-w-xl leading-relaxed mx-auto">
              Trusted by builders, contractors, and enterprises across India —
              delivering end-to-end lighting solutions for every scale.
            </p>
          </div>

          {/* 3x2 Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { img: "/starcementplant.png",                        title: "Star Cement Plant",       location: "Meghalaya",   tag: "INDUSTRIAL",         objectPosition: "center center" },
              { img: "/The Agri Horticulture, Kolkata.jpeg",        title: "The Agri Horticulture",   location: "Kolkata",     tag: "AGRICULTURE",        objectPosition: "center center" },
              { img: "/Kolkata Airport.jpeg",                       title: "Kolkata Airport",         location: "Kolkata",     tag: "INFRASTRUCTURE",     objectPosition: "center center" },
              { img: "/Durgapur Steel Plant, West Bengal.jpeg",     title: "Durgapur Steel Plant",    location: "West Bengal", tag: "INDUSTRIAL",         objectPosition: "center center" },
              { img: "/indorr lighting.png",                        title: "Eden Gardens Club House", location: "Kolkata",     tag: "SPORTS & RECREATION",objectPosition: "center center" },
              { img: "/towerimage.png",                             title: "Air Traffic Control",     location: "Bhubaneswar", tag: "INFRASTRUCTURE",     objectPosition: "center 40%"   },
            ].map((card, idx) => (
              <div key={idx} className="relative rounded-xl overflow-hidden group cursor-pointer" style={{ height: "260px" }}>
                <img
                  src={card.img}
                  alt={card.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  style={{ objectPosition: card.objectPosition }}
                />
                {/* dark gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                {/* Title & location */}
                <div className="absolute bottom-0 left-0 p-5">
                  <h3 className="text-white text-xl font-serif font-light leading-snug">{card.title}</h3>
                  <p className="text-white/70 text-sm mt-1">{card.location}</p>
                  <div className="h-0.5 w-8 bg-[#6B8E7F] mt-2 rounded-full" />
                </div>
              </div>
            ))}
          </div>

          {/* Bottom features strip */}
          <div className="mt-10 border border-[#E8E8E0] rounded-xl flex flex-wrap divide-y sm:divide-y-0 sm:divide-x divide-[#E8E8E0] overflow-hidden">
            {["BULK ORDERS", "CUSTOM BRANDING", "DEDICATED ACCOUNT MANAGER", "PAN INDIA DELIVERY", "AFTER-SALES SUPPORT"].map((feat) => (
              <div key={feat} className="flex-1 min-w-[160px] flex items-center justify-center gap-2 py-4 px-4 bg-white hover:bg-[#F7F7F0] transition-colors">
                <div className="w-2 h-2 rounded-full bg-[#C9A961]" />
                <span className="text-[#373A36] text-xs font-semibold tracking-widest">{feat}</span>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Corporate Videos */}
      <CorporateVideos />

      {/* Client Love */}
      <ClientLove />

      {/* Collections Grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-serif text-[#373A36] mb-12 text-center font-light">
            FEATURED COLLECTIONS
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <div className="relative h-64 md:h-80 rounded overflow-hidden group cursor-pointer">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663523553213/fVQNCj9t7YeSb6RPJnExaF/pendant-lights-collection-VkKopmr7jLVY2oK5HwMfbo.webp"
                alt="Palaces Collection"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-all flex items-end p-6">
                <h3 className="text-white text-3xl font-serif font-light">
                  The Palaces Collection
                </h3>
              </div>
            </div>

            <div className="relative h-64 md:h-80 rounded overflow-hidden group cursor-pointer">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663523553213/fVQNCj9t7YeSb6RPJnExaF/outdoor-lighting-wall-RaB9Dem5DoAtwqv2vYPnkd.webp"
                alt="Pendant Lights"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-all flex items-end p-6">
                <h3 className="text-white text-3xl font-serif font-light">
                  Pendant Lights
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16 md:py-24 bg-[#F7F7F0]">
        <div className="container mx-auto px-4 max-w-2xl text-center">
          <p className="text-lg md:text-xl text-[#373A36] mb-6 italic leading-relaxed">
            "The Soho Lighting Company's designs are timelessly beautiful and
            incredibly well-made. Each piece demonstrates exceptional attention
            to detail and craftsmanship."
          </p>
          <p className="text-sm font-semibold text-[#6B8E7F] tracking-widest">
            GERRY APPONYI, DIRECTOR, APPONYI DESIGN
          </p>
        </div>
      </section>

      {/* Outdoor Lighting Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            <div className="relative h-64 md:h-96 rounded overflow-hidden">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663523553213/fVQNCj9t7YeSb6RPJnExaF/outdoor-lighting-wall-RaB9Dem5DoAtwqv2vYPnkd.webp"
                alt="Outdoor Lighting"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex flex-col justify-center">
              <h2 className="text-4xl md:text-5xl font-serif text-[#373A36] mb-6 font-light">
                Outdoor Lighting
              </h2>
              <p className="text-[#666] mb-8 leading-relaxed">
                Illuminate your exterior spaces with our weather-resistant outdoor
                lighting collection. Designed to withstand the elements while
                maintaining the same aesthetic excellence found throughout our
                range. Perfect for gardens, patios, and architectural features.
              </p>
              <button className="px-8 py-3 border-2 border-[#373A36] text-[#373A36] hover:bg-[#373A36] hover:text-white transition-all duration-300 font-medium tracking-widest text-sm w-fit">
                VIEW COLLECTION
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Trending Products */}
      <section className="py-16 md:py-24 bg-[#F7F7F0]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-serif text-[#373A36] mb-12 text-center font-light">
            TRENDING PRODUCTS
          </h2>

          <div className="relative">
            <button
              onClick={prevProduct}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-white hover:bg-[#E8E8E0] transition rounded-full shadow"
            >
              <ChevronLeft size={24} className="text-[#373A36]" />
            </button>

            <div className="flex gap-6 overflow-hidden mx-12">
              {products.map((product, idx) => (
                <div
                  key={product.id}
                  className={`flex-shrink-0 transition-all duration-300 ${
                    idx === currentProductIndex ? "w-full md:w-80" : "w-0"
                  }`}
                >
                  {idx === currentProductIndex && (
                    <div className="bg-white rounded p-4">
                      <div className="relative h-64 md:h-80 rounded overflow-hidden mb-4">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <h3 className="text-lg font-semibold text-[#373A36] mb-2">
                        {product.name}
                      </h3>
                      <p className="text-xl font-semibold text-[#C9A961]">
                        {product.price}
                      </p>
                      <button className="w-full mt-4 px-6 py-2 border border-[#373A36] text-[#373A36] hover:bg-[#373A36] hover:text-white transition-all duration-300 text-sm font-medium">
                        ADD TO CART
                      </button>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <button
              onClick={nextProduct}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-white hover:bg-[#E8E8E0] transition rounded-full shadow"
            >
              <ChevronRight size={24} className="text-[#373A36]" />
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#373A36] text-white py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-semibold mb-4 tracking-widest text-sm">
                ABOUT
              </h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>
                  <a href="#" className="hover:text-white transition">
                    Our Story
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Sustainability
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Craftsmanship
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 tracking-widest text-sm">
                PRODUCTS
              </h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>
                  <a href="#" className="hover:text-white transition">
                    Lighting
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Sockets & Switches
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Collections
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 tracking-widest text-sm">
                SUPPORT
              </h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>
                  <a href="#" className="hover:text-white transition">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Shipping
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 tracking-widest text-sm">
                CONNECT
              </h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>
                  <a href="#" className="hover:text-white transition">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Pinterest
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Newsletter
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-8 text-center text-sm text-gray-300">
            <p>&copy; 2026 The Soho Lighting Company. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}