import Header from "../components/Header";

const assignments = [
  {
    id: 1,
    title: "JavaScript Homework",
    course: "JavaScript Fundamentals",
    deadline: "November 28, 2026",
    status: "In Progress",
  },
  {
    id: 2,
    title: "Design a Landing Page",
    course: "UI/UX Design",
    deadline: "December 2, 2026",
    status: "Not Started",
  },
  {
    id: 3,
    title: "Marketing Strategy",
    course: "Digital Marketing Basics",
    deadline: "December 5, 2026",
    status: "Completed",
  },
];

const Assignments = () => {
  return (
    <div className="assignments-page">
      <Header title="Assignments" />

      <section className="courses-page-heading">
        <h2>My Assignments</h2>
        <p>Keep track of your tasks and deadlines.</p>
      </section>

      <div className="assignments-list">
        {assignments.map((assignment) => (
          <article className="assignment-card" key={assignment.id}>
            <div>
              <h3>{assignment.title}</h3>
              <p>{assignment.course}</p>
              <small>Deadline: {assignment.deadline}</small>
            </div>

            <span
              className={`assignment-status ${assignment.status
                .toLowerCase()
                .replace(" ", "-")}`}
            >
              {assignment.status}
            </span>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Assignments;
