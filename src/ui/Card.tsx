type CardProps = {
  children: React.ReactNode;
  className?: string;
};

const Card = ({ children, className }: CardProps) => {
  return (
    <div className={`bg-[#292b2a] p-6 rounded-xl shadow-lg ${className}`}>
      {children}
    </div>
  );
};

export default Card;
