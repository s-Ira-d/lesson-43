import { courses } from "../data/courses";
import type { Course } from "../types/course.types";

export function getCourseInfo(id: number): Course | undefined;

export function getCourseInfo(title: string): Course | undefined;

export function getCourseInfo(value: number | string): Course | undefined {
  if (typeof value === "number") {
    return courses.find((course) => course.id === value);
  }

  return courses.find(
    (course) => course.title.toLocaleLowerCase() === value.toLocaleLowerCase(),
  );
}

export function getInstructorName(course: Course): string {
  return course.details?.instructor?.fullName ?? "Not assigned";
}

export function getCertificateUrl(course: Course): string {
  return course.details?.certificate?.url ?? "Link is not available";
}

export function getFirstMaterialTitle(course: Course): string {
  return course.details?.materials?.[0]?.title ?? "No materials";
}

export function getCourseRating(course: Course): string | number {
  return course.rating ?? "No rating";
}
