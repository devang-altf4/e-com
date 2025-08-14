const ShinyText = ({ text, className = "", speed = 5 }) => (
  <span
    className={`font-extrabold pl-4 text-4xl bg-clip-text text-transparent relative inline-block overflow-hidden ${className}`}
    style={{
      backgroundImage:
        "linear-gradient(90deg,#b5b5b5 0 35%,rgba(255,255,255,0.8) 50%,#b5b5b5 65% 100%)",
      backgroundSize: "200% 100%",
      backgroundRepeat: "no-repeat",
      animation: `shine ${speed}s linear infinite`,
    }}
  >
    {text}
    <style jsx>{`
      @keyframes shine {
        0% {
          background-position: -200% 0;
        }
        100% {
          background-position: 200% 0;
        }
      }
    `}</style>
  </span>
);
export default ShinyText;
