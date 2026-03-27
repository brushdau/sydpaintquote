import { useState, useEffect, FormEvent } from 'react';
import { motion } from 'motion/react';
import { Check, ShieldCheck, Tag, XCircle, FileText, ChevronDown } from 'lucide-react';

interface QuoteFormProps {
  onNavigate: (page: 'home' | 'services' | 'quote' | 'faq' | 'contact', sectionId?: string) => void;
}

export default function QuoteForm({ onNavigate }: QuoteFormProps) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    serviceType: '',
    propertyType: '',
    propertySize: '',
    numberOfRooms: '',
    suburb: '',
    additionalDetails: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Quote request submitted:', formData);
    setIsSubmitted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-[#FDFCF9] flex items-center justify-center px-6 py-20">
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="max-w-md w-full text-center bg-white p-10 rounded-3xl border border-[#E5E1D8] shadow-xl shadow-[#C9962A]/5"
        >
          <div className="w-20 h-20 bg-[#C9962A] rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg shadow-[#C9962A]/20">
            <Check className="w-10 h-10 text-white" />
          </div>
          <h2 className="font-playfair text-3xl font-bold text-[#1A1208] mb-4">Request Received!</h2>
          <p className="text-[#7A6B54] mb-10 leading-relaxed">
            Thank you, {formData.fullName.split(' ')[0]}! We've received your request. Up to 3 vetted Sydney painters will be in touch shortly with their best quotes.
          </p>
          <button 
            onClick={() => onNavigate('home')}
            className="w-full bg-[#C9962A] text-white py-4 rounded-xl font-bold hover:bg-[#A07A1E] transition-all cursor-pointer"
          >
            Back to Home
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="bg-[#FDFCF9] min-h-screen">
      {/* HERO SECTION */}
      <section className="bg-[#1A1A1A] pt-32 pb-20 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full mb-6">
            <span className="text-white/40">📋</span>
            <span className="text-white/80 text-[10px] font-bold tracking-[0.15em] uppercase">FREE QUOTE REQUEST</span>
          </div>
          <h1 className="font-playfair text-4xl md:text-6xl font-bold text-white mb-6">Get Your Free Painting Quote</h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto leading-relaxed">
            Fill in the form below and we'll match you with up to 3 vetted Sydney painters. It only takes 2 minutes.
          </p>
        </div>
      </section>

      {/* FORM SECTION */}
      <section className="py-16 px-6 md:px-12 -mt-10">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white border border-[#E5E1D8] rounded-3xl shadow-xl shadow-[#C9962A]/5 overflow-hidden">
            <div className="p-8 md:p-10 border-b border-[#F5F0E8] bg-[#F5F0E8]/50 flex items-start gap-4">
              <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-[#C9962A] shrink-0 shadow-sm">
                <FileText size={20} />
              </div>
              <div>
                <h2 className="font-playfair text-xl font-bold text-[#1A1208]">Your Project Details</h2>
                <p className="text-xs text-[#7A6B54] mt-1">All fields marked with * are required</p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="p-8 md:p-10 space-y-10">
              {/* CONTACT DETAILS */}
              <div className="space-y-6">
                <h3 className="text-[10px] font-bold tracking-[0.15em] uppercase text-[#C9962A]">YOUR CONTACT DETAILS</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-[#1A1208]">Full Name *</label>
                    <input 
                      type="text" required placeholder="e.g. Sarah Mitchell"
                      className="w-full px-5 py-3.5 bg-[#FDFCF9] border border-[#E5E1D8] rounded-xl focus:outline-none focus:border-[#C9962A] transition-colors"
                      value={formData.fullName}
                      onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-[#1A1208]">Email Address *</label>
                    <input 
                      type="email" required placeholder="you@example.com"
                      className="w-full px-5 py-3.5 bg-[#FDFCF9] border border-[#E5E1D8] rounded-xl focus:outline-none focus:border-[#C9962A] transition-colors"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-[#1A1208]">Phone Number *</label>
                  <input 
                    type="tel" required placeholder="e.g. 0412 345 678"
                    className="w-full px-5 py-3.5 bg-[#FDFCF9] border border-[#E5E1D8] rounded-xl focus:outline-none focus:border-[#C9962A] transition-colors"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                </div>
              </div>

              {/* PAINTING JOB */}
              <div className="space-y-6">
                <h3 className="text-[10px] font-bold tracking-[0.15em] uppercase text-[#C9962A]">YOUR PAINTING JOB</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-[#1A1208]">Service Type *</label>
                    <div className="relative">
                      <select 
                        required className="w-full px-5 py-3.5 bg-[#FDFCF9] border border-[#E5E1D8] rounded-xl focus:outline-none focus:border-[#C9962A] transition-colors appearance-none pr-12 cursor-pointer"
                        value={formData.serviceType}
                        onChange={(e) => setFormData({...formData, serviceType: e.target.value})}
                      >
                        <option value="">Select service...</option>
                        <option>Interior Painting</option>
                        <option>Exterior Painting</option>
                        <option>Full House (Int & Ext)</option>
                        <option>Commercial Painting</option>
                        <option>Roof Painting</option>
                        <option>Deck & Fence</option>
                      </select>
                      <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-[#7A6B54] pointer-events-none" size={18} />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-[#1A1208]">Property Type *</label>
                    <div className="relative">
                      <select 
                        required className="w-full px-5 py-3.5 bg-[#FDFCF9] border border-[#E5E1D8] rounded-xl focus:outline-none focus:border-[#C9962A] transition-colors appearance-none pr-12 cursor-pointer"
                        value={formData.propertyType}
                        onChange={(e) => setFormData({...formData, propertyType: e.target.value})}
                      >
                        <option value="">Select type...</option>
                        <option>House</option>
                        <option>Apartment / Unit</option>
                        <option>Townhouse</option>
                        <option>Commercial / Office</option>
                        <option>Other</option>
                      </select>
                      <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-[#7A6B54] pointer-events-none" size={18} />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-[#1A1208]">Property Size *</label>
                    <div className="relative">
                      <select 
                        required className="w-full px-5 py-3.5 bg-[#FDFCF9] border border-[#E5E1D8] rounded-xl focus:outline-none focus:border-[#C9962A] transition-colors appearance-none pr-12 cursor-pointer"
                        value={formData.propertySize}
                        onChange={(e) => setFormData({...formData, propertySize: e.target.value})}
                      >
                        <option value="">Select size...</option>
                        <option>Small (1-2 rooms)</option>
                        <option>Medium (3-4 rooms)</option>
                        <option>Large (5+ rooms)</option>
                        <option>Whole Property</option>
                      </select>
                      <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-[#7A6B54] pointer-events-none" size={18} />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-[#1A1208]">Number of Rooms</label>
                    <input 
                      type="text" placeholder="e.g. 4"
                      className="w-full px-5 py-3.5 bg-[#FDFCF9] border border-[#E5E1D8] rounded-xl focus:outline-none focus:border-[#C9962A] transition-colors"
                      value={formData.numberOfRooms}
                      onChange={(e) => setFormData({...formData, numberOfRooms: e.target.value})}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-[#1A1208]">Your Suburb *</label>
                  <div className="relative">
                    <select 
                      required className="w-full px-5 py-3.5 bg-[#FDFCF9] border border-[#E5E1D8] rounded-xl focus:outline-none focus:border-[#C9962A] transition-colors appearance-none pr-12 cursor-pointer"
                      value={formData.suburb}
                      onChange={(e) => setFormData({...formData, suburb: e.target.value})}
                    >
                      <option value="">Select suburb...</option>
                      <option>Bondi</option>
                      <option>Parramatta</option>
                      <option>Surry Hills</option>
                      <option>Manly</option>
                      <option>Cronulla</option>
                      <option>Other Sydney Suburb</option>
                    </select>
                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-[#7A6B54] pointer-events-none" size={18} />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-[#1A1208]">Additional Details</label>
                  <textarea 
                    placeholder="e.g. Walls need sanding first, specific colour in mind, access issues, etc. (max 500 characters)"
                    rows={4} maxLength={500}
                    className="w-full px-5 py-3.5 bg-[#FDFCF9] border border-[#E5E1D8] rounded-xl focus:outline-none focus:border-[#C9962A] transition-colors resize-none"
                    value={formData.additionalDetails}
                    onChange={(e) => setFormData({...formData, additionalDetails: e.target.value})}
                  ></textarea>
                  <div className="text-right text-[10px] text-[#7A6B54]">{formData.additionalDetails.length}/500</div>
                </div>
              </div>

              <div className="space-y-4 pt-4">
                <button 
                  type="submit"
                  className="w-full bg-[#C9962A] text-white py-4 rounded-xl font-bold hover:bg-[#A07A1E] transition-all shadow-lg shadow-[#C9962A]/20 cursor-pointer flex items-center justify-center gap-2"
                >
                  Submit Free Quote Request <span className="text-xl">→</span>
                </button>
                <p className="text-center text-[11px] text-[#7A6B54]">
                  By submitting this form, you agree to our <a href="#" className="underline">Terms of Service</a> and <a href="#" className="underline">Privacy Policy</a>.
                </p>
              </div>
            </form>
          </div>

          {/* TRUST BADGES */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10">
            <div className="bg-white border border-[#E5E1D8] rounded-2xl p-6 flex flex-col items-center text-center gap-3">
              <ShieldCheck className="text-[#C9962A]" size={24} />
              <span className="text-xs font-medium text-[#1A1208]">Your data is safe & secure</span>
            </div>
            <div className="bg-white border border-[#E5E1D8] rounded-2xl p-6 flex flex-col items-center text-center gap-3">
              <Tag className="text-[#C9962A]" size={24} />
              <span className="text-xs font-medium text-[#1A1208]">100% free, no hidden fees</span>
            </div>
            <div className="bg-white border border-[#E5E1D8] rounded-2xl p-6 flex flex-col items-center text-center gap-3">
              <XCircle className="text-[#C9962A]" size={24} />
              <span className="text-xs font-medium text-[#1A1208]">No obligation to accept</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
