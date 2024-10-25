export default function Surtitle({ children, className }) {
  return (
    <span
      className={`flex font-secondary text-xs font-bold uppercase tracking-widest md:text-sm ${className}`}
    >
      {children}
    </span>
  );
}
