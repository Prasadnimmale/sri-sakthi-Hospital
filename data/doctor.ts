export const doctor = {
  name: "Dr. Sakthi Narasimha Garikapati",
  label: "MEET YOUR DOCTOR",
  credentials: ["MBBS", "DNB Family Medicine", "FCD", "FIIM", "PGPID"],
  description:
    "With extensive experience in family medicine, internal medicine, diabetology, and infectious diseases, Dr. Sakthi is dedicated to delivering accurate diagnosis, ethical treatment, and long-term patient wellness.",
  expertiseHeading: "Areas of Expertise",
  expertise: [
    "Family Medicine",
    "Internal Medicine",
    "Clinical Diabetology",
    "Infectious Diseases",
  ],
  experienceLabel: "15+ Years",
  experienceSub: "Clinical Experience",
  registration: {
    label: "Medical Registration",
    number: "No. 66982",
  },
  images: {
    // Image 1 — HERO, right side circle (square webp crop)
    hero: "/images/doc-1-hero.webp",
    // Image 2 — ABOUT, right side image
    about: "/images/dd-1.jpg",
  },
  alt: {
    hero: "Dr. Sakthi Narasimha Garikapati at Sri Sakthi Hospital",
    about: "Dr. Sakthi Narasimha Garikapati, Sri Sakthi Hospital",
  },
  knowYourDoctor: [
    {
      image: "/images/dr-sakthi-doctor.jpg",
      imageAlt: "Dr. Sakthi Narasimha Garikapati in white coat",
      title: "Education & Credentials",
      description:
        "MBBS with DNB Family Medicine, along with FCD, FIIM and PGPID — a strong foundation in primary, family and internal medicine.",
    },
    {
      image: "/images/dd-1.jpg",
      imageAlt: "Dr. Sakthi Narasimha Garikapati at Sri Sakthi Hospital",
      title: "15+ Years of Clinical Experience",
      description:
        "Deep experience across family medicine, internal medicine, diabetology and infectious diseases, delivering accurate diagnosis and ethical treatment day after day.",
    },
    {
      image: "/images/hospital-1.webp",
      imageAlt: "Patient consultation at Sri Sakthi Hospital",
      title: "Patient-First Care",
      description:
        "Consultations available in English, Telugu and Hindi, with a compassionate, personal approach focused on long-term patient wellness.",
    },
  ] as const,
  meetDoctor: {
    label: "Meet Your Doctor",
    name: "Dr. Sakthi Narasimha Garikapati",
    intro:
      "Dr. Sakthi Narasimha Garikapati is a highly trained physician with strong expertise in emergency medicine, chronic disease management, and preventive healthcare. His approach combines medical excellence with compassionate patient care.",
    philosophy: {
      heading: "Professional Philosophy",
      body: "Dr. Sakthi believes that every patient deserves time, clarity, and confidence in their treatment journey. His focus is on accurate diagnosis, evidence-based treatment, and long-term wellness planning. He treats each patient as an individual, taking time to understand their unique health concerns and lifestyle factors.",
    },
    qualificationsHeading: "Qualifications & Expertise",
    qualifications: [
      {
        short: "MBBS",
        full: "Bachelor of Medicine and Bachelor of Surgery",
        detail:
          "The foundational medical degree that provides comprehensive training in all aspects of medicine and surgery. This degree ensures expertise in diagnosis, treatment, and patient care across all medical disciplines.",
      },
      {
        short: "DNB Family Medicine",
        full: "Diplomate of National Board in Family Medicine",
        detail:
          "A prestigious postgraduate qualification focused on comprehensive family healthcare. This specialization enables holistic treatment of patients across all ages, managing chronic conditions and providing preventive care.",
      },
      {
        short: "FCD",
        full: "Fellowship in Clinical Diabetology",
        detail:
          "Advanced training in diabetes management, including insulin therapy, lifestyle modifications, and prevention of diabetic complications. Expertise in managing Type 1, Type 2, and gestational diabetes.",
      },
      {
        short: "FIIM",
        full: "Fellowship in Internal Medicine",
        detail:
          "Specialized training in internal medicine covering complex medical conditions, multi-organ diseases, and advanced diagnostic techniques. Enables comprehensive care for adult patients with various health conditions.",
      },
      {
        short: "PGPID",
        full: "Postgraduate Program in Infectious Diseases",
        detail:
          "Specialized expertise in diagnosing and treating infectious diseases including viral, bacterial, and parasitic infections. Critical knowledge for managing epidemics and emerging infectious threats.",
      },
    ],
    trainingHeading: "Training & Certifications",
    training: [
      "Basic Life Support (BLS)",
      "Advanced Cardiac Life Support (ACLS)",
      "Emergency Care & Critical Care Management",
      "Chronic Disease Follow-up Programs",
    ],
    achievementsHeading: "Achievements",
    achievements: [
      "Advanced Management of Diabetes – Harvard Medical School",
      "ESC Certification in Hypertension Management",
      "Board Certified in Emergency & Pain Management",
    ],
  } as const,
} as const;
