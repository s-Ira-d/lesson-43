export type UserBase = {
  id: number;
  fullName: string;
  email: string;
};

export type InstructorProfile = {
  specialization: string;
  publishedCourses: number;
};

export type Instructor = UserBase & InstructorProfile;

export type StudentProfile = {
  enrolledCourseIds: number[];
  completedLessons: number;
  studyLevel: "beginner" | "intermediate" | "advanced";
};

export type Student = UserBase & StudentProfile;

export type AdminProfile = {
  isSuperAdmin: boolean;
  permissions: string[];
};

export type Admin = UserBase & AdminProfile;

export type PlatformUser = Student | Instructor | Admin;

export type UserProfile = {
  bio?: string;
  avatar?: {
    url: string;
    alt: string;
  };
};

export type User = {
  id: number;
  fullName: string;
  profile?: UserProfile;
};
