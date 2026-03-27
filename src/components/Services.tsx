import { useEffect } from 'react';
import { MapPin, Home as HomeIcon, Building2, Store, Check, Warehouse, Fence, Sparkles } from 'lucide-react';

interface ServicesProps {
  onNavigate: (page: 'home' | 'services' | 'quote', sectionId?: string) => void;
}

export default function Services({ onNavigate }: ServicesProps) {
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
      { threshold: 0.1 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  const services = [
    {
      title: "Interior Painting",
      text: "Transform your living spaces with a fresh coat of paint. Our vetted interior painters cover bedrooms, living rooms, kitchens, bathrooms, hallways, and ceilings.",
      img: "/interior.png",
      icon: <span className="text-2xl">🏠</span>,
      subServices: [
        {
          title: "Bedrooms & Living Areas",
          desc: "Full room painting including walls, ceilings and trims. Colour consultation available.",
          badge: null
        },
        {
          title: "Kitchens & Bathrooms",
          desc: "Moisture-resistant paints and precise finishing for high-humidity rooms.",
          badge: null
        },
        {
          title: "Ceilings & Cornices",
          desc: "Flat, eggshell or satin finishes to complement your walls perfectly.",
          badge: null
        },
        {
          title: "Feature Walls",
          desc: "Bold accent walls and two-tone designs to create visual impact.",
          badge: "Popular"
        }
      ]
    },
    {
      title: "Exterior Painting",
      text: "Protect and refresh your home's exterior with weather-resistant paints. From weatherboard to brick, our painters handle all exterior surfaces.",
      img: "/exterior.png",
      icon: <span className="text-2xl">🏗️</span>,
      subServices: [
        {
          title: "Weatherboard & Timber",
          desc: "Proper preparation, priming and quality exterior coatings to protect and beautify.",
          badge: null
        },
        {
          title: "Brick & Render",
          desc: "Specialist breathable coatings to protect render and revitalise brick facades.",
          badge: null
        },
        {
          title: "Trims, Eaves & Fascias",
          desc: "Crisp, clean finishing to the detail areas that make all the difference.",
          badge: "Popular"
        },
        {
          title: "Feature Columns & Pillars",
          desc: "Precise application for architectural features and entry statements.",
          badge: null
        }
      ]
    },
    {
      title: "Commercial Painting",
      text: "Minimal disruption, maximum results. Our commercial painters work around your schedule to deliver high-quality finishes for any business space.",
      img: "/lift.jpg",
      icon: <span className="text-2xl">🏢</span>,
      subServices: [
        {
          title: "Offices & Workspaces",
          desc: "After-hours and weekend availability to minimise business disruption.",
          badge: null
        },
        {
          title: "Retail & Hospitality",
          desc: "Eye-catching finishes and quick turnaround for your customer-facing spaces.",
          badge: null
        },
        {
          title: "Warehouses & Industrial",
          desc: "Heavy-duty coatings for industrial floors, walls and high-traffic areas.",
          badge: null
        },
        {
          title: "Schools & Healthcare",
          desc: "Low-VOC, safe products for sensitive environments.",
          badge: "Specialist"
        }
      ]
    },
    {
      title: "Roof Painting",
      text: "Extend the life of your roof and boost curb appeal with professional roof painting. We cover all roof types across Sydney.",
      img: "/roof.png",
      icon: <span className="text-2xl">🏠</span>,
      subServices: [
        {
          title: "Terracotta Tile Roofs",
          desc: "Full clean, rebedding, repointing and quality roof paint application.",
          badge: null
        },
        {
          title: "Colorbond & Metal Roofs",
          desc: "Specialised etch primer and Colorbond-compatible coatings for lasting results.",
          badge: null
        },
        {
          title: "Concrete Tile Roofs",
          desc: "Waterproof coatings that restore colour and protect against the elements.",
          badge: null
        },
        {
          title: "Asbestos Encapsulation",
          desc: "Safe, certified asbestos roof encapsulation and painting.",
          badge: "Certified"
        }
      ]
    },
    {
      title: "Deck & Fence Painting",
      text: "Restore and protect your outdoor timber surfaces. From classic decks to long fences, our painters deliver beautiful, lasting results.",
      img: "/deck.png",
      icon: <span className="text-2xl">🌿</span>,
      subServices: [
        {
          title: "Timber Deck Oiling & Staining",
          desc: "Full sanding, cleaning and application of premium timber oils and stains.",
          badge: null
        },
        {
          title: "Timber Fence Painting",
          desc: "Thorough preparation and painting for wooden paling and picket fences.",
          badge: null
        },
        {
          title: "Colorbond Fence Painting",
          desc: "Clean and re-coat Colorbond fences to restore their original finish.",
          badge: null
        },
        {
          title: "Pergolas & Outdoor Structures",
          desc: "Weather-resistant treatments for pergolas, gazebos and garden structures.",
          badge: "Popular"
        }
      ]
    },
    {
      title: "New Home Painting",
      text: "Get your new home looking perfect from day one. Our painters work with builders and homeowners to deliver flawless finishes on new builds.",
      img: "/newhome.png",
      icon: <span className="text-2xl">🔑</span>,
      subServices: [
        {
          title: "Complete New Build Painting",
          desc: "Full interior and exterior painting package for new home constructions.",
          badge: null
        },
        {
          title: "Builder's Cleans & Touchups",
          desc: "Post-construction cleaning and touch-up painting for handover-ready homes.",
          badge: null
        },
        {
          title: "Colour Consultation",
          desc: "Expert colour advice to help you choose the perfect palette for your new home.",
          badge: "Popular"
        },
        {
          title: "Renovation Repainting",
          desc: "Full repaints for renovation projects — partial or whole-home transformations.",
          badge: null
        }
      ]
    }
  ];

  const areas = [
    "Inner City", "Eastern Suburbs", "Northern Beaches", "North Shore",
    "Hills District", "Parramatta", "Western Sydney", "Southern Sydney",
    "Sutherland Shire", "Inner West", "Canterbury-Bankstown", "Hawkesbury"
  ];

  return (
    <div className="bg-[#F5F0E8] min-h-screen font-sans text-[#1A1208]">
      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,800;1,700&family=DM+Sans:wght@300;400;500;600&display=swap');
        
        .font-playfair { font-family: 'Playfair Display', serif; }
        .font-dm { font-family: 'DM Sans', sans-serif; }
        
        .aos { 
          opacity: 0; 
          transform: translateY(40px); 
          transition: opacity 1s ease-out, transform 1s ease-out; 
        }
        .aos.show { 
          opacity: 1; 
          transform: translateY(0); 
        }
        
        .service-row:nth-child(even) {
          flex-direction: row-reverse;
        }
        
        .btn-gold {
          background: #C9962A;
          color: white;
          transition: all 0.3s ease;
        }
        .btn-gold:hover {
          background: #A07A1E;
          transform: translateY(-2px);
          box-shadow: 0 10px 20px rgba(201, 150, 42, 0.2);
        }
      `}} />

      {/* HERO SECTION */}
      <section className="relative h-[60vh] flex items-center justify-center text-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/4pic.png" 
            alt="Services Hero" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/65"></div>
        </div>
        
        <div className="relative z-10 px-6 max-w-4xl">
          <span className="text-[#C9962A] font-bold tracking-[3px] uppercase text-xs mb-4 block aos">OUR SERVICES</span>
          <h1 className="font-playfair text-5xl md:text-7xl font-extrabold text-white mb-6 aos" style={{ transitionDelay: '0.1s' }}>
            Every Painting Service,<br />Covered in Sydney
          </h1>
          <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto font-light mb-10 aos" style={{ transitionDelay: '0.2s' }}>
            From a single room to a full commercial project, we have specialist painters for every job across Sydney and surrounds.
          </p>
          <button 
            onClick={() => onNavigate('quote')}
            className="btn-gold px-10 py-4 rounded-lg font-bold text-sm uppercase tracking-widest aos cursor-pointer"
            style={{ transitionDelay: '0.3s' }}
          >
            Get a Free Quote for Any Service →
          </button>
        </div>
      </section>

      {/* SERVICES ZIGZAG SECTION */}
      <div id="services-list">
        {services.map((service, index) => (
          <section 
            key={index} 
            className={`py-24 px-6 md:px-12 ${index % 2 === 0 ? 'bg-[#F9F7F2]' : 'bg-[#F1EDE4]'}`}
          >
            <div className="max-w-7xl mx-auto">
              <div 
                className={`service-row flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-start gap-12 lg:gap-20 aos`}
              >
                {/* Image Side */}
                <div className="w-full lg:w-[40%] lg:sticky lg:top-24">
                  <div className="rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
                    <img 
                      src={service.img} 
                      alt={service.title} 
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>

                {/* Text Side */}
                <div className="w-full lg:w-[60%]">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-[#C9962A]/10 rounded-lg flex items-center justify-center">
                      {service.icon}
                    </div>
                    <h2 className="font-playfair text-3xl md:text-4xl font-bold text-[#1A1208]">
                      {service.title}
                    </h2>
                  </div>
                  
                  <p className="text-[#7A6B54] text-lg leading-relaxed mb-10 max-w-2xl">
                    {service.text}
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {service.subServices.map((sub, i) => (
                      <div key={i} className="bg-white border border-gold/10 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
                        <div className="flex items-start gap-3">
                          <Check className="w-4 h-4 text-[#C9962A] mt-1 shrink-0" />
                          <div>
                            <div className="flex items-center gap-2 mb-1">
                              <span className="font-bold text-[15px] text-[#1A1208]">{sub.title}</span>
                              {sub.badge && (
                                <span className="bg-[#C9962A]/10 text-[#C9962A] text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">{sub.badge}</span>
                              )}
                            </div>
                            <p className="text-[13px] text-[#7A6B54] leading-relaxed">{sub.desc}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* SERVICE AREAS SECTION (REPLACING CTA BANNER) */}
      <section className="bg-[#151619] py-24 px-6 text-center">
        <div className="max-w-6xl mx-auto aos">
          <span className="text-[#C9962A] font-bold tracking-[3px] uppercase text-[11px] mb-4 block">Service Areas</span>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6 text-white">We Cover All of Sydney</h2>
          <p className="text-white/50 text-base md:text-lg mb-16 max-w-2xl mx-auto leading-relaxed">
            Our network of painters operates across Greater Sydney. If you're in NSW, we've got you covered.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
            {areas.map((area, index) => (
              <div 
                key={index}
                className="bg-white/5 border border-white/10 rounded-xl p-5 flex items-center justify-center gap-3 text-white/90 font-medium hover:bg-white/10 transition-colors cursor-default"
              >
                <MapPin className="w-4 h-4 text-[#C9962A]" />
                {area}
              </div>
            ))}
          </div>

          <button 
            onClick={() => onNavigate('quote')}
            className="btn-gold px-12 py-5 rounded-lg font-bold text-lg inline-flex items-center gap-2 cursor-pointer"
          >
            Get Free Quotes in Your Area →
          </button>
        </div>
      </section>
    </div>
  );
}
