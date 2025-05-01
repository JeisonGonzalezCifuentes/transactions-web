type InputProps = {
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  disabled?: boolean;
};

const Input = ({
  type,
  placeholder,
  value,
  onChange,
  className,
  disabled,
}: InputProps) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`p-3 bg-[#292b2a] text-white rounded-lg border border-transparent focus:outline-none focus:ring-2 focus:ring-[#03ff94] transition ${className}`}
      disabled={disabled}
    />
  );
};

export default Input;
