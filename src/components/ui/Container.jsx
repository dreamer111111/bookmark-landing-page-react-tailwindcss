
const Container = ({ children, className="", size="lg" }) => {
    const sizes = {
        sm: "max-w-xl",
        md: "max-w-3xl",
        lg: "max-w-6xl",
    }
  return (
    <div className={`mx-auto px-6 md:px-12 ${sizes[size]} ${className}`}>
      {children}
    </div>
  )
}

export default Container