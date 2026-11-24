import Header from "../components/Header";

const Profile = () => {
  return (
    <div className="profile-page">
      <Header title="My Profile" />

      <section className="profile-card">
        <div className="profile-avatar">I</div>

        <h2>Ira</h2>
        <p className="profile-role">Student</p>
        <p className="profile-email">ira.student@example.com</p>
      </section>

      <section className="profile-info">
        <h2>Personal Information</h2>

        <div className="profile-info-grid">
          <div>
            <span>Full Name</span>
            <strong>Ira</strong>
          </div>

          <div>
            <span>Role</span>
            <strong>Student</strong>
          </div>

          <div>
            <span>Study Level</span>
            <strong>Beginner</strong>
          </div>

          <div>
            <span>Platform</span>
            <strong>EDU SPACE</strong>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Profile;
