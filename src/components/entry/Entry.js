import "./entry.css";

export function Entry({ children, title, date, text }) {
  return (
    <section className="entry">
      {children}
      <p className="p">{date}</p>
      <h3>{title}</h3>
      <p>{text}</p>
    </section>
  );
}
