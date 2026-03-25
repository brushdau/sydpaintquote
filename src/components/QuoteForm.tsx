import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Check, ArrowRight, ArrowLeft, Paintbrush, Home as HomeIcon, Building2, MapPin, User, Mail, Phone, MessageSquare } from 'lucide-react';

interface QuoteFormProps {
  onNavigate: (page: 'home' | 'services' | 'quote', sectionId?: string) => void;
}

type Step = 'service' | 'property' | 'details' | 'contact' | 'success';

export default function QuoteForm({ onNavigate }: QuoteFormProps) {
  const [step, setStep] = useState<Step>('service');
  const [formData, setFormData] = useState({
    serviceType: '',
    propertyType: '',
    suburb: '',
    description: '',
    name: '',
    email: '',
    phone: '',
  });

  const updateFormData = (data: Partial<typeof formData>) => {
    setFormData(prev => ({ ...prev, ...data }));
  };

  const nextStep = (currentStep: Step) => {
    if (currentStep === 'service') setStep('property');
    if (currentStep === 'property') setStep('details');
    if (currentStep === 'details') setStep('contact');
    if (currentStep === 'contact') setStep('success');
  };

  const prevStep = (currentStep: Step) => {
    if (currentStep === 'property') setStep('service');
    if (currentStep === 'details') setStep('property');
    if (currentStep === 'contact') setStep('details');
  };

  const serviceTypes = [
    { id: 'interior', label: 'Interior Painting', icon: <Paintbrush className="w-5 h-5" /> },
    { id: 'exterior', label: 'Exterior Painting', icon: <HomeIcon className="w-5 h-5" /> },
    { id: 'commercial', label: 'Commercial Painting', icon: <Building2 className="w-5 h-5" /> },
    { id: 'roof', label: 'Roof Painting', icon: <span className="text-xl">🏠</span> },
    { id: 'deck', label: 'Deck & Fence', icon: <span className="text-xl">🌿</span> },
    { id: 'new', label: 'New Home', icon: <span className="text-xl">🔑</span> },
  ];

  const propertyTypes = [
    { id: 'house', label: 'House', icon: <HomeIcon className="w-5 h-5" /> },
    { id: 'apartment', label: 'Apartment / Unit', icon: <Building2 className="w-5 h-5" /> },
    { id: 'commercial', label: 'Commercial / Office', icon: <Building2 className="w-5 h-5" /> },
    { id: 'other', label: 'Other', icon: <span className="text-xl">🏢</span> },
  ];

  const renderStep = () => {
    switch (step) {
      case 'service':
        return (
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6"
          >
            <div className="text-center mb-8">
              <h2 className="font-playfair text-3xl font-bold text-[#1A1208] mb-2">What do you need painted?</h2>
              <p className="text-[#7A6B54]">Select the primary service type for your project.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {serviceTypes.map((type) => (
                <button
                  key={type.id}
                  onClick={() => {
                    updateFormData({ serviceType: type.label });
                    nextStep('service');
                  }}
                  className={`flex items-center gap-4 p-5 rounded-xl border-2 transition-all text-left ${
                    formData.serviceType === type.label 
                      ? 'border-[#C9962A] bg-[#C9962A]/5' 
                      : 'border-gold/10 bg-white hover:border-[#C9962A]/30'
                  }`}
                >
                  <div className="w-10 h-10 bg-[#C9962A]/10 rounded-lg flex items-center justify-center text-[#C9962A]">
                    {type.icon}
                  </div>
                  <span className="font-bold text-[#1A1208]">{type.label}</span>
                </button>
              ))}
            </div>
          </motion.div>
        );

      case 'property':
        return (
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6"
          >
            <div className="text-center mb-8">
              <h2 className="font-playfair text-3xl font-bold text-[#1A1208] mb-2">Property Type</h2>
              <p className="text-[#7A6B54]">What kind of property are we looking at?</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {propertyTypes.map((type) => (
                <button
                  key={type.id}
                  onClick={() => {
                    updateFormData({ propertyType: type.label });
                    nextStep('property');
                  }}
                  className={`flex items-center gap-4 p-5 rounded-xl border-2 transition-all text-left ${
                    formData.propertyType === type.label 
                      ? 'border-[#C9962A] bg-[#C9962A]/5' 
                      : 'border-gold/10 bg-white hover:border-[#C9962A]/30'
                  }`}
                >
                  <div className="w-10 h-10 bg-[#C9962A]/10 rounded-lg flex items-center justify-center text-[#C9962A]">
                    {type.icon}
                  </div>
                  <span className="font-bold text-[#1A1208]">{type.label}</span>
                </button>
              ))}
            </div>
            <button 
              onClick={() => prevStep('property')}
              className="flex items-center gap-2 text-[#7A6B54] hover:text-[#1A1208] transition-colors mt-4"
            >
              <ArrowLeft className="w-4 h-4" /> Back
            </button>
          </motion.div>
        );

      case 'details':
        return (
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6"
          >
            <div className="text-center mb-8">
              <h2 className="font-playfair text-3xl font-bold text-[#1A1208] mb-2">Project Details</h2>
              <p className="text-[#7A6B54]">Where is the job and what needs to be done?</p>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-bold text-[#1A1208] mb-2">Suburb in Sydney</label>
                <div className="relative">
                  <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#7A6B54]" />
                  <input 
                    type="text" 
                    placeholder="e.g. Bondi, Parramatta, Surry Hills"
                    className="w-full pl-12 pr-4 py-4 rounded-xl border-2 border-gold/10 focus:border-[#C9962A] outline-none transition-all bg-white"
                    value={formData.suburb}
                    onChange={(e) => updateFormData({ suburb: e.target.value })}
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-[#1A1208] mb-2">Brief Description (Optional)</label>
                <div className="relative">
                  <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-[#7A6B54]" />
                  <textarea 
                    placeholder="Tell us a bit more about the job..."
                    rows={4}
                    className="w-full pl-12 pr-4 py-4 rounded-xl border-2 border-gold/10 focus:border-[#C9962A] outline-none transition-all bg-white resize-none"
                    value={formData.description}
                    onChange={(e) => updateFormData({ description: e.target.value })}
                  />
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between mt-8">
              <button 
                onClick={() => prevStep('details')}
                className="flex items-center gap-2 text-[#7A6B54] hover:text-[#1A1208] transition-colors"
              >
                <ArrowLeft className="w-4 h-4" /> Back
              </button>
              <button 
                disabled={!formData.suburb}
                onClick={() => nextStep('details')}
                className="btn-gold px-8 py-4 rounded-xl font-bold flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Next Step <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        );

      case 'contact':
        return (
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6"
          >
            <div className="text-center mb-8">
              <h2 className="font-playfair text-3xl font-bold text-[#1A1208] mb-2">Final Step</h2>
              <p className="text-[#7A6B54]">Where should we send your quotes?</p>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-bold text-[#1A1208] mb-2">Full Name</label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#7A6B54]" />
                  <input 
                    type="text" 
                    placeholder="Your Name"
                    className="w-full pl-12 pr-4 py-4 rounded-xl border-2 border-gold/10 focus:border-[#C9962A] outline-none transition-all bg-white"
                    value={formData.name}
                    onChange={(e) => updateFormData({ name: e.target.value })}
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-bold text-[#1A1208] mb-2">Email Address</label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#7A6B54]" />
                    <input 
                      type="email" 
                      placeholder="email@example.com"
                      className="w-full pl-12 pr-4 py-4 rounded-xl border-2 border-gold/10 focus:border-[#C9962A] outline-none transition-all bg-white"
                      value={formData.email}
                      onChange={(e) => updateFormData({ email: e.target.value })}
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-[#1A1208] mb-2">Phone Number</label>
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#7A6B54]" />
                    <input 
                      type="tel" 
                      placeholder="0400 000 000"
                      className="w-full pl-12 pr-4 py-4 rounded-xl border-2 border-gold/10 focus:border-[#C9962A] outline-none transition-all bg-white"
                      value={formData.phone}
                      onChange={(e) => updateFormData({ phone: e.target.value })}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between mt-8">
              <button 
                onClick={() => prevStep('contact')}
                className="flex items-center gap-2 text-[#7A6B54] hover:text-[#1A1208] transition-colors"
              >
                <ArrowLeft className="w-4 h-4" /> Back
              </button>
              <button 
                disabled={!formData.name || !formData.email || !formData.phone}
                onClick={() => nextStep('contact')}
                className="btn-gold px-8 py-4 rounded-xl font-bold flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Get Free Quotes <Check className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        );

      case 'success':
        return (
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="text-center py-12"
          >
            <div className="w-20 h-20 bg-[#C9962A] rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg shadow-[#C9962A]/20">
              <Check className="w-10 h-10 text-white" />
            </div>
            <h2 className="font-playfair text-4xl font-bold text-[#1A1208] mb-4">Success! Your Request is In</h2>
            <p className="text-[#7A6B54] text-lg max-w-md mx-auto mb-10">
              Thanks, {formData.name.split(' ')[0]}! We've received your request for {formData.serviceType.toLowerCase()} in {formData.suburb}. 
              Up to 3 vetted Sydney painters will be in touch shortly with their best quotes.
            </p>
            <button 
              onClick={() => onNavigate('home')}
              className="btn-gold px-10 py-4 rounded-xl font-bold"
            >
              Back to Home
            </button>
          </motion.div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-[#F5F0E8] pt-[100px] pb-24 px-6">
      <div className="max-w-3xl mx-auto">
        {/* Progress Bar */}
        {step !== 'success' && (
          <div className="mb-12">
            <div className="flex justify-between text-[10px] font-bold tracking-widest uppercase text-[#7A6B54] mb-3">
              <span>Service</span>
              <span>Property</span>
              <span>Details</span>
              <span>Contact</span>
            </div>
            <div className="h-1.5 bg-gold/10 rounded-full overflow-hidden">
              <motion.div 
                className="h-full bg-[#C9962A]"
                initial={{ width: '0%' }}
                animate={{ 
                  width: step === 'service' ? '25%' : 
                         step === 'property' ? '50%' : 
                         step === 'details' ? '75%' : '100%' 
                }}
              />
            </div>
          </div>
        )}

        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl shadow-gold/5 border border-gold/10">
          <AnimatePresence mode="wait">
            {renderStep()}
          </AnimatePresence>
        </div>

        {step !== 'success' && (
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center gap-3 text-[#7A6B54]">
              <div className="w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center text-[#C9962A] shrink-0">
                <Check className="w-4 h-4" />
              </div>
              <span className="text-xs font-medium">100% Free & No Obligation</span>
            </div>
            <div className="flex items-center gap-3 text-[#7A6B54]">
              <div className="w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center text-[#C9962A] shrink-0">
                <Check className="w-4 h-4" />
              </div>
              <span className="text-xs font-medium">Vetted Local Sydney Painters</span>
            </div>
            <div className="flex items-center gap-3 text-[#7A6B54]">
              <div className="w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center text-[#C9962A] shrink-0">
                <Check className="w-4 h-4" />
              </div>
              <span className="text-xs font-medium">Average Response &lt; 2 Hours</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
