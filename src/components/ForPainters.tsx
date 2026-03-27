import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { UserCheck, MapPin, Star, Settings, Check, X, Plus, Minus } from 'lucide-react';

interface ForPaintersProps {
  onNavigate: (page: 'home' | 'services' | 'painters' | 'quote' | 'faq' | 'contact', sectionId?: string) => void;
}

export default function ForPainters({ onNavigate }: ForPaintersProps) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: "How does PaintQuote work for painters?",
      answer: "PaintQuote connects you with homeowners in your area who are actively looking for painting services. We verify each lead to ensure they are serious about their project, saving you time on cold calls and chasing unqualified prospects."
    },
    {
      question: "How do I get started?",
      answer: "Simply click 'Join the Network' and fill out your professional profile. Once our team verifies your details and credentials, you'll start receiving lead notifications based on your service area and expertise."
    },
    {
      question: "Are there contracts or lock-in periods?",
      answer: "No. We believe in providing value first. Our Starter plan is free, and our paid plans are month-to-month. You can upgrade, downgrade, or pause your subscription at any time through your painter dashboard."
    },
    {
      question: "How is my profile verified?",
      answer: "To maintain the quality of our network, we verify ABNs, insurance details, and past work references for all painters. This builds trust with homeowners and helps you win more jobs."
    },
    {
      question: "Can I choose which areas I receive leads for?",
      answer: "Yes! You have full control over your service area. You can specify exactly which suburbs you want to work in, and we'll only send you leads from those specific locations."
    }
  ];

  return (
    <div className="bg-[#FDFCF9]">
      {/* HERO SECTION */}
      <section className="relative h-[600px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/gj.jpg" 
            alt="Professional Painter" 
            className="w-full h-full object-cover brightness-[0.4]"
            referrerPolicy="no-referrer"
          />
        </div>
        
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <span className="inline-block text-[#C9962A] font-bold tracking-[0.2em] text-xs mb-4 uppercase">
              For Painters
            </span>
            <h1 className="font-playfair text-4xl md:text-6xl font-bold text-white leading-[1.1] mb-6">
              Grow Your Painting Business in Sydney
            </h1>
            <p className="text-white/80 text-lg md:text-xl leading-relaxed mb-10 max-w-xl">
              Join 500+ painters already using PaintQuote to get qualified leads delivered directly to them. No cold calls. No chasing. Just painting jobs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => onNavigate('contact')}
                className="bg-[#C9962A] text-white px-8 py-4 rounded-xl font-bold transition-all hover:bg-[#A07A1E] hover:-translate-y-px shadow-lg shadow-[#C9962A]/20 flex items-center justify-center gap-2 cursor-pointer"
              >
                Join the Network →
              </button>
              <button 
                className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-xl font-bold transition-all hover:bg-white/20 flex items-center justify-center cursor-pointer"
              >
                View Dashboard
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* WHY JOIN SECTION */}
      <section className="py-24 px-6 md:px-12">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <span className="text-[#C9962A] font-bold tracking-[0.2em] text-xs uppercase mb-3 block">
              Why Join
            </span>
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-[#1A1208]">
              More Jobs. Less Hassle.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <UserCheck className="w-6 h-6 text-[#C9962A]" />,
                title: "Qualified Leads Only",
                desc: "Every lead comes from a homeowner who actively wants a painting quote — no cold calling or chasing."
              },
              {
                icon: <MapPin className="w-6 h-6 text-[#C9962A]" />,
                title: "Local to You",
                desc: "We match leads based on your suburb preferences so you only see jobs you actually want."
              },
              {
                icon: <Star className="w-6 h-6 text-[#C9962A]" />,
                title: "Build Your Reputation",
                desc: "Collect verified reviews from happy clients and build a profile that wins more work."
              },
              {
                icon: <Settings className="w-6 h-6 text-[#C9962A]" />,
                title: "Full Control",
                desc: "Set your availability, choose your service types, and pause your subscription any time."
              }
            ].map((feature, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-8 rounded-2xl border border-[#E5E1D8] shadow-sm hover:shadow-md transition-shadow text-center"
              >
                <div className="w-12 h-12 bg-[#FDFCF9] rounded-xl flex items-center justify-center mx-auto mb-6 border border-[#E5E1D8]">
                  {feature.icon}
                </div>
                <h3 className="font-bold text-[#1A1208] mb-3">{feature.title}</h3>
                <p className="text-[#4A3B28]/70 text-sm leading-relaxed">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING SECTION */}
      <section className="py-24 bg-[#F5F0E8] px-6 md:px-12">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <span className="text-[#C9962A] font-bold tracking-[0.2em] text-xs uppercase mb-3 block">
              Painter Plans
            </span>
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-[#1A1208] mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-[#4A3B28]/70">Start free. No credit card required.</p>
          </div>

          <div className="max-w-md mx-auto">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-10 border border-[#E5E1D8] shadow-xl relative overflow-hidden"
            >
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-[#1A1208] mb-2">Starter</h3>
                <p className="text-[#4A3B28]/60 text-sm leading-relaxed">
                  Perfect for getting started. Try the platform risk-free with a handful of leads each month.
                </p>
              </div>

              <div className="mb-8">
                <span className="font-playfair text-5xl font-bold text-[#1A1208]">Free</span>
              </div>

              <button 
                onClick={() => onNavigate('contact')}
                className="w-full py-4 rounded-xl border-2 border-[#E5E1D8] font-bold text-[#1A1208] hover:bg-[#FDFCF9] transition-colors mb-10 cursor-pointer"
              >
                Start for Free
              </button>

              <div className="space-y-4">
                {[
                  { text: "3 leads per month", enabled: true },
                  { text: "Basic painter profile", enabled: true },
                  { text: "Standard listing", enabled: true },
                  { text: "Email support", enabled: true },
                  { text: "Priority listing placement", enabled: false },
                  { text: "Performance badge", enabled: false },
                  { text: "Review management", enabled: false },
                  { text: "Analytics dashboard", enabled: false },
                  { text: "Account manager", enabled: false }
                ].map((item, idx) => (
                  <div key={idx} className={`flex items-center gap-3 text-sm ${item.enabled ? 'text-[#1A1208]' : 'text-[#1A1208]/30'}`}>
                    {item.enabled ? (
                      <Check className="w-4 h-4 text-[#C9962A]" />
                    ) : (
                      <X className="w-4 h-4" />
                    )}
                    {item.text}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-24 px-6 md:px-12">
        <div className="container mx-auto max-w-3xl">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-[#1A1208] text-center mb-16">
            Painter FAQs
          </h2>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div 
                key={idx} 
                className="bg-white border border-[#E5E1D8] rounded-2xl overflow-hidden transition-all"
              >
                <button 
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-[#FDFCF9] transition-colors cursor-pointer"
                >
                  <span className="font-bold text-[#1A1208]">{faq.question}</span>
                  {openFaq === idx ? (
                    <Minus className="w-5 h-5 text-[#C9962A]" />
                  ) : (
                    <Plus className="w-5 h-5 text-[#C9962A]" />
                  )}
                </button>
                {openFaq === idx && (
                  <div className="px-8 pb-6 text-[#4A3B28]/70 text-sm leading-relaxed animate-in fade-in slide-in-from-top-2 duration-300">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
