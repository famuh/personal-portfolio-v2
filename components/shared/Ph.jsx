// Marks content that comes from content/placeholders.js. In development it
// gets a dashed amber underline + tooltip so dummy data is impossible to
// miss; in production it renders the children untouched.
const SHOW_MARKERS = process.env.NODE_ENV !== "production";

export default function Ph({ children, active = true }) {
  if (!SHOW_MARKERS || !active) return children;
  return (
    <span
      data-placeholder=""
      title="Placeholder — ganti di content/placeholders.js"
      className="underline decoration-dev-mark decoration-dashed decoration-2 underline-offset-4"
    >
      {children}
    </span>
  );
}
