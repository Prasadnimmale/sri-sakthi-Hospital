export const contact = {
  address: {
    lines: [
      "79-16-6, Tilak Road,",
      "Opposite Lane to Sai Baba Temple",
      "Rajahmundry, East Godavari District",
      "Andhra Pradesh – 533101",
    ],
  },
  phones: ["9494456007", "0883-2422189"],
  phonePrimary: "9494456007",
  phoneSecondary: "0883-2422189",
  email: "srisakthihospitalrjy@gmail.com",
  timings: {
    label: "Consultation Timings",
    morning: { label: "Morning", value: "9:00 AM – 12:30 PM" },
    evening: { label: "Evening", value: "5:30 PM – 9:00 PM" },
    note: "Walk-in & Appointment Based",
  },
  whatsapp: "https://wa.me/919494456007",
  socials: {
    facebook: "https://www.facebook.com/srisakthi.hospital.rjy/",
    instagram: "https://www.instagram.com/sri_sakthi_hospital/",
  },
  mapsEmbed:
    "https://www.google.com/maps?q=Sri+Sakthi+Hospital,+Tilak+Road,+Rajahmundry,+Andhra+Pradesh+533101&output=embed",
  mapsDirections:
    "https://www.google.com/maps/dir/?api=1&destination=Sri+Sakthi+Hospital,+Tilak+Road,+Rajahmundry,+Andhra+Pradesh+533101",
  departments: [
    "General Medicine",
    "Family Medicine",
    "Diabetology",
    "Infectious Diseases",
    "Day Care",
    "Emergency Care",
  ],
} as const;

export const tel = (phone: string) => `tel:${phone.replace(/[^+\d]/g, "")}`;
