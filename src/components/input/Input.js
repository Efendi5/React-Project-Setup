import "./input.css";
export function Input({ children, text }) {
  return (
    <>
      <label className="input-label">{text}</label>
      <input type={text} className="input">
        {children}
      </input>
    </>
  );
}
