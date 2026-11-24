type SidebarProps = {
  activePage: string;
  onNavigate: (page: string) => void;
};

const Sidebar = ({ activePage, onNavigate }: SidebarProps) => {
  const menuItems = [
    { id: "dashboard", label: "Home", icon: "⌂" },
    { id: "courses", label: "My Courses", icon: "▤" },
    { id: "assignments", label: "Assignments", icon: "☷" },
    { id: "timetable", label: "Time Table", icon: "▦" },
    { id: "profile", label: "Profile", icon: "♙" },
    { id: "settings", label: "Settings", icon: "⚙" },
  ];

  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <span>🎓</span>
        <h2>OXFORD</h2>
      </div>

      <div className="sidebar-user">
        <div className="avatar">I</div>
        <div>
          <strong>Ira</strong>
          <small>Student</small>
        </div>
      </div>

      <nav className="sidebar-nav">
        {menuItems.map((item) => (
          <button
            key={item.id}
            className={`nav-item ${activePage === item.id ? "active" : ""}`}
            onClick={() => onNavigate(item.id)}
          >
            <span>{item.icon}</span>
            {item.label}
          </button>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
