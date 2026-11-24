import Header from "../components/Header";

const schedule = [
  {
    day: "Monday",
    lessons: [
      {
        time: "09:00 - 10:30",
        title: "JavaScript Fundamentals",
        type: "Lecture",
      },
      { time: "11:00 - 12:00", title: "Practical Work", type: "Practice" },
    ],
  },
  {
    day: "Tuesday",
    lessons: [
      { time: "10:00 - 11:30", title: "UI/UX Design", type: "Lecture" },
    ],
  },
  {
    day: "Wednesday",
    lessons: [
      {
        time: "09:00 - 10:30",
        title: "Digital Marketing Basics",
        type: "Lecture",
      },
      { time: "13:00 - 14:00", title: "JavaScript Practice", type: "Practice" },
    ],
  },
  {
    day: "Thursday",
    lessons: [
      { time: "11:00 - 12:30", title: "UI/UX Design", type: "Practice" },
    ],
  },
  {
    day: "Friday",
    lessons: [
      {
        time: "10:00 - 11:30",
        title: "JavaScript Fundamentals",
        type: "Lecture",
      },
    ],
  },
];

const Timetable = () => {
  return (
    <div className="timetable-page">
      <Header title="Time Table" />

      <section className="courses-page-heading">
        <h2>Weekly Schedule</h2>
        <p>Keep track of your learning activities.</p>
      </section>

      <div className="timetable-list">
        {schedule.map((item) => (
          <section className="timetable-day" key={item.day}>
            <h3>{item.day}</h3>

            {item.lessons.map((lesson, index) => (
              <article className="timetable-lesson" key={index}>
                <div className="lesson-time">{lesson.time}</div>

                <div className="lesson-info">
                  <h4>{lesson.title}</h4>
                  <span>{lesson.type}</span>
                </div>

                <div className="lesson-indicator" />
              </article>
            ))}
          </section>
        ))}
      </div>
    </div>
  );
};

export default Timetable;
