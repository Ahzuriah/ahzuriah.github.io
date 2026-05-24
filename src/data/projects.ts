import { Project } from '../types';

export const projects: Project[] = [
  {
    id: 'riat-hills-modern-villa',
    name: 'The Riat Hills Contemporary Haven',
    category: 'residential',
    client: 'High-Net-Worth Developer',
    location: 'Riat Hills, Kisumu, Kenya',
    scope: 'Turnkey architectural design-build including structural engineering, civil works, bespoke masonry, smart-home automation, and ecological waste-management systems.',
    timeline: '14 Months (Delivered 2 weeks ahead of scheduled deadline)',
    value: 'KES 48,000,000',
    challenge: 'The project site was located on a rigorous 35-degree volcanic slope in Riat Hills with unstable black cotton topsoil, presenting significant structural hazards. The client demanded high cantilevered concrete balconies and vast un-interrupted glass spans without visible support trusses or structural failure risk.',
    solution: 'Our engineering squad executed a state-of-the-art deep micro-piling foundation strategy, anchoring 24 structural reinforced-concrete columns 8 meters deep directly into the solid basalt bedrock layer. We constructed a high-grade post-tensioned concrete slab system that eliminated interior load-bearing structures, enabling 9-meter wide frameless low-emissivity glass curtain walls with breathtaking panoramic views over Lake Victoria.',
    outcome: 'An architectural marvel presenting a structural safety coefficient exceeding standard Eurocode regulations by 35%. Complete thermal comfort was achieved using passive ventilation channels, and zero water run-off was accomplished through integrated rainwater harvesting and water treatment cells.',
    imageUrl: '/src/assets/images/residential_villa_1779616462713.png',
    keyFeatures: [
      'Micro-piled volcanic foundation',
      '9-meter post-tensioned cantilever deck',
      'Passive solar building envelope',
      'Greywater filtration system',
      'Polished local Kisumu stone walling'
    ]
  },
  {
    id: 'victoria-corporate-plaza',
    name: 'Victoria Corporate & Retail Plaza',
    category: 'commercial',
    client: 'Victoria Commerce Fund Ltd',
    location: 'Kisumu Central Business District, Kenya',
    scope: 'General contracting, structural shell construction, MEP (Mechanical, Electrical, and Plumbing) integration, advanced acoustic insulation, and external curtain walling.',
    timeline: '18 Months (Completed 100% on budget)',
    value: 'KES 145,000,000',
    challenge: 'A high-traffic urban zone, restricted local logistic access routes, and an urgent mandate to minimize street-level noise to under 45dB inside offices. Additionally, the project required a Grade-A energy-efficiency rating with zero thermal heat-island effect.',
    solution: 'We engineered a bespoke Unitized Structural Glazing System featuring triple-pane, argon-filled acoustic glass with heavy-duty thermal breaks. Construction logistics were managed via shift-based material delivery during off-peak night cycles, pre-casting high-stress columns in our controlled fabrication yard to speed up erection times by 25%.',
    outcome: 'A gorgeous, high-performance commercial tower operating at 30% lower energy costs than surrounding buildings. The acoustic interior averages an ultra-silent 40dB, and core office spaces are rated AAA for occupant productivity with optimized natural light penetration.',
    imageUrl: '/src/assets/images/hero_banner_luxury_construction_1779616425828.png',
    keyFeatures: [
      'Bespoke unitized structural glazing',
      'Thermal break sound insulation',
      'Integrated roof solar garden (45kWp)',
      'Precast high-strength concrete framing',
      'Advanced variable refrigerant flow (VRF) HVAC'
    ]
  },
  {
    id: 'milimani-executive-lofts',
    name: 'Milimani Executive Corporate Suites',
    category: 'commercial',
    client: 'Milimani Landmark Holdings',
    location: 'Milimani Estate, Kisumu, Kenya',
    scope: 'Sub-structure, structural masonry, architectural finishes, specialized concrete floor treatment, and custom exterior landscaping.',
    timeline: '11 Months',
    value: 'KES 65,000,000',
    challenge: 'Tight tight-envelope site boundary adjacent to existing occupied luxury residences, requiring absolute vibration mitigation, zero dust pollution, and strict noise-level compliance.',
    solution: 'Utilized hydraulic static pile insertion rather than impact driving, reducing local vibration signature to absolute zero. Erected dual-layer micro-mesh dust barriers around the perimeter and deployed state-of-the-art volumetric concrete mixers with high-grade noise dampers.',
    outcome: 'Completed with zero neighbor complaints or structural claims. The building stands as an elite design asset in Milimani, maximizing workspace layout efficiency and exhibiting a striking architectural profile.',
    imageUrl: '/src/assets/images/commercial_construction_1779616445045.png',
    keyFeatures: [
      'Hydraulic pile silent deployment',
      'Zero-pollution construction workflow',
      'High-traffic durable terrazzo flooring',
      'Rain-shield composite aluminum cladding',
      'Integrated vehicle safety access portals'
    ]
  },
  {
    id: 'lakeside-executive-interior',
    name: 'Executive Boardroom & Reception Suite',
    category: 'interiors',
    client: 'East African Maritime Logistics',
    location: 'Port Area, Kisumu, Kenya',
    scope: 'Full design-build fitout, acoustic wall panelling, customized architectural millwork, bespoke illumination elements, and ergonomic climate controls.',
    timeline: '8 Weeks (Completed during offshore company recess)',
    value: 'KES 18,500,000',
    challenge: 'The client needed an authoritative, high-status regional headquarters executive wing delivered within an absolute 60-day deadline, utilizing high-end local materials to reflect their maritime heritage.',
    solution: 'Designed and fabricated custom walnut-veneer wall panels and a 20-seat integrated boardroom table in our workshops beforehand. Deployed a triple-shift team of master craftsmen for rapid precision on-site assembly, fitting advanced concealed linear LED lighting with custom smart room templates.',
    outcome: 'Delivered in exactly 54 days with zero quality outstanding lines. The result is an ultra-premium executive suite blending modern industrial power with warm lakeside accents, which significantly boosts client conversion during official board summits.',
    imageUrl: '/src/assets/images/luxury_interior_design_1779616481038.png',
    keyFeatures: [
      'Precision CNC-profiled walnut acoustic panels',
      'Polished Kenyan nero marble backdrops',
      'Concealed linear dynamic lighting arrays',
      'Dampened micro-climate zonal controls',
      'Fully concealed AV cabling trunk systems'
    ]
  }
];
