type HeaderProps = {
  title: string;
};

const Header = ({ title }: HeaderProps) => {
  return (
    <header className="dashboard-header">
      <div>
        <h1>{title}</h1>
        <p>Welcome back, Ira!</p>
      </div>

      <div className="header-actions">
        <button aria-label="Notifications">♧</button>
        <button aria-label="Messages">✉</button>
      </div>
    </header>
  );
};

export default Header;
