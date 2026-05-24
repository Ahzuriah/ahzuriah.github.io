import React, { useState } from 'react';
import { Calculator, Sparkles, PhoneCall, Mail, ChevronRight, FileSpreadsheet, ArrowLeft, Send, CheckCircle2, DollarSign } from 'lucide-react';

interface EstimateParams {
  category: 'commercial' | 'residential' | 'interiors' | 'renovation';
  areaSqm: number;
  qualityTier: 'premium' | 'elite' | 'ultra';
  floors: number;
  location: string;
}

interface LeadData {
  fullName: string;
  email: string;
  phone: string;
  briefDescription: string;
  timeline: string;
}

const COST_PER_SQM = {
  commercial: { premium: 52000, elite: 74000, ultra: 95000 },
  residential: { premium: 58000, elite: 82000, ultra: 115000 },
  interiors: { premium: 35000, elite: 52000, ultra: 85000 },
  renovation: { premium: 28000, elite: 48000, ultra: 68000 },
};

export default function InteractiveEstimator() {
  const [params, setParams] = useState<EstimateParams>({
    category: 'residential',
    areaSqm: 250,
    qualityTier: 'elite',
    floors: 1,
    location: 'Kisumu (Milimani / Riat Hills)',
  });

  const [lead, setLead] = useState<LeadData>({
    fullName: '',
    email: '',
    phone: '',
    briefDescription: '',
    timeline: '3-6 Months',
  });

  const [step, setStep] = useState<1 | 2 | 3>(1); // 1: Parameters, 2: Lead Capture, 3: Detailed Blueprint Output
  const [submittedEstimates, setSubmittedEstimates] = useState<any>(null);

  const handleParamChange = (field: keyof EstimateParams, value: any) => {
    setParams((prev) => ({ ...prev, [field]: value }));
  };

  const handleLeadChange = (field: keyof LeadData, value: string) => {
    setLead((prev) => ({ ...prev, [field]: value }));
  };

  const calculateEstimateRange = () => {
    const baseCostPerSqm = COST_PER_SQM[params.category][params.qualityTier];
    
    // Multipliers
    let floorMultiplier = 1;
    if (params.floors > 1) {
      floorMultiplier = 1 + (params.floors - 1) * 0.08; // 8% structural framing surcharge per added floor
    }

    const calculatedBase = baseCostPerSqm * params.areaSqm * floorMultiplier;
    
    return {
      minCost: Math.round(calculatedBase * 0.95),
      maxCost: Math.round(calculatedBase * 1.05),
      itemizedPercent: {
        structural: 32,
        masonryFinish: 23,
        systemMEP: 20,
        interiorArchitectural: 25,
      },
    };
  };

  const handleGoToLead = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(2);
  };

  const handleFinalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!lead.fullName || !lead.phone || !lead.email) {
      alert('Please fill out the primary Contact details to generate your budget blueprint booklet.');
      return;
    }

    const result = calculateEstimateRange();
    
    const finalSubmission = {
      params: { ...params },
      lead: { ...lead },
      result: {
        minCost: result.minCost,
        maxCost: result.maxCost,
        avgCost: Math.round((result.minCost + result.maxCost) / 2),
        itemized: {
          structural: Math.round(result.minCost * 0.32),
          masonryFinish: Math.round(result.minCost * 0.23),
          systemMEP: Math.round(result.minCost * 0.20),
          interiorArchitectural: Math.round(result.minCost * 0.25),
        },
      },
      submittedTime: new Date().toLocaleTimeString(),
    };

    setSubmittedEstimates(finalSubmission);
    setStep(3);

    // Persist lead locally in localStorage
    try {
      const existingLeads = JSON.parse(localStorage.getItem('ahzuriah_leads') || '[]');
      existingLeads.unshift(finalSubmission);
      localStorage.setItem('ahzuriah_leads', JSON.stringify(existingLeads));
    } catch (err) {
      console.error('LocalStorage persistence issue:', err);
    }
  };

  const result = calculateEstimateRange();

  // Pre-filled WhatsApp message redirect
  const getWhatsAppLink = () => {
    if (!submittedEstimates) return '';
    const categoryLabel = {
      commercial: 'Commercial Project',
      residential: 'Luxury Residential Villa',
      interiors: 'Premium Interior Fitout',
      renovation: 'Renovation Scope',
    }[submittedEstimates.params.category];

    const message = `Halo Ahzuriah Construction! My name is ${submittedEstimates.lead.fullName}. I have calculated a budget blueprint for a ${categoryLabel} in ${submittedEstimates.params.location}. Specs: ${submittedEstimates.params.areaSqm} Sqm, ${submittedEstimates.params.floors} floor(s), ${submittedEstimates.params.qualityTier.toUpperCase()} quality finish. Estimated average build cost: KES ${submittedEstimates.result.avgCost.toLocaleString()}. Please book my consultation.`;
    return `https://wa.me/254712345678?text=${encodeURIComponent(message)}`;
  };

  return (
    <div className="bg-[#151515] border border-white/10 rounded-none overflow-hidden shadow-2xl max-w-4xl mx-auto">
      
      {/* Title Header Section */}
      <div className="bg-[#222222] border-b border-white/10 px-6 py-5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-none bg-[#C5A059]/10 border border-[#C5A059]/30 flex items-center justify-center text-[#C5A059]">
            <Calculator className="w-5 h-5 animate-pulse" />
          </div>
          <div>
            <h3 className="text-md font-sans font-bold text-white uppercase tracking-wider">
              Precision Cost Estimator
            </h3>
            <p className="text-[11px] font-mono text-[#999999]">
              Live analytical pricing referencing Kenyan NCA build directives.
            </p>
          </div>
        </div>
        <div className="bg-[#333333] px-3 py-1 rounded-none text-[10px] font-mono font-bold text-[#C5A059] uppercase tracking-widest">
          Version 4.8 Pro
        </div>
      </div>

      {/* Progress breadcrumbs Bar */}
      <div className="grid grid-cols-3 text-center border-b border-white/10">
        <div className={`py-3 text-[11px] font-mono uppercase tracking-widest border-r border-white/10 ${step >= 1 ? 'text-[#C5A059] font-bold bg-[#151515]' : 'text-[#666666]'}`}>
          1. Project Parameters
        </div>
        <div className={`py-3 text-[11px] font-mono uppercase tracking-widest border-r border-white/10 ${step >= 2 ? 'text-[#C5A059] font-bold bg-[#151515]' : 'text-[#666666]'}`}>
          2. Contact Details
        </div>
        <div className={`py-3 text-[11px] font-mono uppercase tracking-widest ${step >= 3 ? 'text-[#C5A059] font-bold bg-[#151515]' : 'text-[#666666]'}`}>
          3. Budget Blueprint
        </div>
      </div>

      {step === 1 && (
        <form onSubmit={handleGoToLead} className="p-6 md:p-8 flex flex-col gap-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Left Col: Project Category Selector */}
            <div className="flex flex-col gap-2">
              <label className="text-xs font-mono uppercase tracking-wider text-[#999999]">
                1. Infrastructure Category
              </label>
              <div className="grid grid-cols-2 gap-2 mt-1">
                {(['residential', 'commercial', 'interiors', 'renovation'] as const).map((cat) => (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => handleParamChange('category', cat)}
                    className={`py-3 px-3 rounded-none text-left border text-xs font-sans font-medium capitalize transition-all duration-150 ${
                      params.category === cat
                        ? 'bg-[#C5A059]/15 border-[#C5A059] text-white shadow-md'
                        : 'bg-[#151515] border-white/10 text-[#999999] hover:bg-[#222222]'
                    }`}
                  >
                    <span className="block font-bold">
                      {cat === 'interiors' ? 'Bespoke Interiors' : cat}
                    </span>
                    <span className="text-[9px] text-[#666666] block leading-none mt-1">
                      {cat === 'residential' && 'Lakeside Villas / Estates'}
                      {cat === 'commercial' && 'Corporate & Retail Plaza'}
                      {cat === 'interiors' && 'Executive Boardrooms'}
                      {cat === 'renovation' && 'Modern Facade Retrofit'}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Right Col: Finished Quality Tier */}
            <div className="flex flex-col gap-2">
              <label className="text-xs font-mono uppercase tracking-wider text-[#999999]">
                2. Construction Finish Specification
              </label>
              <div className="flex flex-col gap-2 mt-1">
                {(['premium', 'elite', 'ultra'] as const).map((qty) => (
                  <button
                    key={qty}
                    type="button"
                    onClick={() => handleParamChange('qualityTier', qty)}
                    className={`px-4 py-2.5 rounded-none text-left border text-xs flex justify-between items-center transition-all ${
                      params.qualityTier === qty
                        ? 'bg-[#C5A059]/15 border-[#C5A059] text-white'
                        : 'bg-[#151515] border-white/10 text-[#999999] hover:bg-[#222222]'
                    }`}
                  >
                    <div>
                      <span className="font-bold block capitalize">
                        {qty === 'premium' && 'Grade-A Premium Premium'}
                        {qty === 'elite' && 'Elite Bespoke Luxury'}
                        {qty === 'ultra' && 'Ultra-Luxe Signature Blueprint'}
                      </span>
                      <span className="text-[10px] text-[#666666] font-mono">
                        {qty === 'premium' && 'Kenyan high-standard materials, flawless structural standards'}
                        {qty === 'elite' && 'Imported sanitary/finishes, smart layout configurations'}
                        {qty === 'ultra' && 'Architectural marvel level, fully automated systems, custom marble'}
                      </span>
                    </div>
                    <span className="text-[11px] font-mono text-[#C5A059] shrink-0 font-bold ml-2">
                      {qty === 'premium' && 'KES Baseline'}
                      {qty === 'elite' && '+ 25% High-Spec'}
                      {qty === 'ultra' && 'Ultra High-Yield'}
                    </span>
                  </button>
                ))}
              </div>
            </div>

          </div>

          <hr className="border-white/10 my-2" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            
            {/* Area Size Slider */}
            <div className="flex flex-col gap-3">
              <div className="flex justify-between items-center">
                <label className="text-xs font-mono uppercase tracking-wider text-[#999999]">
                  3. Gross Built up Area (Sqm)
                </label>
                <div className="bg-[#242424] px-2.5 py-1 text-xs font-mono text-[#C5A059] rounded-none border border-white/10">
                  <span className="text-white font-bold text-sm">{params.areaSqm}</span> Sq. Meters
                </div>
              </div>
              <input
                type="range"
                min="50"
                max="2000"
                step="25"
                value={params.areaSqm}
                onChange={(e) => handleParamChange('areaSqm', parseInt(e.target.value))}
                className="w-full accent-[#C5A059] bg-[#333] h-2 rounded-none cursor-pointer"
              />
              <div className="flex justify-between text-[9px] font-mono text-[#666666]">
                <span>50 Sqm (Cottage / Fitout)</span>
                <span>500 Sqm (Large Estate)</span>
                <span>2,000 Sqm (Corporate Complex)</span>
              </div>
            </div>

            {/* Stories and Location Selector Row */}
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-2">
                <label className="text-xs font-mono uppercase tracking-wider text-[#999999]">
                  4. Number of floors
                </label>
                <select
                  value={params.floors}
                  onChange={(e) => handleParamChange('floors', parseInt(e.target.value))}
                  className="bg-[#151515] text-white border border-white/10 rounded-none px-3 py-2.5 text-xs font-sans focus:outline-none focus:border-[#C5A059] w-full"
                >
                  <option value={1}>Single-Storey / Flat</option>
                  <option value={2}>Double-Storey (Maisonette)</option>
                  <option value={3}>3 Storeys (Triplex)</option>
                  <option value={4}>4 Storeys Plus</option>
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs font-mono uppercase tracking-wider text-[#999999]">
                  5. Project Location
                </label>
                <select
                  value={params.location}
                  onChange={(e) => handleParamChange('location', e.target.value)}
                  className="bg-[#151515] text-white border border-white/10 rounded-none px-3 py-2.5 text-xs font-sans focus:outline-none focus:border-[#C5A059] w-full"
                >
                  <option value="Kisumu (Milimani / Riat Hills)">Kisumu (Milimani / Riat Hills)</option>
                  <option value="Kisumu Town Center (Urban)">Kisumu Town Center (Urban)</option>
                  <option value="Western Region (Eldoret / Kakamega)">Western Kenya Hub</option>
                  <option value="Nairobi Metro (Westlands / Karen)">Nairobi Metropolis</option>
                  <option value="Other Location (Nationwide)">Nationwide Extension</option>
                </select>
              </div>
            </div>

          </div>

          {/* Preliminary Estimations Display Widget */}
          <div className="bg-[#0F0F0F] p-4 rounded-none border border-[#C5A059]/10 flex flex-col md:flex-row justify-between items-center gap-6 mt-4">
            <div>
              <div className="text-[10px] font-mono uppercase tracking-wide text-[#999999] mb-1">
                Estimated Price Guidance Index
              </div>
              <div className="text-2xl md:text-3xl font-sans font-black text-white leading-tight">
                KES {(result.minCost / 1000000).toFixed(2)}M <span className="text-[#C5A059] font-light text-base">to</span> {(result.maxCost / 1000000).toFixed(2)}M
              </div>
              <p className="text-[10px] font-mono text-[#666666] mt-1">
                Allocated pricing based on a baseline rate of KES {COST_PER_SQM[params.category][params.qualityTier].toLocaleString()} / Sq. Meter.
              </p>
            </div>
            
            <button
              type="submit"
              id="estimator-step-one-submit"
              className="w-full md:w-auto bg-[#C5A059] hover:bg-amber-400 text-neutral-950 px-5 py-3 rounded-none text-xs font-bold font-sans uppercase tracking-wider flex items-center justify-center gap-1.5 transition-all shadow-lg cursor-pointer shrink-0 animate-bounce"
            >
              Generate Detailed Budget Book
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </form>
      )}

      {step === 2 && (
        <form onSubmit={handleFinalSubmit} className="p-6 md:p-8 flex flex-col gap-6">
          <div className="text-center max-w-xl mx-auto mb-2">
            <span className="p-2 bg-[#C5A059]/10 rounded-full text-[#C5A059] inline-block mb-3 border border-[#C5A059]/30">
              <Sparkles className="w-5 h-5" />
            </span>
            <h4 className="text-lg font-sans font-black text-white uppercase tracking-wider">
              Secure Your Commercial-Grade Estimate Package
            </h4>
            <p className="text-xs text-[#999999] mt-1.5 leading-relaxed">
              To lock in this quotation index and receive an itemized structural breakdown (including labor, civil foundations, and finishes), please provide your project contact profile below.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-2xl mx-auto w-full">
            <div className="flex flex-col gap-1">
              <label className="text-[11px] font-mono uppercase tracking-wider text-[#999999]">
                Your Legal Name *
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Dr. Arthur Omondi"
                value={lead.fullName}
                onChange={(e) => handleLeadChange('fullName', e.target.value)}
                className="bg-[#151515] border border-white/10 text-white rounded-none p-2.5 text-xs focus:border-[#C5A059] focus:outline-none"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-[11px] font-mono uppercase tracking-wider text-[#999999]">
                Email Address *
              </label>
              <input
                type="email"
                required
                placeholder="yourname@domain.com"
                value={lead.email}
                onChange={(e) => handleLeadChange('email', e.target.value)}
                className="bg-[#151515] border border-white/10 text-white rounded-none p-2.5 text-xs focus:border-[#C5A059] focus:outline-none"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-[11px] font-mono uppercase tracking-wider text-[#999999]">
                Primary Phone Number (Active WhatsApp) *
              </label>
              <input
                type="tel"
                required
                placeholder="e.g. +254 712 345 678"
                value={lead.phone}
                onChange={(e) => handleLeadChange('phone', e.target.value)}
                className="bg-[#151515] border border-white/10 text-white rounded-none p-2.5 text-xs focus:border-[#C5A059] focus:outline-none"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-[11px] font-mono uppercase tracking-wider text-[#999999]">
                Proposed Project Timeline
              </label>
              <select
                value={lead.timeline}
                onChange={(e) => handleLeadChange('timeline', e.target.value)}
                className="bg-[#151515] border border-white/10 text-white rounded-none p-2.5 text-xs focus:border-[#C5A059] focus:outline-none"
              >
                <option value="Immediate (<1 Month)">Immediate (Excavating &lt;1 Month)</option>
                <option value="3-6 Months">Planning Phase (Within 3-6 Months)</option>
                <option value="6-12 Months">Tendering Phase (6-12 Months)</option>
                <option value="Just Estimating">Budgeting / Sourcing Estimates</option>
              </select>
            </div>

            <div className="flex flex-col gap-1 md:col-span-2">
              <label className="text-[11px] font-mono tracking-wider uppercase text-[#999999]">
                Special Structural Mandates or Soil Specifics
              </label>
              <textarea
                placeholder="Please describe any land specifics, e.g. volcanic soil in Riat, lake margin issues, pre-existing blueprints, or preferred material specifications..."
                rows={3}
                value={lead.briefDescription}
                onChange={(e) => handleLeadChange('briefDescription', e.target.value)}
                className="bg-[#151515] border border-white/10 text-white rounded-none p-2.5 text-xs focus:border-[#C5A059] focus:outline-none resize-none"
              ></textarea>
            </div>
          </div>

          <div className="flex justify-between items-center max-w-2xl mx-auto w-full border-t border-white/10 pt-4 mt-2">
            <button
              type="button"
              onClick={() => setStep(1)}
              className="text-[#999999] hover:text-white text-xs font-mono flex items-center gap-1 cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              Adjust Parameters
            </button>

            <button
              type="submit"
              id="estimator-lead-submit-btn"
              className="bg-gradient-to-r from-[#C5A059] to-[#E3C293] text-neutral-900 font-bold px-6 py-3 rounded-none text-xs uppercase tracking-wider flex items-center gap-2 shadow-lg hover:shadow-[#C5A059]/10 cursor-pointer"
            >
              Compile Blueprint Now
              <Send className="w-3.5 h-3.5" />
            </button>
          </div>
        </form>
      )}

      {step === 3 && submittedEstimates && (
        <div className="p-6 md:p-8 flex flex-col gap-6">
          <div className="text-center">
            <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-4 animate-in zoom-in duration-300">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h4 className="text-xl font-sans font-black text-white uppercase tracking-wider">
              Corporate Budget Blueprint Completed
            </h4>
            <p className="text-xs text-emerald-400 font-mono mt-1">
              Estimate Code: AZR-{Math.floor(Math.random() * 9000 + 1000)}-{submittedEstimates.params.category.toUpperCase().slice(0,3)}
            </p>
          </div>

          <div className="bg-[#0A0A0A] rounded-none border border-white/10 overflow-hidden shadow-inner max-w-2xl mx-auto w-full">
            
            {/* Blueprint Header */}
            <div className="bg-[#151515] px-5 py-3 border-b border-white/10 flex justify-between items-center">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#C5A059] block">
                  Ahzuriah Analytical Output
                </span>
                <span className="text-sm font-sans font-semibold text-white">
                  {submittedEstimates.lead.fullName} &bull; Project Scope Brief
                </span>
              </div>
              <span className="text-xs font-mono text-[#999999]">
                {submittedEstimates.submittedTime}
              </span>
            </div>

            {/* Price display big */}
            <div className="p-6 border-b border-white/10 text-center bg-gradient-to-b from-[#1c1c1c] to-[#121212]">
              <span className="text-[10px] font-mono text-[#888888] uppercase tracking-widest block mb-1">
                Calculated Total Engineering Project Valuation
              </span>
              <div className="text-3xl md:text-4xl font-sans font-black text-white leading-tight">
                KES {submittedEstimates.result.minCost.toLocaleString()} <span className="text-sm font-light text-[#999999] font-mono">to</span> {submittedEstimates.result.maxCost.toLocaleString()}
              </div>
              <p className="text-[11px] font-mono text-[#C5A059] mt-1.5">
                Location: {submittedEstimates.params.location} &bull; Size: {submittedEstimates.params.areaSqm} Sqm &bull; Quality: {submittedEstimates.params.qualityTier.toUpperCase()}
              </p>
            </div>

            {/* Itemized budget bars */}
            <div className="p-5 md:p-6 flex flex-col gap-4">
              <h5 className="text-[11px] font-mono uppercase tracking-widest text-[#999999] border-b border-white/10 pb-2">
                Itemized Construction Budget Distributions
              </h5>
              
              <div className="flex flex-col gap-3 text-xs">
                <div>
                  <div className="flex justify-between text-[11px] mb-1">
                    <span className="text-[#cccccc] font-medium">1. Foundations, Masonry & Earthworks (32%)</span>
                    <span className="font-mono text-white">KES {submittedEstimates.result.itemized.structural.toLocaleString()}</span>
                  </div>
                  <div className="w-full bg-neutral-800 h-1.5 rounded-none overflow-hidden">
                    <div className="bg-[#C5A059] h-full rounded-none" style={{ width: '32%' }}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-[11px] mb-1">
                    <span className="text-[#cccccc] font-medium">2. Structural Frame & Deck Assembly (23%)</span>
                    <span className="font-mono text-white">KES {submittedEstimates.result.itemized.masonryFinish.toLocaleString()}</span>
                  </div>
                  <div className="w-full bg-neutral-800 h-1.5 rounded-none overflow-hidden">
                    <div className="bg-[#C5A059] h-full rounded-none" style={{ width: '23%' }}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-[11px] mb-1">
                    <span className="text-[#cccccc] font-medium">3. Climate Control, MEP Systems & Wiring (20%)</span>
                    <span className="font-mono text-white">KES {submittedEstimates.result.itemized.systemMEP.toLocaleString()}</span>
                  </div>
                  <div className="w-full bg-neutral-800 h-1.5 rounded-none overflow-hidden">
                    <div className="bg-[#C5A059] h-full rounded-none" style={{ width: '20%' }}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-[11px] mb-1">
                    <span className="text-[#cccccc] font-medium">4. Premium Finishes, Joinery & Glazing (25%)</span>
                    <span className="font-mono text-white">KES {submittedEstimates.result.itemized.interiorArchitectural.toLocaleString()}</span>
                  </div>
                  <div className="w-full bg-neutral-800 h-1.5 rounded-none overflow-hidden">
                    <div className="bg-[#C5A059] h-full rounded-none" style={{ width: '25%' }}></div>
                  </div>
                </div>
              </div>

              {submittedEstimates.lead.briefDescription && (
                <div className="bg-neutral-900 p-3 rounded-none border border-white/10 text-[11px] mt-2 text-[#999999] leading-relaxed">
                  <span className="text-white font-bold block mb-1 font-mono uppercase tracking-wide">
                    Recorded Client Directives:
                  </span>
                  &ldquo;{submittedEstimates.lead.briefDescription}&rdquo;
                </div>
              )}
            </div>

          </div>

          {/* Connect Action Desk Panel Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-2xl mx-auto w-full mt-2">
            <button
              onClick={() => setStep(1)}
              className="w-full sm:w-auto px-4 py-3 bg-neutral-900 border border-neutral-800 text-[#cccccc] hover:text-white rounded-none text-xs select-none uppercase tracking-wider font-bold transition-all cursor-pointer flex items-center justify-center gap-1"
            >
              Recalculate
            </button>

            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-none text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg"
            >
              <PhoneCall className="w-4 h-4" />
              Pre-load estimate on WhatsApp
            </a>

            <a
              href={`mailto:contact@ahzuriah.co.ke?subject=Construction%20Estimate%20Brief%23${submittedEstimates.lead.fullName}&body=Hello%20Ahzuriah!%20I%20have%20constructed%20an%20analytical%20build%20estimate.%20Category:%20${submittedEstimates.params.category}%20in%20${submittedEstimates.params.location}.%20Estimated%20cost:%20KES%20${submittedEstimates.result.minCost.toLocaleString()}%20to%20${submittedEstimates.result.maxCost.toLocaleString()}`}
              className="w-full sm:w-auto px-6 py-3 bg-[#C5A059] hover:bg-amber-400 text-neutral-950 font-bold rounded-none text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg"
            >
              <Mail className="w-4 h-4" />
              Book Engineering Audit
            </a>
          </div>
        </div>
      )}

    </div>
  );
}
