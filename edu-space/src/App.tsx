import { useState } from "react";
import Courses from "./pages/Courses";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import Assignments from "./pages/Assignments";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import Timetable from "./pages/Timetable";

function App() {
  const [activePage, setActivePage] = useState("dashboard");

  const renderPage = () => {
    switch (activePage) {
      case "dashboard":
        return <Dashboard />;

      case "courses":
        return <Courses />;

      case "assignments":
        return <Assignments />;

      case "profile":
        return <Profile />;

      case "settings":
        return <Settings />;

      case "timetable":
        return <Timetable />;

      default:
        return (
          <div className="coming-soon">
            <h1>{activePage}</h1>
            <p>This page is coming soon.</p>
            <button onClick={() => setActivePage("dashboard")}>
              Back to Dashboard
            </button>
          </div>
        );
    }
  };

  return (
    <div className="app-layout">
      <Sidebar activePage={activePage} onNavigate={setActivePage} />

      <main className="main-content">{renderPage()}</main>
    </div>
  );
}

export default App;
