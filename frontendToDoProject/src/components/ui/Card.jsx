export function Card({ children, className }) {
  return (
    <div className={`bg-sky-900 p-14 rounded-md ${className} `}>
      {children}
    </div>
  );
}

export default Card;
