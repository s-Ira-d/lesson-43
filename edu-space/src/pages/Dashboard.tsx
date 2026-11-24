import { courses } from "../data/courses";
import Header from "../components/Header";
import StatCard from "../components/StatCard";

const Dashboard = () => {
  const studentName = "Ira";

  return (
    <div className="dashboard">
      <Header title="Dashboard" />

      <section className="welcome-banner">
        <div>
          <p>EDU SPACE / STUDENT PORTAL</p>
          <h2>Welcome back, {studentName}!</h2>
          <p>Continue learning and achieve your goals.</p>
        </div>
        <div className="banner-icon">🎓</div>
      </section>

      <section className="stats-section">
        <StatCard title="Available Courses" value={courses.length} icon="📚" />

        <StatCard title="Completed Lessons" value={5} icon="✓" />

        <StatCard title="Attendance" value="97%" icon="📅" />

        <StatCard title="Course Progress" value="50%" icon="📈" />
      </section>

      <section className="courses-section">
        <div className="section-heading">
          <div>
            <h2>My Courses</h2>
            <p>Continue your learning journey</p>
          </div>
        </div>

        <div className="dashboard-courses">
          {courses.map((course) => (
            <article className="dashboard-course-card" key={course.id}>
              <span className="course-category">{course.category}</span>

              <h3>{course.title}</h3>

              <p>{course.description}</p>

              <div className="course-card-footer">
                <span>{course.duration} hours</span>
                <span>★ {course.rating ?? "No rating"}</span>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
