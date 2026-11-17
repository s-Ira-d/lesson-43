import type { Course } from "../types/course.types";

export const courses: Course[] = [
  {
    id: 1,
    title: "JavaScript Fundamentals",
    description:
      "Learn the basics of JavaScript and start building interactive applications.",
    duration: 36,
    category: "programming",
    rating: 4.8,

    metadata: {
      language: "English",
      level: "Beginner",
      practicalWorks: 8,
      hasCertificate: true,
    },

    details: {
      instructor: {
        id: 101,
        fullName: "Anna Smith",
        email: "anna@eduspace.com",
      },

      certificate: {
        available: true,
        url: "https://example.com/certificates/javascript",
      },

      materials: [
        {
          title: "JavaScript course guide",
          url: "https://example.com/materials/javascript-guide",
        },
      ],
    },
  },

  {
    id: 2,
    title: "UI/UX Design",
    description:
      "Explore user research, wireframes, prototypes, and interface design.",
    duration: 24,
    category: "design",
    rating: null,

    metadata: {
      language: "Ukrainian",
      level: "Intermediate",
      practicalWorks: 5,
      hasCertificate: true,
    },

    details: {
      certificate: {
        available: true,
      },
    },
  },

  {
    id: 3,
    title: "Digital Marketing Basics",
    description:
      "Understand digital channels, content planning, and campaign metrics.",
    duration: 18,
    category: "marketing",
    rating: 4.6,

    metadata: {
      language: "English",
      level: "Beginner",
      practicalWorks: 4,
      hasCertificate: false,
    },

    details: {
      instructor: {
        id: 102,
        fullName: "John Brown",
      },

      materials: [
        {
          title: "Marketing checklist",
          url: "https://example.com/materials/marketing-checklist",
        },
      ],
    },
  },
];
