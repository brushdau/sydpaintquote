import { useState, useEffect } from 'react';
import { Home as HomeIcon, Building2, Store, Warehouse, Fence, Sparkles } from 'lucide-react';

interface HomeProps {
  onNavigate: (page: 'home' | 'services' | 'quote', sectionId?: string) => void;
}

export default function Home({ onNavigate }: HomeProps) {
  useEffect(() => {
    const els = document.querySelectorAll('.aos');
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('show');
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.05, rootMargin: '0px 0px -50px 0px' }
    );
    els.forEach((el) => io.observe(el));

    return () => io.disconnect();
  }, []);

  const services = [
    {
      icon: <span className="text-2xl">🏠</span>,
      name: "Interior Painting",
      desc: "Bedrooms, living areas, kitchens, ceilings & more"
    },
    {
      icon: <span className="text-2xl">🏗️</span>,
      name: "Exterior Painting",
      desc: "Facades, weatherboard, brick, render & more"
    },
    {
      icon: <span className="text-2xl">🏢</span>,
      name: "Commercial Painting",
      desc: "Offices, retail, warehouses & industrial spaces"
    },
    {
      icon: <span className="text-2xl">🏠</span>,
      name: "Roof Painting",
      desc: "Terracotta, Colorbond, metal & tile roofs"
    },
    {
      icon: <span className="text-2xl">🌿</span>,
      name: "Deck & Fence Painting",
      desc: "Timber staining, oiling, painting & restoration"
    },
    {
      icon: <span className="text-2xl">🔑</span>,
      name: "New Home Painting",
      desc: "Complete painting for new builds & renovations"
    }
  ];

  const steps = [
    {
      num: "01",
      title: "Tell Us About Your Job",
      text: "Fill in our simple 2-minute online form. Select your service type, property details, and Sydney suburb. It's quick, easy, and 100% free.",
      img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80",
      alt: "Fill out form"
    },
    {
      num: "02",
      title: "Get Matched Instantly",
      text: "We immediately notify up to 3 vetted local Sydney painters who specialise in your job. They review the details and get back to you with their best price.",
      img: "/match.png",
      alt: "Get matched"
    },
    {
      num: "03",
      title: "Compare & Choose",
      text: "Receive multiple quotes directly. Compare prices, read painter reviews, check availability — then simply choose the painter that's right for you.",
      img: "/choose.png",
      alt: "Compare and choose"
    }
  ];

  return (
    <>
      {/* HERO */}
      <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden">
        <div className="hero-bg"></div>
        <div className="hero-overlay"></div>
        <div className="hero-content relative z-10 max-w-[780px] animate-fade-up">
          <div className="hero-pill inline-flex items-center gap-2 bg-white/12 border border-white/30 rounded-full px-5 py-1.75 mb-7 text-[11px] font-medium tracking-[2.2px] uppercase backdrop-blur-md text-white">
            Sydney's #1 Free Painting Quote Service
          </div>
          <h1 className="hero-h1 font-playfair text-[clamp(48px,8vw,92px)] font-extrabold text-white leading-[1.02] mb-1 tracking-tight">Free Painting Quotes</h1>
          <span className="hero-h1-italic font-playfair text-[clamp(48px,8vw,92px)] font-bold italic text-gold-light block leading-[1.05] mb-10 tracking-tight">from Sydney's Best</span>
          <p className="hero-sub text-[18px] font-light text-white/90 leading-[1.75] max-w-[560px] mx-auto mb-11">Tell us about your painting job. We instantly match you with trusted, vetted local painters. Compare up to 3 quotes and save — completely free, no obligation.</p>
          <div className="hero-btns flex gap-3.5 justify-center flex-wrap mb-12">
            <a onClick={() => onNavigate('quote')} className="btn-gold inline-flex items-center gap-2 bg-gold text-white rounded-lg px-[30px] py-3.5 text-[15px] font-medium transition-all hover:bg-gold-dark hover:-translate-y-0.5 cursor-pointer">Get Your Free Quote →</a>
            <a onClick={() => onNavigate('home', 'how')} className="btn-ghost inline-flex items-center gap-2 bg-transparent text-white border-2 border-white/55 rounded-lg px-[30px] py-3.5 text-[15px] font-normal transition-all hover:bg-white/12 cursor-pointer">How It Works</a>
          </div>
        </div>
        <div className="hero-trust relative z-10 flex gap-7 justify-center flex-wrap">
          <div className="trust-item flex items-center gap-1.75 text-white/90 text-[13px]">100% Free for Homeowners</div>
          <div className="trust-item flex items-center gap-1.75 text-white/90 text-[13px]">No Obligation</div>
          <div className="trust-item flex items-center gap-1.75 text-white/90 text-[13px]">Vetted Local Painters</div>
          <div className="trust-item flex items-center gap-1.75 text-white/90 text-[13px]">24hr Response</div>
        </div>
        <div className="scroll-hint absolute bottom-[30px] left-1/2 -translate-x-1/2 z-10">
          <div className="scroll-mouse w-[22px] h-9 border-2 border-white/40 rounded-xl flex justify-center pt-1.25"></div>
        </div>
      </section>

      {/* STATS */}
      <div className="stats-bar bg-gold px-12 py-11">
        <div className="stats-inner max-w-[960px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-5 text-center">
          <div className="aos"><div className="stat-icon text-[22px] text-white/65 mb-2.5">👤</div><div className="stat-num font-playfair text-4xl font-bold text-white leading-none mb-1.5">500+</div><div className="stat-lbl text-[13px] text-white/78 font-light">Painters in Network</div></div>
          <div className="aos" style={{transitionDelay:'.1s'}}><div className="stat-icon text-[22px] text-white/65 mb-2.5">📋</div><div className="stat-num font-playfair text-4xl font-bold text-white leading-none mb-1.5">4,800+</div><div className="stat-lbl text-[13px] text-white/78 font-light">Quotes Matched</div></div>
          <div className="aos" style={{transitionDelay:'.2s'}}><div className="stat-icon text-[22px] text-white/65 mb-2.5">⭐</div><div className="stat-num font-playfair text-4xl font-bold text-white leading-none mb-1.5">4.9★</div><div className="stat-lbl text-[13px] text-white/78 font-light">Average Rating</div></div>
          <div className="aos" style={{transitionDelay:'.3s'}}><div className="stat-icon text-[22px] text-white/65 mb-2.5">⏱</div><div className="stat-num font-playfair text-4xl font-bold text-white leading-none mb-1.5">&lt; 2hrs</div><div className="stat-lbl text-[13px] text-white/78 font-light">Average Response</div></div>
        </div>
      </div>

      {/* WHY CHOOSE US */}
      <section id="why" className="bg-[#F5F0E8] py-24 px-12">
        <span className="tag block text-center text-[11px] font-semibold tracking-[2.2px] uppercase text-gold mb-4">WHY CHOOSE US</span>
        <h2 className="sec-title font-playfair text-[clamp(32px,4.5vw,54px)] font-bold text-center text-[#1A1208] leading-[1.12] mb-4.5">The Smarter Way to Find<br/>a Painter in Sydney</h2>
        <p className="sec-sub text-base text-[#7A6B54] text-center leading-[1.75] max-w-[560px] mx-auto mb-[60px]">Stop calling around. Let us do the work — we connect you with the right painter for your job, fast and for free.</p>
        <div className="why-grid max-w-[1080px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="why-card aos bg-white border border-gold/13 rounded-[18px] p-9 transition-all hover:shadow-[0_14px_44px_rgba(201,150,42,0.13)] hover:-translate-y-1.25">
            <div className="why-icon w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center text-[22px] mb-5">💰</div>
            <div className="why-title text-[15px] font-semibold text-[#1A1208] mb-2.5">100% Free for Homeowners</div>
            <div className="why-desc text-sm text-[#7A6B54] leading-[1.7]">Getting quotes through Brushd is completely free. No hidden fees, no catch. We're paid by painters who join our network.</div>
          </div>
          <div className="why-card aos bg-white border border-gold/13 rounded-[18px] p-9 transition-all hover:shadow-[0_14px_44px_rgba(201,150,42,0.13)] hover:-translate-y-1.25" style={{transitionDelay:'.1s'}}>
            <div className="why-icon w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center text-[22px] mb-5">🛡</div>
            <div className="why-title text-[15px] font-semibold text-[#1A1208] mb-2.5">Vetted & Trusted Painters</div>
            <div className="why-desc text-sm text-[#7A6B54] leading-[1.7]">Every painter in our network is verified, insured, and has passed our quality checks. We only work with the best in Sydney.</div>
          </div>
          <div className="why-card aos bg-white border border-gold/13 rounded-[18px] p-9 transition-all hover:shadow-[0_14px_44px_rgba(201,150,42,0.13)] hover:-translate-y-1.25" style={{transitionDelay:'.2s'}}>
            <div className="why-icon w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center text-[22px] mb-5">📊</div>
            <div className="why-title text-[15px] font-semibold text-[#1A1208] mb-2.5">Compare Multiple Quotes</div>
            <div className="why-desc text-sm text-[#7A6B54] leading-[1.7]">Receive up to 3 competitive quotes from local painters. Compare prices, reviews, and availability — then choose the best fit.</div>
          </div>
          <div className="why-card aos bg-white border border-gold/13 rounded-[18px] p-9 transition-all hover:shadow-[0_14px_44px_rgba(201,150,42,0.13)] hover:-translate-y-1.25" style={{transitionDelay:'.3s'}}>
            <div className="why-icon w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center text-[22px] mb-5">📄</div>
            <div className="why-title text-[15px] font-semibold text-[#1A1208] mb-2.5">Absolutely No Obligation</div>
            <div className="why-desc text-sm text-[#7A6B54] leading-[1.7]">Browse quotes with zero pressure. You're under no obligation to accept any quote. Simply choose if you find the right painter.</div>
          </div>
          <div className="why-card aos bg-white border border-gold/13 rounded-[18px] p-9 transition-all hover:shadow-[0_14px_44px_rgba(201,150,42,0.13)] hover:-translate-y-1.25" style={{transitionDelay:'.4s'}}>
            <div className="why-icon w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center text-[22px] mb-5">⏱</div>
            <div className="why-title text-[15px] font-semibold text-[#1A1208] mb-2.5">Fast Turnaround</div>
            <div className="why-desc text-sm text-[#7A6B54] leading-[1.7]">We notify matched painters immediately. Most homeowners receive their first quote within 2 hours of submitting a request.</div>
          </div>
          <div className="why-card aos bg-white border border-gold/13 rounded-[18px] p-9 transition-all hover:shadow-[0_14px_44px_rgba(201,150,42,0.13)] hover:-translate-y-1.25" style={{transitionDelay:'.5s'}}>
            <div className="why-icon w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center text-[22px] mb-5">🏅</div>
            <div className="why-title text-[15px] font-semibold text-[#1A1208] mb-2.5">Quality Guaranteed</div>
            <div className="why-desc text-sm text-[#7A6B54] leading-[1.7]">All painters in our network are backed by their own workmanship guarantees. We're here to help if anything goes wrong.</div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how" className="bg-[#EDE6D6] py-24 px-12">
        <span className="tag block text-center text-[11px] font-semibold tracking-[2.2px] uppercase text-gold mb-4">How It Works</span>
        <h2 className="sec-title font-playfair text-[clamp(32px,4.5vw,54px)] font-bold text-center text-[#1A1208] leading-[1.12] mb-12">3 Simple Steps to Your<br/>Free Painting Quote</h2>
        <div className="steps-wrap max-w-[1060px] mx-auto flex flex-col gap-[84px]">
          {steps.map((step, index) => (
            <div key={index} className={`step-row aos ${index % 2 !== 0 ? 'flip' : ''}`}>
              <div>
                <div className="step-num font-playfair text-[90px] font-bold text-gold/18 leading-none mb-1.5">{step.num}</div>
                <div className="step-ttl font-playfair text-[28px] font-bold text-[#1A1208] mb-3.5">{step.title}</div>
                <div className="step-txt text-[15px] text-[#7A6B54] leading-[1.75]">{step.text}</div>
              </div>
              <div className="step-img rounded-[20px] overflow-hidden aspect-[4/1] shadow-[0_16px_48px_rgba(0,0,0,0.12)] bg-white/40">
                <img src={step.img} alt={step.alt} className="w-full h-full object-contain" referrerPolicy="no-referrer" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section id="services" className="bg-[#F5F0E8] py-24 px-12">
        <span className="tag block text-center text-[11px] font-semibold tracking-[2.2px] uppercase text-gold mb-4">Our Services</span>
        <h2 className="sec-title font-playfair text-[clamp(32px,4.5vw,54px)] font-bold text-center text-[#1A1208] leading-[1.12] mb-4.5">Every Painting Job, Covered</h2>
        <p className="sec-sub text-base text-[#7A6B54] text-center leading-[1.75] max-w-[560px] mx-auto mb-[60px]">Whatever your painting needs, we have specialists for every job across Sydney.</p>
        <div className="srv-grid max-w-[1080px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[18px] mb-11">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="srv-card aos bg-white border border-gold/13 rounded-xl p-6.5 flex items-center gap-[18px] transition-all hover:shadow-lg hover:-translate-y-0.5"
              style={{ transitionDelay: `${index * 0.05}s` }}
            >
              <div className="srv-ico w-[46px] h-[46px] min-w-[46px] bg-gold/10 rounded-xl flex items-center justify-center">
                {service.icon}
              </div>
              <div>
                <div className="srv-name text-sm font-semibold text-[#1A1208] mb-1">{service.name}</div>
                <div className="srv-desc text-[12px] text-[#7A6B54] leading-[1.5]">{service.desc}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center">
          <button 
            onClick={() => onNavigate('services')}
            className="btn-outline-gold inline-flex items-center gap-2 bg-transparent text-gold border-[1.5px] border-gold rounded-lg px-[30px] py-[13px] text-sm font-medium transition-all hover:bg-gold hover:text-white"
          >
            View All Services →
          </button>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials" className="bg-[#EDE6D6] py-24 px-12">
        <span className="tag block text-center text-[11px] font-semibold tracking-[2.2px] uppercase text-gold mb-4">What Homeowners Say</span>
        <h2 className="sec-title font-playfair text-[clamp(32px,4.5vw,54px)] font-bold text-center text-[#1A1208] leading-[1.12] mb-12">Real Results from Real Sydneysiders</h2>
        <div className="rev-grid max-w-[1080px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rev-card aos bg-white border border-gold/13 rounded-[18px] p-[34px_28px] transition-shadow hover:shadow-xl">
            <div className="rev-stars text-gold text-[15px] tracking-[2px] mb-4">★★★★★</div>
            <p className="rev-text text-sm text-[#4A3B28] leading-[1.75] italic mb-6.5">"Got 3 quotes within hours for my exterior painting job. Saved over $800 compared to calling one painter myself. The process was so easy — I'll never go back to the old way!"</p>
            <div className="rev-person flex items-center gap-3">
              <img className="rev-avatar w-[42px] h-[42px] rounded-full object-cover" src="https://i.pravatar.cc/80?img=47" alt="Emma" />
              <div><div className="rev-name text-sm font-semibold text-[#1A1208]">Emma Johnson</div><div className="rev-loc text-[12px] text-[#7A6B54] mt-0.5">Homeowner, Bondi Beach</div></div>
            </div>
          </div>
          <div className="rev-card aos bg-white border border-gold/13 rounded-[18px] p-[34px_28px] transition-shadow hover:shadow-xl" style={{transitionDelay:'.1s'}}>
            <div className="rev-stars text-gold text-[15px] tracking-[2px] mb-4">★★★★★</div>
            <p className="rev-text text-sm text-[#4A3B28] leading-[1.75] italic mb-6.5">"The platform matched me with an excellent painter who painted my whole house interior in 2 days. The quality was outstanding and the price was very fair. Highly recommended!"</p>
            <div className="rev-person flex items-center gap-3">
              <img className="rev-avatar w-[42px] h-[42px] rounded-full object-cover" src="https://i.pravatar.cc/80?img=68" alt="Michael" />
              <div><div className="rev-name text-sm font-semibold text-[#1A1208]">Michael Chen</div><div className="rev-loc text-[12px] text-[#7A6B54] mt-0.5">Property Owner, Parramatta</div></div>
            </div>
          </div>
          <div className="rev-card aos bg-white border border-gold/13 rounded-[18px] p-[34px_28px] transition-shadow hover:shadow-xl" style={{transitionDelay:'.2s'}}>
            <div className="rev-stars text-gold text-[15px] tracking-[2px] mb-4">★★★★★</div>
            <p className="rev-text text-sm text-[#4A3B28] leading-[1.75] italic mb-6.5">"Used Brushd twice now — once for interior and once for my deck. The painters are always professional and the whole experience is stress-free. Will definitely use again!"</p>
            <div className="rev-person flex items-center gap-3">
              <img className="rev-avatar w-[42px] h-[42px] rounded-full object-cover" src="https://i.pravatar.cc/80?img=32" alt="Lisa" />
              <div><div className="rev-name text-sm font-semibold text-[#1A1208]">Lisa Williams</div><div className="rev-loc text-[12px] text-[#7A6B54] mt-0.5">Homeowner, Cronulla</div></div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section id="cta" className="relative py-[110px] px-12 text-center overflow-hidden">
        <div className="cta-bg"></div>
        <div className="cta-ov"></div>
        <div className="cta-inner relative z-10 max-w-[640px] mx-auto aos">
          <h2 className="cta-title font-playfair text-[clamp(36px,5.5vw,64px)] font-bold text-white mb-4.5 leading-[1.1]">Ready for Your Free Quote?</h2>
          <p className="cta-sub text-base text-white/80 leading-[1.7] mb-9.5">Join thousands of Sydney homeowners who have found their perfect painter through Brushd. It takes just 2 minutes.</p>
          <a onClick={() => onNavigate('quote')} className="btn-gold bg-gold text-white rounded-lg px-9 py-4 text-base font-bold transition-all hover:bg-gold-dark hover:-translate-y-0.5 cursor-pointer">Get Your Free Quote Now →</a>
        </div>
      </section>
    </>
  );
}
