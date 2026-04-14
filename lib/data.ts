import { Service, Project, BlogPost, Testimonial, FleetProduct } from './types';

export const services: Service[] = [
  {
    id: '1',
    number: '01',
    icon: 'TrendingUp',
    title: 'Reefer Transport',
    description: 'Professional refrigerated container transport for temperature-sensitive goods across India.',
    features: ['24/7 GPS Tracking', 'Temperature Monitoring', 'Insured Shipments'],
    image: '/images/service-perishable.jpg',
  },
  {
    id: '2',
    number: '02',
    icon: 'Package',
    title: 'Cold Storage',
    description: 'State-of-the-art warehousing facilities for long-term cold storage requirements.',
    features: ['Climate Control', 'Bulk Storage', 'Quick Access'],
    image: '/images/hero-2.jpg',
  },
  {
    id: '3',
    number: '03',
    icon: 'Shield',
    title: 'Pharma Logistics',
    description: 'Specialized pharmaceutical transport meeting all regulatory compliance standards.',
    features: ['DGFT Certified', 'Temperature Logs', 'Secure Handling'],
    image: '/images/service-pharma.jpg',
  },
  {
    id: '4',
    number: '04',
    icon: 'Zap',
    title: 'Express Delivery',
    description: 'Fast and reliable same-day or next-day delivery for urgent shipments.',
    features: ['Priority Handling', 'Real-time Updates', 'Quick Delivery'],
    image: '/images/fleet-van.jpg',
  },
  {
    id: '5',
    number: '05',
    icon: 'Globe',
    title: 'Pan-India Coverage',
    description: 'Extensive network covering all major cities and tier-2 towns across India.',
    features: ['500+ Locations', 'Easy Accessibility', 'Local Expertise'],
    image: '/images/hero-1.jpg',
  },
  {
    id: '6',
    number: '06',
    icon: 'Heart',
    title: 'Customer Care',
    description: 'Dedicated support team ensuring smooth operations and timely deliveries.',
    features: ['24/7 Support', 'Complaint Resolution', 'Feedback System'],
    image: '/images/service-dairy.jpg',
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
    quote: 'Diksha Cool Container Services transformed our supply chain. Their reliability and professionalism are unmatched in the industry.',
    author: 'Vikram Singh',
    designation: 'Supply Chain Manager',
    company: 'Fresh Foods India',
    rating: 5,
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=vikram',
  },
  {
    id: '2',
    quote: 'Outstanding service with real-time tracking and 100% temperature compliance. We trust them with our most sensitive shipments.',
    author: 'Dr. Meera Rao',
    designation: 'Operations Head',
    company: 'MediCare Pharmaceuticals',
    rating: 5,
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=meera',
  },
  {
    id: '3',
    quote: 'Best cold logistics partner in Bhiwandi. Their expertise in managing diverse cargo types is exceptional.',
    author: 'Suresh Gupta',
    designation: 'Director',
    company: 'Gupta Export House',
    rating: 5,
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=suresh',
  },
];

export const fleetProducts: FleetProduct[] = [
  {
    id: '1',
    name: '20ft Reefer Container',
    image: '/images/fleet-20ft.jpg',
    category: 'Standard',
    specs: {
      capacity: '28 CBM',
      dimensions: '5.9m x 2.35m x 2.36m',
      temperature: '-25°C to +25°C',
    },
  },
  {
    id: '2',
    name: '40ft Reefer Container',
    image: '/images/fleet-40ft.jpg',
    category: 'Premium',
    specs: {
      capacity: '67 CBM',
      dimensions: '12.19m x 2.35m x 2.36m',
      temperature: '-25°C to +25°C',
    },
  },
  {
    id: '3',
    name: 'Insulated Van',
    image: '/images/fleet-van.jpg',
    category: 'Mobile',
    specs: {
      capacity: '10 CBM',
      dimensions: '4.5m x 2.2m x 2.1m',
      temperature: '-18°C to +8°C',
    },
  },
  {
    id: '4',
    name: 'Mini Reefer Unit',
    image: '/images/fleet-mini.jpg',
    category: 'Compact',
    specs: {
      capacity: '5 CBM',
      dimensions: '3m x 1.8m x 1.9m',
      temperature: '-20°C to +20°C',
    },
  },
];
