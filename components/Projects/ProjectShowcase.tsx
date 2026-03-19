import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';

interface Project {
  title: string;
  category: string;
  image: string;
  roles: string[];
  description: string;
  tech: string[];
  additionalImages?: string[];
  detailedDescription?: string;
  features?: string[];
  challenges?: string[];
  outcomes?: string[];
}

interface ProjectShowcaseProps {
}

const ProjectShowcase: React.FC<ProjectShowcaseProps> = () => {
  const [filter, setFilter] = useState('All');

  const categories = [
    { name: 'All', icon: '🚀', description: 'Complete Portfolio' },
    { name: 'Systems & Networking', icon: '🌐', description: 'Infrastructure Solutions' },
    { name: 'Web Development', icon: '💻', description: 'Digital Applications' },
    { name: 'Mobile Apps', icon: '📱', description: 'Mobile Solutions' },
    { name: 'Data Engineering', icon: '📊', description: 'Data Intelligence' },
    { name: 'Design & Research', icon: '🎨', description: 'Creative Innovation' }
  ];

  const projects: Project[] = [
    {
      title: "UK Developers Network",
      category: "Systems & Networking",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop&crop=center",
      roles: ["Network Engineer", "Installation Lead", "Systems Manager"],
      description: "Comprehensive network infrastructure deployment and management for UK-based development community. Implemented enterprise-grade networking solutions with installation, configuration, and ongoing maintenance services.",
      tech: ["Cisco", "Network Security", "VPN", "Cloud Networking", "Monitoring Tools"],
      additionalImages: [
        "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop&crop=center",
        "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=600&fit=crop&crop=center",
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop&crop=center"
      ],
      detailedDescription: "Led the complete network infrastructure overhaul for UK Developers Network, a community of over 500 developers. The project involved designing, installing, and managing a robust network ecosystem that supports high-availability development environments, secure remote access, and scalable cloud integrations.",
      features: [
        "Multi-site network architecture with redundant connections",
        "Advanced security protocols including next-gen firewalls and intrusion detection",
        "Cloud-native networking with hybrid on-premises/cloud infrastructure",
        "24/7 network monitoring and automated incident response",
        "Scalable VPN solutions for remote development teams"
      ],
      challenges: [
        "Integrating legacy systems with modern cloud infrastructure",
        "Maintaining zero-downtime during infrastructure migration",
        "Implementing advanced security measures without impacting performance",
        "Training development teams on new network protocols and security practices"
      ],
      outcomes: [
        "99.9% network uptime achieved",
        "40% improvement in development team productivity",
        "Enhanced security posture with zero successful breaches",
        "Scalable infrastructure supporting 300% growth capacity"
      ]
    },
    {
      title: "Sjameel and Co",
      category: "Systems & Networking",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=600&fit=crop&crop=center",
      roles: ["Network Architect", "Infrastructure Consultant"],
      description: "Enterprise networking solutions and IT infrastructure management for Sjameel and Co. Designed and implemented scalable network architectures supporting business operations across multiple locations.",
      tech: ["Enterprise Networking", "IT Infrastructure", "Network Design", "System Administration", "Cloud Migration"],
      additionalImages: [
        "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop&crop=center",
        "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=600&fit=crop&crop=center",
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop&crop=center"
      ],
      detailedDescription: "Architected and deployed comprehensive IT infrastructure for Sjameel and Co, a multinational enterprise with operations across 5 countries. The solution encompassed network design, cloud migration, security implementation, and ongoing infrastructure management to support their growing business needs.",
      features: [
        "Multi-location network architecture with SD-WAN technology",
        "Enterprise-grade security with advanced threat protection",
        "Hybrid cloud infrastructure with seamless data migration",
        "Unified communications platform integration",
        "Automated backup and disaster recovery systems"
      ],
      challenges: [
        "Coordinating infrastructure deployment across international locations",
        "Ensuring data compliance across different regulatory environments",
        "Minimizing business disruption during cloud migration",
        "Integrating legacy systems with modern cloud-native applications"
      ],
      outcomes: [
        "50% reduction in IT operational costs",
        "Improved network performance with 60% faster data transfer speeds",
        "Enhanced business continuity with 99.95% uptime",
        "Successful cloud migration completed 2 months ahead of schedule"
      ]
    },
    {
      title: "Reach Corporate Solutions",
      category: "Systems & Networking",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop&crop=center",
      roles: ["Corporate Solutions Architect", "Network Specialist"],
      description: "End-to-end corporate networking and communication solutions for Reach Corporate Solutions. Delivered comprehensive IT infrastructure including network setup, security implementation, and ongoing support services.",
      tech: ["Corporate Networking", "IT Solutions", "Network Security", "Communication Systems", "Enterprise Support"],
      additionalImages: [
        "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop&crop=center",
        "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=600&fit=crop&crop=center",
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop&crop=center"
      ],
      detailedDescription: "Designed and implemented a complete corporate IT ecosystem for Reach Corporate Solutions, focusing on secure, scalable, and efficient communication infrastructure. The project covered network architecture, unified communications, cybersecurity, and managed services to support their corporate operations.",
      features: [
        "Corporate network infrastructure with high availability",
        "Unified communications platform with video conferencing",
        "Advanced cybersecurity framework with endpoint protection",
        "Managed IT services with 24/7 support",
        "Scalable cloud infrastructure for business growth"
      ],
      challenges: [
        "Implementing zero-trust security model across all systems",
        "Integrating multiple communication platforms into unified solution",
        "Ensuring compliance with industry-specific regulations",
        "Managing stakeholder expectations during digital transformation"
      ],
      outcomes: [
        "30% increase in operational efficiency",
        "Enhanced communication capabilities across all departments",
        "Improved security posture with advanced threat detection",
        "Successful digital transformation completed on time and budget"
      ]
    },
    {
      title: "Nexreach Marketing",
      category: "Web Development",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&crop=center",
      roles: ["Full Stack Developer", "UI/UX Designer", "Marketing Strategist"],
      description: "Comprehensive digital marketing platform with advanced analytics, campaign management, and automated lead generation. Built with modern web technologies to help businesses reach their target audience effectively.",
      tech: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS", "Chart.js", "Stripe API"],
      additionalImages: [
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&crop=center",
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&crop=center",
        "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=800&h=600&fit=crop&crop=center"
      ],
      detailedDescription: "Developed a comprehensive digital marketing platform that revolutionizes how businesses approach online marketing. The platform features advanced analytics dashboards, automated campaign management, lead generation tools, and seamless integration with popular marketing channels.",
      features: [
        "Real-time analytics and performance tracking",
        "Automated social media campaign management",
        "Lead generation and CRM integration",
        "Advanced reporting and ROI analysis",
        "Multi-channel marketing automation",
        "Customizable marketing templates"
      ],
      challenges: [
        "Integrating multiple marketing APIs and platforms",
        "Building scalable real-time analytics system",
        "Ensuring data privacy and GDPR compliance",
        "Creating intuitive user experience for non-technical users"
      ],
      outcomes: [
        "300% increase in client lead generation",
        "85% improvement in campaign ROI tracking",
        "50+ marketing agencies using the platform",
        "99.9% uptime with enterprise-grade reliability"
      ]
    },
    {
      title: "Mawknest Properties",
      category: "Web Development",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop&crop=center",
      roles: ["Full Stack Developer", "Real Estate Specialist", "Property Management Expert"],
      description: "Modern real estate platform for Mawknest Properties featuring property listings, virtual tours, mortgage calculators, and advanced search filters. Designed to streamline the property buying and selling experience.",
      tech: ["React", "Next.js", "PostgreSQL", "Prisma", "Tailwind CSS", "Mapbox API", "Stripe"],
      additionalImages: [
        "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop&crop=center",
        "https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=800&h=600&fit=crop&crop=center",
        "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&h=600&fit=crop&crop=center"
      ],
      detailedDescription: "Created a comprehensive real estate platform for Mawknest Properties that transforms how clients discover and purchase properties. The platform includes advanced property search, virtual tours, mortgage calculators, and seamless transaction processing.",
      features: [
        "Advanced property search with multiple filters",
        "360° virtual property tours",
        "Interactive mortgage and affordability calculators",
        "Real-time market analytics and pricing",
        "Secure document management system",
        "Agent-client communication portal"
      ],
      challenges: [
        "Implementing complex property search algorithms",
        "Integrating virtual tour technology",
        "Ensuring secure financial transaction processing",
        "Optimizing performance for high-resolution property images"
      ],
      outcomes: [
        "200% increase in property inquiries",
        "40% faster property sales cycle",
        "95% client satisfaction rate",
        "Expanded to serve 500+ properties"
      ]
    },
    {
      title: "Universe Viewer",
      category: "Web Development",
      image: "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=800&h=600&fit=crop&crop=center",
      roles: ["3D Developer", "WebGL Specialist", "Interactive Designer"],
      description: "Immersive 3D universe exploration web application built with WebGL and Three.js. Features interactive star maps, planetary systems, and educational astronomical data visualization.",
      tech: ["Three.js", "WebGL", "React", "TypeScript", "WebXR", "Node.js", "MongoDB"],
      additionalImages: [
        "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=800&h=600&fit=crop&crop=center",
        "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=800&h=600&fit=crop&crop=center",
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop&crop=center"
      ],
      detailedDescription: "Developed an immersive 3D universe exploration platform that allows users to journey through space, explore planetary systems, and learn about astronomical phenomena. The application combines cutting-edge web technologies with educational content to create an engaging learning experience.",
      features: [
        "Interactive 3D star field navigation",
        "Detailed planetary system exploration",
        "Real astronomical data integration",
        "Educational information panels",
        "VR/AR compatibility with WebXR",
        "Customizable viewing experiences"
      ],
      challenges: [
        "Optimizing 3D performance for web browsers",
        "Managing large astronomical datasets",
        "Creating intuitive 3D navigation controls",
        "Ensuring cross-browser WebGL compatibility"
      ],
      outcomes: [
        "1M+ virtual space explorations",
        "Used by 200+ educational institutions",
        "Featured in astronomy publications",
        "90% positive user engagement rate"
      ]
    },
    {
      title: "Hs Protech",
      category: "Web Development",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop&crop=center",
      roles: ["Full Stack Developer", "Real Estate Consultant", "Security Specialist"],
      description: "Secure real estate platform for Hs Protech with advanced property management, tenant screening, and integrated security features. Built with enterprise-grade security and compliance standards.",
      tech: ["React", "Django", "PostgreSQL", "Redis", "AWS", "OAuth 2.0", "SSL/TLS"],
      additionalImages: [
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop&crop=center",
        "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop&crop=center",
        "https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=800&h=600&fit=crop&crop=center"
      ],
      detailedDescription: "Built a secure and comprehensive real estate management platform for Hs Protech that prioritizes data security and compliance. The platform features advanced property management tools, tenant screening capabilities, and integrated security protocols.",
      features: [
        "Enterprise-grade security and encryption",
        "Advanced tenant background screening",
        "Secure document management and storage",
        "Real-time property monitoring systems",
        "Compliance management dashboard",
        "Automated reporting and analytics"
      ],
      challenges: [
        "Implementing bank-level security standards",
        "Managing sensitive tenant and property data",
        "Ensuring regulatory compliance across jurisdictions",
        "Building scalable secure infrastructure"
      ],
      outcomes: [
        "Zero security incidents in 2 years",
        "50% reduction in administrative overhead",
        "100% compliance with data protection regulations",
        "Managing 1000+ properties securely"
      ]
    },
    {
      title: "Resume Builder",
      category: "Web Development",
      image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&h=600&fit=crop&crop=center",
      roles: ["Full Stack Developer", "UX Designer", "Product Manager"],
      description: "Professional resume building web application with AI-powered content suggestions, multiple templates, and export capabilities. Features drag-and-drop editing and real-time preview.",
      tech: ["React", "Node.js", "MongoDB", "OpenAI API", "PDF.js", "Tailwind CSS", "Framer Motion"],
      additionalImages: [
        "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&h=600&fit=crop&crop=center",
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&crop=center",
        "https://images.unsplash.com/photo-1634986666676-ec8fd927c23d?w=800&h=600&fit=crop&crop=center"
      ],
      detailedDescription: "Created an intelligent resume building platform that helps users create professional resumes with AI-powered content suggestions, modern templates, and seamless export options. The tool combines ease of use with professional results.",
      features: [
        "AI-powered content and keyword suggestions",
        "50+ professional resume templates",
        "Drag-and-drop resume editing",
        "Real-time preview and PDF export",
        "ATS-optimized resume formatting",
        "LinkedIn profile integration"
      ],
      challenges: [
        "Integrating AI content generation APIs",
        "Creating intuitive drag-and-drop interface",
        "Ensuring ATS compatibility across platforms",
        "Managing template design and customization"
      ],
      outcomes: [
        "500K+ resumes created",
        "4.8/5 user satisfaction rating",
        "85% increase in user job application success",
        "Featured in major tech publications"
      ]
    },
    {
      title: "UK Developers",
      category: "Web Development",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop&crop=center",
      roles: ["Full Stack Developer", "Construction Specialist", "Project Manager"],
      description: "Comprehensive construction and real estate development platform for UK Developers. Features project management, construction tracking, client portals, and regulatory compliance tools.",
      tech: ["React", "Laravel", "MySQL", "Docker", "AWS", "Stripe", "Real-time APIs"],
      additionalImages: [
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop&crop=center",
        "https://images.unsplash.com/photo-1503387837-b154d5074bd2?w=800&h=600&fit=crop&crop=center",
        "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&h=600&fit=crop&crop=center"
      ],
      detailedDescription: "Developed a comprehensive platform for UK Developers that streamlines construction project management, enhances client communication, and ensures regulatory compliance. The platform serves as a central hub for all construction and development activities.",
      features: [
        "Real-time construction project tracking",
        "Client progress and communication portals",
        "Regulatory compliance management",
        "Financial tracking and reporting",
        "Resource and material management",
        "Quality assurance and inspection tools"
      ],
      challenges: [
        "Managing complex construction workflows",
        "Integrating regulatory compliance systems",
        "Building real-time collaboration features",
        "Ensuring data security for sensitive project information"
      ],
      outcomes: [
        "30% reduction in project completion time",
        "95% on-time project delivery rate",
        "50+ active construction projects managed",
        "£2M+ in construction value tracked"
      ]
    },
    {
      title: "JYM App",
      category: "Desktop Apps",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop&crop=center",
      roles: ["Desktop App Developer", "Fitness Specialist", "UI/UX Designer"],
      description: "Comprehensive fitness tracking desktop application with workout planning, progress monitoring, and nutrition tracking. Built with Electron for cross-platform compatibility.",
      tech: ["Electron", "React", "SQLite", "Chart.js", "Node.js", "Material-UI"],
      additionalImages: [
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop&crop=center",
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop&crop=center",
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop&crop=center"
      ],
      detailedDescription: "Developed a comprehensive fitness management desktop application that helps users track workouts, monitor progress, and manage nutrition. The app features customizable workout plans, progress analytics, and seamless data synchronization across devices.",
      features: [
        "Customizable workout planning and tracking",
        "Real-time progress analytics and charts",
        "Nutrition tracking and meal planning",
        "Cross-platform compatibility (Windows/Mac/Linux)",
        "Offline functionality with cloud sync",
        "Personal trainer integration"
      ],
      challenges: [
        "Optimizing performance for complex data visualizations",
        "Implementing offline-first architecture",
        "Creating intuitive workout planning interface",
        "Managing large fitness datasets efficiently"
      ],
      outcomes: [
        "10K+ active users",
        "4.7/5 app store rating",
        "30% improvement in user fitness goals achievement",
        "Featured in fitness technology publications"
      ]
    },
    {
      title: "Advanced Calculator",
      category: "Desktop Apps",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=600&fit=crop&crop=center",
      roles: ["Desktop App Developer", "Mathematics Specialist", "Algorithm Designer"],
      description: "Feature-rich desktop calculator with scientific functions, unit conversions, graphing capabilities, and programmable operations. Built with modern UI and extensive mathematical libraries.",
      tech: ["Electron", "JavaScript", "Math.js", "Canvas API", "Tailwind CSS", "Node.js"],
      additionalImages: [
        "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=600&fit=crop&crop=center",
        "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=600&fit=crop&crop=center",
        "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=600&fit=crop&crop=center"
      ],
      detailedDescription: "Created an advanced desktop calculator that goes beyond basic arithmetic, offering scientific functions, unit conversions, graphing capabilities, and programmable operations. The application serves both students and professionals with its comprehensive mathematical toolkit.",
      features: [
        "Scientific calculator with advanced functions",
        "Unit conversion for 200+ units across categories",
        "Interactive graphing and plotting capabilities",
        "Programmable functions and custom formulas",
        "History tracking and result export",
        "Dark/light theme with modern UI"
      ],
      challenges: [
        "Implementing complex mathematical algorithms",
        "Creating smooth graphing and visualization",
        "Managing large unit conversion database",
        "Optimizing performance for real-time calculations"
      ],
      outcomes: [
        "50K+ downloads across platforms",
        "4.8/5 user rating",
        "Used by 500+ educational institutions",
        "Translated into 15 languages"
      ]
    },
    {
      title: "Voice AI Agent",
      category: "Desktop Apps",
      image: "https://images.unsplash.com/photo-1589254065878-42c9da997008?w=800&h=600&fit=crop&crop=center",
      roles: ["AI Developer", "Voice Specialist", "NLP Engineer"],
      description: "Intelligent voice-controlled desktop assistant with natural language processing, task automation, and smart home integration. Features speech recognition, text-to-speech, and AI-powered responses.",
      tech: ["Electron", "Python", "TensorFlow", "Web Speech API", "Node.js", "SQLite"],
      additionalImages: [
        "https://images.unsplash.com/photo-1589254065878-42c9da997008?w=800&h=600&fit=crop&crop=center",
        "https://images.unsplash.com/photo-1589254065878-42c9da997008?w=800&h=600&fit=crop&crop=center",
        "https://images.unsplash.com/photo-1589254065878-42c9da997008?w=800&h=600&fit=crop&crop=center"
      ],
      detailedDescription: "Developed an intelligent voice-controlled desktop assistant that combines natural language processing with task automation. The AI agent can understand context, perform complex tasks, and integrate with various smart devices and services.",
      features: [
        "Advanced speech recognition and synthesis",
        "Natural language processing and understanding",
        "Task automation and scheduling",
        "Smart home device integration",
        "Context-aware responses and learning",
        "Multi-language support and accents"
      ],
      challenges: [
        "Implementing accurate speech recognition",
        "Creating context-aware AI responses",
        "Managing privacy and security concerns",
        "Optimizing performance for real-time processing"
      ],
      outcomes: [
        "25K+ active users",
        "4.6/5 user satisfaction rating",
        "Integrated with 50+ smart home platforms",
        "Featured in AI technology showcases"
      ]
    },
    {
      title: "Auto Dialer Call Center",
      category: "Desktop Apps",
      image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=600&fit=crop&crop=center",
      roles: ["Telecom Developer", "Call Center Specialist", "VoIP Engineer"],
      description: "Professional auto-dialing system for call centers with predictive dialing, CRM integration, call recording, and real-time analytics. Built for high-volume outbound calling operations.",
      tech: ["Electron", "Node.js", "WebRTC", "Socket.io", "PostgreSQL", "Twilio API"],
      additionalImages: [
        "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=600&fit=crop&crop=center",
        "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=600&fit=crop&crop=center",
        "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=600&fit=crop&crop=center"
      ],
      detailedDescription: "Built a comprehensive auto-dialing system designed for call centers that automates outbound calling operations. The system features predictive dialing algorithms, CRM integration, call recording, and detailed analytics to optimize call center performance.",
      features: [
        "Predictive and progressive auto-dialing",
        "Real-time call center analytics and reporting",
        "CRM integration and contact management",
        "Call recording and quality monitoring",
        "Agent performance tracking and coaching",
        "Compliance management and regulations"
      ],
      challenges: [
        "Implementing predictive dialing algorithms",
        "Managing high-volume concurrent calls",
        "Ensuring telecom compliance and regulations",
        "Creating real-time analytics dashboard"
      ],
      outcomes: [
        "Used by 100+ call centers",
        "300% improvement in agent productivity",
        "99.5% system uptime",
        "Reduced operational costs by 40%"
      ]
    },
    {
      title: "UK Developers Mobile",
      category: "Mobile Apps",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop&crop=center",
      roles: ["Mobile App Developer", "Real Estate Specialist", "UI/UX Designer"],
      description: "Mobile application for UK Developers real estate company featuring property listings, virtual tours, mortgage calculators, and direct communication with agents.",
      tech: ["React Native", "Node.js", "MongoDB", "Mapbox", "Stripe", "Firebase"],
      additionalImages: [
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop&crop=center",
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop&crop=center",
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop&crop=center"
      ],
      detailedDescription: "Developed a comprehensive mobile application for UK Developers that brings the real estate experience to users' fingertips. The app features immersive property exploration, direct agent communication, and seamless transaction processing.",
      features: [
        "Interactive property listings with filters",
        "360° virtual property tours",
        "In-app mortgage and affordability calculators",
        "Direct messaging with real estate agents",
        "Property comparison and favorites",
        "Push notifications for new listings"
      ],
      challenges: [
        "Optimizing performance for property images",
        "Implementing virtual tour technology",
        "Creating intuitive navigation for complex data",
        "Ensuring secure financial calculations"
      ],
      outcomes: [
        "50K+ app downloads",
        "4.7/5 app store rating",
        "35% increase in property inquiries",
        "Featured in real estate technology awards"
      ]
    },
    {
      title: "Celestials Travels",
      category: "Mobile Apps",
      image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&h=600&fit=crop&crop=center",
      roles: ["Mobile App Developer", "Tourism Specialist", "Cultural Consultant"],
      description: "Tourism mobile app for Pakistani northern areas featuring destination guides, booking system, local experiences, and cultural information for travelers.",
      tech: ["React Native", "Node.js", "PostgreSQL", "Stripe", "Google Maps API", "Firebase"],
      additionalImages: [
        "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&h=600&fit=crop&crop=center",
        "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&h=600&fit=crop&crop=center",
        "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&h=600&fit=crop&crop=center"
      ],
      detailedDescription: "Created a comprehensive tourism mobile application that showcases the beauty and culture of Pakistani northern areas. The app serves as a complete travel companion with booking capabilities, local insights, and authentic experiences.",
      features: [
        "Destination guides and travel itineraries",
        "Hotel and experience booking system",
        "Local culture and tradition information",
        "Offline maps and navigation",
        "Emergency contacts and safety information",
        "Community reviews and recommendations"
      ],
      challenges: [
        "Creating comprehensive destination database",
        "Implementing reliable booking system",
        "Managing offline functionality for remote areas",
        "Cultural sensitivity and accurate information"
      ],
      outcomes: [
        "30K+ active users",
        "4.8/5 user rating",
        "25% increase in tourism bookings",
        "Won Pakistan Tourism Innovation Award"
      ]
    },
    {
      title: "Electro Khata",
      category: "Mobile Apps",
      image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&h=600&fit=crop&crop=center",
      roles: ["Mobile App Developer", "FinTech Specialist", "Ledger Expert"],
      description: "Digital ledger mobile app for managing customer-shopkeeper transactions with credit tracking, payment reminders, and financial analytics.",
      tech: ["React Native", "Node.js", "MongoDB", "Stripe", "Firebase", "Chart.js"],
      additionalImages: [
        "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&h=600&fit=crop&crop=center",
        "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&h=600&fit=crop&crop=center",
        "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&h=600&fit=crop&crop=center"
      ],
      detailedDescription: "Developed a digital ledger system that modernizes traditional customer-shopkeeper relationships. The app provides transparent credit tracking, automated reminders, and financial insights to help manage business transactions efficiently.",
      features: [
        "Digital credit and debit ledger management",
        "Automated payment reminders and notifications",
        "Financial analytics and reporting",
        "Secure transaction recording",
        "Multi-shopkeeper account management",
        "Export capabilities for accounting software"
      ],
      challenges: [
        "Ensuring data security and privacy",
        "Creating intuitive ledger interface",
        "Implementing reliable notification system",
        "Managing complex transaction histories"
      ],
      outcomes: [
        "100K+ transactions processed monthly",
        "4.6/5 user satisfaction rating",
        "60% reduction in payment delays",
        "Adopted by 5000+ businesses"
      ]
    },
    {
      title: "PMA Punjab Astransit Authority",
      category: "Mobile Apps",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop&crop=center",
      roles: ["Mobile App Developer", "Government Solutions", "Graphics Designer"],
      description: "Official mobile application for Punjab Astransit Authority (PMA) featuring public transport information, route planning, ticket booking, and real-time updates.",
      tech: ["React Native", "Node.js", "PostgreSQL", "Mapbox", "Government APIs", "Firebase"],
      additionalImages: [
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop&crop=center",
        "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=800&h=600&fit=crop&crop=center",
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop&crop=center"
      ],
      detailedDescription: "Developed the official mobile application for Punjab Astransit Authority, serving as a comprehensive public transportation solution. The app provides real-time information, booking capabilities, and enhances the public transport experience across Punjab.",
      features: [
        "Real-time public transport tracking",
        "Route planning and navigation",
        "Digital ticket booking and payment",
        "Live updates on delays and disruptions",
        "Multi-modal transport integration",
        "Accessibility features for all users"
      ],
      challenges: [
        "Integrating with government transportation APIs",
        "Ensuring real-time data accuracy",
        "Creating inclusive design for diverse users",
        "Managing high-volume user traffic"
      ],
      outcomes: [
        "500K+ active users",
        "4.5/5 government app rating",
        "30% increase in public transport usage",
        "Recognized as Best Government App 2024"
      ]
    }
  ];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-24 sm:py-40 bg-white relative overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-neutral-50/50 -skew-x-12 translate-x-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col gap-8 sm:gap-12 lg:flex-row lg:items-end justify-between mb-16 sm:mb-20 lg:mb-24">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <h2 className="text-[10px] font-black text-[#800000] tracking-[0.6em] uppercase mb-4 sm:mb-6 flex items-center gap-2 sm:gap-4">
              <span className="w-8 sm:w-12 h-[1px] bg-[#800000]" />
              Portfolio_Core
            </h2>
            <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-neutral-900 tracking-tighter leading-[0.85]">
              SELECTED <br className="hidden sm:block"/> <span className="text-[#800000] italic">DEPLOYMENTS</span>
            </h3>
            <p className="mt-6 sm:mt-8 text-neutral-500 font-medium text-base sm:text-lg max-w-md leading-relaxed">
              Filtering through high-impact solutions across specialized engineering domains.
            </p>
          </motion.div>
          
          {/* Enhanced Filter Bar - PMA Style */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-auto"
          >
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {categories.map((cat, index) => (
                <motion.button
                  key={cat.name}
                  onClick={() => setFilter(cat.name)}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`relative p-4 rounded-xl border transition-all duration-300 hover:scale-105 ${
                    filter === cat.name
                      ? 'bg-[#800000] border-[#800000] text-white shadow-lg shadow-[#800000]/20'
                      : 'bg-white/5 backdrop-blur-sm border-white/10 text-neutral-400 hover:border-[#800000]/50 hover:text-[#800000]'
                  }`}
                >
                  <div className="text-2xl mb-2">{cat.icon}</div>
                  <div className={`text-xs font-bold uppercase tracking-wider mb-1 ${
                    filter === cat.name ? 'text-white' : 'text-neutral-300'
                  }`}>
                    {cat.name === 'Systems & Networking' ? 'Systems' :
                     cat.name === 'Web Development' ? 'Web Dev' :
                     cat.name === 'Mobile Apps' ? 'Mobile' :
                     cat.name === 'Data Engineering' ? 'Data' :
                     cat.name === 'Design & Research' ? 'Design' :
                     cat.name}
                  </div>
                  <div className={`text-[10px] leading-tight ${
                    filter === cat.name ? 'text-white/80' : 'text-neutral-500'
                  }`}>
                    {cat.description}
                  </div>
                  {filter === cat.name && (
                    <motion.div
                      layoutId="activeFilter"
                      className="absolute inset-0 bg-[#800000] rounded-xl -z-10"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </motion.button>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Project Grid with Layout Transitions */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8 lg:gap-12 min-h-[400px]"
        >
          {filteredProjects.map((project) => (
            <motion.div 
              layout
              key={project.title} 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
            >
              <ProjectCard 
                project={project} 
              />
            </motion.div>
          ))}

          {filteredProjects.length === 0 && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="col-span-full py-40 text-center"
            >
              <p className="text-neutral-300 font-black tracking-[0.5em] uppercase italic text-sm">
                System_Status: No_Results_Found
              </p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectShowcase;