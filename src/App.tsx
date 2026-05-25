import React, { useState, useEffect } from "react";
import {
  Building2,
  MapPin,
  Phone,
  Mail,
  ShieldCheck,
  Compass,
  HardHat,
  CheckCircle2,
  Check,
  ChevronRight,
  ArrowRight,
  Briefcase,
  Users,
  Workflow,
  Quote,
  Star,
  Plus,
  Minus,
  ExternalLink,
  Target,
  FileText,
  BadgeAlert,
  Send,
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { ActivePage, Project, ServiceDetail } from "./types";
import { projects } from "./data/projects";
import {
  services,
  teamMembers,
  coreValues,
  testimonials,
} from "./data/services";

import Header from "./components/Header";
import Footer from "./components/Footer";
import TrustBar from "./components/TrustBar";
import InteractiveEstimator from "./components/InteractiveEstimator";
import heroBanner from "./assets/images/hero_banner_luxury_construction_1779616425828.png";
import residentialVilla from "./assets/images/residential_villa_1779616462713.png";
import luxuryInterior from "./assets/images/luxury_interior_design_1779616481038.png";
import commercialConstruction from "./assets/images/commercial_construction_1779616445045.png";
export default function App() {
  const [activePage, setActivePage] = useState<ActivePage>("home");
  const [selectedCategory, setSelectedCategory] = useState<
    "all" | "commercial" | "residential" | "interiors" | "renovation"
  >("all");
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  // Lead submission simulation state for contact page
  const [contactSubmitted, setContactSubmitted] = useState(false);
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "commercial",
    scale: "100-300 Sqm",
    message: "",
    location: "Kisumu",
  });

  // Top window anchor scroll on pagination
  const handlePageChange = (page: ActivePage) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: "instant" });
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactForm.name || !contactForm.phone || !contactForm.email) {
      alert("Must complete required contact parameters.");
      return;
    }
    setContactSubmitted(true);
    // Auto-save contact lead message in localStorage
    try {
      const existingLeads = JSON.parse(
        localStorage.getItem("ahzuriah_leads") || "[]",
      );
      existingLeads.push({
        type: "General Contact",
        lead: {
          fullName: contactForm.name,
          email: contactForm.email,
          phone: contactForm.phone,
        },
        params: {
          category: contactForm.service,
          location: contactForm.location,
        },
        message: contactForm.message,
        time: new Date().toLocaleTimeString(),
      });
      localStorage.setItem("ahzuriah_leads", JSON.stringify(existingLeads));
    } catch (_) {}
  };

  const filteredProjects =
    selectedCategory === "all"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <div className="min-h-screen bg-[#0F0F0F] text-white flex flex-col font-sans selection:bg-[#C5A059] selection:text-[#111111]">
      {/* Header Sticky Container */}
      <Header
        activePage={activePage}
        onPageChange={handlePageChange}
        onRequestQuote={() => handlePageChange("contact")}
      />

      {/* Primary Page Canvas Switcher */}
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          {/* HOME PAGE VIEW */}
          {activePage === "home" && (
            <motion.div
              key="home"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {/* Immersive Cinematic Hero Hero Section */}
              <section className="relative min-h-[90vh] md:min-h-screen flex items-center justify-center overflow-hidden bg-[#0A0A0A]">
                {/* Background high-end generated image with overlay dark scrims */}
                <div className="absolute inset-0 z-0">
                  <img
                    src={heroBanner}
                    alt="Premium Architectural Construction in Kenya by Ahzuriah"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center opacity-30 scale-102 animate-pulse-slow grayscale"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#0F0F0F] via-[#0F0F0F]/80 to-transparent"></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F0F] via-transparent to-black/30"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10 w-full py-16 text-left">
                  {/* Subtle brand tag */}
                  <div className="mb-6 inline-flex items-center gap-4">
                    <span className="h-[1px] w-12 bg-[#C5A059]"></span>
                    <span className="text-[11px] uppercase tracking-[0.4em] text-[#C5A059] font-semibold">
                      Architectural Excellence
                    </span>
                  </div>

                  <h1 className="text-4xl md:text-6xl lg:text-8xl font-sans font-black tracking-tighter leading-[0.9] max-w-4xl text-white uppercase">
                    Engineering <br />
                    <span className="text-white/20 uppercase">
                      Premium
                    </span>{" "}
                    <br />
                    Landmarks.
                  </h1>

                  <p className="max-w-md text-white/50 text-sm leading-relaxed mt-8 border-l-2 border-[#C5A059] pl-6 h-fit font-sans">
                    Ahzuriah Construction crafts prestigious commercial offices
                    and luxury residential villas across Kenya. Registered under
                    category <strong>NCA-1</strong>, we secure your structural
                    investments with bulletproof engineering and absolute budget
                    transparency.
                  </p>

                  {/* Primary CTA Grid Row */}
                  <div className="flex flex-col sm:flex-row gap-4 mt-10 max-w-md">
                    <button
                      onClick={() => handlePageChange("contact")}
                      className="border border-[#C5A059] text-[#C5A059] text-[10px] font-bold uppercase tracking-widest px-8 py-4 bg-transparent hover:bg-[#C5A059] hover:text-black transition-all duration-300 cursor-pointer"
                    >
                      Request Quote
                    </button>
                    <button
                      onClick={() => handlePageChange("portfolio")}
                      className="border border-white/10 hover:border-white text-white bg-transparent hover:bg-white/5 font-bold tracking-widest text-[10px] uppercase px-8 py-4 transition-all duration-300 cursor-pointer"
                    >
                      View Precision Work
                    </button>
                  </div>

                  {/* Tiny Trust Anchors */}
                  <div className="flex flex-wrap items-center gap-x-8 gap-y-3 mt-12 pt-8 border-t border-white/10 text-xs font-mono text-[#999999]">
                    <span className="flex items-center gap-1.5">
                      <ShieldCheck className="w-4 h-4 text-[#C5A059]" />
                      NCA-1 Certified Builder
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Compass className="w-4 h-4 text-[#C5A059]" />
                      Kisumu, Western Kenya & Nairobi
                    </span>
                    <span className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4 text-[#C5A059]" />
                      Zero Budget Surprises Guarantee
                    </span>
                  </div>
                </div>
              </section>

              {/* Dynamic Trust Certification metrics Bar */}
              <TrustBar />

              {/* Premium Editorial Core Positioning Intro Section */}
              <section className="py-20 bg-[#0F0F0F] px-4 md:px-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-[#151515] border-l border-white/10 z-0"></div>
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
                  {/* Left content block */}
                  <div className="lg:col-span-7 flex flex-col gap-6">
                    <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#C5A059] block font-bold">
                      &equiv; AHZURIAH CORE FOCUS
                    </span>
                    <h2 className="text-3xl md:text-4xl font-sans font-black text-white uppercase tracking-tight">
                      A Top-Tier Digital Construction Partner Building Your
                      Long-Term Yield
                    </h2>
                    <p className="text-sm text-[#999999] leading-relaxed">
                      Founded with a principal determination to address the
                      critical gap in precision engineering, material inflation
                      protection, and county structural certification, Ahzuriah
                      Construction Company delivers landmark solutions. We
                      specialize in general contracting, design-build
                      structures, and upscale luxury residential properties.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-3">
                      <div className="p-4 bg-[#151515] border border-white/10">
                        <h4 className="text-xs font-mono uppercase font-bold text-white tracking-widest mb-1.5 flex items-center gap-1.5">
                          <Check className="w-4 h-4 text-[#C5A059]" /> Integrity
                          Sourcing
                        </h4>
                        <p className="text-[11px] text-[#888888]">
                          We audit raw material batches in certified
                          laboratories. No substandard steel, zero sand
                          dilution.
                        </p>
                      </div>

                      <div className="p-4 bg-[#151515] border border-white/10">
                        <h4 className="text-xs font-mono uppercase font-bold text-white tracking-widest mb-1.5 flex items-center gap-1.5">
                          <Check className="w-4 h-4 text-[#C5A059]" /> Cost
                          Transparency
                        </h4>
                        <p className="text-[11px] text-[#888888]">
                          Fully itemized structural bills of quantities with
                          constant market-hedged pricing safeguards.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Right visual block */}
                  <div className="lg:col-span-5 relative">
                    <div className="relative border border-white/10 overflow-hidden bg-neutral-900 shadow-2xl">
                      <img
                        src="/src/assets/images/commercial_construction_1779616445045.png"
                        alt="High trust structural concrete frameworks in Western Kenya"
                        referrerPolicy="no-referrer"
                        className="w-full h-[320px] object-cover grayscale hover:grayscale-0 transition-all duration-500"
                      />
                      <div className="p-4 bg-[#151515] border-t border-white/10 flex justify-between items-center text-xs font-mono">
                        <span className="text-white/40">
                          NCA-1 Structural Core Shells
                        </span>
                        <button
                          onClick={() => handlePageChange("about")}
                          className="text-[#C5A059] font-bold flex items-center gap-1 hover:underline text-[10px] uppercase tracking-widest font-sans"
                        >
                          Our Heritage &rarr;
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Service Categories Showcase Grid */}
              <section className="py-20 bg-[#0A0A0A] px-4 md:px-6 relative overflow-hidden">
                <div className="max-w-7xl mx-auto">
                  {/* Title Segment */}
                  <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
                    <div>
                      <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#C5A059] block mb-2">
                        EXECUTIVE CAPABILITIES
                      </span>
                      <h3 className="text-2xl md:text-4xl font-sans font-black uppercase text-white tracking-tight">
                        Our General Contracting & Build Services
                      </h3>
                    </div>
                    <button
                      onClick={() => handlePageChange("services")}
                      className="text-xs font-bold text-[#C5A059] uppercase tracking-wider flex items-center gap-1 hover:underline group shrink-0"
                    >
                      View All 8 Disciplines
                      <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </button>
                  </div>

                  {/* Services Bento Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service) => (
                      <div
                        key={service.id}
                        className="bg-[#151515] border border-white/10 hover:border-[#C5A059]/30 rounded-none overflow-hidden flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 shadow-lg group"
                      >
                        <div>
                          <div className="h-44 overflow-hidden relative">
                            <img
                              src={service.imageUrl}
                              alt={service.title}
                              referrerPolicy="no-referrer"
                              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#181818] to-transparent"></div>
                          </div>

                          <div className="p-5">
                            <h4 className="text-md font-sans font-bold text-white uppercase tracking-wide group-hover:text-[#C5A059] transition-colors">
                              {service.title}
                            </h4>
                            <p className="text-[12px] text-[#999999] mt-2 line-clamp-3 leading-relaxed">
                              {service.description}
                            </p>
                          </div>
                        </div>

                        <div className="px-5 pb-5 pt-2 border-t border-white/10 flex justify-between items-center">
                          <span className="text-[10px] font-mono text-[#666666] uppercase">
                            Premium Division
                          </span>
                          <button
                            id={`home-service-read-${service.id}`}
                            onClick={() => {
                              const routeMap: Record<string, ActivePage> = {
                                commercial: "commercial-construction",
                                residential: "residential-construction",
                                interiors: "interior-design",
                              };
                              handlePageChange(
                                routeMap[service.id] || "services",
                              );
                            }}
                            className="text-xs font-mono text-[#C5A059] font-bold flex items-center gap-0.5 hover:underline"
                          >
                            Read Brief &rarr;
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* Featured architectural Work showcase */}
              <section className="py-20 bg-[#0F0F0F] px-4 md:px-6">
                <div className="max-w-7xl mx-auto">
                  <div className="text-center max-w-xl mx-auto mb-12">
                    <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#C5A059] block mb-2">
                      CASE STUDIES
                    </span>
                    <h3 className="text-2xl md:text-4xl font-sans font-black uppercase text-white tracking-tight">
                      Landmarks of Modern Construction
                    </h3>
                    <p className="text-xs text-[#999999] mt-2">
                      Exploring high-trust civil executions and architectural
                      residential villas across Western Kenya and Nairobi.
                    </p>
                  </div>

                  {/* Portfolio Tab Selectors */}
                  <div className="flex flex-wrap justify-center gap-2 mb-10">
                    {(
                      [
                        "all",
                        "commercial",
                        "residential",
                        "interiors",
                        "renovation",
                      ] as const
                    ).map((tab) => (
                      <button
                        key={tab}
                        onClick={() => setSelectedCategory(tab)}
                        className={`px-4 py-2 rounded-none text-xs font-mono uppercase tracking-wider transition-colors ${
                          selectedCategory === tab
                            ? "bg-[#C5A059] text-neutral-950 font-bold"
                            : "bg-[#222222] text-[#999999] hover:text-white"
                        }`}
                      >
                        {tab === "all" ? "All Masterpieces" : tab}
                      </button>
                    ))}
                  </div>

                  {/* Standard Grid mapping */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {filteredProjects.slice(0, 2).map((project) => (
                      <div
                        key={project.id}
                        className="bg-[#0A0A0A] border border-white/10 rounded-none overflow-hidden flex flex-col md:flex-row shadow-2xl hover:border-white/10 transition-colors"
                      >
                        <div className="w-full md:w-1/2 h-[260px] md:h-auto overflow-hidden relative">
                          <img
                            src={project.imageUrl}
                            alt={project.name}
                            referrerPolicy="no-referrer"
                            className="w-full h-full object-cover"
                          />
                          <span className="absolute top-3 left-3 bg-[#0A0A0A]/90 backdrop-blur text-xs font-mono uppercase text-[#C5A059] font-bold px-3 py-1 rounded-none border border-[#C5A059]/30 shadow-md">
                            {project.category}
                          </span>
                        </div>
                        <div className="p-6 md:w-1/2 flex flex-col justify-between">
                          <div>
                            <div className="text-[10px] font-mono text-[#C5A059] uppercase tracking-widest">
                              {project.location}
                            </div>
                            <h4 className="text-md font-sans font-black text-white uppercase mt-1">
                              {project.name}
                            </h4>
                            <p className="text-[11px] text-[#888888] line-clamp-3 mt-3 leading-relaxed">
                              <strong>Scope:</strong> {project.scope}
                            </p>
                            <p className="text-[11px] text-[#888888] line-clamp-3 mt-2 leading-relaxed">
                              <strong>Challenge:</strong> {project.challenge}
                            </p>
                          </div>

                          <div className="border-t border-white/10 pt-4 mt-4 flex justify-between items-center">
                            <div>
                              <span className="text-[9px] font-mono text-[#666666] uppercase block">
                                Value Delivery
                              </span>
                              <span className="text-xs font-bold text-white font-mono">
                                {project.value}
                              </span>
                            </div>
                            <button
                              id={`case-card-read-${project.id}`}
                              onClick={() => handlePageChange("portfolio")}
                              className="text-xs font-mono font-bold text-[#C5A059] hover:underline flex items-center gap-0.5"
                            >
                              Details &rarr;
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="text-center mt-10">
                    <button
                      onClick={() => handlePageChange("portfolio")}
                      className="bg-neutral-900 border border-neutral-800 hover:border-neutral-700 text-[#cccccc] hover:text-white px-6 py-2.5 rounded-none text-xs uppercase font-mono tracking-wider font-bold transition-all cursor-pointer"
                    >
                      Browse Entire Portfolio Case Studies
                    </button>
                  </div>
                </div>
              </section>

              {/* Architectural Step-by-Step Delivery Process */}
              <section className="py-20 bg-[#0A0A0A] px-4 md:px-6 relative overflow-hidden">
                <div className="max-w-7xl mx-auto relative z-10">
                  <div className="text-center max-w-xl mx-auto mb-16">
                    <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#C5A059] block mb-2">
                      CONSTRUCTION WORKFLOW
                    </span>
                    <h3 className="text-2xl md:text-3xl font-sans font-black uppercase text-white tracking-tight">
                      Our Flawless Delivery Process
                    </h3>
                    <p className="text-xs text-[#999999] mt-2">
                      How we eliminate construction hazards, compliance errors,
                      and material inflation to secure your project execution.
                    </p>
                  </div>

                  {/* Flow blocks */}
                  <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
                    {[
                      {
                        step: "01",
                        title: "Consult Desk",
                        desc: "Analyzing land parameters, soil specifics, legal county alignments, and draft blueprints.",
                      },
                      {
                        step: "02",
                        title: "Budget Locking",
                        desc: "Drafting fully itemized Bills of Quantities and locking material pricing against inflation.",
                      },
                      {
                        step: "03",
                        title: "Permits & Approvals",
                        desc: "Managing NEMA submittals, spatial county planning certificate compliance, and NCA filings.",
                      },
                      {
                        step: "04",
                        title: "Precision Build",
                        desc: "Executing deep foundational civil works and structural concrete frames with active safety monitors.",
                      },
                      {
                        step: "05",
                        title: "Turnkey Delivery",
                        desc: "Bespoke high-end wood joinery, architectural lighting, structural handover keys certificate.",
                      },
                    ].map((stepObj) => (
                      <div
                        key={stepObj.step}
                        className="bg-[#151515] p-5 rounded-none border border-white/10 relative group transition-all duration-300 hover:border-[#C5A059]/30 shadow-md"
                      >
                        <span className="text-xs font-mono font-bold bg-amber-500/10 border border-amber-500/20 text-[#C5A059] px-2 py-0.5 rounded-full mb-4 inline-block">
                          {stepObj.step}
                        </span>
                        <h4 className="text-sm font-sans font-bold text-white uppercase tracking-wider mb-2 mt-1">
                          {stepObj.title}
                        </h4>
                        <p className="text-[11px] text-[#999999] leading-relaxed">
                          {stepObj.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* Estimator Integration Section (Anchor for high-end conversion tool) */}
              <section className="py-20 bg-[#0F0F0F] px-4 md:px-6 border-t border-white/10 relative">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,#C5A059/2,transparent_60%)]"></div>
                <div className="max-w-7xl mx-auto relative z-10">
                  <div className="text-center max-w-xl mx-auto mb-10">
                    <span className="text-[11px] font-[#C5A059] font-mono tracking-[0.2em] text-[#C5A059] block mb-2">
                      INSTANT ANALYTICAL ESTIMATION TOOL
                    </span>
                    <h3 className="text-2xl md:text-3xl font-sans font-black uppercase text-white tracking-tight">
                      Lock In Your Structural Budget Index
                    </h3>
                    <p className="text-xs text-[#999999] mt-2">
                      Access live, itemized materials modeling based on the
                      latest National Construction Authority of Kenya database
                      indices.
                    </p>
                  </div>

                  {/* Calculator Embed */}
                  <InteractiveEstimator />
                </div>
              </section>

              {/* Client testimonials Section */}
              <section className="py-20 bg-[#0A0A0A] px-4 md:px-6">
                <div className="max-w-7xl mx-auto">
                  <div className="text-center max-w-xl mx-auto mb-16">
                    <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#C5A059] block mb-2">
                      PARTNER TESTIMONY
                    </span>
                    <h3 className="text-2xl md:text-3xl font-sans font-black uppercase text-white tracking-tight">
                      Client Endorsement & High Trust Notes
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {testimonials.map((test) => (
                      <div
                        key={test.id}
                        className="bg-[#151515] p-6 rounded-none border border-white/10 relative shadow-lg flex flex-col justify-between"
                      >
                        <div>
                          <div className="flex gap-1 text-[#C5A059] mb-4">
                            {[...Array(test.rating)].map((_, i) => (
                              <Star key={i} className="w-4 h-4 fill-current" />
                            ))}
                          </div>

                          <p className="text-[12px] italic text-[#cccccc] leading-relaxed relative z-10">
                            &ldquo;{test.content}&rdquo;
                          </p>
                        </div>

                        <div className="border-t border-white/10 pt-4 mt-6 flex justify-between items-center font-sans">
                          <div>
                            <span className="font-bold text-white text-xs block">
                              {test.name}
                            </span>
                            <span className="text-[10px] text-[#888888] font-mono block">
                              {test.role} &bull; {test.company}
                            </span>
                          </div>
                          <span className="text-[9px] font-mono bg-neutral-800 text-[#C5A059] h-fit px-2 py-0.5 rounded-none">
                            {test.projectType}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* Final High Conversion Call to Action Section */}
              <section className="py-24 bg-gradient-to-r from-[#1c1c1c] to-[#121212] px-4 md:px-6 border-t border-white/10 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#C5A059/3,transparent_75%)]"></div>
                <div className="max-w-4xl mx-auto relative z-10">
                  <span className="p-3 bg-neutral-800/80 border border-[#C5A059]/30 rounded-none text-[#C5A059] inline-block mb-4">
                    <Building2 className="w-6 h-6" />
                  </span>

                  <h3 className="text-3xl md:text-5xl font-sans font-black uppercase tracking-tight text-white mb-4">
                    Ready to Build with Uncompromising Precision?
                  </h3>

                  <p className="text-sm md:text-md text-[#999999] leading-relaxed max-w-2xl mx-auto mb-8 font-sans">
                    Don&apos;t risk the lifespan of your commercial or
                    residential asset with substandard materials or
                    untrustworthy contractors. Contact Ahzuriah master
                    constructors now to book a physical site survey or blueprint
                    evaluation.
                  </p>

                  <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                    <button
                      onClick={() => handlePageChange("contact")}
                      className="w-full sm:w-auto bg-gradient-to-r from-[#C5A059] to-[#E3C293] hover:from-[#B1936B] hover:to-[#C5A059] text-[#111111] font-sans font-bold uppercase tracking-wider text-xs px-8 py-4 rounded-none shadow-2xl transition-all duration-300 hover:-translate-y-0.5 cursor-pointer"
                    >
                      Request Detailed Brief Booking
                    </button>
                    <a
                      href="https://wa.me/254712345678"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto bg-[#1a1a1a] text-[#C5A059] border border-[#C5A059]/30 hover:bg-neutral-800 font-sans font-bold uppercase tracking-wider text-xs px-8 py-4 rounded-none shadow-lg flex items-center justify-center gap-2"
                    >
                      Connect on WhatsApp
                    </a>
                  </div>

                  <p className="text-[10px] text-[#666666] font-mono mt-6 uppercase tracking-wider">
                    Office Hotline: +254 712 345 678 &nbsp;&bull;&nbsp;
                    Estimated response: &lt;2 Hours
                  </p>
                </div>
              </section>
            </motion.div>
          )}

          {/* ABOUT US PAGE VIEW */}
          {activePage === "about" && (
            <motion.div
              key="about"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="py-16 px-4 md:px-6 max-w-7xl mx-auto flex flex-col gap-16"
            >
              {/* Internal Hero */}
              <div className="border-b border-white/10 pb-10">
                <span className="text-[11px] font-mono text-[#C5A059] uppercase tracking-[0.25em] block mb-2">
                  OUR HERITAGE & PROFILE
                </span>
                <h1 className="text-3xl md:text-5xl font-sans font-black text-white uppercase tracking-tight">
                  Who we are: Ahzuriah Construction
                </h1>
                <p className="text-xs text-[#999999] mt-2 max-w-xl">
                  A high-end, licensed general constructor executing nationwide
                  commercial developments and bespoke residential landmarks in
                  Kenya.
                </p>
              </div>

              {/* History and Mission Core layout */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                <div className="lg:col-span-7 flex flex-col gap-6 text-[#cccccc] text-xs leading-relaxed">
                  <h3 className="text-xl font-sans font-bold text-white uppercase">
                    Our Corporate Philosophy & Structural Identity
                  </h3>
                  <p>
                    Established over a decade ago with headquarters in Kisumu
                    town, <strong>Ahzuriah Construction Company Limited</strong>{" "}
                    has emerged as an authority in design-build integration,
                    complex project management, and high-performance commercial
                    contracting. Our footprint covers Kisumu and Western Kenya,
                    extending to prestigious developments in Nairobi.
                  </p>
                  <p>
                    We recognize that construction is a critical,
                    high-importance financial venture. Our engineering desk
                    approaches each layout with maximum precision, auditing
                    structural stress lines, soil bearing qualities, and legal
                    permit matrices beforehand to guarantee safety and
                    compliance.
                  </p>

                  {/* Mission / Vision Cards */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
                    <div className="p-4 bg-[#151515] border border-white/10 rounded-none">
                      <span className="text-[10px] font-mono text-[#C5A059] uppercase tracking-widest block mb-1">
                        Our Mission
                      </span>
                      <p className="text-[11px] text-[#999999]">
                        To erect high-performance, safer structural realities
                        that elevate Kenyan businesses and secure elite
                        residential comfort with total cost integrity.
                      </p>
                    </div>
                    <div className="p-4 bg-[#151515] border border-white/10 rounded-none">
                      <span className="text-[10px] font-mono text-[#C5A059] uppercase tracking-widest block mb-1">
                        Our Vision
                      </span>
                      <p className="text-[11px] text-[#999999]">
                        To be East Africa&apos;s leading high-status commercial
                        contractor, renowned for absolute blueprint fidelity and
                        zero compromise material strength.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-5 border border-white/10 rounded-none overflow-hidden shadow-2xl bg-neutral-900">
                  <img
                    src={luxuryInterior}
                    alt="Ahzuriah executive corporate design"
                    referrerPolicy="no-referrer"
                    className="w-full h-[300px] object-cover"
                  />
                  <div className="p-4 bg-[#151515] text-[10px] font-mono text-[#999999] flex justify-between items-center">
                    <span>NCA Grade Registered Builder</span>
                    <span className="text-[#C5A059] font-bold">
                      Western Kenya & Nairobi
                    </span>
                  </div>
                </div>
              </div>

              {/* Core Corporate Values section */}
              <div className="flex flex-col gap-8 py-8 border-t border-white/10">
                <div className="text-center max-w-xl mx-auto">
                  <span className="text-[#C5A059] text-xs font-mono tracking-widest uppercase block mb-1">
                    CORE FOUNDATIONS
                  </span>
                  <h3 className="text-xl md:text-2xl font-sans font-bold uppercase text-white">
                    The Values that Guide Every Foundation We Pour
                  </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  {coreValues.map((val, i) => (
                    <div
                      key={i}
                      className="bg-[#151515] p-5 rounded-none border border-white/10"
                    >
                      <div className="w-8 h-8 rounded-none bg-[#C5A059]/10 text-[#C5A059] flex items-center justify-center font-bold font-mono text-xs mb-3">
                        {i + 1}
                      </div>
                      <h4 className="text-sm font-sans font-bold text-white uppercase mb-1.5 tracking-wide">
                        {val.title}
                      </h4>
                      <p className="text-[11px] text-[#999999] leading-relaxed">
                        {val.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Corporate Leadership Team Section */}
              <div className="flex flex-col gap-8 py-8 border-t border-white/10">
                <div className="text-center max-w-xl mx-auto">
                  <span className="text-[#C5A059] text-xs font-mono tracking-widest uppercase block mb-1 font-bold">
                    EXECUTIVE OFFICERS
                  </span>
                  <h3 className="text-xl md:text-2xl font-sans font-bold uppercase text-white">
                    Our Engineering Leadership
                  </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {teamMembers.map((member, i) => (
                    <div
                      key={i}
                      className="bg-[#151515] p-6 rounded-none border border-white/10 flex flex-col justify-between hover:border-white/10 transition-colors"
                    >
                      <div>
                        <span className="text-xs font-mono text-[#C5A059] uppercase tracking-wide block mb-1">
                          {member.role}
                        </span>
                        <h4 className="text-md font-sans font-black text-white uppercase mb-3">
                          {member.name}
                        </h4>
                        <p className="text-[11px] text-[#999999] leading-relaxed">
                          {member.description}
                        </p>
                      </div>
                      <div className="border-t border-white/10 pt-4 mt-6 flex justify-between items-center text-[10px] font-mono text-[#666666]">
                        <span>Ahzuriah Director</span>
                        <span className="text-emerald-500 font-bold">
                          &bull; Fully Active
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {/* GENERAL SERVICES PAGE VIEW */}
          {activePage === "services" && (
            <motion.div
              key="services"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="py-16 px-4 md:px-6 max-w-7xl mx-auto flex flex-col gap-12"
            >
              {/* Header */}
              <div className="border-b border-white/10 pb-8 mb-4">
                <span className="text-[10px] font-mono text-[#C5A059] uppercase tracking-[0.25em] block mb-2">
                  STRUCTURAL DIVISIONS & DISCIPLINES
                </span>
                <h1 className="text-3xl md:text-5xl font-sans font-black text-white uppercase tracking-tight">
                  Ahzuriah Engineering Capabilities
                </h1>
                <p className="text-xs text-[#999999] mt-2 max-w-xl">
                  Fully licensed general contracting, mechanical plumbing
                  structures, volumetric space management, and deep
                  architectural foundations tailored for modern properties.
                </p>
              </div>

              {/* Bento service cards rendering */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {services.map((serv) => (
                  <div
                    key={serv.id}
                    className="bg-[#151515] border border-white/10 rounded-none overflow-hidden flex flex-col justify-between shadow-xl"
                  >
                    <div className="p-6 md:p-8">
                      <div className="flex flex-col sm:flex-row justify-between items-start gap-4 mb-6">
                        <div>
                          <span className="text-[11px] font-mono text-[#C5A059] uppercase tracking-widest block mb-1">
                            {serv.tagline}
                          </span>
                          <h3 className="text-xl font-sans font-bold text-white uppercase tracking-wider">
                            {serv.title}
                          </h3>
                        </div>
                        <span className="px-2.5 py-1 bg-amber-500/10 border border-amber-500/20 text-[#C5A059] text-[10px] uppercase font-mono tracking-widest rounded-none h-fit">
                          NCA-Registered
                        </span>
                      </div>

                      <p className="text-xs text-[#999999] leading-relaxed mb-6">
                        {serv.longDescription}
                      </p>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
                        <div>
                          <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wide mb-3 border-l text-left pl-2 border-[#C5A059]">
                            Service Capacities:
                          </h4>
                          <ul className="flex flex-col gap-2 text-[11px] text-[#cccccc]">
                            {serv.capabilities.map((cap, x) => (
                              <li key={x} className="flex items-start gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059] shrink-0 mt-1.5"></span>
                                <span>{cap}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wide mb-3 border-l text-left pl-2 border-[#C5A059]">
                            Client Advantages:
                          </h4>
                          <ul className="flex flex-col gap-2 text-[11px] text-[#999999]">
                            {serv.benefits.map((ben, x) => (
                              <li key={x} className="flex items-start gap-2">
                                <span className="text-emerald-500 font-bold shrink-0">
                                  &bull;
                                </span>
                                <span>{ben}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="bg-[#0A0A0A] px-6 py-4 border-t border-white/10 flex flex-wrap justify-between items-center gap-4">
                      <div className="flex gap-2">
                        {serv.subCategories.map((sub, j) => (
                          <span
                            key={j}
                            className="text-[9px] font-mono bg-neutral-900 border border-white/10 px-2 py-0.5 text-neutral-400 rounded-none"
                          >
                            {sub}
                          </span>
                        ))}
                      </div>

                      <button
                        onClick={() => {
                          const routeMap: Record<string, ActivePage> = {
                            commercial: "commercial-construction",
                            residential: "residential-construction",
                            interiors: "interior-design",
                          };
                          handlePageChange(routeMap[serv.id] || "contact");
                        }}
                        className="bg-[#C5A059]/15 hover:bg-[#C5A059] text-[#C5A059] hover:text-[#111111] px-4 py-1.5 border border-[#C5A059]/40 rounded-none text-xs font-bold transition-all"
                      >
                        Deep Dive capabilities &rarr;
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Dynamic Cost Estimator Inline Prompt */}
              <div className="bg-[#151515] p-6 rounded-none border border-[#C5A059]/20 flex flex-col md:flex-row items-center gap-6 justify-between mt-8 max-w-4xl mx-auto shadow-lg">
                <div className="text-left font-sans">
                  <h4 className="text-md font-bold text-white uppercase">
                    Need a quick baseline build budget estimate?
                  </h4>
                  <p className="text-xs text-[#999999]">
                    Instantly calculate pricing metrics for construction files
                    based on Kisumu / West region indices.
                  </p>
                </div>
                <button
                  onClick={() => handlePageChange("contact")}
                  className="bg-[#C5A059] text-neutral-950 px-5 py-2.5 rounded-none text-xs font-bold uppercase tracking-wider scale-95 hover:scale-100 transition-transform shrink-0"
                >
                  Configure Build Slider
                </button>
              </div>
            </motion.div>
          )}

          {/* INDIVIDUAL SERVICES: COMMERCIAL BUILDERS */}
          {activePage === "commercial-construction" && (
            <motion.div
              key="com"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="py-16 px-4 md:px-6 max-w-7xl mx-auto flex flex-col gap-12"
            >
              {/* Back to general services link */}
              <button
                onClick={() => handlePageChange("services")}
                className="text-xs font-mono text-[#999999] hover:text-[#C5A059] text-left flex items-center gap-1 cursor-pointer"
              >
                &lsaquo; Back to General Capabilities Directory
              </button>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 border-b border-white/10 pb-10">
                <div className="lg:col-span-7 flex flex-col gap-6">
                  <span className="text-[10px] font-mono text-[#C5A059] tracking-widest uppercase block">
                    DIVISION 01 // GENERAL CONTRACTING
                  </span>
                  <h1 className="text-3xl md:text-5xl font-sans font-black text-white uppercase tracking-tight leading-tight">
                    Commercial Structural Construction Kenya
                  </h1>
                  <p className="text-xs text-[#999999] leading-relaxed">
                    We deliver high-end commercial property assets including
                    high-rise office plazas, retail structures, logistics
                    warehouses, and institution complexes. Operating heavily
                    under NCA-1 general contractor licensing guidelines, our
                    engineering squad manages structural layout integrity from
                    the initial soil tests through concrete core shell execution
                    and unitized frame glazing.
                  </p>

                  <div className="bg-[#151515] p-5 rounded-none border border-white/10">
                    <h4 className="text-xs font-mono text-white font-bold uppercase mb-2">
                      Corporate Sourcing Guarantees:
                    </h4>
                    <p className="text-[11px] text-[#999999] leading-relaxed">
                      We secure raw building rebar steel directly from localized
                      certified steel manufacturers and manage shifting
                      logistics models over night lines to prevent site
                      congestion. All structural columns are subjected to strict
                      stress curing parameters before loading slabs.
                    </p>
                  </div>
                </div>

                {/* Service image mockup */}
                <div className="lg:col-span-5 rounded-none overflow-hidden border border-white/10 bg-neutral-900 shadow-2xl">
                  <img
                    src="/src/assets/images/hero_banner_luxury_construction_1779616425828.png"
                    alt="Commercial Contracting by Ahzuriah"
                    referrerPolicy="no-referrer"
                    className="w-full h-[320px] object-cover"
                  />
                  <div className="p-4 bg-[#151515] flex justify-between items-center text-[10px] font-mono text-[#666666]">
                    <span>Glazed Unitized Framing Systems</span>
                    <span className="text-emerald-500 font-semibold">
                      &bull; Active Certification
                    </span>
                  </div>
                </div>
              </div>

              {/* Scope capability specifics */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-4">
                <div className="p-5 bg-[#151515] border border-white/10 rounded-none">
                  <h4 className="text-xs font-mono font-bold uppercase text-[#C5A059] mb-2">
                    Grade-A Plaza Foundations
                  </h4>
                  <p className="text-[11px] text-[#999999] leading-relaxed">
                    Continuous flight auger piling, structural footing placement
                    on unstable lakeside cotton clays, deep water-logged site
                    damp-proofing matrices.
                  </p>
                </div>
                <div className="p-5 bg-[#151515] border border-white/10 rounded-none">
                  <h4 className="text-xs font-mono font-bold uppercase text-[#C5A059] mb-2">
                    Post-Tensioned Concrete
                  </h4>
                  <p className="text-[11px] text-[#999999] leading-relaxed">
                    Executing post-tensioned wide-span floor slabs that
                    eliminate bulky columns, maximizing rentable floor workspace
                    layouts by up to 25%.
                  </p>
                </div>
                <div className="p-5 bg-[#151515] border border-white/10 rounded-none">
                  <h4 className="text-xs font-mono font-bold uppercase text-[#C5A059] mb-2">
                    Unitized Curtain Walling
                  </h4>
                  <p className="text-[11px] text-[#999999] leading-relaxed">
                    High-status triple-pane thermal break glass structures with
                    automated venting systems that curb operational HVAC
                    consumption metrics.
                  </p>
                </div>
              </div>

              {/* Commercial process steps */}
              <div className="bg-[#151515] p-6 md:p-8 rounded-none border border-white/10">
                <h3 className="text-md font-sans font-bold text-white uppercase tracking-wider mb-6 text-center">
                  Our Commercial Construction Process Grid
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-4 gap-6">
                  {[
                    {
                      title: "Project Mobilize",
                      desc: "Detailing site safety protocols, setting excavation barriers, static load piling on volcanic clay soils.",
                    },
                    {
                      title: "Core Erection",
                      desc: "Constructing column systems, pouring post-tension concrete framing, assembling structural cores.",
                    },
                    {
                      title: "Envelope Integration",
                      desc: "Assembling unitized curtain glass spans, waterproofing, fitting HVAC conduits.",
                    },
                    {
                      title: "Commissioning",
                      desc: "Certifying building fire vectors, testing dynamic MEP systems, county handover approvals.",
                    },
                  ].map((proc, index) => (
                    <div
                      key={index}
                      className="relative border-l border-[#C5A059]/30 pl-4"
                    >
                      <span className="text-[10px] font-mono text-[#C5A885] font-black block mb-1">
                        0{index + 1}
                      </span>
                      <h4 className="text-xs font-sans font-bold text-white uppercase mb-1">
                        {proc.title}
                      </h4>
                      <p className="text-[11px] text-[#888888] leading-tight">
                        {proc.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* FAQ */}
              <div className="max-w-3xl mx-auto flex flex-col gap-4 mt-4">
                <h3 className="text-sm font-mono uppercase text-center text-[#999999] mb-2">
                  Commercial Construction Desk FAQs
                </h3>
                <div className="bg-[#151515] p-5 rounded-none border border-white/10">
                  <h4 className="text-xs font-bold text-white uppercase mb-2">
                    What is the typical timeframe for a 5-storey plaza shell?
                  </h4>
                  <p className="text-[11px] text-[#999999] leading-relaxed">
                    Using standard precast integration and our volumetric
                    concrete batch networks, we construct the reinforced
                    concrete core and frame structure within 9 months, and
                    complete full facade envelopes and MEP commissioning within
                    an additional 6 months.
                  </p>
                </div>
              </div>
            </motion.div>
          )}

          {/* INDIVIDUAL SERVICES: RESIDENTIAL VILLAS */}
          {activePage === "residential-construction" && (
            <motion.div
              key="res"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="py-16 px-4 md:px-6 max-w-7xl mx-auto flex flex-col gap-12"
            >
              <button
                onClick={() => handlePageChange("services")}
                className="text-xs font-mono text-[#999999] hover:text-[#C5A059] text-left flex items-center gap-1 cursor-pointer"
              >
                &lsaquo; Back to General Capabilities Directory
              </button>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 border-b border-white/10 pb-10">
                <div className="lg:col-span-7 flex flex-col gap-6">
                  <span className="text-[10px] font-mono text-[#C5A059] tracking-widest uppercase block">
                    DIVISION 02 // BESPOKE RESIDENCES
                  </span>
                  <h1 className="text-3xl md:text-5xl font-sans font-black text-white uppercase tracking-tight leading-tight">
                    Custom Luxury Residential Villas Kenya
                  </h1>
                  <p className="text-xs text-[#999999] leading-relaxed">
                    We construct modern luxury residential architectural
                    landmarks. Whether building on the steep volcanic gradients
                    of Riat Hills or water-clinging plots along Lake Victoria,
                    we manage soil stabilization, pile anchoring, and earthquake
                    loading layouts with extreme precision. We couple
                    world-class civil masonry with luxury timber joinery,
                    floor-to-ceiling panoramic glass balconies, and ecological
                    greywater filtration pools.
                  </p>

                  <div className="bg-[#151515] p-5 rounded-none border border-white/10">
                    <h4 className="text-xs font-mono text-white font-bold uppercase mb-2">
                      Slope Security details:
                    </h4>
                    <p className="text-[11px] text-[#999999] leading-relaxed">
                      Lakeside Black Cotton soil contracts and expands violently
                      by season. To secure our residences from foundation
                      fracture lines, we execute continuous deep concrete
                      footing structures and tie-beam grids directly embedded
                      into stable volcanic basalt bedrock.
                    </p>
                  </div>
                </div>

                <div className="lg:col-span-5 rounded-none overflow-hidden border border-white/10 bg-neutral-900 shadow-2xl">
                  <img
                    src={residentialVilla}
                    alt="Luxury Custom Lakeside Villa by Ahzuriah"
                    referrerPolicy="no-referrer"
                    className="w-full h-[320px] object-cover"
                  />
                  <div className="p-4 bg-[#151515] flex justify-between items-center text-[10px] font-mono text-[#666666]">
                    <span>Cantilever Balcony Deck Systems</span>
                    <span className="text-emerald-500 font-semibold">
                      &bull; NCA Registered Villa
                    </span>
                  </div>
                </div>
              </div>

              {/* Key specialties */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="p-5 bg-[#151515] border border-white/10 rounded-none">
                  <h4 className="text-xs font-mono font-bold uppercase text-[#C5A059] mb-2">
                    Bespoke Timber Joinery
                  </h4>
                  <p className="text-[11px] text-[#999999] leading-relaxed">
                    Solid core cedar wood partitions, security portals,
                    customized integrated walk-in wardrobes from our high-end
                    carpentry facility.
                  </p>
                </div>
                <div className="p-5 bg-[#151515] border border-white/10 rounded-none">
                  <h4 className="text-xs font-mono font-bold uppercase text-[#C5A059] mb-2">
                    Volumetric concrete
                  </h4>
                  <p className="text-[11px] text-[#999999] leading-relaxed">
                    High-fidelity raw concrete walls, structural cantilevers,
                    and dynamic stairwells modeled around European minimalist
                    frameworks.
                  </p>
                </div>
                <div className="p-5 bg-[#151515] border border-white/10 rounded-none">
                  <h4 className="text-xs font-mono font-bold uppercase text-[#C5A059] mb-2">
                    Rainwater Harvesting
                  </h4>
                  <p className="text-[11px] text-[#999999] leading-relaxed">
                    Integrating complete structural storm collectors, greywater
                    purification beds and reverse-osmosis filtration setups for
                    off-grid luxury utility.
                  </p>
                </div>
              </div>

              {/* Accordion FAQ for residential build */}
              <div className="max-w-3xl mx-auto flex flex-col gap-4">
                <h3 className="text-sm font-mono uppercase text-center text-[#999999] mb-2">
                  Residential Building Inquiries
                </h3>
                <div className="bg-[#151515] p-5 rounded-none border border-white/10">
                  <h4 className="text-xs font-bold text-white uppercase mb-2">
                    Can you handle county approvals and NEMA certifications?
                  </h4>
                  <p className="text-[11px] text-[#999999] leading-relaxed">
                    Yes. Our project management office compiles all structural
                    drawings, localized environmental impact statements (EIA),
                    and registers the project with NEMA and the respective
                    county development board to manage permits fluidly.
                  </p>
                </div>
              </div>
            </motion.div>
          )}

          {/* INDIVIDUAL SERVICES: INTERIOR DESIGN */}
          {activePage === "interior-design" && (
            <motion.div
              key="int"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="py-16 px-4 md:px-6 max-w-7xl mx-auto flex flex-col gap-12"
            >
              <button
                onClick={() => handlePageChange("services")}
                className="text-xs font-mono text-[#999999] hover:text-[#C5A059] text-left flex items-center gap-1 cursor-pointer"
              >
                &lsaquo; Back to General Capabilities Directory
              </button>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 border-b border-white/10 pb-10">
                <div className="lg:col-span-7 flex flex-col gap-6">
                  <span className="text-[10px] font-mono text-[#C5A059] tracking-widest uppercase block">
                    DIVISION 03 // BESPOKE INTERIORS
                  </span>
                  <h1 className="text-3xl md:text-5xl font-sans font-black text-white uppercase tracking-tight leading-tight">
                    Bespoke Interior Design & Fitout Kenya
                  </h1>
                  <p className="text-xs text-[#999999] leading-relaxed">
                    We construct spectacular corporate and residential
                    interiors. Operating our own local milling and workshop
                    allows us to detail custom wall panel sections, executive
                    desks, and acoustic grids to precise metric tolerances. From
                    luxury residential lobbies to high-status regional maritime
                    offices, our craftsmanship utilizes imported marbles, rich
                    timber trims, and conceals AV cabling networks cleanly
                    behind bespoke architectural moldings.
                  </p>

                  <div className="bg-[#151515] p-5 rounded-none border border-white/10">
                    <h4 className="text-xs font-mono text-white font-bold uppercase mb-2">
                      Acoustics & Lighting:
                    </h4>
                    <p className="text-[11px] text-[#999999] leading-relaxed">
                      Corporate spaces must mitigate floor resonance. We install
                      fiberglass soundboards wrapped in premium canvas paneling
                      and pair them with dynamic linear light channels with
                      preloaded room templates for different presentation modes.
                    </p>
                  </div>
                </div>

                <div className="lg:col-span-5 rounded-none overflow-hidden border border-white/10 bg-neutral-900 shadow-2xl">
                  <img
                    src="/src/assets/images/luxury_interior_design_1779616481038.png"
                    alt="Bespoke luxury corporate Interior Design by Ahzuriah"
                    referrerPolicy="no-referrer"
                    className="w-full h-[320px] object-cover"
                  />
                  <div className="p-4 bg-[#151515] flex justify-between items-center text-[10px] font-mono text-[#666666]">
                    <span>CNC-Milled Wall Paneling</span>
                    <span className="text-emerald-500 font-semibold">
                      &bull; Active Design
                    </span>
                  </div>
                </div>
              </div>

              {/* Specialties */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="p-5 bg-[#151515] border border-white/10 rounded-none">
                  <h4 className="text-xs font-mono font-bold uppercase text-[#C5A059] mb-2">
                    Custom Millwork & Cabinetry
                  </h4>
                  <p className="text-[11px] text-[#999999] leading-relaxed font-sans">
                    Precision jointing, integrated soft-close channels, rich
                    walnut and cherry timber finishes assembled in our
                    specialized workshop.
                  </p>
                </div>
                <div className="p-5 bg-[#151515] border border-white/10 rounded-none">
                  <h4 className="text-xs font-mono font-bold uppercase text-[#C5A059] mb-2">
                    Acoustic Engineering
                  </h4>
                  <p className="text-[11px] text-[#999999] leading-relaxed font-sans">
                    Sub-40dB sound isolation inside meeting rooms using custom
                    density rockwool fills and slotted cedar panels.
                  </p>
                </div>
                <div className="p-5 bg-[#151515] border border-white/10 rounded-none">
                  <h4 className="text-xs font-mono font-bold uppercase text-[#C5A059] mb-2">
                    Dynamic Light Systems
                  </h4>
                  <p className="text-[11px] text-[#999999] leading-relaxed font-sans">
                    Fully integrated low-voltage LED linear configurations with
                    wall-mounted tactile scenes, adjusting color index
                    seamlessly.
                  </p>
                </div>
              </div>
            </motion.div>
          )}

          {/* PORTFOLIO PAGE VIEW */}
          {activePage === "portfolio" && (
            <motion.div
              key="portfolio"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="py-16 px-4 md:px-6 max-w-7xl mx-auto flex flex-col gap-12"
            >
              <div className="border-b border-white/10 pb-8">
                <span className="text-[10px] font-mono text-[#C5A059] uppercase tracking-[0.25em] block mb-2">
                  CASE STUDIES & DELIVERED STRUCTURES
                </span>
                <h1 className="text-3xl md:text-5xl font-sans font-black text-white uppercase tracking-tight">
                  Ahzuriah Portfolio Showcase
                </h1>
                <p className="text-xs text-[#999999] mt-2 max-w-xl">
                  Real engineering solutions targeting complex geographical
                  zones and logistical limits in Kenya.
                </p>
              </div>

              {/* Dynamic Filter bar inside page */}
              <div className="flex flex-wrap gap-2 items-center">
                <span className="text-xs font-mono text-[#666666] uppercase mr-3">
                  Filter projects:
                </span>
                {(
                  [
                    "all",
                    "commercial",
                    "residential",
                    "interiors",
                    "renovation",
                  ] as const
                ).map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-4 py-2 border text-xs font-mono uppercase tracking-wider rounded-none transition-colors ${
                      selectedCategory === cat
                        ? "border-[#C5A059] bg-[#C5A059]/15 text-[#C5A059]"
                        : "border-white/10 bg-[#1a1a1a] text-[#999999] hover:text-white"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Full Detailed Grid of Case Studies */}
              <div className="flex flex-col gap-16">
                {filteredProjects.map((proj) => (
                  <div
                    key={proj.id}
                    className="bg-[#151515] border border-white/10 rounded-none overflow-hidden flex flex-col lg:flex-row shadow-2xl"
                  >
                    {/* Visual Segment */}
                    <div className="lg:w-5/12 h-[300px] lg:h-auto overflow-hidden relative">
                      <img
                        src={proj.imageUrl}
                        alt={proj.name}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-4 left-4 bg-[#111] px-3 py-1 border border-[#C5A059]/30 text-xs font-mono uppercase text-[#C5A059] rounded-none">
                        {proj.category}
                      </div>
                    </div>

                    {/* Copywriting Segment */}
                    <div className="p-6 md:p-8 lg:w-7/12 flex flex-col justify-between">
                      <div>
                        {/* Meta lines */}
                        <div className="flex flex-wrap items-center gap-x-6 gap-y-1.5 text-xs font-mono text-[#999999] mb-4 border-b border-white/10 pb-4">
                          <span className="text-white font-bold uppercase">
                            {proj.location}
                          </span>
                          <span>Timeline: {proj.timeline}</span>
                          <span>
                            Value:{" "}
                            <strong className="text-[#C5A059]">
                              {proj.value}
                            </strong>
                          </span>
                        </div>

                        <h3 className="text-xl md:text-2xl font-sans font-black text-white uppercase tracking-wider mb-4">
                          {proj.name}
                        </h3>

                        {/* Triad challenges/solutions/outcomes */}
                        <div className="flex flex-col gap-4 text-xs font-sans text-[#cccccc] leading-relaxed">
                          <p>
                            <span className="text-[#C5A059] font-mono uppercase tracking-wide block font-extrabold text-[10px] mb-1">
                              The Architectural & Civil Challenge:
                            </span>
                            {proj.challenge}
                          </p>

                          <p>
                            <span className="text-[#C5A059] font-mono uppercase tracking-wide block font-extrabold text-[10px] mb-1">
                              Our Custom Engineered Solution:
                            </span>
                            {proj.solution}
                          </p>

                          <p>
                            <span className="text-emerald-400 font-mono uppercase tracking-wide block font-extrabold text-[10px] mb-1">
                              Structural & Operational Outcome:
                            </span>
                            {proj.outcome}
                          </p>
                        </div>
                      </div>

                      {/* Bullet Features bottom line */}
                      <div className="mt-6 pt-6 border-t border-white/10 flex flex-wrap gap-2">
                        {proj.keyFeatures.map((feat, b) => (
                          <span
                            key={b}
                            className="text-[10px] font-mono bg-neutral-900 border border-white/10 px-2.5 py-1 text-neutral-400 rounded-sm"
                          >
                            &check; {feat}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* PROCESS PAGE VIEW */}
          {activePage === "process" && (
            <motion.div
              key="process"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="py-16 px-4 md:px-6 max-w-7xl mx-auto flex flex-col gap-16"
            >
              <div className="border-b border-white/10 pb-8">
                <span className="text-[10px] font-mono text-[#C5A059] uppercase tracking-[0.25em] block mb-2">
                  HOW WE SECURE PROJECT EXECUTION
                </span>
                <h1 className="text-3xl md:text-5xl font-sans font-black text-white uppercase tracking-tight">
                  Ahzuriah Turnkey Operational Flow
                </h1>
                <p className="text-xs text-[#999999] mt-2 max-w-xl">
                  A comprehensive engineering-grade workflow that eliminates
                  budget surprises, structural settling errors, and county
                  compliance blocks.
                </p>
              </div>

              {/* Sequential Process Map cards */}
              <div className="flex flex-col gap-10">
                {[
                  {
                    phase: "PHASE 01",
                    title: "PRE-CONSTRUCTION & SURVEY DIRECTORY",
                    sub: "Soil Stability Evaluation & Spatial County Planning",
                    desc: "We map site contours with laser equipment and take cylindrical core soil profiles down to 10 meters before putting pencil to paper. If building along water margins or volcanic slants, we determine soil shear ratings and compile county planning submittals beforehand.",
                    items: [
                      "Volcanic/cotton clay strength checks",
                      "Boundary title and surveyor checks",
                      "Resort, corporate, or villa space re-planning blueprinting",
                    ],
                  },
                  {
                    phase: "PHASE 02",
                    title: "COST BUDGET SECURITY & HEDGING",
                    sub: "Curbing Material Surcharges & Bill of Quantities",
                    desc: "We protect project budgets from volatile raw market fluctuations. We draft complete itemized Bills of Quantities and compile raw sourcing parameters. By partnering with heavy steel mills and regional concrete batch plants, we book raw materials in advance.",
                    items: [
                      "100% Locked itemized Bills of Quantities",
                      "Steel and concrete price booking agreements",
                      "Zero hidden surcharge and zero mid-way inflation policy",
                    ],
                  },
                  {
                    phase: "PHASE 03",
                    title: "REGULATORY COMPLIANCE MANAGEMENT",
                    sub: "NEMA Approvals, Structural Registrals & NCA Permits",
                    desc: "Building without correct NEMA or NCA registrations leads to severe county construction suspension notices. Ahzuriah handles every environmental impact assessment report, logs blueprints under local state registries, and secures compliance certs.",
                    items: [
                      "NEMA Environment Impact Assessments (EIA)",
                      "NCA project registration files",
                      "Respective County physical development permission approvals",
                    ],
                  },
                  {
                    phase: "PHASE 04",
                    title: "CIVIL DEPLOYMENT & CORE ERECTION",
                    sub: "Volumetric Concrete Batches & Masonry Shells",
                    desc: "Our construction crew anchors piling columns, pours post-tensioned wide-span concrete frames, and manages perimeter safety mesh structures. A dedicated structural supervisor reviews concrete cube compression indices before loading slabs.",
                    items: [
                      "Laboratory tested concrete batch mixtures",
                      "Whip-crack dust mitigation protocols and acoustic screens",
                      "NCA safety incident monitors on-site",
                    ],
                  },
                  {
                    phase: "PHASE 05",
                    title: "ARCHITECTURAL FINISHING & HANDOVER",
                    sub: "Turnkey Millwork, Smart Systems & Handover Certs",
                    desc: "We finish the building shell with customized high-end marble backdrops, CNC-jointed timber cabinetry, and linear ambient linear lights. We test plumbing systems for air stress and hand over structural files with NCA occupancy certificates.",
                    items: [
                      "CNC-profiled carpentry and acoustic ceiling fits",
                      "Complete water structural leakage check",
                      "NCA compliant occupancy certificate delivery",
                    ],
                  },
                ].map((step, k) => (
                  <div
                    key={k}
                    className="bg-[#151515] p-6 md:p-8 rounded-none border border-white/10 flex flex-col lg:flex-row gap-8 items-start relative overflow-hidden"
                  >
                    {/* Phase identifier big */}
                    <div className="lg:w-2/12 shrink-0">
                      <span className="text-xs font-mono font-bold bg-[#C5A059]/10 border border-[#C5A059]/20 text-[#C5A059] px-3.5 py-1.5 rounded-full inline-block">
                        {step.phase}
                      </span>
                    </div>

                    <div className="lg:w-10/12 flex flex-col gap-4">
                      <div>
                        <span className="text-[10px] font-mono uppercase text-[#999999] tracking-wider block">
                          {step.sub}
                        </span>
                        <h4 className="text-lg md:text-xl font-sans font-black text-white uppercase mt-1 tracking-wide">
                          {step.title}
                        </h4>
                      </div>

                      <p className="text-xs text-[#999999] leading-relaxed">
                        {step.desc}
                      </p>

                      <div className="flex flex-wrap gap-2.5 mt-2">
                        {step.items.map((it, z) => (
                          <span
                            key={z}
                            className="text-[10px] font-mono bg-neutral-900 border border-white/10 px-3 py-1 rounded-none text-neutral-300"
                          >
                            &bull; {it}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* FAQS PAGE VIEW */}
          {activePage === "faq" && (
            <motion.div
              key="faq"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="py-16 px-4 md:px-6 max-w-4xl mx-auto flex flex-col gap-12"
            >
              <div className="border-b border-white/10 pb-6 text-center">
                <span className="text-[10px] font-mono text-[#C5A059] uppercase tracking-[0.25em] block mb-2">
                  CLIENT RESOURCES & TRANSPARENCY
                </span>
                <h1 className="text-3xl md:text-4xl font-sans font-black text-white uppercase tracking-wide">
                  Frequently Asked Questions
                </h1>
                <p className="text-xs text-[#999999] mt-2">
                  Everything you need to know about pricing, NCA licensing,
                  architectural plans, and payment parameters in Kenya.
                </p>
              </div>

              {/* Accordion List */}
              <div className="flex flex-col gap-3">
                {[
                  {
                    q: "Which NCA licensing classification does Ahzuriah Construction operate under?",
                    a: "Ahzuriah operates under prime National Construction Authority (NCA) of Kenya general contractor certifications. This license authorizes us to structurally execute substantial multi-million shillling corporate commercial builds, civil road/utilities works, and exclusive residential projects across Western region, Kisumu, and Nairobi metropolis.",
                  },
                  {
                    q: "How does Ahzuriah protect clients from steel and cement price inflation?",
                    a: "Raw market price variance is a major cause of unfinished shells in East Africa. When we sign an agreement, we execute bulk material pre-purchasing agreements from heavy manufacturers. We shelter raw materials in our safe storage facilities, locking in prices. Your quotation remains 100% constant without mid-way additions.",
                  },
                  {
                    q: "Do you design the initial architectural blueprints in-house?",
                    a: "Yes, we are a professional design-build constructor. Our in-house desk features lead architects and structural engineers who compile spatial designs, renders, and MEP blueprints synchronously. If you already have your own independent architect, we audit the details for structural efficiency and county-code alignment before providing a project quotation.",
                  },
                  {
                    q: "What foundation methods are executed on Kisumu lakefront margins and Riat Hills slants?",
                    a: "Kisumu represents a highly specialized soil zone. Lakeside properties sit on silty, unstable cotton clays, whereas Riat Hills features volcanic slopes. We execute deep continuous hydraulic static concrete micro-piling down to solid bedrock to secure our lakeside foundations, and reinforce steep volcanic slants with retaining concrete curtain walls.",
                  },
                  {
                    q: "What are the payment parameters and structural milestones?",
                    a: "We operate under a clear milestone schedule. We never demand massive upfront sums. Payments are split by verifiable structural phases, e.g., Foundation completion 20%, Framing core shell 25%, Mechanical plumbing envelopes 25%, Facades and finishing 20%, Client validation & occupancy handover keys 10%.",
                  },
                  {
                    q: "Are your projects insured against liability or delay hazards?",
                    a: "Yes. Every project site operated by Ahzuriah is backed by comprehensive Contractor&apos;s All Risks (CAR) liability insurance coverage and Work Injury Benefits Act (WIBA) compliance panels. This ensures full insulation from accidental damage, weather acts, or site crew liability.",
                  },
                ].map((faqObj, index) => {
                  const isOpen = activeFaq === index;
                  return (
                    <div
                      key={index}
                      className="bg-[#151515] border border-white/10 rounded-none overflow-hidden"
                    >
                      <button
                        onClick={() => setActiveFaq(isOpen ? null : index)}
                        className="w-full text-left p-5 flex justify-between items-center text-xs font-bold uppercase tracking-wide text-white hover:text-[#C5A059] transition-colors cursor-pointer"
                      >
                        <span>{faqObj.q}</span>
                        {isOpen ? (
                          <Minus className="w-4 h-4 text-[#C5A059] shrink-0 ml-4" />
                        ) : (
                          <Plus className="w-4 h-4 text-slate-500 shrink-0 ml-4" />
                        )}
                      </button>

                      {isOpen && (
                        <div className="px-5 pb-5 pt-1 text-xs text-[#999999] leading-relaxed border-t border-white/10 font-sans animate-in fade-in duration-200">
                          {faqObj.a}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </motion.div>
          )}

          {/* CONTACT PAGE VIEW */}
          {activePage === "contact" && (
            <motion.div
              key="contact"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="py-16 px-4 md:px-6 max-w-7xl mx-auto flex flex-col gap-12"
            >
              <div className="border-b border-white/10 pb-8 mb-4">
                <span className="text-[10px] font-mono text-[#C5A059] uppercase tracking-[0.25em] block mb-2">
                  CLIENT SUPPORT & SALES ENQUIRIES
                </span>
                <h1 className="text-3xl md:text-5xl font-sans font-black text-white uppercase tracking-tight">
                  Connect with our Engineering Team
                </h1>
                <p className="text-xs text-[#999999] mt-2 max-w-xl">
                  Contact our active sales desk inside Mega Plaza Kisumu to book
                  a structural blueprint evaluation or a physical land survey.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                {/* Left col contact details list */}
                <div className="lg:col-span-5 flex flex-col gap-8">
                  <div className="bg-[#151515] p-6 rounded-none border border-white/10 flex flex-col gap-6">
                    <h3 className="text-md font-sans font-black text-white uppercase tracking-wider border-b border-white/10 pb-3">
                      Corporate Coordinates
                    </h3>

                    <div className="flex items-start gap-4 text-xs font-sans">
                      <div className="p-2 border border-[#C5A059]/30 rounded-none bg-[#C5A059]/10 text-[#C5A059] mt-0.5">
                        <MapPin className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-white block font-extrabold uppercase text-[10px] tracking-wider mb-1 font-mono">
                          Regional Headquarters Kisumu:
                        </span>
                        <p className="text-[#cccccc] mb-1 font-medium">
                          Mega Plaza Wing B, 4th Floor
                        </p>
                        <p className="text-[#888888]">
                          Oginga Odinga Street, Kisumu Central District, Kenya
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 text-xs font-sans">
                      <div className="p-2 border border-[#C5A059]/30 rounded-none bg-[#C5A059]/10 text-[#C5A059] mt-0.5">
                        <Phone className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-white block font-extrabold uppercase text-[10px] tracking-wider mb-1 font-mono">
                          Direct Communication:
                        </span>
                        <a
                          href="tel:+254712345678"
                          className="text-white block font-semibold hover:underline"
                        >
                          +254 712 345 678 (Corporate Lines)
                        </a>
                        <p className="text-[#888888]">
                          Active sales desk: Mon - Sat: 7:30 AM - 5:30 PM
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 text-xs font-sans">
                      <div className="p-2 border border-[#C5A059]/30 rounded-none bg-[#C5A059]/10 text-[#C5A059] mt-0.5">
                        <Mail className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-white block font-extrabold uppercase text-[10px] tracking-wider mb-1 font-mono">
                          Email Enquiries:
                        </span>
                        <a
                          href="mailto:contact@ahzuriah.co.ke"
                          className="text-[#C5A059] block font-semibold hover:underline"
                        >
                          contact@ahzuriah.co.ke
                        </a>
                        <p className="text-[#888888]">
                          Response target: Within 2 Hours
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Aesthetic Google Map Simulation Frame */}
                  <div className="bg-[#151515] border border-white/10 rounded-none overflow-hidden shadow-xl p-4">
                    <span className="text-[10px] font-mono text-[#888888] uppercase tracking-widest block mb-2">
                      Geographic Location Hub (Kisumu Mega Plaza)
                    </span>
                    <div className="relative h-48 bg-neutral-900 rounded-none border border-white/10 flex items-center justify-center overflow-hidden">
                      {/* Stylized high-tech vector wireframe map backdrop */}
                      <div className="absolute inset-0 opacity-25 flex flex-col justify-around text-[#C5A059] text-[8px] font-mono select-none pointer-events-none p-4">
                        <div className="border-b border-dashed border-neutral-800 pb-2">
                          ====== OGINGA ODINGA AVENUE ======
                        </div>
                        <div className="border-b border-dashed border-neutral-800 pb-2">
                          ========= MEGA PLAZA COMPLEX =========
                        </div>
                        <div className="border-b border-dashed border-neutral-800 pb-2">
                          ====== JOMO KENYATTA HIGHWAY ======
                        </div>
                      </div>
                      <div className="relative text-center z-10 flex flex-col items-center gap-2">
                        <div className="relative flex items-center justify-center w-10 h-10 bg-amber-500/10 border border-[#C5A059] rounded-none shadow">
                          <MapPin className="w-5 h-5 text-[#C5A059] animate-bounce" />
                        </div>
                        <span className="text-xs font-sans font-black text-white uppercase block">
                          AHZURIAH HEADQUARTES
                        </span>
                        <span className="text-[10px] font-mono text-[#999999] block">
                          Mega Plaza, 4th Floor, Kisumu, KE
                        </span>
                        <a
                          href="https://maps.google.com"
                          target="_blank"
                          rel="noreferrer"
                          className="text-[10px] font-mono text-[#C5A059] underline font-bold mt-1 inline-flex items-center gap-1"
                        >
                          Open External Directions{" "}
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right col contact build form */}
                <div className="lg:col-span-7 bg-[#151515] p-6 md:p-8 rounded-none border border-white/10 shadow-2xl">
                  {!contactSubmitted ? (
                    <form
                      onSubmit={handleContactSubmit}
                      className="flex flex-col gap-6"
                    >
                      <div>
                        <h3 className="text-md font-sans font-black text-white uppercase tracking-wider mb-1">
                          Book a Structural Consultation
                        </h3>
                        <p className="text-xs text-[#999999]">
                          Submit your architectural blueprint parameter files
                          for a fast, fixed price quotation assessment.
                        </p>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 text-left">
                        <div className="flex flex-col gap-1.5">
                          <label className="text-[10px] font-mono uppercase tracking-wider text-[#999999]">
                            Your Full Name *
                          </label>
                          <input
                            type="text"
                            required
                            placeholder="e.g. Dr. Arthur Omondi"
                            value={contactForm.name}
                            onChange={(e) =>
                              setContactForm({
                                ...contactForm,
                                name: e.target.value,
                              })
                            }
                            className="bg-[#151515] border border-white/10 text-white rounded-none p-3 text-xs focus:border-[#C5A059] focus:outline-none"
                          />
                        </div>

                        <div className="flex flex-col gap-1.5">
                          <label className="text-[10px] font-mono uppercase tracking-wider text-[#999999]">
                            Email Address *
                          </label>
                          <input
                            type="email"
                            required
                            placeholder="yourname@domain.com"
                            value={contactForm.email}
                            onChange={(e) =>
                              setContactForm({
                                ...contactForm,
                                email: e.target.value,
                              })
                            }
                            className="bg-[#151515] border border-white/10 text-white rounded-none p-3 text-xs focus:border-[#C5A059] focus:outline-none"
                          />
                        </div>

                        <div className="flex flex-col gap-1.5">
                          <label className="text-[10px] font-mono uppercase tracking-wider text-[#999999]">
                            WhatsApp Phone *
                          </label>
                          <input
                            type="tel"
                            required
                            placeholder="e.g. +254 712 345 678"
                            value={contactForm.phone}
                            onChange={(e) =>
                              setContactForm({
                                ...contactForm,
                                phone: e.target.value,
                              })
                            }
                            className="bg-[#151515] border border-white/10 text-white rounded-none p-3 text-xs focus:border-[#C5A059] focus:outline-none"
                          />
                        </div>

                        <div className="flex flex-col gap-1.5">
                          <label className="text-[10px] font-mono uppercase tracking-wider text-[#999999]">
                            Target Service Category
                          </label>
                          <select
                            value={contactForm.service}
                            onChange={(e) =>
                              setContactForm({
                                ...contactForm,
                                service: e.target.value,
                              })
                            }
                            className="bg-[#151515] text-white border border-white/10 rounded-none p-3 text-xs focus:border-[#C5A059] focus:outline-none w-full"
                          >
                            <option value="commercial">
                              Commercial Contracting
                            </option>
                            <option value="residential">
                              Luxury Residential Villa
                            </option>
                            <option value="interiors">
                              Bespoke Interior Fitout
                            </option>
                            <option value="renovation">
                              Adaptive Retrofitting
                            </option>
                          </select>
                        </div>

                        <div className="flex flex-col gap-1.5">
                          <label className="text-[10px] font-mono uppercase tracking-wider text-[#999999]">
                            Approximate build footprint Scale
                          </label>
                          <select
                            value={contactForm.scale}
                            onChange={(e) =>
                              setContactForm({
                                ...contactForm,
                                scale: e.target.value,
                              })
                            }
                            className="bg-[#151515] text-white border border-white/10 rounded-none p-3 text-xs focus:border-[#C5A059] focus:outline-none w-full"
                          >
                            <option value="Under 100 Sqm">
                              Smal Fitout (Under 100 Sqm)
                            </option>
                            <option value="100-300 Sqm">
                              Standard Residence (100 - 300 Sqm)
                            </option>
                            <option value="300-800 Sqm">
                              Elite Estate (300 - 800 Sqm)
                            </option>
                            <option value="Above 800 Sqm">
                              Corporate Multi-Story (800+ Sqm)
                            </option>
                          </select>
                        </div>

                        <div className="flex flex-col gap-1.5">
                          <label className="text-[10px] font-mono uppercase tracking-wider text-[#999999]">
                            Project Location Hub
                          </label>
                          <select
                            value={contactForm.location}
                            onChange={(e) =>
                              setContactForm({
                                ...contactForm,
                                location: e.target.value,
                              })
                            }
                            className="bg-[#151515] text-white border border-white/10 rounded-none p-3 text-xs focus:border-[#C5A059] focus:outline-none w-full"
                          >
                            <option value="Kisumu">
                              Kisumu (Milimani / Riat Hills)
                            </option>
                            <option value="Nairobi">Nairobi Metropolis</option>
                            <option value="Western Kenya Regional">
                              Western Kenya Hub (Kakamega / Eldoret)
                            </option>
                            <option value="Other Area">
                              Other / Nationwide Expansion
                            </option>
                          </select>
                        </div>

                        <div className="flex flex-col gap-1.5 sm:col-span-2">
                          <label className="text-[10px] font-mono uppercase tracking-wider text-[#999999]">
                            Project Description & Structural Mandates
                          </label>
                          <textarea
                            required
                            placeholder="Please detail your specific layout ideas or upload draft drawings context..."
                            rows={4}
                            value={contactForm.message}
                            onChange={(e) =>
                              setContactForm({
                                ...contactForm,
                                message: e.target.value,
                              })
                            }
                            className="bg-[#151515] border border-white/10 text-white rounded-none p-3 text-xs focus:border-[#C5A059] focus:outline-none resize-none"
                          ></textarea>
                        </div>
                      </div>

                      <button
                        type="submit"
                        id="contact-form-submit-btn"
                        className="bg-gradient-to-r from-[#C5A059] to-[#E3C293] hover:from-[#B1936B] hover:to-[#C5A059] text-[#111111] font-sans font-bold uppercase tracking-wider text-xs px-6 py-4 rounded-none shadow-xl flex items-center justify-center gap-2 cursor-pointer transition-transform hover:-translate-y-0.5"
                      >
                        Send Secure Consultation Request
                        <Send className="w-3.5 h-3.5" />
                      </button>
                    </form>
                  ) : (
                    <div className="text-center p-6 flex flex-col items-center gap-4 animate-in zoom-in duration-300">
                      <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mb-2">
                        <CheckCircle2 className="w-8 h-8" />
                      </div>
                      <h3 className="text-xl font-sans font-black text-white uppercase tracking-wider">
                        Consultation Request Submitted
                      </h3>
                      <p className="text-xs text-[#999999] leading-relaxed max-w-md">
                        Thank you for registering your project coordinates,{" "}
                        <strong>{contactForm.name}</strong>. Our lead structural
                        estimation officer is auditing your description. We will
                        contact you at <strong>{contactForm.phone}</strong>{" "}
                        inside 2 hours.
                      </p>

                      <div className="border bg-neutral-900 border-white/10 rounded-none p-4 text-left w-full max-w-md text-[11px] font-mono mt-2 flex flex-col gap-1.5 text-neutral-400">
                        <div>
                          <strong className="text-white">Lead Code:</strong>{" "}
                          AZ-CON-{Math.floor(Math.random() * 8000 + 1000)}
                        </div>
                        <div>
                          <strong className="text-white">
                            Assigned Representative:
                          </strong>{" "}
                          Sarah Mwangi (Chief Delivery Officer)
                        </div>
                        <div>
                          <strong className="text-white">
                            Service Selected:
                          </strong>{" "}
                          {contactForm.service.toUpperCase()} (
                          {contactForm.scale})
                        </div>
                      </div>

                      <div className="flex flex-col sm:flex-row gap-3 mt-4 w-full justify-center">
                        <button
                          onClick={() => setContactSubmitted(false)}
                          className="px-5 py-2.5 bg-neutral-800 hover:bg-neutral-700 text-white text-xs font-mono uppercase"
                        >
                          Submit Another Project Enquiry
                        </button>
                        <a
                          href={`https://wa.me/254712345678?text=Halo%20Ahzuriah!%20My%20name%20is%20${encodeURIComponent(contactForm.name)}.%20I%20have%20submitted%20a%20consultation%20request%20for%20${encodeURIComponent(contactForm.service)}%20construction%2520in%2520${encodeURIComponent(contactForm.location)}.%20Please%20assign%20Sarah%20Mwangi.`}
                          target="_blank"
                          rel="noreferrer"
                          className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-mono uppercase font-bold flex items-center justify-center gap-1"
                        >
                          Connect Immediately on WhatsApp
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Persistent Multi-column cohesive footer */}
      <Footer onPageChange={handlePageChange} />
    </div>
  );
}
