type StatCardProps = {
  title: string;
  value: string | number;
  icon: string;
};

const StatCard = ({ title, value, icon }: StatCardProps) => {
  return (
    <article className="stat-card">
      <div className="stat-icon">{icon}</div>
      <div>
        <p>{title}</p>
        <h2>{value}</h2>
      </div>
    </article>
  );
};

export default StatCard;
