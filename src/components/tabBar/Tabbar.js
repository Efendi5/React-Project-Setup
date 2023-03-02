import "./tabbar.css";

export function TabBar({ children, firstTab, secondTab }) {
  return (
    <div className="tab-bar">
      <p className="entries">{firstTab}</p>
      <p>{secondTab}</p>
    </div>
  );
}
