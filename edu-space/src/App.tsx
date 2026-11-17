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
    <main className="page">
      <header className="hero">
        <span className="hero-label">EDU SPACE</span>
        <h1>Learning Management System</h1>
        <p>Welcome to your educational platform</p>
      </header>

      <section className="section">
        <h2>Platform Users</h2>

        <div className="users-grid">
          <article className="card">
            <span className="user-role">STUDENT</span>
            <h3>{student.fullName}</h3>
            <p>{showUserRole(student)}</p>
            <p>{student.email}</p>
            <div className="info-row">
              <span>Study level</span>
              <strong>{student.studyLevel}</strong>
            </div>
            <div className="info-row">
              <span>Completed lessons</span>
              <strong>{student.completedLessons}</strong>
            </div>
          </article>

          <article className="card">
            <span className="user-role">INSTRUCTOR</span>
            <h3>{instructor.fullName}</h3>
            <p>{showUserRole(instructor)}</p>
            <div className="info-row">
              <span>Specialization</span>
              <strong>{instructor.specialization}</strong>
            </div>
          </article>

          <article className="card">
            <span className="user-role">ADMIN</span>
            <h3>{admin.fullName}</h3>
            <p>{showUserRole(admin)}</p>
            <div className="info-row">
              <span>Super Admin</span>
              <strong>{admin.isSuperAdmin ? "Yes" : "No"}</strong>
            </div>
          </article>
        </div>
      </section>

      <section className="section">
        <h2>Available Courses</h2>

        <div className="courses-grid">
          {courses.map((c) => (
            <article className="course-card" key={c.id}>
              <div className="course-card-top">
                <span className="course-category">{c.category}</span>
                <span className="course-rating">★ {getCourseRating(c)}</span>
              </div>

              <h3>{c.title}</h3>
              <p className="course-description">{c.description}</p>

              <div className="course-info">
                <div className="info-row">
                  <span>Course ID</span>
                  <strong>{formCourseId(c.id)}</strong>
                </div>
                <div className="info-row">
                  <span>Duration</span>
                  <strong>{c.duration} hours</strong>
                </div>
                <div className="info-row">
                  <span>Instructor</span>
                  <strong>{getInstructorName(c)}</strong>
                </div>
                <div className="info-row">
                  <span>Certificate</span>
                  <strong>{getCertificateUrl(c)}</strong>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <footer className="footer">
        <p>© 2026 Edu Space. All rights reserved.</p>
      </footer>
    </main>
  );
}

export default App;
