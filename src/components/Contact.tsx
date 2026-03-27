import { useState, useEffect, FormEvent } from 'react';
import { Mail, ArrowRight } from 'lucide-react';

interface ContactProps {
  onNavigate: (page: 'home' | 'services' | 'quote' | 'faq' | 'contact', sectionId?: string) => void;
}

export default function Contact({ onNavigate }: ContactProps) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    userType: 'Homeowner / Property Owner',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Thank you for your message. We will get back to you within 24 hours.');
  };

  return (
    <div className="bg-[#FDFCF9] min-h-screen">
      {/* HERO SECTION */}
      <section className="bg-[#1A1A1A] pt-32 pb-20 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <span className="text-[#C9962A] text-xs font-bold tracking-[0.2em] uppercase mb-4 block">CONTACT US</span>
          <h1 className="font-playfair text-4xl md:text-6xl font-bold text-white mb-6">We'd Love to Hear From You</h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto leading-relaxed">
            Whether you're a homeowner with a question or a painter looking to join our network, we're here to help.
          </p>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-16">
          
          {/* LEFT COLUMN: INFO */}
          <div className="space-y-10">
            <div>
              <h2 className="font-playfair text-3xl font-bold text-[#1A1208] mb-6">Get in Touch</h2>
              <p className="text-[#7A6B54] leading-relaxed mb-8">
                Our team is ready to help homeowners get free painting quotes and assist painters with joining our network. Drop us an email and we'll get back to you within 24 hours.
              </p>
              
              <div className="flex items-start gap-4 p-6 bg-white border border-[#E5E1D8] rounded-2xl shadow-sm">
                <div className="w-12 h-12 bg-[#F5F0E8] rounded-xl flex items-center justify-center text-[#C9962A]">
                  <Mail size={24} />
                </div>
                <div>
                  <div className="font-bold text-[#1A1208] mb-1">Email</div>
                  <a href="mailto:brushd.au@gmail.com" className="text-[#C9962A] font-medium hover:underline">brushd.au@gmail.com</a>
                  <div className="text-xs text-[#7A6B54] mt-1">We reply within 24 hours</div>
                </div>
              </div>
            </div>

            <div className="bg-[#F5F0E8] rounded-2xl p-8 border border-[#E5E1D8]/50">
              <h3 className="text-lg font-bold text-[#1A1208] mb-3">Looking for a free quote?</h3>
              <p className="text-[#7A6B54] text-sm mb-6">
                Submit your painting job details and get matched with local painters in minutes.
              </p>
              <button 
                onClick={() => onNavigate('quote')}
                className="flex items-center gap-2 bg-[#C9962A] text-white px-6 py-3 rounded-xl font-bold hover:bg-[#A07A1E] transition-all group cursor-pointer"
              >
                Get Free Quote <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* RIGHT COLUMN: FORM */}
          <div className="bg-white border border-[#E5E1D8] rounded-3xl p-8 md:p-10 shadow-sm">
            <h2 className="font-playfair text-2xl font-bold text-[#1A1208] mb-8">Send Us a Message</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-[#1A1208]">Full Name *</label>
                  <input 
                    type="text" 
                    required
                    placeholder="e.g. John Smith"
                    className="w-full px-5 py-3.5 bg-[#FDFCF9] border border-[#E5E1D8] rounded-xl focus:outline-none focus:border-[#C9962A] transition-colors"
                    value={formData.fullName}
                    onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-[#1A1208]">Email Address *</label>
                  <input 
                    type="email" 
                    required
                    placeholder="you@example.com"
                    className="w-full px-5 py-3.5 bg-[#FDFCF9] border border-[#E5E1D8] rounded-xl focus:outline-none focus:border-[#C9962A] transition-colors"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-[#1A1208]">I am a...</label>
                <select 
                  className="w-full px-5 py-3.5 bg-[#FDFCF9] border border-[#E5E1D8] rounded-xl focus:outline-none focus:border-[#C9962A] transition-colors appearance-none cursor-pointer"
                  value={formData.userType}
                  onChange={(e) => setFormData({...formData, userType: e.target.value})}
                >
                  <option>Homeowner / Property Owner</option>
                  <option>Professional Painter</option>
                  <option>Business / Commercial Client</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-[#1A1208]">Subject *</label>
                <select 
                  required
                  className="w-full px-5 py-3.5 bg-[#FDFCF9] border border-[#E5E1D8] rounded-xl focus:outline-none focus:border-[#C9962A] transition-colors appearance-none cursor-pointer"
                  value={formData.subject}
                  onChange={(e) => setFormData({...formData, subject: e.target.value})}
                >
                  <option value="" disabled>Select topic...</option>
                  <option>General Inquiry</option>
                  <option>Help with my Quote Request</option>
                  <option>Painter Network Application</option>
                  <option>Partnership Opportunity</option>
                  <option>Report an Issue</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-[#1A1208]">Message *</label>
                <textarea 
                  required
                  placeholder="Tell us how we can help... (max 500 characters)"
                  rows={5}
                  maxLength={500}
                  className="w-full px-5 py-3.5 bg-[#FDFCF9] border border-[#E5E1D8] rounded-xl focus:outline-none focus:border-[#C9962A] transition-colors resize-none"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full bg-[#C9962A] text-white py-4 rounded-xl font-bold hover:bg-[#A07A1E] transition-all shadow-lg shadow-[#C9962A]/20 cursor-pointer"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
