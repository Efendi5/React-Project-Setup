import "./textarea.css";

export function Textarea({ children, text }) {
  return (
    <>
      <label className="textarea-label">{text}</label>
      <textarea className="textarea">{children}</textarea>
    </>
  );
}
