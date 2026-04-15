
const Button = ({
  children,
  variant = "primary",
  className = "",
  ...props
}) => {
    const baseStyles = "px-6 py-3 rounded-md font-medium transition-all duration-300 shadow-md active:scale-95";
    const variants = {
        primary: "bg-brand-blue text-white hover:bg-white hover:text-brand-blue border-2 border-brand-blue",
        secondary:"bg-brand-grey text-brand-dark hover:bg-white hover:border-brand-dark border-2 border-transparent",
        danger:"bg-brand-red text-white hover:bg-white hover:text-brand-red border-2 border-brand-red",
    };
  return (
    <button
      type="button"
      className={`${baseStyles} ${variants[variant]} ${className}`}
        {...props}
    >
      {children}
    </button>
  );
};

export default Button;
