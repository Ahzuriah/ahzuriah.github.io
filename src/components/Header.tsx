import React, { useState, useEffect } from 'react';
import { Menu, X, Hammer, ShieldCheck, Mail, Phone, Clock, ArrowRight } from 'lucide-react';
import { ActivePage } from '../types';

interface HeaderProps {
  activePage: ActivePage;
  onPageChange: (page: ActivePage) => void;
  onRequestQuote: () => void;
}

export default function Header({ activePage, onPageChange, onRequestQuote }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: { label: string; page: ActivePage }[] = [
    { label: 'Home', page: 'home' },
    { label: 'About Us', page: 'about' },
    { label: 'Services', page: 'services' },
    { label: 'Commercial Builders', page: 'commercial-construction' },
    { label: 'Residential Villas', page: 'residential-construction' },
    { label: 'Interior Design', page: 'interior-design' },
    { label: 'Our Portfolio', page: 'portfolio' },
    { label: 'Our Process', page: 'process' },
    { label: 'FAQs', page: 'faq' },
    { label: 'Contact', page: 'contact' },
  ];

  return (
    <>
      {/* Upper Info Bar - Non-flickering, sleek */}
      <div className="bg-[#0A0A0A] text-white/50 text-[11px] font-mono tracking-wider py-2 px-4 shadow-[inset_0_-1px_0_0_rgba(255,255,255,0.05)] border-b border-white/5 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 hover:text-white transition-colors">
              <Phone className="w-3.5 h-3.5 text-[#C5A059]" />
              +254 712 345 678 (Kisumu Head Office)
            </span>
            <span className="flex items-center gap-1.5 hover:text-white transition-colors">
              <Mail className="w-3.5 h-3.5 text-[#C5A059]" />
              contact@ahzuriah.co.ke
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#C5A059]" />
              Mon - Sat: 7:30 AM - 5:30 PM
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-[#C5A059] text-[10px] font-bold uppercase tracking-widest px-2.5 py-0.5 bg-[#C5A059]/10 border border-[#C5A059]/20 rounded-none">
              NCA-1 Certified Contractor
            </span>
            <span className="text-white/40">Nairobi & Western Kenya</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 w-full ${
          isScrolled
            ? 'bg-[#0F0F0F]/95 backdrop-blur-md shadow-2xl py-3 border-b border-white/10'
            : 'bg-[#0F0F0F] md:bg-[#0F0F0F]/90 md:backdrop-blur-sm py-5 border-b border-white/5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6 flex justify-between items-center">
          
          {/* Logo Brand Title */}
          <div 
            onClick={() => { onPageChange('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="relative flex items-center justify-center w-10 h-10 border-2 border-[#C5A059] bg-black flex items-center justify-center font-bold text-xl tracking-tighter group-hover:bg-[#C5A059] transition-all duration-300">
              <span className="text-white text-md font-black group-hover:text-black font-display tracking-tighter">A</span>
            </div>
            <div>
              <div className="font-display font-bold text-md md:text-lg text-white tracking-widest leading-none uppercase flex items-center gap-1.5">
                Ahzuriah
              </div>
              <div className="text-[9px] font-display uppercase tracking-[0.3em] text-[#C5A059] font-medium mt-1">
                Construction Co. Ltd
              </div>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = activePage === item.page;
              return (
                <button
                  key={item.page}
                  id={`nav-item-${item.page}`}
                  onClick={() => {
                    onPageChange(item.page);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className={`text-[11px] uppercase tracking-widest font-sans font-medium px-3.5 py-2 transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'text-white border-b-2 border-[#C5A059] bg-white/5'
                      : 'text-white/60 hover:text-white'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Consultation CTA Desktop */}
          <div className="hidden xl:block">
            <button
              id="cta-request-consultation-btn"
              onClick={onRequestQuote}
              className="border border-[#C5A059] text-[#C5A059] text-[10px] font-bold uppercase tracking-widest px-6 py-3 hover:bg-[#C5A059] hover:text-black cursor-pointer transition-all duration-300"
            >
              Request Quote
            </button>
          </div>

          {/* Tablet & Mobile Menu Buttons */}
          <div className="xl:hidden flex items-center gap-3">
            <button
              id="header-mobile-view-proposal"
              onClick={onRequestQuote}
              className="border border-[#C5A059] text-[#C5A059] text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 hover:bg-[#C5A059] hover:text-black cursor-pointer transition-all duration-300"
            >
              Request Quote
            </button>
            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-white bg-white/5 border border-white/10 hover:bg-white/10 rounded-sm transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </header>

      {/* Mobile Drawer Slide Panel */}
      {isMobileMenuOpen && (
        <div 
          onClick={() => setIsMobileMenuOpen(false)}
          className="fixed inset-0 z-45 bg-black/80 backdrop-blur-sm transition-opacity duration-300 xl:hidden"
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            className="fixed right-0 top-0 bottom-0 w-80 bg-[#0F0F0F] border-l border-white/10 p-6 shadow-2xl flex flex-col justify-between overflow-y-auto z-50 animate-in slide-in-from-right duration-300"
          >
            <div>
              {/* Header inside Panel */}
              <div className="flex justify-between items-center border-b border-white/10 pb-4 mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 border-2 border-[#C5A059] flex items-center justify-center font-bold text-md tracking-tighter">
                    <span className="text-white text-xs font-black font-display">A</span>
                  </div>
                  <div>
                    <div className="font-display font-bold text-sm text-white tracking-widest uppercase mb-0.5">
                      AHZURIAH
                    </div>
                    <div className="text-[8px] tracking-[0.25em] text-[#C5A059] font-medium font-mono uppercase">
                      Construction Co. Ltd
                    </div>
                  </div>
                </div>
                <button
                  id="mobile-drawer-close"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-1.5 text-white/55 hover:text-white border border-white/10 rounded-sm bg-white/5"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Nav Items Stack */}
              <nav className="flex flex-col gap-1">
                {navItems.map((item) => {
                  const isActive = activePage === item.page;
                  return (
                    <button
                      key={item.page}
                      id={`mobile-nav-${item.page}`}
                      onClick={() => {
                        onPageChange(item.page);
                        setIsMobileMenuOpen(false);
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className={`text-[11px] uppercase tracking-widest font-medium text-left py-2.5 px-4 rounded-none transition-all duration-150 cursor-pointer ${
                        isActive
                          ? 'bg-[#C5A059] text-black font-bold'
                          : 'text-white/60 hover:bg-white/5 hover:text-white'
                      }`}
                    >
                      {item.label}
                    </button>
                  );
                })}
              </nav>
            </div>

            {/* Bottom info area */}
            <div className="border-t border-white/10 pt-6 mt-8">
              <p className="text-[10px] text-white/40 uppercase tracking-widest font-mono mb-4 text-center">
                Active Client Sales Desk
              </p>
              <a
                href="tel:+254712345678"
                className="block text-center bg-black border border-white/10 text-white font-semibold text-xs py-2.5 rounded-none hover:border-[#C5A059]/50 transition-colors mb-3 tracking-wider font-mono"
              >
                +254 712 345 678
              </a>
              <button
                id="mobile-drawer-quote-btn"
                onClick={() => {
                  onRequestQuote();
                  setIsMobileMenuOpen(false);
                }}
                className="w-full text-center border border-[#C5A059] text-[#C5A059] font-bold text-[10px] py-2.5 rounded-none uppercase tracking-widest hover:bg-[#C5A059] hover:text-black transition-all"
              >
                Request Consultation
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
