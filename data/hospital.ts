export const hospital = {
  name: "Sri Sakthi Hospital",
  shortName: "Sri Sakthi",
  tagline: "Listening • Caring • Healing",
  description:
    "Sri Sakthi Hospital in Rajahmundry provides patient-focused healthcare, outpatient and inpatient care, day care, diagnostics, pharmacy, emergency support and consultation services.",
  heroSupport:
    "Led by Dr. Sakthi Narasimha Garikapati, delivering patient-focused healthcare with 15+ years of clinical excellence.",
  heroLabel: ["Listening", "Caring", "Healing"],
  heroHeading: ["Compassionate Care.", "Trusted Medicine.", "Advanced Healing."],
  heroTrust: [
    "15+ Years Clinical Experience",
    "Multilingual Care – English, Telugu, Hindi",
    "OPD • IPD • Day Care",
    "Emergency & Chronic Care",
  ],
  welcome: {
    label: "Welcome to Sri Sakthi Hospital",
    heading: "Healthcare Built on Compassion, Precision and Trust",
    paragraphs: [
      "At Sri Sakthi Hospital, we believe great healthcare begins with compassion, precision, and trust. Our mission is to provide high-quality medical care that combines clinical expertise with genuine human care.",
      "From routine consultations to complex medical conditions, we are committed to your health at every stage of life. Our patient-first approach ensures you receive personalized attention and the best possible outcomes.",
    ],
    features: [
      {
        title: "Compassion",
        text: "We treat every patient with empathy and genuine care.",
      },
      {
        title: "Precision",
        text: "Accurate diagnosis and evidence-based treatment protocols.",
      },
      {
        title: "Trust",
        text: "Building lasting relationships with our patients and community.",
      },
    ],
  },
  stats: [
    { value: "15+", label: "Years of Clinical Excellence", span: "wide" },
    { value: "OPD", label: "Outpatient Care", span: "narrow" },
    { value: "IPD", label: "Inpatient Care", span: "narrow" },
    { value: "24/7", label: "Emergency Care", span: "narrow" },
    { value: "Day", label: "Day Care Services", span: "narrow" },
  ] as { value: string; label: string; span: "wide" | "narrow" }[],
  hospitalSection: {
    intro: {
      title: "Sri Sakthi Hospital",
      heading: "Caring Beyond Treatment",
      description:
        "Sri Sakthi Hospital is a modern healthcare center built on the values of compassion, clinical excellence, and patient safety. We aim to deliver reliable healthcare services for individuals and families with dignity and respect.",
    },
    heading: "Our Hospital Gallery",
    description:
      "A glimpse into our world-class healthcare facilities.",
    vision: {
      title: "Our Vision",
      description:
        "To be the leading healthcare provider known for innovation, excellence, and patient-centered care. We strive to set new standards in medical treatment while maintaining the human touch that makes healthcare truly compassionate.",
      focusAreas: [
        "Leading healthcare provider in the region",
        "Innovation in medical treatment and technology",
        "Excellence in patient care and outcomes",
        "Patient-centered approach in all services",
        "Maintaining compassion and human touch",
        "Setting new standards in healthcare delivery",
      ],
    },
    mission: {
      title: "Our Mission",
      description:
        "To provide compassionate, high-quality healthcare to the community through ethical practice and advanced medical care. We are committed to treating every patient with dignity, respect, and the highest standards of medical excellence.",
      focusAreas: [
        "Compassionate care for every patient",
        "High-quality healthcare services",
        "Ethical medical practice",
        "Advanced medical care and technology",
        "Treating patients with dignity and respect",
        "Highest standards of medical excellence",
      ],
    },
    facilities: [
      {
        title: "Fully Equipped Consultation Rooms",
        description: "Modern consultation rooms designed for comprehensive patient examinations and consultations.",
        icon: "consultation",
        features: [
          "Private and comfortable consultation spaces",
          "Modern medical examination equipment",
          "Electronic health records system",
          "Patient privacy ensured",
          "Accessible for differently-abled patients",
        ],
      },
      {
        title: "Inpatient Rooms with Continuous Monitoring",
        description: "Comfortable inpatient facilities with round-the-clock monitoring for patients requiring extended care.",
        icon: "inpatient",
        features: [
          "24/7 nursing care and supervision",
          "Vital signs monitoring equipment",
          "Comfortable beds with adjustable positions",
          "Emergency call system",
          "Family visiting facilities",
        ],
      },
      {
        title: "Advanced Diagnostic Laboratory",
        description: "State-of-the-art laboratory with modern equipment for accurate and timely diagnostic testing.",
        icon: "diagnostics",
        features: [
          "Complete blood count and analysis",
          "Biochemistry tests",
          "Thyroid and hormonal profiles",
          "Rapid test results",
          "Quality-controlled processes",
        ],
      },
      {
        title: "In-house Pharmacy",
        description: "Convenient pharmacy within the hospital premises offering quality medicines at affordable prices.",
        icon: "pharmacy",
        features: [
          "Wide range of medicines available",
          "Affordable pricing",
          "Prescription verification",
          "Medicine counseling by pharmacist",
          "Home delivery available",
        ],
      },
      {
        title: "Emergency & Day Care Units",
        description: "Fully equipped emergency unit for urgent care and day care facilities for short-term treatments.",
        icon: "emergency",
        features: [
          "24/7 emergency services",
          "Rapid response team",
          "Day care procedures without overnight stay",
          "IV therapy and nebulization",
          "Post-procedure observation area",
        ],
      },
    ],
    clinicalStrengths: [
      {
        title: "Emergency & Trauma Management",
        description: "Expert handling of medical emergencies and trauma cases with rapid response protocols.",
        icon: "emergency",
        features: [
          "Rapid triage and assessment",
          "Emergency stabilization",
          "Critical care management",
          "Trauma first aid",
          "Referral coordination when needed",
        ],
      },
      {
        title: "Cardiac & Respiratory Emergencies",
        description: "Specialized care for heart and breathing emergencies with experienced medical staff.",
        icon: "cardiac",
        features: [
          "Chest pain evaluation",
          "Cardiac monitoring",
          "Oxygen therapy",
          "Nebulization for respiratory distress",
          "ECG and cardiac assessment",
        ],
      },
      {
        title: "Chronic Disease Programs",
        description: "Comprehensive management programs for long-term conditions like diabetes and hypertension.",
        icon: "chronic",
        features: [
          "Diabetes management and monitoring",
          "Hypertension control programs",
          "Regular health check-ups",
          "Lifestyle modification counseling",
          "Medication optimization",
        ],
      },
      {
        title: "Preventive Health Education",
        description: "Patient education programs focused on disease prevention and healthy lifestyle choices.",
        icon: "preventive",
        features: [
          "Health awareness sessions",
          "Diet and nutrition counseling",
          "Exercise and lifestyle guidance",
          "Disease prevention strategies",
          "Health screening programs",
        ],
      },
      {
        title: "Community Health Camps & Awareness Programs",
        description: "Regular community outreach programs providing free health check-ups and awareness.",
        icon: "community",
        features: [
          "Free health screening camps",
          "Blood donation drives",
          "Health awareness campaigns",
          "School health programs",
          "Senior citizen health initiatives",
        ],
      },
    ],
    photos: [
      {
        src: "/images/hospital-1.webp",
        alt: "Sri Sakthi Hospital patient checkup",
        caption: "Patient Checkup",
        details:
          "Comprehensive outpatient consultations with detailed examination, clear diagnosis and personalized treatment plans under the guidance of experienced doctors.",
      },
      {
        src: "/images/hospital-2.webp",
        alt: "Sri Sakthi Hospital building exterior",
        caption: "Outdoor Health Camp",
        details:
          "Regular outdoor health camps that bring checkups, screenings and doctor consultations directly to the community, making preventive care accessible to everyone.",
      },
      {
        src: "/images/hospital-3.webp",
        alt: "Sri Sakthi Hospital ward corridor",
        caption: "Medical Equipment",
        details:
          "Modern diagnostic and treatment equipment that supports accurate testing, safe procedures and better clinical outcomes for our patients.",
      },
      {
        src: "/images/hospital-5.webp",
        alt: "Sri Sakthi Hospital patient care area",
        caption: "Community Health Camp",
        details:
          "Community health camps spread awareness and deliver free checkups, extending trusted healthcare beyond the hospital walls to those who need it most.",
      },
    ],
  },
  url: "https://srisakthihospital.com",
} as const;
