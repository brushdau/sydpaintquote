import { useState, useEffect } from 'react';
import Home from './components/Home';
import Services from './components/Services';
import QuoteForm from './components/QuoteForm';
import FAQ from './components/FAQ';
import Contact from './components/Contact';

import ForPainters from './components/ForPainters';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState<'home' | 'services' | 'painters' | 'quote' | 'faq' | 'contact'>('home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Re-run AOS logic when page changes
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
  }, [currentPage]);

  const navigateTo = (page: 'home' | 'services' | 'painters' | 'quote' | 'faq' | 'contact', sectionId?: string) => {
    setCurrentPage(page);
    setIsMenuOpen(false);
    
    if (sectionId) {
      // Small delay to allow the component to mount if we're switching pages
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          const navHeight = 66;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - navHeight;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#F5F0E8] text-[#1A1208] font-sans">
      {/* NAV */}
      <nav className={`fixed top-0 left-0 right-0 z-[200] h-[66px] flex items-center justify-between px-6 md:px-12 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#F5F0E8] shadow-sm' 
          : 'bg-transparent'
      }`}>
        <a className="flex items-center gap-2.5 no-underline cursor-pointer" onClick={() => navigateTo('home')}>
          <div className="w-[38px] h-[38px] bg-[#C9962A] rounded-lg flex items-center justify-center shadow-[0_2px_8px_rgba(201,150,42,0.3)] overflow-hidden">
            <img src="/logo.png" alt="Brushd Logo" className="w-full h-full object-contain p-1" referrerPolicy="no-referrer" />
          </div>
          <span className={`font-playfair text-[22px] font-bold tracking-tight transition-colors duration-300 ${
            (isScrolled || currentPage === 'faq') ? 'text-[#1A1208]' : 'text-white'
          }`}>
            Brush<span className="text-[#C9962A]">d</span>
          </span>
        </a>
        <ul className="hidden md:flex gap-6 list-none items-center">
          {[
            { id: 'home', label: 'Home' },
            { id: 'services', label: 'Services' },
            { id: 'painters', label: 'For Painters' },
            { id: 'faq', label: 'FAQ' },
            { id: 'contact', label: 'Contact' }
          ].map((link, index) => (
            <li key={`${link.id}-${index}`}>
              <a 
                onClick={() => navigateTo(link.id as 'home' | 'services' | 'painters' | 'quote' | 'faq' | 'contact')} 
                className={`no-underline text-[14.5px] transition-all duration-300 cursor-pointer font-medium px-4 py-2 rounded-full ${
                  currentPage === link.id
                    ? ((isScrolled || currentPage === 'faq') ? 'bg-[#C9962A]/10 text-[#C9962A]' : 'bg-white/20 text-white')
                    : `${(isScrolled || currentPage === 'faq') ? 'text-[#4A3B28]/80' : 'text-white/80'} hover:bg-[#C9962A]/10 hover:text-[#C9962A]`
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <a onClick={() => navigateTo('quote')} className="hidden md:inline-flex items-center bg-[#C9962A] text-white rounded-lg px-[22px] py-[11px] text-sm font-medium transition-all hover:bg-[#A07A1E] hover:-translate-y-px cursor-pointer">
          Get Free Quote
        </a>
        <button 
          className={`md:hidden flex flex-col justify-center gap-1.5 w-10 h-10 rounded-lg p-2.5 transition-all duration-300 ${
            (isScrolled || currentPage === 'faq') ? 'bg-[#C9962A]/10' : 'bg-white/10'
          }`}
          onClick={() => setIsMenuOpen(true)}
        >
          <span className={`block w-full h-0.5 rounded-sm transition-all duration-300 ${(isScrolled || currentPage === 'faq') ? 'bg-[#C9962A]' : 'bg-white'}`}></span>
          <span className={`block w-3/4 h-0.5 rounded-sm transition-all duration-300 ${(isScrolled || currentPage === 'faq') ? 'bg-[#C9962A]' : 'bg-white'}`}></span>
          <span className={`block w-full h-0.5 rounded-sm transition-all duration-300 ${(isScrolled || currentPage === 'faq') ? 'bg-[#C9962A]' : 'bg-white'}`}></span>
        </button>
      </nav>

      {/* MOBILE MENU */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-[9999] bg-black/20" onClick={() => setIsMenuOpen(false)}>
          <div className="bg-[#F5F0E8] shadow-xl animate-in slide-in-from-top duration-300" onClick={e => e.stopPropagation()}>
            <div className="flex items-center justify-between p-4 border-b border-gold/15">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 bg-[#C9962A] rounded-lg flex items-center justify-center overflow-hidden">
                  <img src="/logo.png" alt="Brushd Logo" className="w-full h-full object-contain p-1" referrerPolicy="no-referrer" />
                </div>
                <span className="font-playfair text-xl font-bold text-[#1A1208]">Brush<span className="text-[#C9962A]">d</span></span>
              </div>
              <button onClick={() => setIsMenuOpen(false)} className="text-2xl p-2 cursor-pointer">✕</button>
            </div>
            <ul className="p-3 flex flex-col gap-1">
              <li>
                <a 
                  onClick={() => navigateTo('home')} 
                  className={`block p-3.5 rounded-xl font-semibold cursor-pointer transition-all ${
                    currentPage === 'home' 
                      ? 'bg-[#C9962A] text-white shadow-sm' 
                      : 'text-[#4A3B28] hover:bg-[#C9962A]/10'
                  }`}
                >
                  Home
                </a>
              </li>
              <li>
                <a 
                  onClick={() => navigateTo('services')} 
                  className={`block p-3.5 rounded-xl font-semibold cursor-pointer transition-all ${
                    currentPage === 'services' 
                      ? 'bg-[#C9962A] text-white shadow-sm' 
                      : 'text-[#4A3B28] hover:bg-[#C9962A]/10'
                  }`}
                >
                  Services
                </a>
              </li>
              <li>
                <a 
                  onClick={() => navigateTo('painters')} 
                  className={`block p-3.5 rounded-xl font-semibold cursor-pointer transition-all ${
                    currentPage === 'painters' 
                      ? 'bg-[#C9962A] text-white shadow-sm' 
                      : 'text-[#4A3B28] hover:bg-[#C9962A]/10'
                  }`}
                >
                  For Painters
                </a>
              </li>
              <li>
                <a 
                  onClick={() => navigateTo('faq')} 
                  className={`block p-3.5 rounded-xl font-semibold cursor-pointer transition-all ${
                    currentPage === 'faq' 
                      ? 'bg-[#C9962A] text-white shadow-sm' 
                      : 'text-[#4A3B28] hover:bg-[#C9962A]/10'
                  }`}
                >
                  FAQ
                </a>
              </li>
              <li>
                <a 
                  onClick={() => navigateTo('contact')} 
                  className={`block p-3.5 rounded-xl font-semibold cursor-pointer transition-all ${
                    currentPage === 'contact' 
                      ? 'bg-[#C9962A] text-white shadow-sm' 
                      : 'text-[#4A3B28] hover:bg-[#C9962A]/10'
                  }`}
                >
                  Contact
                </a>
              </li>
            </ul>
            <div className="p-4 pb-6">
              <a onClick={() => navigateTo('quote')} className="block bg-gold text-white text-center p-4 rounded-lg font-bold cursor-pointer">Get Free Quote</a>
            </div>
          </div>
        </div>
      )}

      {/* MAIN CONTENT */}
      <main>
        {currentPage === 'home' ? (
          <Home onNavigate={navigateTo} />
        ) : currentPage === 'services' ? (
          <Services onNavigate={navigateTo} />
        ) : currentPage === 'painters' ? (
          <ForPainters onNavigate={navigateTo} />
        ) : currentPage === 'faq' ? (
          <FAQ onNavigate={navigateTo} />
        ) : currentPage === 'contact' ? (
          <Contact onNavigate={navigateTo} />
        ) : (
          <QuoteForm onNavigate={navigateTo} />
        )}
      </main>


      {/* FOOTER */}
      <footer className="bg-[#2A1F0E] text-white/65 py-16 px-12">
        <div className="ft-grid max-w-[1080px] mx-auto grid grid-cols-1 md:grid-cols-[2.2fr_1fr_1fr_1.5fr] gap-12 mb-12">
          <div>
            <a className="flex items-center gap-2.5 mb-4 no-underline cursor-pointer" onClick={() => navigateTo('home')}>
              <div className="w-8 h-8 bg-[#C9962A] rounded-lg flex items-center justify-center overflow-hidden">
                <img src="/logo.png" alt="Brushd Logo" className="w-full h-full object-contain p-1" referrerPolicy="no-referrer" />
              </div>
              <span className="font-playfair text-[22px] font-bold text-white">Brush<span className="text-[#C9962A]">d</span></span>
            </a>
            <p className="text-[13px] leading-[1.7] max-w-[230px] mb-3">Sydney's trusted platform for free, no-obligation painting quotes. Connecting homeowners with vetted local painters since 2022.</p>
            <p className="text-[11px] text-white/30 mb-5">ABN: 12 345 678 901</p>
            <div className="flex gap-2.5">
              <a href="#" className="w-[34px] h-[34px] border border-white/15 rounded-lg flex items-center justify-center text-sm text-white/50 no-underline transition-all hover:bg-gold hover:border-gold hover:text-white cursor-pointer">f</a>
              <a href="#" className="w-[34px] h-[34px] border border-white/15 rounded-lg flex items-center justify-center text-sm text-white/50 no-underline transition-all hover:bg-gold hover:border-gold hover:text-white cursor-pointer">📷</a>
              <a href="#" className="w-[34px] h-[34px] border border-white/15 rounded-lg flex items-center justify-center text-sm text-white/50 no-underline transition-all hover:bg-gold hover:border-gold hover:text-white cursor-pointer">in</a>
            </div>
          </div>
          <div>
            <div className="text-[13px] font-semibold text-white mb-[18px]">For Homeowners</div>
            <ul className="list-none flex flex-col gap-2.5 p-0">
              <li><a onClick={() => navigateTo('home', 'how')} className="no-underline text-[13px] text-white/55 transition-colors hover:text-gold-light cursor-pointer">How It Works</a></li>
              <li><a onClick={() => navigateTo('services')} className="no-underline text-[13px] text-white/55 transition-colors hover:text-gold-light cursor-pointer">Our Services</a></li>
              <li><a onClick={() => navigateTo('quote')} className="no-underline text-[13px] text-white/55 transition-colors hover:text-gold-light cursor-pointer">Get Free Quote</a></li>
              <li><a onClick={() => navigateTo('faq')} className="no-underline text-[13px] text-white/55 transition-colors hover:text-gold-light cursor-pointer">FAQ</a></li>
            </ul>
          </div>
          <div>
            <div className="text-[13px] font-semibold text-white mb-[18px]">For Painters</div>
            <ul className="list-none flex flex-col gap-2.5 p-0">
              <li><a onClick={() => navigateTo('painters')} className="no-underline text-[13px] text-white/55 transition-colors hover:text-gold-light cursor-pointer">Join the Network</a></li>
              <li><a onClick={() => navigateTo('painters')} className="no-underline text-[13px] text-white/55 transition-colors hover:text-gold-light cursor-pointer">Painter Plans</a></li>
              <li><a onClick={() => navigateTo('painters')} className="no-underline text-[13px] text-white/55 transition-colors hover:text-gold-light cursor-pointer">Painter Dashboard</a></li>
              <li><a onClick={() => navigateTo('contact')} className="no-underline text-[13px] text-white/55 transition-colors hover:text-gold-light cursor-pointer">Contact Us</a></li>
            </ul>
          </div>
          <div>
            <div className="text-[13px] font-semibold text-white mb-[18px]">Contact</div>
            <div className="text-[13px] flex flex-col gap-2.5">
              <div className="flex items-center gap-1">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#C9962A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0"><rect x="2" y="4" width="20" height="16" rx="2"/><polyline points="2,4 12,14 22,4"/></svg> 
                <a href="mailto:brushd.au@gmail.com" className="text-white/75 no-underline cursor-pointer">brushd.au@gmail.com</a>
              </div>
              <a href="#" className="text-white/30 text-[11px] mt-2 cursor-pointer">Privacy Policy</a>
              <a href="#" className="text-white/30 text-[11px] cursor-pointer">Terms of Service</a>
            </div>
          </div>
        </div>
        <div className="max-w-[1080px] mx-auto pt-6 border-t border-white/8 flex flex-col md:flex-row justify-between text-[12px] text-white/28 gap-2 text-center md:text-left">
          <span>© 2026 Brushd Sydney. All rights reserved.</span>
          <span>Free painting quotes for Sydney homeowners — fast, easy, no obligation.</span>
        </div>
      </footer>
    </div>
  );
}
