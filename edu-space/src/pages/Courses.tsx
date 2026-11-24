import { useState } from "react";
import { courses } from "../data/courses";
import Header from "../components/Header";

const Courses = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredCourses =
    selectedCategory === "all"
      ? courses
      : courses.filter((course) => course.category === selectedCategory);

  return (
    <div className="courses-page">
      <Header title="My Courses" />

      <section className="courses-page-heading">
        <h2>Explore Courses</h2>
        <p>Find your next learning opportunity.</p>
      </section>

      <div className="course-filters">
        {["all", "programming", "design", "marketing", "business"].map(
          (category) => (
            <button
              key={category}
              className={
                selectedCategory === category ? "filter active" : "filter"
              }
              onClick={() => setSelectedCategory(category)}
            >
              {category === "all"
                ? "All Courses"
                : category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ),
        )}
      </div>

      <div className="dashboard-courses">
        {filteredCourses.map((course) => (
          <article className="dashboard-course-card" key={course.id}>
            <span className="course-category">{course.category}</span>

            <h3>{course.title}</h3>

            <p>{course.description}</p>

            <div className="course-extra-info">
              <span>📚 {course.metadata?.level ?? "Not specified"}</span>
              <span>🌐 {course.metadata?.language ?? "Not specified"}</span>
              <span>
                📝 {course.metadata?.practicalWorks ?? 0} practical works
              </span>
              <span>⏱ {course.duration} hours</span>
            </div>

            <div className="course-card-footer">
              <span>★ {course.rating ?? "No rating"}</span>

              <span>
                {course.metadata?.hasCertificate
                  ? "🏆 Certificate"
                  : "No certificate"}
              </span>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Courses;
