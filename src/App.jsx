import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, CheckCircle, MapPin, MessageCircle, Globe, PlaneTakeoff, TrendingUp, Users } from 'lucide-react';

const InstagramIcon = ({ className }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Canada Opportunities', href: '#canada' },
    { name: 'Travel', href: '#travel' },
    { name: 'Social Media', href: '#social' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <a href="#home" className={`text-2xl font-bold tracking-tighter ${isScrolled ? 'text-navy-900' : 'text-navy-900 lg:text-white'}`}>
            ABIODUN ADETAYO
          </a>
          
          <div className="hidden lg:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className={`text-sm font-medium transition-colors hover:text-gold-500 ${isScrolled ? 'text-slate-700' : 'text-slate-800 lg:text-slate-100'}`}>
                {link.name}
              </a>
            ))}
            <a href="#contact" className="bg-gold-500 hover:bg-gold-400 text-white px-6 py-2.5 rounded-none font-medium transition-colors">
              Talk to Me
            </a>
          </div>

          <button className="lg:hidden text-slate-800" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className={isScrolled ? 'text-slate-800' : 'text-slate-800 lg:text-white'} /> : <Menu className={isScrolled ? 'text-slate-800' : 'text-slate-800 lg:text-white'} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-lg py-4 px-4 flex flex-col space-y-4">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} onClick={() => setIsOpen(false)} className="text-slate-800 font-medium py-2 border-b border-slate-100">
              {link.name}
            </a>
          ))}
          <a href="#contact" onClick={() => setIsOpen(false)} className="bg-navy-900 text-white px-6 py-3 text-center font-medium">
            Talk to Me
          </a>
        </div>
      )}
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-navy-900 pt-20 overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-20">
        <img src="/travel-bg.jpg" alt="Travel Background" className="w-full h-full object-cover" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-navy-900 via-navy-900/90 to-navy-900/40 z-10"></div>
      
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between w-full">
        <div className="md:w-3/5 text-white pr-0 md:pr-12">
          <div className="inline-flex items-center space-x-2 bg-white/10 px-4 py-2 rounded-full mb-6 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-green-400"></span>
            <span className="text-sm font-medium">Accepting New Consultations</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            Explore Opportunities.<br />
            Travel Smarter.<br />
            <span className="text-gold-500">Grow Your Brand.</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl leading-relaxed">
            Helping individuals navigate travel and Canadian opportunities while helping brands build stronger digital visibility through social media.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
            <a href="#contact" className="bg-gold-500 hover:bg-gold-400 text-white px-8 py-4 text-center font-medium text-lg transition-colors flex items-center justify-center">
              Book a Consultation
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
            <a href="https://wa.me/66837054753" target="_blank" rel="noreferrer" className="border border-white hover:bg-white hover:text-navy-900 text-white px-8 py-4 text-center font-medium text-lg transition-all flex items-center justify-center">
              WhatsApp Me
            </a>
          </div>
          <div className="mt-12 flex items-center space-x-4">
            <div className="flex -space-x-4">
               <div className="w-12 h-12 rounded-full bg-slate-300 border-2 border-navy-900 overflow-hidden"><img src="/profile.jpg" alt="User" /></div>
               <div className="w-12 h-12 rounded-full bg-slate-400 border-2 border-navy-900 overflow-hidden"><img src="/profile.jpg" alt="User" /></div>
               <div className="w-12 h-12 rounded-full bg-slate-500 border-2 border-navy-900 overflow-hidden"><img src="/profile.jpg" alt="User" /></div>
            </div>
            <div className="text-sm">
              <p className="font-bold text-white text-lg">22K+ Social Followers</p>
              <p className="text-slate-400">Trusted community</p>
            </div>
          </div>
        </div>
        
        <div className="md:w-2/5 mt-16 md:mt-0 hidden md:block">
           <div className="relative shadow-2xl">
             <img src="/profile.jpg" alt="Abiodun Adetayo" className="relative z-10 w-full h-[600px] object-cover" />
           </div>
        </div>
      </div>
    </section>
  );
};

const SocialProof = () => {
  return (
    <section className="bg-white py-16 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-semibold text-slate-500 uppercase tracking-widest mb-10">Trusted by a Growing Community</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <p className="text-4xl font-bold text-navy-900 mb-2">22K+</p>
            <p className="text-slate-600 font-medium">Followers</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-navy-900 mb-2">1.4K+</p>
            <p className="text-slate-600 font-medium">Posts</p>
          </div>
          <div>
            <p className="text-lg font-bold text-navy-900 mb-2 flex items-center justify-center h-10"><PlaneTakeoff className="w-6 h-6 mr-2 text-gold-500"/> Travel & Business</p>
            <p className="text-slate-600 font-medium">Consulting</p>
          </div>
          <div>
            <p className="text-lg font-bold text-navy-900 mb-2 flex items-center justify-center h-10"><TrendingUp className="w-6 h-6 mr-2 text-gold-500"/> Social Media</p>
            <p className="text-slate-600 font-medium">Growth</p>
          </div>
        </div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-16">
          <div className="md:w-1/2 relative">
             <div className="w-full h-[600px] bg-slate-200 overflow-hidden">
               <img src="/about-img.jpg" alt="Working professional" className="w-full h-full object-cover" />
             </div>
             <div className="absolute -bottom-8 -right-8 bg-white p-8 shadow-xl hidden md:block max-w-xs">
                <p className="text-xl font-bold text-navy-900 mb-2">Based in</p>
                <div className="flex items-center text-slate-600 mb-2">
                  <MapPin className="w-5 h-5 mr-2 text-gold-500" /> Lagos State, Nigeria
                </div>
                <div className="flex items-center text-slate-600">
                  <MapPin className="w-5 h-5 mr-2 text-gold-500" /> Abuja, Nigeria
                </div>
             </div>
          </div>
          <div className="md:w-1/2">
            <h2 className="text-4xl font-bold text-navy-900 mb-6">More Than a Social Media Presence.</h2>
            <div className="space-y-6 text-lg text-slate-600">
              <p>
                I combine travel consulting, opportunity exploration, and digital knowledge to help people and businesses make better moves.
              </p>
              <p>
                With a community of over 22,000 followers, I understand what it takes to build a personal brand, increase visibility, and navigate the complexities of travel and international opportunities.
              </p>
              <ul className="space-y-4 mt-8">
                {['Travel & opportunity guidance', 'Personal brand development', 'Social media strategy & knowledge', 'Business-focused mindset'].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-gold-500 mr-3 flex-shrink-0 mt-1" />
                    <span className="font-medium text-slate-800">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-10">
              <a href="#contact" className="inline-flex items-center text-navy-900 font-bold text-lg hover:text-gold-500 transition-colors border-b-2 border-navy-900 hover:border-gold-500 pb-1">
                Let's Work Together <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      title: "Travel Management",
      icon: <PlaneTakeoff className="w-8 h-8 text-gold-500" />,
      desc: "Help for clients with travel planning and travel-related consulting to ensure seamless journeys."
    },
    {
      title: "Canadian Opportunities",
      icon: <Globe className="w-8 h-8 text-gold-500" />,
      desc: "Explore available opportunities in Canada and get expert guidance on planning your next steps."
    },
    {
      title: "Social Media Growth",
      icon: <TrendingUp className="w-8 h-8 text-gold-500" />,
      desc: "Helping brands improve their presence, visibility, and content strategy on social media platforms."
    },
    {
      title: "General Consultation",
      icon: <Users className="w-8 h-8 text-gold-500" />,
      desc: "Discuss your travel plans, brand growth needs, or explore new opportunities in a 1-on-1 session."
    }
  ];

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-navy-900 mb-6">Expertise & Services</h2>
          <p className="text-lg text-slate-600">Tailored consulting to help you navigate international travel, discover opportunities, and elevate your digital brand.</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((srv, i) => (
            <div key={i} className="group border border-slate-200 p-10 hover:border-gold-500 transition-colors bg-slate-50 hover:bg-white">
              <div className="mb-6">{srv.icon}</div>
              <h3 className="text-2xl font-bold text-navy-900 mb-4 group-hover:text-gold-500 transition-colors">{srv.title}</h3>
              <p className="text-slate-600 mb-8 leading-relaxed">{srv.desc}</p>
              <a href="#contact" className="inline-flex items-center text-sm font-bold text-navy-900 uppercase tracking-wider group-hover:text-gold-500">
                Get Started <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CanadaOpportunities = () => {
  return (
    <section id="canada" className="relative py-32 bg-navy-900 text-white overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img src="/canada-bg.jpg" alt="Canada" className="w-full h-full object-cover opacity-20" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-navy-900 to-transparent z-10"></div>
      
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex">
        <div className="md:w-1/2">
          <span className="text-gold-500 font-bold tracking-widest uppercase text-sm mb-4 block">The Next Step</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">Exploring Canadian Opportunities</h2>
          <p className="text-xl text-slate-300 mb-10 leading-relaxed">
            Curious about what Canada has to offer? Explore opportunities, resources, and guidance designed to help you understand your options and plan your next move.
          </p>
          <a href="#contact" className="bg-white text-navy-900 hover:bg-gold-500 hover:text-white px-8 py-4 text-center font-medium text-lg transition-colors inline-block">
            Explore Opportunities
          </a>
        </div>
      </div>
    </section>
  );
};

const Travel = () => {
  return (
    <section id="travel" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col-reverse md:flex-row items-center gap-16">
          <div className="md:w-1/2">
            <h2 className="text-4xl font-bold text-navy-900 mb-6">Travel With Better Planning.</h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Every successful trip starts with meticulous planning. Connect with me for professional travel management and consultation to ensure your international journeys are smooth, well-organized, and stress-free.
            </p>
            <a href="#contact" className="bg-navy-900 hover:bg-gold-500 text-white px-8 py-4 font-medium transition-colors inline-block">
              Start Your Travel Consultation
            </a>
          </div>
          <div className="md:w-1/2">
            <div className="w-full h-[500px] bg-slate-200 overflow-hidden shadow-xl">
              <img src="/travel 2.jpg" alt="Travel and Consultation" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const SocialMediaSection = () => {
  return (
    <section id="social" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-navy-900 mb-6">Helping Brands Get Seen.</h2>
          <p className="text-lg text-slate-600">Leverage proven strategies to grow your presence on social media. I help brands improve visibility, formulate content strategies, and build engaged communities.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-slate-50 p-8 border border-slate-100 text-center">
             <div className="w-16 h-16 bg-navy-900 text-gold-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <MessageCircle className="w-8 h-8" />
             </div>
             <h3 className="text-xl font-bold text-navy-900 mb-3">Content</h3>
             <p className="text-slate-600">Develop compelling content that resonates with your target audience.</p>
          </div>
          <div className="bg-slate-50 p-8 border border-slate-100 text-center transform md:-translate-y-4 shadow-lg border-gold-500">
             <div className="w-16 h-16 bg-gold-500 text-white rounded-full flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="w-8 h-8" />
             </div>
             <h3 className="text-xl font-bold text-navy-900 mb-3">Strategy</h3>
             <p className="text-slate-600">Data-driven approaches to expand your reach and maximize engagement.</p>
          </div>
          <div className="bg-slate-50 p-8 border border-slate-100 text-center">
             <div className="w-16 h-16 bg-navy-900 text-gold-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8" />
             </div>
             <h3 className="text-xl font-bold text-navy-900 mb-3">Visibility</h3>
             <p className="text-slate-600">Increase your digital footprint and convert followers into loyal clients.</p>
          </div>
        </div>

        <div className="mt-16 text-center">
           <a href="#contact" className="bg-navy-900 hover:bg-gold-500 text-white px-8 py-4 font-medium transition-colors inline-block">
              Grow Your Brand
           </a>
        </div>
      </div>
    </section>
  );
};

const PersonalBrand = () => {
  return (
    <section className="py-24 bg-champagne/30 border-y border-gold-400/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold text-navy-900 mb-6">Follow the Journey</h2>
        <p className="text-lg text-slate-600 mb-10 max-w-2xl mx-auto">Join my community of 22K+ followers for daily insights, travel inspiration, and strategies on growing your personal brand.</p>
        
        <div className="inline-flex flex-col items-center p-8 bg-white shadow-xl border border-slate-100">
          <div className="w-24 h-24 bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-500 rounded-full p-1 mb-4">
             <div className="w-full h-full bg-white rounded-full flex items-center justify-center overflow-hidden border-2 border-white">
                <InstagramIcon className="w-10 h-10 text-slate-400" />
             </div>
          </div>
          <h3 className="text-2xl font-bold text-navy-900">@aviationtrail</h3>
          <p className="text-slate-500 mb-6 font-medium">22K+ Followers</p>
          <a href="https://instagram.com/aviationtrail" target="_blank" rel="noreferrer" className="bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white px-8 py-3 rounded-full font-medium transition-all flex items-center">
             <InstagramIcon className="w-5 h-5 mr-2" /> Follow on Instagram
          </a>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/2">
            <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-6">Let's Talk About Your Next Move.</h2>
            <p className="text-xl text-slate-600 mb-10 leading-relaxed">
              Whether you're planning your next trip, exploring opportunities, or looking to strengthen your brand online, let's start a conversation.
            </p>
            
            <div className="space-y-6 mb-12">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-white flex items-center justify-center shadow-sm mr-4 text-gold-500">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-navy-900">Locations</h4>
                  <p className="text-slate-600">Lagos State / Abuja, Nigeria</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-12 h-12 bg-white flex items-center justify-center shadow-sm mr-4 text-gold-500">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-navy-900">WhatsApp</h4>
                  <p className="text-slate-600">+66837054753</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-12 h-12 bg-white flex items-center justify-center shadow-sm mr-4 text-gold-500">
                  <InstagramIcon className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-navy-900">Instagram</h4>
                  <p className="text-slate-600">@aviationtrail</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="https://wa.me/66837054753" target="_blank" rel="noreferrer" className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-center font-medium transition-colors">
                WhatsApp Me
              </a>
              <a href="#form" className="bg-navy-900 hover:bg-navy-800 text-white px-8 py-4 text-center font-medium transition-colors">
                Book a Consultation
              </a>
            </div>
          </div>
          
          <div id="form" className="lg:w-1/2">
            <div className="bg-white p-10 shadow-xl border border-slate-100">
              <h3 className="text-2xl font-bold text-navy-900 mb-8">Send an Inquiry</h3>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Full Name</label>
                  <input type="text" className="w-full border-b border-slate-300 py-2 focus:outline-none focus:border-gold-500 bg-transparent transition-colors" placeholder="Jane Doe" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Email</label>
                    <input type="email" className="w-full border-b border-slate-300 py-2 focus:outline-none focus:border-gold-500 bg-transparent transition-colors" placeholder="jane@example.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Phone / WhatsApp</label>
                    <input type="tel" className="w-full border-b border-slate-300 py-2 focus:outline-none focus:border-gold-500 bg-transparent transition-colors" placeholder="+1234567890" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">What can I help you with?</label>
                  <select className="w-full border-b border-slate-300 py-2 focus:outline-none focus:border-gold-500 bg-transparent text-slate-700">
                    <option value="travel">Travel Management</option>
                    <option value="canada">Canadian Opportunities</option>
                    <option value="social">Social Media Growth</option>
                    <option value="general">General Consultation</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Message</label>
                  <textarea rows="4" className="w-full border-b border-slate-300 py-2 focus:outline-none focus:border-gold-500 bg-transparent transition-colors" placeholder="Tell me about your goals..."></textarea>
                </div>
                <button type="submit" className="w-full bg-gold-500 hover:bg-gold-400 text-white py-4 font-bold uppercase tracking-widest transition-colors mt-4">
                  Send Inquiry
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-navy-900 text-white pt-20 pb-10 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold tracking-tighter mb-4 text-white">ABIODUN ADETAYO</h2>
            <p className="text-slate-400 max-w-sm mb-8 text-lg">
              Exploring opportunities. Helping people and brands move forward.
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com/aviationtrail" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-300 hover:bg-gold-500 hover:text-white transition-colors">
                <InstagramIcon className="w-5 h-5" />
              </a>
              <a href="https://wa.me/66837054753" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-300 hover:bg-green-600 hover:text-white transition-colors">
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Navigation</h4>
            <ul className="space-y-3">
              {['Home', 'About', 'Services', 'Canada Opportunities', 'Travel', 'Social Media', 'Contact'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase().split(' ')[0]}`} className="text-slate-400 hover:text-gold-500 transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Get in Touch</h4>
            <ul className="space-y-3 text-slate-400">
              <li>Lagos State, Nigeria</li>
              <li>Abuja, Nigeria</li>
              <li className="pt-4">
                <a href="https://wa.me/66837054753" className="text-gold-500 font-bold hover:text-white transition-colors">WhatsApp: +66837054753</a>
              </li>
              <li>Instagram: @aviationtrail</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} Abiodun Adetayo. All rights reserved.</p>
          <div className="mt-4 md:mt-0 space-x-4">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

function App() {
  return (
    <div className="font-sans antialiased text-slate-800 selection:bg-gold-500 selection:text-white">
      <Navbar />
      <Hero />
      <SocialProof />
      <About />
      <Services />
      <CanadaOpportunities />
      <Travel />
      <SocialMediaSection />
      <PersonalBrand />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
