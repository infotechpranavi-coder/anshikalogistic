import { Service, Project, BlogPost, Testimonial, FleetProduct, ServiceCategory } from './types';

export const services: Service[] = [
  {
    id: '1',
    number: '01',
    icon: 'Globe',
    title: 'Nationwide Cold Chain Transport',
    description:
      'Reliable refrigerated movement from metro hubs to Tier-2 and Tier-3 towns across India.',
    features: ['Pan-India network', 'Metro to tier-3 reach', 'Scheduled dispatch'],
    image: '/images/services/pan-india.jpg',
  },
  {
    id: '2',
    number: '02',
    icon: 'Thermometer',
    title: 'Precision Refrigeration Systems',
    description:
      'Modern cooling units and temperature controls configured for cargo of every scale and sensitivity.',
    features: ['Live temp monitoring', 'Calibrated units', 'Compliance-ready logs'],
    image: '/banners/pharma cold 2.png',
  },
  {
    id: '3',
    number: '03',
    icon: 'Truck',
    title: 'Flexible Fleet Sizes',
    description:
      'Choose from 9 ft, 14 ft, 20 ft, and 24 ft reefer vehicles to suit your load and lane.',
    features: ['Multiple vehicle sizes', 'Right-fit capacity', 'Urban & highway routes'],
    image: '/fleetssss/WhatsApp Image 2026-08-23 at 9.15.08 PM.jpeg',
  },
  {
    id: '4',
    number: '04',
    icon: 'Warehouse',
    title: 'Cold Storage & Warehousing',
    description:
      'Secure cold warehousing with organised inventory handling and dependable distribution support.',
    features: ['Climate-controlled bays', 'Inventory handling', 'Distribution support'],
    image: '/categories/cold-storage-warehouse.webp',
  },
];

export const serviceCategories: ServiceCategory[] = [
  {
    id: '1',
    title: 'Pharmaceuticals',
    description: 'Medicines, vaccines, and healthcare products kept in spec.',
    overview:
      'GDP-aligned refrigerated transport for medicines, vaccines, biologics, and diagnostic kits. We hold validated temperature bands from pickup in Bhiwandi to handover at hospitals, distributors, and last-mile hubs across India.',
    features: [
      'Validated ranges for chilled and frozen pharma',
      'Live temperature logs for every shipment',
      'Chain-of-custody documentation',
      'Dedicated handling for vaccines and biologics',
      'Pan-India dispatch from the Bhiwandi hub',
    ],
    image: '/banners/pharma cold 2.png',
  },
  {
    id: '2',
    title: 'QSR & Food Chains',
    description: 'Frozen and chilled supply for restaurants and food brands.',
    overview:
      'Scheduled reefer movement for QSR kitchens, cloud kitchens, and food brands that need frozen and chilled SKUs on time. Right-sized vehicles keep product quality intact from central kitchen or warehouse to store.',
    features: [
      'Frozen and chilled dual-temp capability',
      'Store-level and DC-level deliveries',
      'Night and early-morning dispatch windows',
      '9 ft, 14 ft, 20 ft, and 24 ft reefers for every lane',
      '24/7 coordination with kitchen teams',
    ],
    image: '/categories/fast-food.jpg',
  },
  {
    id: '3',
    title: 'FMCG',
    description: 'Fast-moving goods with steady temperature from warehouse to shelf.',
    overview:
      'Temperature-stable movement for dairy, beverages, confectionery, and other FMCG lines that lose value if the cold chain breaks. We plan lanes around warehouse cut-offs so product reaches distributors and retail on schedule.',
    features: [
      'Warehouse-to-distributor reefer lanes',
      'High-frequency regional dispatches',
      'Inventory-friendly loading and unloading',
      'Humidity-aware handling for packaged foods',
      'Coverage from metros to Tier-2 towns',
    ],
    image: '/categories/fmcg.jpg',
  },
  {
    id: '4',
    title: 'Event Industries',
    description: 'Temperature-managed logistics for exhibitions and trade shows.',
    overview:
      'Time-critical cold transport for exhibitions, product launches, and trade shows. Perishable displays, sampling stock, and branded food service move on a fixed window so your stand is ready before doors open.',
    features: [
      'Timed pickup and venue handover',
      'Short-haul and intercity event lanes',
      'Chilled holding for sampling and F&B',
      'On-call support during show days',
      'Return logistics after the event',
    ],
    image: '/images/categories/events.jpg',
  },
  {
    id: '5',
    title: 'Florists & Fresh Produce',
    description: 'Gentle cold transport for flowers, plants, and fresh produce.',
    overview:
      'Gentle refrigeration for flowers, plants, fruits, and vegetables that bruise or wilt without a stable cold chain. Controlled airflow and careful stacking protect freshness from farm, mandi, or packhouse to market.',
    features: [
      'Produce-safe temperature bands',
      'Gentle loading to reduce bruising',
      'Same-day and next-day city lanes',
      'Support for florists and packhouses',
      'Humidity-conscious reefer settings',
    ],
    image: '/categories/fresh-foods.jpg',
  },
  {
    id: '6',
    title: 'Catering & Hospitality',
    description: 'Chilled movement for kitchens, banquets, and hospitality.',
    overview:
      'Chilled logistics for banquet kitchens, hotels, and large-scale catering. Prepared food, dairy, and perishable ingredients move in spec so service teams can plate on time without last-minute spoilage.',
    features: [
      'Banquet and hotel kitchen deliveries',
      'Chilled holding for prepared meals',
      'Flexible slots for event calendars',
      'Hygienic, food-grade vehicle interiors',
      'Backup units for peak wedding season',
    ],
    image: '/categories/catering.jpg',
  },
];

export const projects: Project[] = [
  {
    id: '1',
    title: 'Perishable Goods Transport',
    image: '/images/project-1.jpg',
    category: 'Reefer Transport',
    description: 'Successfully transported fresh produce across 5 states maintaining quality.',
  },
  {
    id: '2',
    title: 'Pharmaceutical Distribution',
    image: '/images/project-2.jpg',
    category: 'Pharma',
    description: 'Delivered sensitive pharmaceutical products with 100% compliance.',
  },
  {
    id: '3',
    title: 'Cold Storage Facility Setup',
    image: '/images/project-3.jpg',
    category: 'Warehousing',
    description: 'Established 5000 sq.ft. cold storage facility in Delhi.',
  },
  {
    id: '4',
    title: 'Seafood Export Project',
    image: '/images/project-4.jpg',
    category: 'Perishables',
    description: 'Managed logistics for seafood export to international markets.',
  },
  {
    id: '5',
    title: 'Vaccine Distribution Campaign',
    image: '/images/project-5.jpg',
    category: 'Pharma',
    description: 'Coordinated vaccine transport across 10 states maintaining cold chain.',
  },
  {
    id: '6',
    title: 'Food Processing Supply Chain',
    image: '/images/project-6.jpg',
    category: 'Reefer Transport',
    description: 'End-to-end supply chain management for major food processor.',
  },
  {
    id: '7',
    title: 'Organ Transport Network',
    image: '/images/project-7.jpg',
    category: 'Perishables',
    description: 'Emergency transport services for organ donation logistics.',
  },
  {
    id: '8',
    title: 'Dairy Products Distribution',
    image: '/images/project-8.jpg',
    category: 'Reefer Transport',
    description: 'Daily distribution of dairy products to major cities.',
  },
  {
    id: '9',
    title: 'Chemical Storage Solutions',
    image: '/images/project-9.jpg',
    category: 'Warehousing',
    description: 'Specialized warehouse for temperature-controlled chemical storage.',
  },
  {
    id: '10',
    title: 'Frozen Foods Export',
    image: '/images/project-10.jpg',
    category: 'Perishables',
    description: 'International transport of frozen food products.',
  },
  {
    id: '11',
    title: 'Diagnostic Lab Supplies',
    image: '/images/project-11.jpg',
    category: 'Pharma',
    description: 'Logistics for diagnostic kit distribution nationwide.',
  },
  {
    id: '12',
    title: 'Cocoa Bean Transport',
    image: '/images/project-12.jpg',
    category: 'Reefer Transport',
    description: 'Specialized transport for premium cocoa bean distribution.',
  },
];

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    slug: 'cold-chain-management-2024',
    title: 'Cold Chain Management: Best Practices in 2024',
    excerpt: 'Learn the latest techniques and technology for managing cold chains effectively.',
    content: `<h3>Introduction</h3>
<p>Cold chain management is critical for maintaining product quality and safety. With advancements in IoT and AI, the industry has evolved significantly.</p>
<h3>Key Technologies</h3>
<p>Temperature sensors, GPS tracking, and automated alerts have revolutionized cold chain management. These technologies ensure real-time monitoring and quick response to issues.</p>
<h3>Best Practices</h3>
<p>Implementing standardized protocols, regular training, and quality checks are essential for maintaining cold chain integrity throughout the supply process.</p>`,
    image: '/images/blog-1.jpg',
    date: '2024-03-15',
    author: {
      name: 'Rajesh Kumar',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=rajesh',
    },
    category: 'Logistics',
    tags: ['Cold Chain', 'Technology', 'Best Practices'],
  },
  {
    id: '2',
    slug: 'pharmaceutical-logistics-compliance',
    title: 'Pharmaceutical Logistics Compliance Standards',
    excerpt: 'Understanding FDA and WHO guidelines for safe pharmaceutical transport.',
    content: `<h3>Regulatory Framework</h3>
<p>Pharmaceutical logistics must adhere to strict regulatory standards set by FDA, WHO, and local authorities.</p>
<h3>Documentation Requirements</h3>
<p>Proper temperature logs, handling certificates, and transportation records are mandatory for pharmaceutical shipments.</p>
<h3>Quality Assurance</h3>
<p>Regular audits and certifications ensure compliance and maintain the integrity of pharmaceutical products throughout transit.</p>`,
    image: '/images/blog-3.jpg',
    date: '2024-03-10',
    author: {
      name: 'Dr. Priya Sharma',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=priya',
    },
    category: 'Regulations',
    tags: ['Pharma', 'Compliance', 'Regulations'],
  },
  {
    id: '3',
    slug: 'sustainable-cold-logistics',
    title: 'Sustainable Practices in Cold Logistics',
    excerpt: 'How to reduce environmental impact while maintaining cold chain efficiency.',
    content: `<h3>Environmental Challenges</h3>
<p>Cold logistics contributes significantly to carbon emissions. Understanding the impact is the first step toward sustainable practices.</p>
<h3>Green Solutions</h3>
<p>Electric vehicles, efficient insulation, and renewable energy can reduce environmental impact significantly.</p>
<h3>Implementation Strategy</h3>
<p>Companies are adopting sustainable practices without compromising on quality or reliability of cold chain services.</p>`,
    image: '/images/blog-2.jpg',
    date: '2024-03-05',
    author: {
      name: 'Amit Verma',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=amit',
    },
    category: 'Sustainability',
    tags: ['Environment', 'Green', 'Sustainability'],
  },
  {
    id: '4',
    slug: 'iot-sensors-cold-chain',
    title: 'IoT Sensors Revolutionizing Cold Chain Monitoring',
    excerpt: 'How Internet of Things is transforming real-time temperature tracking.',
    content: `<h3>IoT Revolution</h3>
<p>IoT sensors provide unprecedented visibility into cold chain operations with real-time data collection and analysis.</p>
<h3>Benefits</h3>
<p>Real-time alerts, predictive maintenance, and data-driven insights help prevent losses and optimize operations.</p>
<h3>Future Outlook</h3>
<p>As IoT technology matures, integration with AI and blockchain will further enhance cold chain transparency and trust.</p>`,
    image: '/images/blog-1.jpg',
    date: '2024-02-28',
    author: {
      name: 'Neha Patel',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=neha',
    },
    category: 'Technology',
    tags: ['IoT', 'Technology', 'Innovation'],
  },
];

export const testimonials: Testimonial[] = [
  {
    id: '1',
    quote:
      'Anshika’s reefer transport from Bhiwandi keeps our fresh produce within range across Maharashtra and Gujarat. Temperature-controlled dispatch and on-time delivery have cut spoilage on every lane we run.',
    author: 'Rajesh Patel',
    designation: 'Procurement Head',
    company: 'GreenHarvest Foods Pvt. Ltd.',
    rating: 5,
  },
  {
    id: '2',
    quote:
      'We rely on their pharmaceutical cold chain for vaccines and temperature-sensitive medicines. Live monitoring, documented logs, and pan-India reefer coverage give us compliance we can stand behind.',
    author: 'Dr. Anjali Menon',
    designation: 'Warehouse Manager',
    company: 'Lifeline Pharma Distributors',
    rating: 5,
  },
  {
    id: '3',
    quote:
      'Best cold-chain logistics partner for our QSR network. Frozen and chilled loads move on 14 ft and 20 ft reefers with 24/7 support. Reliable Bhiwandi hub operations, every single week.',
    author: 'Amit Sharma',
    designation: 'Operations Director',
    company: 'Metro Kitchen Supplies',
    rating: 5,
  },
];

export const fleetProducts: FleetProduct[] = [
  {
    id: '1',
    name: '9 ft Reefer',
    image: '/fleet/truck-05.jpg',
    category: 'Compact',
    description:
      'City and last-mile reefer for small loads, samples, florists, and urgent pharma drops that need a tight turning radius.',
    features: [
      '7 CBM for time-critical small loads',
      'Easy access on dense city routes',
      'Precise set-points for sensitive cargo',
      'Quick dispatch from the Bhiwandi hub',
      'Cost-efficient for short lanes',
    ],
    specs: {
      capacity: '7 CBM',
      dimensions: '2.7m x 1.65m x 1.65m',
      temperature: '-20°C to +20°C',
    },
  },
  {
    id: '2',
    name: '14 ft Reefer',
    image: '/fleet/truck-10.jpg',
    category: 'City',
    description:
      'The workhorse for store and kitchen deliveries. The 14 ft reefer handles multi-stop QSR, dairy, and FMCG drops without a full truck.',
    features: [
      '14 CBM for mixed chilled and frozen SKUs',
      'Multi-stop city and suburban routes',
      'Ideal for QSR, dairy, and retail',
      'Faster loading for daily dispatches',
      'Backup unit during peak demand',
    ],
    specs: {
      capacity: '14 CBM',
      dimensions: '4.3m x 2.05m x 1.85m',
      temperature: '-18°C to +8°C',
    },
  },
  {
    id: '3',
    name: '20 ft Reefer',
    image: '/fleet/truck-02.jpg',
    category: 'Standard',
    description:
      'Our most requested unit for regional and intercity loads. The 20 ft reefer balances payload with door-to-door flexibility on highway lanes out of Bhiwandi.',
    features: [
      '20 CBM payload for mixed chilled and frozen cargo',
      'Set-point control from -25°C to +25°C',
      'GPS tracking and temperature logging',
      'Ideal for pharma, QSR, and FMCG lanes',
      'Highway-ready for pan-India dispatch',
    ],
    specs: {
      capacity: '20 CBM',
      dimensions: '6.1m x 2.15m x 1.95m',
      temperature: '-25°C to +25°C',
    },
  },
  {
    id: '4',
    name: '24 ft Reefer',
    image: '/fleet/truck-06.jpg',
    category: 'Highway',
    description:
      'High-volume reefer for bulk lanes and dedicated routes. Use it when you need extra cube without breaking temperature control.',
    features: [
      '28 CBM capacity for full-load shipments',
      'Stable hold for long-haul routes',
      'Suitable for palletised warehouse cargo',
      'Continuous refrigeration in transit',
      'Best for high-frequency DC lanes',
    ],
    specs: {
      capacity: '28 CBM',
      dimensions: '7.3m x 2.25m x 2.05m',
      temperature: '-25°C to +25°C',
    },
  },
];
