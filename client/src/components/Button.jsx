import { Link } from "react-router-dom";
export default function Button({
  buttonLabel,
  isWidthFull = false,
  isNormalPedding = false,
  onClick,
}) {
  return (
    <Link to={onClick}>
      <button
        className={`${isWidthFull ? "btn-main w-full" : "btn-main"} ${
          isNormalPedding
            ? "py-[.5rem] px-[1.5rem] text-sm capitalize"
            : "py-[1rem] px-[2rem] text-base"
        }`}
      >
        {/* Background layers */}
        <span></span>

        <span></span>

        {/* Border corners */}
        <span></span>
        <span></span>

        {/* Text */}
        {buttonLabel}
      </button>
    </Link>
  );
}
