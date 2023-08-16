export default function Surtitle({ children, className }) {
  return (
    <span
      className={`flex font-secondary uppercase font-bold tracking-wider ${className}`}
    >
      {children}
    </span>
  );
}
