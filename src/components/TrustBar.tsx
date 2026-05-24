import React from 'react';
import { Award, CheckCircle, ShieldAlert, ShieldCheck, Map, Clock } from 'lucide-react';
import { trustMetrics } from '../data/services';

export default function TrustBar() {
  return (
    <div className="bg-[#0A0A0A] border-y border-white/10 py-12 px-4 shadow-[0_4px_30px_rgba(0,0,0,0.5)]">
      <div className="max-w-7xl mx-auto">
        
        {/* Main Grid Metrics */}
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-8 items-center text-center">
          {trustMetrics.map((metric, idx) => (
            <div 
              key={idx}
              className={`flex flex-col items-center p-3 transition-transform duration-300 hover:scale-102 ${
                idx < 4 ? 'border-b md:border-b-0 md:border-r border-white/10' : ''
              }`}
            >
              <span className="text-3xl md:text-4xl font-sans font-black bg-gradient-to-r from-white via-white/80 to-[#C5A059] bg-clip-text text-transparent leading-none">
                {metric.value}
              </span>
              <span className="text-[10px] md:text-[11px] font-mono uppercase tracking-widest text-white/50 mt-3 max-w-[150px] leading-relaxed">
                {metric.label}
              </span>
            </div>
          ))}
        </div>

        {/* Regulatory & Safety Endorsement Badges */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-wrap justify-center items-center gap-x-12 gap-y-6">
          <div className="flex items-center gap-3 bg-[#151515] px-5 py-2.5 border border-white/10">
            <ShieldCheck className="w-5 h-5 text-[#C5A059]" />
            <div className="text-left">
              <span className="text-[10px] font-bold font-mono uppercase tracking-widest text-white block">
                NCA-1 Licensed Builder
              </span>
              <span className="text-[9px] text-[#888888] font-mono">
                Kenya Govt Reg: Building & Civil Trades
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3 bg-[#151515] px-5 py-2.5 border border-white/10">
            <Award className="w-5 h-5 text-[#C5A059]" />
            <div className="text-left">
              <span className="text-[10px] font-bold font-mono uppercase tracking-widest text-white block">
                NEMA Approved Standards
              </span>
              <span className="text-[9px] text-[#888888] font-mono">
                Eco-Conscious Building Frameworks
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3 bg-[#151515] px-5 py-2.5 border border-white/10">
            <Clock className="w-5 h-5 text-[#C5A059]" />
            <div className="text-left">
              <span className="text-[10px] font-bold font-mono uppercase tracking-widest text-white block">
                NCA Accredited Site Safety
              </span>
              <span className="text-[9px] text-[#888888] font-mono">
                Occupational Health & Zero Incident Goal
              </span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
