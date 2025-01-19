const Button = ({ children, onClick, className = '' }) => {
  return (
    <button
      onClick={onClick}
      className={`
        relative
        font-['Chillax-bold']
        text-lg
        px-6
        py-2.5
        rounded-full
        bg-[#1a1a1a]/80
        overflow-hidden
        group
        hover:scale-105
        transition-all
        duration-200
      `}
    >
      {/* Gradient border container */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#cb76ff] to-[#cbfc76]" />
      
      {/* Dark background with slight padding to create border effect */}
      <div className="absolute inset-[2px] rounded-full bg-[#1a1a1a]" />
      
      {/* Content container */}
      <div className="relative flex items-center gap-2">
        {/* Text with gradient */}
        <span className="bg-gradient-to-r from-[#cb76ff] to-[#cbfc76] bg-clip-text text-transparent">
          {children}
        </span>
        
        {/* Arrow with gradient */}
        <span className="bg-gradient-to-r from-[#cb76ff] to-[#cbfc76] bg-clip-text text-transparent">
          →
        </span>
      </div>
    </button>
  );
};

export default Button;