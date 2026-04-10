import { ChevronLeft, ChevronRight, Search, User, ShoppingCart, Menu } from "lucide-react";
import { useState } from "react";

/**
 * Design Philosophy: Luxury Craft
 * - Warm cream background with sage green and brass accents
 * - Elegant serif typography (Lora) for display, Proxima Nova for body
 * - Generous whitespace and subtle shadows
 * - Smooth transitions and refined interactions
 */

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentProductIndex, setCurrentProductIndex] = useState(0);
  const [activeAbout, setActiveAbout] = useState(0);

  const aboutItems = [
    {
      title: "Company Profile",
      heading: "Made in India",
      description:
        "In just a few years, MAGIK has established itself as a reputed and trusted brand with a pan-India footprint. Its product range encompasses solutions for Home, Office, Industry, Infrastructure, Retail and Hospitality. With a network of 300+ distributors and 15,000+ retailers, MAGIK is there to serve you anywhere.",
      image: "/century house.jpeg",
    },
    {
      title: "Factory and Machinery",
      heading: "World-Class Manufacturing",
      description:
        "Our state-of-the-art factory is equipped with advanced automated machinery and rigorous quality control processes. Every product is crafted with precision to meet international standards and ensure long-lasting performance.",
      image: "/century house.jpeg",
    },
    {
      title: "Certificates",
      heading: "Certified Excellence",
      description:
        "Magiklight holds multiple international certifications including ISO, CE, and RoHS, reflecting our unwavering commitment to quality, safety, and environmental responsibility in every product we manufacture.",
      image: "/century house.jpeg",
    },
    {
      title: "Company Deck",
      heading: "Our Vision & Mission",
      description:
        "We envision a brighter, more sustainable world powered by intelligent lighting. Our mission is to innovate continuously, reduce energy consumption, and provide lighting solutions that enhance lives and spaces.",
      image: "/century house.jpeg",
    },
    {
      title: "Brochures",
      heading: "Explore Our Range",
      description:
        "Browse our comprehensive product brochures covering our full range of LED panels, street lights, solar lights, architectural lighting, and more — designed for every application and environment.",
      image: "/century house.jpeg",
    },
  ];
  const shopCategoryList = [
    { name: "PANEL & SPOTLIGHT", image: "/panel.png", objectPosition: "center top" },
    { name: "OUTDOOR LIGHTS", image: "/outdoorlights.png" },
    { name: "TABLE LAMPS", image: "/Sidelamp 2.png", objectPosition: "85% 0%" },
    { name: "LAMPS", image: "/lamp2.png" },
    { name: "BATTEN", image: "/Batten.png", objectPosition: "center top" },
    { name: "ACCESSORIES", image: "https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?w=600&q=80" },
    { name: "STREET LIGHTING", image: "/Streetlightss.png", objectPosition: "center top" },
    { name: "SOLAR LIGHTING", image: "/solarlights.png", objectPosition: "70% center" },
    { name: "AREA LIGHTING", image: "/arealights.png" },
    { name: "INDUSTRIAL LIGHTING", image: "/industrial lights.png" },
    { name: "LANDSCAPE LIGHTING", image: "/landscape lights.png" },
    { name: "RETAIL LIGHTING", image: "/retail.png" },
    { name: "INDOOR LIGHTING", image: "/indorr lighting.png", objectPosition: "center top" },
    { name: "ARCHITECTURAL LIGHTING", image: "/ARCHITECTURAL.png" },
    { name: "SMART LIGHTING", image: "/smartlights.png" },
    { name: "WIRE", image: "/wire.png" },
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
      <header className="sticky top-0 z-50 bg-[#F7F7F0] border-b border-[#E8E8E0]">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2"
          >
            <Menu size={24} className="text-[#373A36]" />
          </button>

          <div className="flex items-center gap-2 md:gap-4">
            <img src="/companylogo.png" alt="Soho Lighting" className="h-20 w-auto object-contain" />
          </div>

          <nav className="hidden md:flex gap-8 flex-1 ml-12">
            <a href="#" className="text-[#373A36] hover:text-[#6B8E7F] transition">
              Home
            </a>
            <a href="#" className="text-[#373A36] hover:text-[#6B8E7F] transition">
              About Us
            </a>
            <a href="#" className="text-[#373A36] hover:text-[#6B8E7F] transition">
              Products
            </a>
            <a href="#" className="text-[#373A36] hover:text-[#6B8E7F] transition">
              Contact Us
            </a>
            <a href="#" className="text-[#373A36] hover:text-[#6B8E7F] transition">
              More
            </a>
          </nav>

          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center bg-white border border-[#E8E8E0] rounded px-3 py-2">
              <input
                type="text"
                placeholder="Search for products"
                className="outline-none text-sm text-[#373A36] placeholder-[#999] flex-1"
              />
              <Search size={18} className="text-[#999]" />
            </div>
            <button className="p-2">
              <User size={20} className="text-[#373A36]" />
            </button>
            <button className="p-2">
              <ShoppingCart size={20} className="text-[#373A36]" />
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
      <section className="relative h-96 md:h-[500px] overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          style={{ objectPosition: "center 60%" }}
          src="/Magik Video Low 2.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="absolute inset-0 bg-black/30"></div>

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
          <h1 className="text-4xl md:text-7xl font-serif font-light mb-4 tracking-tight">
            It's in the detail
          </h1>
          <p className="text-sm md:text-base mb-8 tracking-wide">
            Engineered by experts | Handcrafted by artisans
          </p>
          <button className="px-8 py-3 border-2 border-white text-white hover:bg-white hover:text-[#373A36] transition-all duration-300 font-medium tracking-widest text-sm">
            SHOP THE COLLECTION
          </button>
        </div>
      </section>

      {/* Shop By Category */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-light text-[#373A36] mb-2 text-center tracking-widest">
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
                    <div className="absolute inset-0 transition-all flex items-end p-4">
                      <span className="text-white text-sm font-semibold tracking-widest leading-tight">{cat.name}</span>
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

      {/* About Us */}
      <section className="relative h-[750px] md:h-[110vh] overflow-hidden">
        <img
          src={aboutItems[activeAbout].image}
          alt="About Us"
          className="w-full h-full object-cover transition-all duration-700"
          style={{ objectPosition: "20% 30%" }}
        />
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Left: Dynamic Text */}
        <div className="absolute inset-0 flex items-center" style={{ paddingLeft: "5%", paddingRight: "42%" }}>
          <div>
            <p className="text-[#C9A961] text-sm md:text-lg tracking-widest uppercase mb-6">About Us</p>
            <h2 className="text-white text-4xl md:text-6xl font-serif font-light mb-8 leading-tight">
              {aboutItems[activeAbout].heading}
            </h2>
            <div className="text-white text-xl md:text-2xl leading-relaxed space-y-4">
              {aboutItems[activeAbout].description.split("\n\n").map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </div>
        </div>

        {/* Right: List — original position */}
        <div className="absolute inset-0 flex items-center" style={{ paddingLeft: "62%" }}>
          <div className="w-full max-w-xs">
            {aboutItems.map((item, idx) => (
              <div
                key={idx}
                onMouseEnter={() => setActiveAbout(idx)}
                onClick={() => setActiveAbout(idx)}
                className={`py-6 cursor-pointer flex items-center justify-between group transition-colors duration-200 ${
                  idx < aboutItems.length - 1 ? `border-b ${activeAbout === idx ? "border-[#C9A961]" : "border-white/40"}` : ""
                }`}
              >
                <span
                  className={`text-xl md:text-2xl font-light tracking-widest transition-colors duration-300 ${
                    activeAbout === idx ? "text-[#C9A961]" : "text-white group-hover:text-[#C9A961]"
                  }`}
                >
                  {item.title}
                </span>
                {activeAbout === idx && (
                  <ChevronRight size={18} className="text-[#C9A961]" />
                )}
              </div>
            ))}
          </div>
        </div>

      </section>

      {/* Sockets & Switches Featured */}
      <section className="py-16 md:py-24 bg-[#F7F7F0]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-serif text-[#373A36] mb-6 font-light">
                Sockets & Switches
              </h2>
              <p className="text-[#666] mb-8 leading-relaxed">
                Our collection of luxury electrical hardware combines traditional
                craftsmanship with contemporary design. Each piece is handcrafted
                and finished with premium materials including aged brass, bronze,
                and brushed finishes.
              </p>
              <button className="px-8 py-3 border-2 border-[#373A36] text-[#373A36] hover:bg-[#373A36] hover:text-white transition-all duration-300 font-medium tracking-widest text-sm">
                EXPLORE COLLECTION
              </button>
            </div>

            <div className="relative h-80 md:h-96 rounded overflow-hidden">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663523553213/fVQNCj9t7YeSb6RPJnExaF/sockets-switches-detail-a6rpo3PXVGBFy2s8rhwVJK.webp"
                alt="Sockets and Switches"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

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
