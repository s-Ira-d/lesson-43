export type CourseCategory =
  | "programming"
  | "design"
  | "marketing"
  | "business";

export type CourseMetadata = {
  language: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  practicalWorks: number;
  hasCertificate: boolean;
};

export type CourseInstructor = {
  id: number;
  fullName: string;
  email?: string;
};

export type CourseCertificate = {
  available: boolean;
  url?: string;
};

export type CourseMaterial = {
  title: string;
  url: string;
};

export type CourseDetails = {
  instructor?: CourseInstructor;
  certificate?: CourseCertificate;
  materials?: CourseMaterial[];
};

export type Course = {
  id: number;
  title: string;
  description: string;
  duration: number;
  category: CourseCategory;
  metadata?: CourseMetadata;
  details?: CourseDetails;
  rating?: number | null;
};
