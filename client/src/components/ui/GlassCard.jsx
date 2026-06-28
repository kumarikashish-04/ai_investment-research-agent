function GlassCard({ children, className = "" }) {
    return (
      <div
        className={`
          bg-white/5
          backdrop-blur-lg
          border
          border-white/10
          rounded-2xl
          shadow-2xl
          p-6
          transition-all
          duration-300
          hover:border-green-400/40
          hover:shadow-green-500/10
          ${className}
        `}
      >
        {children}
      </div>
    );
  }
  
  export default GlassCard;
  