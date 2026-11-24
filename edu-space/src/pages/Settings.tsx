import { useState } from "react";
import Header from "../components/Header";

const Settings = () => {
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [assignmentReminders, setAssignmentReminders] = useState(true);
  const [language, setLanguage] = useState("English");

  return (
    <div className="settings-page">
      <Header title="Settings" />

      <section className="courses-page-heading">
        <h2>General Settings</h2>
        <p>Manage your account and preferences.</p>
      </section>

      <section className="settings-card">
        <div className="settings-card-heading">
          <span>👤</span>
          <div>
            <h3>Account Information</h3>
            <p>Your personal account details</p>
          </div>
        </div>

        <div className="settings-field">
          <label>Full Name</label>
          <input type="text" value="Ira" readOnly />
        </div>

        <div className="settings-field">
          <label>Email Address</label>
          <input type="email" value="ira.student@example.com" readOnly />
        </div>

        <div className="settings-field">
          <label>Role</label>
          <input type="text" value="Student" readOnly />
        </div>
      </section>

      <section className="settings-card">
        <div className="settings-card-heading">
          <span>🔔</span>
          <div>
            <h3>Notifications</h3>
            <p>Choose which notifications you want to receive</p>
          </div>
        </div>

        <div className="settings-option">
          <div>
            <strong>Email Notifications</strong>
            <p>Receive updates about your courses</p>
          </div>

          <input
            type="checkbox"
            checked={emailNotifications}
            onChange={(event) => setEmailNotifications(event.target.checked)}
          />
        </div>

        <div className="settings-option">
          <div>
            <strong>Assignment Reminders</strong>
            <p>Get reminders about upcoming assignments</p>
          </div>

          <input
            type="checkbox"
            checked={assignmentReminders}
            onChange={(event) => setAssignmentReminders(event.target.checked)}
          />
        </div>
      </section>

      <section className="settings-card">
        <div className="settings-card-heading">
          <span>🌐</span>
          <div>
            <h3>Language</h3>
            <p>Choose your preferred language</p>
          </div>
        </div>

        <div className="settings-field">
          <label>Platform Language</label>
          <select
            value={language}
            onChange={(event) => setLanguage(event.target.value)}
          >
            <option value="English">English</option>
            <option value="Ukrainian">Ukrainian</option>
          </select>
        </div>
      </section>
    </div>
  );
};

export default Settings;
