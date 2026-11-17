import type { Student, Admin, Instructor } from "./types/user.types";

import {
  createPlatformUser,
  formCourseId,
  showUserRole,
} from "./utils/userHelpers";

import { courses } from "./data/courses";

import {
  getInstructorName,
  getCertificateUrl,
  getCourseRating,
} from "./utils/courseHelperes";

function App() {
  const student: Student = createPlatformUser("Ira", "student");

  const instructor: Instructor = createPlatformUser("Anna Smith", "instructor");

  const admin: Admin = createPlatformUser("Admin", "admin");

  return (
    <main>
      <section>
        <h2>Platform Users</h2>

        <h3>{student.fullName}</h3>
        <p>{showUserRole(student)}</p>
        <p>{student.email}</p>
        <p>Study level: {student.studyLevel}</p>
        <p>Completed lessons: {student.completedLessons}</p>

        <hr />

        <h3>{instructor.fullName}</h3>
        <p>{showUserRole(instructor)}</p>
        <p>{instructor.specialization}</p>

        <hr />

        <h3>{admin.fullName}</h3>
        <p>{showUserRole(admin)}</p>
        <p>Super Admin: {admin.isSuperAdmin ? "Yes" : "No"}</p>
      </section>

      <section>
        <h2>Available Courses</h2>

        {courses.map((c) => (
          <div key={c.id}>
            <h3>{c.title}</h3>

            <p>ID: {formCourseId(c.id)}</p>
            <p>Category: {c.category}</p>
            <p>Description: {c.description}</p>
            <p>Duration: {c.duration} hours</p>
            <p>Rating: {getCourseRating(c)}</p>
            <p>Instructor: {getInstructorName(c)}</p>
            <p>Certificate: {getCertificateUrl(c)}</p>
          </div>
        ))}
      </section>
    </main>
  );
}

export default App;
