import {
  Stethoscope,
  BedDouble,
  Clock3,
  FlaskConical,
  Pill,
  Syringe,
  Siren,
  Activity,
  HeartPulse,
  type LucideIcon,
} from "lucide-react";

export type Service = {
  name: string;
  description: string;
  icon: LucideIcon;
  hours?: string;
  included?: string[];
};

export const servicesIntro = {
  heading: "Our Healthcare Services",
  description:
    "Comprehensive medical services under one roof with a patient-first approach and modern medical standards.",
} as const;

export const services: Service[] = [
  {
    name: "Outpatient Consultation",
    description:
      "Personalized care for general and specialized health conditions.",
    icon: Stethoscope,
  },
  {
    name: "Inpatient Care",
    description:
      "Comfortable admission and continuous monitoring for stable patients.",
    icon: BedDouble,
  },
  {
    name: "Day Care Services",
    description:
      "Short-term medical procedures without overnight admission.",
    icon: Clock3,
  },
  {
    name: "Diagnostic Laboratory",
    description:
      "Accurate testing and timely reports for early diagnosis.",
    icon: FlaskConical,
  },
  {
    name: "Pharmacy",
    description:
      "Quality medicines at affordable prices within hospital premises.",
    icon: Pill,
  },
  {
    name: "IV Therapy & Nebulization",
    description:
      "Safe and effective treatment for acute and chronic conditions.",
    icon: Syringe,
  },
  {
    name: "Emergency Care Available",
    description:
      "Round-the-clock emergency services with experienced staff.",
    icon: Siren,
  },
];

export const servicesPageIntro = {
  heading: "Comprehensive Medical Services Under One Roof",
  description:
    "We provide complete outpatient, inpatient, diagnostic, and emergency services with a patient-first approach and modern medical standards.",
} as const;

export const coreServices: Service[] = [
  {
    name: "Outpatient Consultation",
    description:
      "Personalized care for general and specialized health conditions with thorough examinations and expert diagnosis.",
    icon: Stethoscope,
    hours: "Mon-Sat: 9:00 AM - 1:00 PM & 5:00 PM - 9:00 PM",
    included: [
      "Comprehensive health assessment",
      "Expert diagnosis by experienced physician",
      "Personalized treatment plans",
      "Follow-up care coordination",
      "Health education and counseling",
    ],
  },
  {
    name: "Inpatient Care",
    description:
      "Comfortable admission and continuous monitoring for stable patients requiring extended medical observation.",
    icon: BedDouble,
    hours: "24/7 Admission Available",
    included: [
      "24/7 nursing care and monitoring",
      "Comfortable private and semi-private rooms",
      "Regular physician visits",
      "Nutritious meals as per medical requirements",
      "Family visiting hours",
    ],
  },
  {
    name: "Day Care Services",
    description:
      "Short-term medical procedures without overnight admission, allowing you to return home the same day.",
    icon: Clock3,
    hours: "Mon-Sat: 8:00 AM - 8:00 PM",
    included: [
      "Minor surgical procedures",
      "IV infusions and treatments",
      "Observation for acute conditions",
      "Post-procedure recovery area",
      "Same-day discharge",
    ],
  },
  {
    name: "Diagnostic Laboratory",
    description:
      "Accurate testing and timely reports for early diagnosis with modern laboratory equipment.",
    icon: FlaskConical,
    hours: "Mon-Sat: 7:00 AM - 9:00 PM",
    included: [
      "Complete blood count (CBC)",
      "Blood sugar and HbA1c tests",
      "Lipid profile and liver function tests",
      "Thyroid function tests",
      "Urine and stool analysis",
    ],
  },
  {
    name: "Pharmacy",
    description:
      "Quality medicines at affordable prices within hospital premises for your convenience.",
    icon: Pill,
    hours: "Mon-Sat: 8:00 AM - 10:00 PM",
    included: [
      "Wide range of medicines available",
      "Affordable pricing",
      "Prescription verification",
      "Medicine counseling",
      "Home delivery available",
    ],
  },
  {
    name: "IV Therapy & Nebulization",
    description:
      "Safe and effective treatment for acute and chronic respiratory conditions.",
    icon: Syringe,
    hours: "Available during consultation hours",
    included: [
      "IV fluid administration",
      "Antibiotic infusions",
      "Nebulization therapy for asthma",
      "Bronchodilator treatments",
      "Monitored by trained staff",
    ],
  },
  {
    name: "Emergency Care",
    description:
      "Round-the-clock emergency services with experienced staff ready to handle critical situations.",
    icon: Siren,
    hours: "24/7 Available",
    included: [
      "24/7 emergency response",
      "Rapid triage and assessment",
      "Critical care stabilization",
      "Emergency medications",
      "Referral coordination if needed",
    ],
  },
];

export const conditionsWeTreat: {
  heading: string;
  description: string;
  groups: {
    id: string;
    title: string;
    description: string;
    icon: LucideIcon;
    items: string[];
  }[];
} = {
  heading: "Conditions We Treat",
  description:
    "From everyday acute illnesses to long-term chronic conditions, our team provides complete diagnosis and care.",
  groups: [
    {
      id: "acute",
      title: "Acute illnesses",
      description:
        "Rapid assessment, accurate diagnosis and fast recovery support for sudden or short-term health problems.",
      icon: Activity,
      items: [
        "Fever",
        "Dengue",
        "Malaria",
        "Typhoid",
        "Viral infections",
        "Cough",
        "Breathlessness",
        "Asthma",
        "Vomiting",
        "Diarrhea",
        "Infections",
      ],
    },
    {
      id: "chronic",
      title: "Chronic Conditions",
      description:
        "Ongoing management with regular follow-ups and long-term wellness planning for lasting health.",
      icon: HeartPulse,
      items: [
        "Diabetes",
        "Hypertension",
        "Thyroid disorders",
        "Cholesterol",
        "Cardiac problems",
        "Neurological issues",
        "Joint pain",
        "Elderly care",
        "Skin disorders",
      ],
    },
  ],
};
