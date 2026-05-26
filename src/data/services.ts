import { ServiceDetail } from "../types";
import commercialConstruction from "../assets/images/commercial_construction_1779616445045.png";
import luxuryInterior from "../assets/images/luxury_interior_design_1779616481038.png";
import heroBanner from "../assets/images/hero_banner_luxury_construction_1779616425828.png";
export const services: ServiceDetail[] = [
  {
    id: "commercial",
    title: "Commercial Construction",
    tagline:
      "High-Performance Structures Engineered for Corporate and Retail Growth.",
    description:
      "Vast structural engineering and design-build delivery for office complexes, retail centers, warehouses, and industrial parks in Kenya.",
    longDescription:
      "Ahzuriah Construction is a premier tier-one general contractor delivering modern commercial assets. We understand that a commercial facility is not just concrete and glass; it is a high-yield investment, a productivity engine, and a critical brand statement. From Kisumu Central Business District to the commercial hubs of Kenya, we build retail structures, standard office complexes, and advanced industrial hubs with uncompromising mechanical and structural precision.",
    capabilities: [
      "Multi-story reinforced concrete structures and steel framing",
      "High-performance glazed curtain walls and specialized cladding",
      "Comprehensive MEP (Mechanical, Electrical, and Plumbing) integration",
      "Advanced acoustical ceiling installations and high-traffic flooring",
      "Volumetric safety, regulatory approvals, and NCA permit management",
    ],
    benefits: [
      "Accelerated structural build cycle utilizing pre-cast and advanced concrete curing",
      "Uncompromising physical safety standards aligning with Eurocode & local structural guidelines",
      "Strategic cost control using raw material supply networks across East Africa",
      "Built-in energy-efficient building skeletons lowering operational overheads",
    ],
    processSteps: [
      {
        title: "Project Mobilization",
        desc: "Detailed site evaluation, earth surveys, soil testing, and utility layout analysis.",
      },
      {
        title: "Structural Framing",
        desc: "Pouring high-grade reinforcement pillars, setting post-tensioned slabs, and building structural frameworks.",
      },
      {
        title: "System Fits & Envelope",
        desc: "Glazing, exterior waterproofing cladding, plumbing, HVAC, and power system routing.",
      },
      {
        title: "Premium Finishing",
        desc: "Bespoke corporate flooring, partition assemblies, acoustic design, and paint finishes.",
      },
    ],
    faqs: [
      {
        question: "What is your NCA licensing classification in Kenya?",
        answer:
          "Ahzuriah Construction operates as a highly licensed contractor accredited by the National Construction Authority (NCA) of Kenya, authorizing us to execute major commercial and structural undertakings.",
      },
      {
        question:
          "How do you handle budget overruns on massive commercial projects?",
        answer:
          "We operate under highly transparent fixed-cost contracts. Through rigorous pre-construction quantity surveying and integrated supply chain management, we lock in steel and concrete prices before excavation begins to protect clients from raw market volatility.",
      },
    ],
    imageUrl: commercialConstruction,
    subCategories: [
      "Corporate Offices",
      "Shopping Complexes",
      "Warehousing Units",
      "Mixed-use Developments",
    ],
  },
  {
    id: "residential",
    title: "Residential Construction",
    tagline:
      "Elite Architectural Masterpieces Built with Elegant Craftsmanship.",
    description:
      "Bespoke luxury custom villas, exclusive residential communities, and modern high-end multi-family apartments.",
    longDescription:
      "We craft iconic residential landmarks. Whether building a custom modern lakeside villa in Kisumu or a luxury multi-family residential estate, we treat residential construction as high art. Combining elite structural engineering with meticulous detailing, we integrate indoor-outdoor living, thermal regulation, and structural permanence into every square foot.",
    capabilities: [
      "Turnkey custom villa architecture and physical construction",
      "Luxury multi-family residential complexes and apartment towers",
      "Eco-sustainable waste and rainwater management structures",
      "Elite structural masonry and bespoke concrete finish work",
      "Complete luxury landscaping, pool systems, and perimeter security walls",
    ],
    benefits: [
      "Fully customizable layouts with integrated interior architectural consultants",
      "Long-term durability relying on premium waterproofing and crack mitigation systems",
      "Substantial property valuation increases due to high-end curb appeal and structural prestige",
      "Hassle-free licensing handles all approvals from county governments and NEMA seamlessly",
    ],
    processSteps: [
      {
        title: "Vibe & Blueprinting",
        desc: "Iterative architectural design, 3D visualizations, and spatial layout refinements.",
      },
      {
        title: "Foundation Mastery",
        desc: "Pouring deep footings, implementing absolute damp-proofing, and executing stable structural slabs.",
      },
      {
        title: "Artisanal Masonry",
        desc: "Laying beautiful brickwork, erecting concrete arches, and building customized roofing envelopes.",
      },
      {
        title: "Bespoke Detailing",
        desc: "Premium tiling, custom wooden cabinetry, electrical trim, and high-end exterior landscaping.",
      },
    ],
    faqs: [
      {
        question:
          "Do you build on challenging slopes like Riat Hills or lakefront areas in Kisumu?",
        answer:
          "Yes. We specialize in complex civil foundations, volcanic soil, and water-logged lake margins. We execute micro-piling, continuous flight auger (CFA) piling, and advanced sub-soil drainage to ensure structural stability.",
      },
      {
        question: "Can I provide my own architectural blueprints?",
        answer:
          "We welcome partnership with independent architects. Our engineering desk will audit the blueprints for structural efficiency and county-code alignment before providing a comprehensive quotation.",
      },
    ],
    imageUrl: commercialConstruction,
    subCategories: [
      "Luxury Custom Villas",
      "Townhouses & Estates",
      "Multi-Family Apartments",
      "Eco-Homes",
    ],
  },
  {
    id: "interiors",
    title: "Bespoke Interior Design",
    tagline:
      "High-Status Interior Environments Where Aesthetics Meet Efficiency.",
    description:
      "Luxury office fitouts, executive boardroom suites, premium retail spaces, and elegant private residence interiors.",
    longDescription:
      "Our interior design vertical, Ahzuriah Interiors, merges high-end global aesthetics with highly functional space architecture. We execute customized interior transformations that reflect structural identity. From custom ceiling installations with linear lighting systems to bespoke marble, timber, and metal surfaces, we create spaces of distinct luxury and efficiency.",
    capabilities: [
      "Custom luxury cabinetry, millwork, and timber fabrication",
      "Acoustic wall paneling installations and sound refinement",
      "Advanced spatial layout planning, 3D modeling, and render design",
      "Bespoke architectural lighting, electrical systems, and ambient layouts",
      "Imported and refined local material selections (granite, walnut, marble, copper)",
    ],
    benefits: [
      "Complete continuity because our build crew communicates directly with our design department",
      "Dramatic improvements in commercial productivity and corporate client close rates",
      "Superior raw materials manufactured in-house for extreme cost and quality control",
      "Meticulous item scheduling preserves timeline integrity and reduces space downtime",
    ],
    processSteps: [
      {
        title: "Design Consult",
        desc: "Discussion of brand identity, spatial needs, material palettes, and lighting vibes.",
      },
      {
        title: "Render Delivery",
        desc: "Photorealistic 3D interior renders, lighting schemes, and exact material breakdowns.",
      },
      {
        title: "Off-site Crafting",
        desc: "Bespoke fabrication of custom cabinetry, timber structures, and panel sections in our workshop.",
      },
      {
        title: "On-site Fitout",
        desc: "Swift installation, precision painting, electrical fixture detailing, and fine-tuning finishing touches.",
      },
    ],
    faqs: [
      {
        question: "Do you manufacture custom furniture or cabinetry locally?",
        answer:
          "Yes, we have our own dedicated wood and joinery carpentry workshop in Kisumu, allowing us to build cabinetry, tables, and doors to custom millimetric specifications, saving on shipping times and markups.",
      },
      {
        question:
          "Do you offer interior upgrades for older commercial buildings?",
        answer:
          "We specialize in retrofitting old commercial office spaces into Grade-A office layouts, handling everything from space re-planning, lighting overhauls, and modern acoustic partition walls.",
      },
    ],
    imageUrl: luxuryInterior,
    subCategories: [
      "Corporate Head Offices",
      "High-End Retail Showrooms",
      "Lobby & Reception Spaces",
      "Luxury Private Living Interiors",
    ],
  },
  {
    id: "renovation",
    title: "Renovation & Remodeling",
    tagline:
      "Revisiting and Elevating Existing Structures to Contemporary Standards.",
    description:
      "Transformative structural updates and aesthetic modernizations for older residential and commercial properties.",
    longDescription:
      "We breathe magnificent new life into aging structures. Remodeling requires deep respect for existing load paths, coupled with creative brilliance. We analyze current structural integrity, remove obsolete segments, insert modern materials, and construct beautiful, up-to-date layouts without compromising safety or historical aesthetics.",
    capabilities: [
      "Structural load-path redirection with steel portal frames",
      "Complete building exterior modernization and facade upgrades",
      "Energy-focused retrofits (solar roofing, energy-efficient window frames)",
      "Total plumbing and electrical main infrastructure restoration",
      "Expansion and vertical addition engineering",
    ],
    benefits: [
      "Enhance property valuation by up to 60-80% at a fraction of a new structural cost",
      "Dramatically lower energy consumption and future repair liabilities",
      "Modern open-plan layouts fit modern life while preserving structural integrity",
    ],
    processSteps: [
      {
        title: "Diagnostic Auditing",
        desc: "Testing old structural concrete core strength, checking wall load lines, and auditing plumbing.",
      },
      {
        title: "Safe Demolition",
        desc: "Secure removal of weak walls, plaster, and obsolete systems with heavy shoring.",
      },
      {
        title: "Structural Upgrade",
        desc: "Reinforcing foundational footings and installing strong structural supports.",
      },
      {
        title: "Modern Finishes",
        desc: "Laying clean surfaces, painting, fitting contemporary windows, and clean testing.",
      },
    ],
    faqs: [
      {
        question: "Can you reinforce cracked or settling building foundations?",
        answer:
          "Yes. We analyze settling issues and execute concrete underpinning, slab-jacking, and piling to permanently stabilize and reinforce compromised residential or commercial structures.",
      },
    ],
    imageUrl: heroBanner,
    subCategories: [
      "Facade Revitalization",
      "Adaptive Reuse Projects",
      "Structural Retrofitting",
      "Historic Restorations",
    ],
  },
];

export const trustMetrics = [
  { value: "12+", label: "Years of Engineering Excellence" },
  { value: "180+", label: "Projects Delivered Flawlessly" },
  { value: "100%", label: "Safety & NCA Standards Adhered" },
  { value: "3", label: "Primary Hubs (Kisumu, Western Kenya, Nairobi)" },
  { value: "KES 250M+", label: "Project Financial Deliveries Managed" },
];

export const teamMembers = [
  {
    name: "Eng. Jared Ochieng, PE",
    role: "Principal Structural Engineer & Founder",
    description:
      "With over 18 years of high-end commercial project oversight, Jared leads the design-build squad, ensuring structural layouts adhere to world-class safety benchmarks.",
  },
  {
    name: "Arch. Amina Kiprop",
    role: "Lead Project Architect",
    description:
      "Amina specializes in modern tropical residential design and high-efficiency commercial spaces. Her blueprints focus on maximizing natural light, ventilation, and sustainable materials.",
  },
  {
    name: "Sarah Mwangi, PMP",
    role: "Chief of Project Management & Delivery",
    description:
      "Sarah manages project logistics, material supply paths, and strict timeline adherence, ensuring all projects consistently cross the finish line on time and on budget.",
  },
];

export const coreValues = [
  {
    title: "Engineering Integrity",
    desc: "We never compromise on material dimensions, soil preparation, or structural reinforcement. Safety is our ultimate signature.",
  },
  {
    title: "Cost Transparency",
    desc: "Our clients receive fully detailed, itemized bills of quantities with zero hidden fees or surprise upcharges mid-project.",
  },
  {
    title: "Aesthetic Authority",
    desc: "We build beautiful things. Every joint, concrete finish, and lighting strip is executed with artistic and millimetric precision.",
  },
  {
    title: "Local Delivery Power",
    desc: "Our deep local footprints in Kisumu, Western Kenya, and Nairobi translate into reliable material transport and trusted local project compliance.",
  },
];

export const testimonials = [
  {
    id: "t1",
    name: "Dr. Arthur Omondi",
    role: "Managing Director",
    company: "Victoria Health Consortium",
    content:
      "Ahzuriah Construction delivered our complex clinic building in Kisumu on budget. Their structural transparency, daily ledger updates, and communication with our board were stellar. Their local knowledge of Kisumu soil structures was key to selecting the correct micro-piling system.",
    rating: 5,
    projectType: "Commercial Complex",
  },
  {
    id: "t2",
    name: "Iman Hussein",
    role: "Homeowner",
    company: "Private Residence Developer",
    content:
      "We entrusted Ahzuriah with building our custom dream home on the steep terrain of Riat Hills. Their engineering team accomplished incredible cantilevered balconies that other contractors claimed were impossible. The finish quality of the interior wood and local masonry is truly world-class.",
    rating: 5,
    projectType: "Luxury Custom Villa",
  },
  {
    id: "t3",
    name: "Harrison Wambua",
    role: "General Manager",
    company: "Apex Retail Centers Limited",
    content:
      "Our corporate office renovation in Kisumu town completed ahead of schedule. The interiors squad of Ahzuriah redesigned our central lobby with polished marble and smart acoustic panelling. The layout feels highly professional, and our retail client conversions have increased dramatically.",
    rating: 5,
    projectType: "Commercial interior",
  },
];
