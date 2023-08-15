export default function Surtitle({ children, additionnalClass }) {
  return (
    <span
      className={`font-secondary uppercase font-bold tracking-wider ${additionnalClass}`}
    >
      {children}
    </span>
  );
}
