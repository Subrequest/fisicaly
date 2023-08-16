export default function Surtitle({ children, className }) {
  return (
    <span
      className={`flex font-secondary uppercase font-bold tracking-widest ${className}`}
    >
      {children}
    </span>
  );
}
