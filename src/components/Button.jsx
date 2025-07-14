export default function Button({ buttonLabel, isWidthFull = false }) {
  return (
    <button className={isWidthFull ? "btn-main w-full" : "btn-main"}>
      {/* Background layers */}
      <span></span>

      <span></span>

      {/* Border corners */}
      <span></span>
      <span></span>

      {/* Text */}
      {buttonLabel}
    </button>
  );
}
