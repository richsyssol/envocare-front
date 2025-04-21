// src/data/servicesData.js
import {
  Building,
  Factory,
  Leaf,
  Gauge,
  HardHat,
  FileText,
  ShieldCheck,
  Trees,
  Cloud,
  FlaskConical,
  Lightbulb,
  Wrench,
  Droplets, // This is the correct name for water-related icon
  Landmark,
  ScrollText,
} from "lucide-react";

export const servicesData = {
  engineering: [
    {
      title: "Urban Infrastructure Planning",
      slug: "urban-infrastructure-planning",
      category: "Engineering",
      description:
        "Comprehensive planning for sustainable urban development projects.",
      detailedDescription:
        "We provide end-to-end urban infrastructure planning services including feasibility studies, master planning, and implementation strategies for sustainable city development. Our team combines technical expertise with innovative approaches to create livable, efficient urban spaces.",
      icon: Building,
      image: "/images/services/engineering/urban-planning.jpg",
      features: [
        "Feasibility studies and site analysis",
        "Master planning and zoning",
        "Transportation infrastructure design",
        "Utility systems planning",
        "Sustainability integration",
        "Public space design",
        "Implementation roadmaps",
      ],
      stats: "500+ projects completed",
      benefits: [
        "Reduced project risks",
        "Cost-effective solutions",
        "Future-proof designs",
        "Regulatory compliance",
        "Stakeholder alignment",
      ],
      process: [
        {
          step: 1,
          title: "Needs Assessment",
          description: "Understanding client requirements and project scope",
        },
        {
          step: 2,
          title: "Site Evaluation",
          description:
            "Comprehensive analysis of physical and environmental factors",
        },
        {
          step: 3,
          title: "Concept Development",
          description: "Creating preliminary designs and alternatives",
        },
        {
          step: 4,
          title: "Stakeholder Review",
          description: "Incorporating feedback from all parties",
        },
        {
          step: 5,
          title: "Final Master Plan",
          description: "Delivering comprehensive implementation-ready plans",
        },
      ],
      caseStudies: [
        {
          title: "Smart City Redevelopment",
          location: "Pune, Maharashtra",
          outcome: "30% increase in infrastructure efficiency",
        },
        {
          title: "Industrial Township Planning",
          location: "Nashik, Maharashtra",
          outcome: "500-acre fully planned development",
        },
      ],
    },
    {
      title: "Water & Wastewater Management",
      slug: "water-wastewater-management",
      category: "Engineering",
      description:
        "Innovative solutions for water resource management and treatment.",
      detailedDescription:
        "Our expertise covers the entire water cycle from sourcing to treatment and recycling, ensuring efficient and sustainable water management systems that meet regulatory standards and community needs.",
      icon: Droplets,
      image: "/images/services/engineering/water-management.jpg",
      features: [
        "Water treatment plant design",
        "Wastewater recycling systems",
        "Stormwater management",
        "Hydrological modeling",
        "Quality monitoring",
        "Pipeline networks",
        "Pumping stations",
      ],
      stats: "300+ treatment plants designed",
      benefits: [
        "Water conservation",
        "Regulatory compliance",
        "Reduced operational costs",
        "Sustainable solutions",
        "Community health benefits",
      ],
      process: [
        {
          step: 1,
          title: "Water Audit",
          description: "Comprehensive assessment of current water systems",
        },
        {
          step: 2,
          title: "System Design",
          description: "Creating customized solutions for water management",
        },
        {
          step: 3,
          title: "Technology Selection",
          description: "Choosing appropriate treatment technologies",
        },
        {
          step: 4,
          title: "Implementation",
          description: "Construction and system installation",
        },
        {
          step: 5,
          title: "Commissioning",
          description: "System testing and operational handover",
        },
      ],
      caseStudies: [
        {
          title: "Municipal Water Treatment",
          location: "Nashik, Maharashtra",
          outcome: "50 MLD capacity plant with 95% efficiency",
        },
        {
          title: "Industrial Effluent Treatment",
          location: "Aurangabad, Maharashtra",
          outcome: "Zero liquid discharge achieved",
        },
      ],
    },
    {
      title: "MEP Works",
      slug: "mep-works",
      category: "Engineering",
      description:
        "Mechanical, Electrical, and Plumbing engineering solutions.",
      detailedDescription:
        "Complete MEP design and implementation services for commercial, industrial and residential projects, ensuring optimal system performance, energy efficiency and code compliance.",
      icon: Wrench,
      image: "/images/services/engineering/mep-works.jpg",
      features: [
        "HVAC system design",
        "Electrical distribution planning",
        "Plumbing and sanitation systems",
        "Fire protection systems",
        "Energy efficiency optimization",
        "Building automation",
        "Lighting design",
      ],
      stats: "200+ buildings equipped",
      benefits: [
        "Energy savings up to 40%",
        "Reduced maintenance costs",
        "Improved occupant comfort",
        "Code compliance assurance",
        "Integrated building systems",
      ],
      process: [
        {
          step: 1,
          title: "Load Calculation",
          description: "Determining system requirements",
        },
        {
          step: 2,
          title: "System Design",
          description: "Creating detailed engineering plans",
        },
        {
          step: 3,
          title: "Equipment Selection",
          description: "Choosing optimal components",
        },
        {
          step: 4,
          title: "Coordination",
          description: "Integrating with architectural elements",
        },
        {
          step: 5,
          title: "Installation Oversight",
          description: "Ensuring quality implementation",
        },
      ],
      caseStudies: [
        {
          title: "Hospital MEP Systems",
          location: "Pune, Maharashtra",
          outcome: "24/7 reliable systems with 30% energy savings",
        },
        {
          title: "Commercial Complex MEP",
          location: "Mumbai, Maharashtra",
          outcome: "LEED Gold certification achieved",
        },
      ],
    },
    {
      title: "Safety Auditor",
      slug: "safety-auditor",
      category: "Engineering",
      description: "Ensuring workplace safety and environmental compliance.",
      detailedDescription:
        "Comprehensive safety audits and risk assessments to identify potential hazards and ensure compliance with occupational health and safety regulations across industrial and construction sites.",
      icon: HardHat,
      image: "/images/services/engineering/safety-audit.jpg",
      features: [
        "Workplace hazard identification",
        "Compliance audits",
        "Risk assessment reports",
        "Safety training programs",
        "Emergency preparedness planning",
        "Environmental impact assessment",
        "Corrective action plans",
      ],
      stats: "1000+ audits conducted",
      benefits: [
        "Reduced workplace accidents",
        "Regulatory compliance",
        "Improved safety culture",
        "Lower insurance premiums",
        "Enhanced productivity",
      ],
      process: [
        {
          step: 1,
          title: "Document Review",
          description: "Examining existing safety protocols",
        },
        {
          step: 2,
          title: "Site Inspection",
          description: "Physical assessment of facilities",
        },
        {
          step: 3,
          title: "Risk Identification",
          description: "Documenting potential hazards",
        },
        {
          step: 4,
          title: "Gap Analysis",
          description: "Comparing with regulatory standards",
        },
        {
          step: 5,
          title: "Recommendations",
          description: "Providing actionable improvement plans",
        },
      ],
      caseStudies: [
        {
          title: "Manufacturing Plant Safety Audit",
          location: "Aurangabad, Maharashtra",
          outcome: "60% reduction in safety incidents",
        },
        {
          title: "Construction Site Safety",
          location: "Navi Mumbai, Maharashtra",
          outcome: "Zero accidents during project duration",
        },
      ],
    },
  ],
  environment: [
    {
      title: "Environment Clearance",
      slug: "environment-clearance",
      category: "Environment",
      description:
        "End-to-end support for environmental compliance and approvals.",
      detailedDescription:
        "We guide industries through the complex process of obtaining environmental clearances and maintaining compliance with all regulations, ensuring smooth project execution while meeting environmental obligations.",
      icon: FileText,
      image: "/images/services/environment/environment-clearance.jpg",
      features: [
        "Environmental Impact Assessments",
        "Regulatory documentation",
        "Public hearing facilitation",
        "Compliance monitoring",
        "Renewal support",
        "Expert testimony",
        "Mitigation planning",
      ],
      stats: "95% success rate in approvals",
      benefits: [
        "Faster approval timelines",
        "Reduced regulatory risks",
        "Community acceptance",
        "Sustainable operations",
        "Legal compliance",
      ],
      process: [
        {
          step: 1,
          title: "Scoping",
          description: "Determining assessment requirements",
        },
        {
          step: 2,
          title: "Baseline Studies",
          description: "Collecting environmental data",
        },
        {
          step: 3,
          title: "Impact Assessment",
          description: "Evaluating project effects",
        },
        {
          step: 4,
          title: "Mitigation Planning",
          description: "Developing reduction measures",
        },
        {
          step: 5,
          title: "Application Submission",
          description: "Preparing and filing documents",
        },
      ],
      caseStudies: [
        {
          title: "Pharmaceutical Plant Clearance",
          location: "Hyderabad, Telangana",
          outcome: "Approval in 90 days (30% faster than average)",
        },
        {
          title: "Mining Project Clearance",
          location: "Goa",
          outcome: "Successful clearance with community support",
        },
      ],
    },
    {
      title: "Green Building Certification",
      slug: "green-building-certification",
      category: "Environment",
      description: "Certification for sustainable, energy-efficient buildings.",
      detailedDescription:
        "We assist projects in achieving green building certifications like LEED, GRIHA, and IGBC through comprehensive planning, documentation support, and sustainable design strategies that reduce environmental impact.",
      icon: Landmark,
      image: "/images/services/environment/green-building.jpg",
      features: [
        "LEED certification support",
        "GRIHA documentation",
        "IGBC compliance",
        "Energy modeling",
        "Material selection guidance",
        "Water efficiency planning",
        "Indoor air quality management",
      ],
      stats: "50+ certified projects",
      benefits: [
        "Reduced operating costs",
        "Higher property value",
        "Improved occupant health",
        "Market differentiation",
        "Tax benefits",
      ],
      process: [
        {
          step: 1,
          title: "Pre-Assessment",
          description: "Evaluating certification potential",
        },
        {
          step: 2,
          title: "Credit Analysis",
          description: "Identifying achievable credits",
        },
        {
          step: 3,
          title: "Design Integration",
          description: "Incorporating sustainable features",
        },
        {
          step: 4,
          title: "Documentation",
          description: "Preparing submission materials",
        },
        {
          step: 5,
          title: "Certification",
          description: "Liaising with rating agencies",
        },
      ],
      caseStudies: [
        {
          title: "LEED Platinum Office Building",
          location: "Bangalore, Karnataka",
          outcome: "40% energy savings achieved",
        },
        {
          title: "IGBC Gold Certified Hospital",
          location: "Pune, Maharashtra",
          outcome:
            "First healthcare facility in region with this certification",
        },
      ],
    },
    {
      title: "Consent from Pollution Board",
      slug: "pollution-board-consent",
      category: "Environment",
      description: "Legal compliance and permissions for industries.",
      detailedDescription:
        "Expert assistance in obtaining Consent to Establish (CTE) and Consent to Operate (CTO) from State Pollution Control Boards, ensuring your business meets all environmental regulations from inception through operation.",
      icon: ShieldCheck,
      image: "/images/services/environment/pollution-consent.jpg",
      features: [
        "CTE/CTO applications",
        "Document preparation",
        "Liaison with authorities",
        "Compliance monitoring",
        "Renewal management",
        "NOC acquisition",
        "Environmental statement filing",
      ],
      stats: "98% approval rate",
      benefits: [
        "Avoid legal penalties",
        "Smooth operations",
        "Expert guidance",
        "Time savings",
        "Regulatory peace of mind",
      ],
      process: [
        {
          step: 1,
          title: "Requirement Analysis",
          description: "Understanding project specifics",
        },
        {
          step: 2,
          title: "Document Preparation",
          description: "Creating comprehensive applications",
        },
        {
          step: 3,
          title: "Submission",
          description: "Filing with regulatory bodies",
        },
        {
          step: 4,
          title: "Follow-up",
          description: "Addressing queries and requests",
        },
        {
          step: 5,
          title: "Approval",
          description: "Securing final consent",
        },
      ],
      caseStudies: [
        {
          title: "Textile Industry CTO",
          location: "Tirupur, Tamil Nadu",
          outcome: "Operational approval despite strict zoning",
        },
        {
          title: "Food Processing CTE",
          location: "Nashik, Maharashtra",
          outcome: "Approval in 45 days (50% faster than industry average)",
        },
      ],
    },
  ],
};

export const allServices = [
  ...servicesData.engineering,
  ...servicesData.environment,
];
