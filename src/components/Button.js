function Button({ children, isActive, ...rest }) {
  return (
    <button
      {...rest}
      className={`text-white rounded-lg px-2 py-3 hover:bg-blue-600 ${
        isActive ? "bg-blue-800" : "bg-blue-500"
      }`}
    >
      {children}
    </button>
  );
}

export default Button;
