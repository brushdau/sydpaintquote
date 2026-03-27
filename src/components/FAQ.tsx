import { useState, useEffect } from 'react';
import { Plus, Minus, Home, Building2, Paintbrush, HelpCircle } from 'lucide-react';

interface FAQProps {
  onNavigate: (page: 'home' | 'services' | 'quote' | 'faq', sectionId?: string) => void;
}

type Category = 'homeowners' | 'painters' | 'services' | 'general';

export default function FAQ({ onNavigate }: FAQProps) {
  const [activeCategory, setActiveCategory] = useState<Category>('homeowners');
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const categories = [
    { id: 'homeowners' as Category, label: 'For Homeowners', count: 6, icon: <Home size={18} /> },
    { id: 'painters' as Category, label: 'For Painters', count: 4, icon: <Building2 size={18} /> },
    { id: 'services' as Category, label: 'Services', count: 3, icon: <Paintbrush size={18} /> },
    { id: 'general' as Category, label: 'General', count: 3, icon: <HelpCircle size={18} /> },
  ];

  const faqs: Record<Category, { q: string; a: string }[]> = {
    homeowners: [
      { q: "Is PaintQuote really free for homeowners?", a: "Yes, 100% free! Getting painting quotes through PaintQuote costs you absolutely nothing. We're funded by the painters who join our network, so you receive competitive quotes at no charge." },
      { q: "How does the quote matching process work?", a: "Simply fill in our online form with your job details — service type, property, suburb, and a few more details. We immediately notify up to 3 vetted local Sydney painters. They review the job and contact you with their quotes, usually within a few hours." },
      { q: "How many quotes will I receive?", a: "You'll receive quotes from up to 3 painters who are available and suited to your job. Having multiple quotes means you can compare prices and choose the best option for your budget." },
      { q: "Am I obligated to accept any of the quotes?", a: "Absolutely not. You're under zero obligation to accept any quote. If none of the quotes meet your needs, you're free to walk away without any cost or commitment." },
      { q: "How do you vet the painters in your network?", a: "Every painter is verified against their ABN, must hold current public liability insurance, and must have a clean record with no unresolved complaints. We also monitor ongoing customer reviews to maintain quality standards." },
      { q: "Which areas of Sydney do you cover?", a: "We cover all of Greater Sydney, from the Northern Beaches to the Sutherland Shire, and from Penrith in the west to Bondi in the east. If you're in Greater Sydney, we've got painters for you." },
    ],
    painters: [
      { q: "How do I join the PaintQuote network?", a: "Choose a plan on our For Painters page, create your business profile, and complete our verification process (ABN check and insurance verification). Once approved — usually within 24-48 hours — you'll start receiving matching leads." },
      { q: "What types of painting jobs will I receive?", a: "You can set your preferred service types (interior, exterior, commercial, roof, deck & fence, new builds) and your preferred suburbs. We'll only send you leads that match your preferences." },
      { q: "How much does it cost to join?", a: "We currently only offer a free Starter plan with 3 leads per month. Pro and Premium plans with higher lead limits will be available soon." },
      { q: "Can I pause or cancel my subscription?", a: "Yes, anytime. You can pause or cancel your subscription directly from your dashboard. Monthly plans stop at the end of your billing period. No lock-in contracts, no cancellation fees." },
    ],
    services: [
      { q: "What types of painting services do you cover?", a: "We cover all painting services: interior residential, exterior residential, commercial painting, roof painting (Colorbond, terracotta, concrete), deck & fence painting/staining, and new home painting. See our Services page for full details." },
      { q: "Can I get quotes for partial jobs, like a single room?", a: "Yes, absolutely. Whether it's a single bedroom or your entire home, painters in our network can quote on any size job. Just describe your job in the form and they'll provide an appropriate quote." },
      { q: "Do the painters supply paint or do I need to buy it?", a: "This varies by painter. Most include paint supply in their quote, while some prefer you supply the paint for colour accuracy. When you receive quotes, you can discuss this directly with each painter." },
    ],
    general: [
      { q: "How long does it take to receive quotes?", a: "Most homeowners receive their first quote within 2 hours of submitting a request during business hours. For complex or larger jobs, painters may take up to 24 hours to prepare a detailed quote." },
      { q: "Is my personal information safe?", a: "Yes. We take privacy seriously and comply with Australian Privacy Principles. Your contact details are only shared with painters who match your job, and we never sell your data to third parties." },
      { q: "What if I have a problem with a painter?", a: "Contact our support team at brushd.au@gmail.com and we'll do our best to help resolve any issues. All painters in our network must hold insurance and are contractually obligated to maintain our quality standards." },
    ],
  };

  return (
    <div className="bg-[#FDFCF9] min-h-screen pt-24">
      {/* MAIN CONTENT */}
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-12">
          
          {/* SIDEBAR */}
          <aside className="space-y-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => {
                  setActiveCategory(cat.id);
                  setOpenIndex(null);
                }}
                className={`w-full flex items-center justify-between p-4 rounded-xl transition-all cursor-pointer ${
                  activeCategory === cat.id 
                    ? 'bg-[#F5F0E8] text-[#1A1208] shadow-sm' 
                    : 'text-[#7A6B54] hover:bg-[#F5F0E8]/50'
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className={activeCategory === cat.id ? 'text-[#C9962A]' : 'text-[#7A6B54]'}>
                    {cat.icon}
                  </span>
                  <span className="font-medium text-sm">{cat.label}</span>
                </div>
                <span className={`text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full ${
                  activeCategory === cat.id ? 'bg-white text-[#C9962A]' : 'bg-gray-100 text-gray-400'
                }`}>
                  {cat.count}
                </span>
              </button>
            ))}
          </aside>

          {/* FAQ LIST */}
          <div className="space-y-4">
            <h2 className="font-playfair text-3xl font-bold text-[#1A1208] mb-8 capitalize">
              {activeCategory === 'homeowners' ? 'For Homeowners' : activeCategory === 'painters' ? 'For Painters' : activeCategory.charAt(0).toUpperCase() + activeCategory.slice(1)}
            </h2>
            
            <div className="space-y-3">
              {faqs[activeCategory].map((faq, idx) => (
                <div 
                  key={idx} 
                  className="bg-white border border-[#E5E1D8] rounded-xl overflow-hidden transition-all hover:border-[#C9962A]/30"
                >
                  <button
                    onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                    className="w-full flex items-center justify-between p-5 text-left cursor-pointer"
                  >
                    <span className="font-semibold text-[#1A1208] pr-8">{faq.q}</span>
                    <span className="text-[#C9962A] shrink-0">
                      {openIndex === idx ? <Minus size={20} className="transition-transform" /> : <Plus size={20} className="transition-transform" />}
                    </span>
                  </button>
                  
                  {openIndex === idx && (
                    <div className="px-5 pb-5 text-[#7A6B54] text-sm leading-relaxed animate-fade-in">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* STILL HAVE QUESTIONS */}
            <div className="mt-12 bg-[#F5F0E8] rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-xl font-bold text-[#1A1208] mb-2">Still have questions?</h3>
                <p className="text-[#7A6B54] text-sm">Our Sydney team is here to help — reach out any time.</p>
              </div>
              <button 
                onClick={() => onNavigate('quote')}
                className="bg-[#C9962A] text-white px-8 py-3.5 rounded-xl font-bold hover:bg-[#A07A1E] transition-all shadow-lg shadow-[#C9962A]/20"
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
