import React from 'react';
import { Hammer, Mail, Phone, MapPin, Shield, Star, Clock, ArrowUp, ArrowRight } from 'lucide-react';
import { ActivePage } from '../types';

interface FooterProps {
  onPageChange: (page: ActivePage) => void;
}

export default function Footer({ onPageChange }: FooterProps) {
  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0A0A0A] text-white/50 pt-16 pb-8 border-t border-white/10 relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        
        {/* Top Segment: Brand Name and Key Value Pitch */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pb-12 border-b border-white/10 mb-12">
          
          <div className="lg:col-span-5 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 border-2 border-[#C5A059] flex items-center justify-center font-bold text-md tracking-tighter">
                <span className="text-white text-xs font-black font-display">A</span>
              </div>
              <div>
                <span className="text-md font-bold font-display text-white uppercase tracking-widest block">
                  AHZURIAH <span className="text-xs font-medium text-[#C5A059]">Construction</span>
                </span>
                <span className="text-[9px] font-mono tracking-[0.2em] uppercase text-white/30">
                  Contractor Reg No. NCA 1-65487B
                </span>
              </div>
            </div>
            <p className="text-[13px] leading-relaxed text-white/60 max-w-sm mt-1">
              Building Kenya’s high-yield commercial infrastructure and luxury residential landmarks. We merge elite mechanical engineering with artistic spatial layouts across Kisumu, Western Kenya, and Nairobi.
            </p>
          </div>

          <div className="lg:col-span-4 flex flex-col justify-center">
            <div className="bg-[#151515] p-4 border border-white/10 flex gap-4 items-start max-w-md">
              <div className="p-2 bg-[#C5A059]/10 border border-[#C5A059]/20 text-[#C5A059] mt-0.5">
                <Shield className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-[10px] font-mono uppercase text-[#C5A059] font-bold tracking-widest mb-1">
                  National Construction Authority (NCA)
                </h4>
                <p className="text-[11px] leading-normal text-white/40">
                  Registered and active under General Building Contractor Category NCA-1, authorized for multi-million-shilling commercial structural development and civil works nationwide.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3 flex flex-col justify-center items-start lg:items-end gap-3">
            <div className="text-left lg:text-right">
              <span className="text-[9px] font-mono uppercase tracking-[0.25em] text-white/30 block mb-1">
                Regional Headquarters
              </span>
              <span className="text-xs font-semibold text-white block">
                Mega Plaza Wing B, 4th Floor
              </span>
              <span className="text-xs text-white/50 block font-mono">
                Oginga Odinga Street, Kisumu Town, KE
              </span>
            </div>
            <button
              onClick={handleScrollTop}
              className="p-2.5 border border-white/10 bg-white/5 hover:border-[#C5A059] hover:bg-black text-white rounded-none cursor-pointer transition-colors flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest mt-2"
              aria-label="Scroll to Top"
            >
              Scroll to Top
              <ArrowUp className="w-3.5 h-3.5 text-[#C5A059]" />
            </button>
          </div>

        </div>

        {/* Medium Segment: Quad Multi-column list grids */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-12 border-b border-white/10 mb-12">
          
          {/* Col 1: Services Handled */}
          <div>
            <h4 className="text-xs font-bold font-sans text-white uppercase tracking-widest mb-4 border-l-2 border-[#C5A059] pl-3">
              Premium Capabilities
            </h4>
            <ul className="flex flex-col gap-2.5 text-[12px] text-white/50">
              <li>
                <button 
                  onClick={() => onPageChange('commercial-construction')} 
                  className="hover:text-white transition-colors cursor-pointer flex items-center gap-1.5 group"
                >
                  <ArrowRight className="w-3 h-3 text-[#C5A059]" />
                  Commercial Contracting
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onPageChange('residential-construction')} 
                  className="hover:text-white transition-colors cursor-pointer flex items-center gap-1.5 group"
                >
                  <ArrowRight className="w-3 h-3 text-[#C5A059]" />
                  High-End Residential Building
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onPageChange('interior-design')} 
                  className="hover:text-white transition-colors cursor-pointer flex items-center gap-1.5 group"
                >
                  <ArrowRight className="w-3 h-3 text-[#C5A059]" />
                  Luxury Interior Design & Fitout
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onPageChange('services')} 
                  className="hover:text-white transition-colors cursor-pointer flex items-center gap-1.5 group"
                >
                  <ArrowRight className="w-3 h-3 text-[#C5A059]" />
                  Renovations & Structural Upgrades
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onPageChange('process')} 
                  className="hover:text-white transition-colors cursor-pointer flex items-center gap-1.5 group"
                >
                  <ArrowRight className="w-3 h-3 text-[#C5A059]" />
                  Design-Build Integrations
                </button>
              </li>
            </ul>
          </div>

          {/* Col 2: High-trust local projects areas inside Kenya */}
          <div>
            <h4 className="text-xs font-bold font-sans text-white uppercase tracking-widest mb-4 border-l-2 border-[#C5A059] pl-3">
              Regional Operations
            </h4>
            <div className="flex flex-col gap-2.5 text-[12px] text-white/50">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-3.5 h-3.5 text-[#C5A059] shrink-0 mt-0.5" />
                <div>
                  <span className="text-white block font-medium">Kisumu & Lakeside Basin</span>
                  <p className="text-[10px] text-white/40">Milimani Estate, Riat Hills, Kisumu CBD, Yacht Club, Tom Mboya.</p>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <MapPin className="w-3.5 h-3.5 text-[#C5A059] shrink-0 mt-0.5" />
                <div>
                  <span className="text-white block font-medium">Western Kenya Regional Hub</span>
                  <p className="text-[10px] text-white/40">Kakamega Town, Eldoret Highlands, Kericho, Kisii Highlands.</p>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <MapPin className="w-3.5 h-3.5 text-[#C5A059] shrink-0 mt-0.5" />
                <div>
                  <span className="text-white block font-medium">Nairobi Metropolis Hub</span>
                  <p className="text-[10px] text-white/40">Westlands CBD, Kilimani lofts, Karen Estates, Runda.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Col 3: Easy structural navigation links */}
          <div>
            <h4 className="text-xs font-bold font-sans text-white uppercase tracking-widest mb-4 border-l-2 border-[#C5A059] pl-3">
              Corporate Quicklinks
            </h4>
            <ul className="flex flex-col gap-2 text-[12px] text-white/50">
              <li>
                <button onClick={() => onPageChange('about')} className="hover:text-white transition-colors cursor-pointer flex items-center gap-1.5 text-left">
                  Our Corporate History & Team
                </button>
              </li>
              <li>
                <button onClick={() => onPageChange('portfolio')} className="hover:text-white transition-colors cursor-pointer flex items-center gap-1.5 text-left">
                  Interactive Portfolio Case Studies
                </button>
              </li>
              <li>
                <button onClick={() => onPageChange('process')} className="hover:text-white transition-colors cursor-pointer flex items-center gap-1.5 text-left">
                  How We Work: Turnkey Architecture
                </button>
              </li>
              <li>
                <button onClick={() => onPageChange('faq')} className="hover:text-white transition-colors cursor-pointer flex items-center gap-1.5 text-left">
                  Client Frequently Asked Questions
                </button>
              </li>
              <li>
                <button onClick={() => onPageChange('contact')} className="hover:text-[#C5A059] transition-colors cursor-pointer flex items-center gap-1.5 text-[#C5A059] font-semibold text-left">
                  Get In Touch / Support Desk
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Lead Assurance details */}
          <div>
            <h4 className="text-xs font-bold font-sans text-white uppercase tracking-widest mb-4 border-l-2 border-[#C5A059] pl-3">
              Client Support Desk
            </h4>
            <div className="flex flex-col gap-3 text-[12px] text-white/50">
              <p className="text-[11px] text-white/40 leading-relaxed">
                Contact our active Estimations desk for a structural audit or a physical bill of quantities (BOQ) review.
              </p>
              <a
                href="mailto:contact@ahzuriah.co.ke"
                className="flex items-center gap-2 p-2.5 bg-[#151515] hover:bg-black rounded-none border border-white/10 text-white transition-colors cursor-pointer group"
              >
                <Mail className="w-4 h-4 text-[#C5A059]" />
                <span className="truncate text-xs text-white/85">contact@ahzuriah.co.ke</span>
              </a>
              <div className="flex items-center gap-1.5 text-[10px] text-white/30 font-mono">
                <Clock className="w-3.5 h-3.5 text-white/35" />
                Response expectation: &lt;2 Hours
              </div>
            </div>
          </div>

        </div>

        {/* Lower Segment: SEO targeted keynotes and Copyright terms */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] uppercase tracking-widest text-white/30 border-t border-white/10 pt-8">
          
          <div className="flex flex-wrap gap-x-4 gap-y-1.5 justify-center md:justify-start max-w-xl">
            <span className="text-white/40">Tags:</span>
            <span>#construction company Kenya</span>
            <span>#construction company Kisumu</span>
            <span>#commercial construction Kenya</span>
            <span>#residential builders Kenya</span>
            <span>#interior design Kenya</span>
            <span>#contractor Kisumu</span>
            <span>#design-build Kenya</span>
          </div>

          <div className="text-center md:text-right">
            <p className="text-white/40 mb-1">
              &copy; {currentYear} AHZURIAH CONSTRUCTION COMPANY LTD. All rights reserved.
            </p>
            <p className="text-[9px] text-white/20">
              NCA Registered | Engineered for Reliability, Crafted for Distinct Luxury.
            </p>
          </div>

        </div>

      </div>
    </footer>
  );
}
