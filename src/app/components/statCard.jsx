const { default: React, useState, useRef, useEffect } = require("react");

const useCountUp = (target, duration = 2000, start = false) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;
    let startTime = null;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, [start, target, duration]);

  return count;
};

const StatCard = ({ stat, index, isVisible, hoveredStat, setHoveredStat }) => {
  const shouldCount = index < 2; // only Projects Delivered and Happy Clients
  const count = useCountUp(stat.value, 2000, isVisible && shouldCount);
  const displayValue = shouldCount ? count : stat.value;

  return (
    <div
      onMouseEnter={() => setHoveredStat(index)}
      onMouseLeave={() => setHoveredStat(null)}
      className={`relative p-6 rounded-2xl border transition-all duration-300 cursor-default overflow-hidden ${
        hoveredStat === index
          ? "border-[#00baba]/50 bg-[#00baba]/10"
          : "border-white/10 bg-white/5"
      }`}
    >
      <div
        className={`absolute inset-0 bg-[#00baba]/5 rounded-2xl transition-opacity duration-300 ${
          hoveredStat === index ? "opacity-100" : "opacity-0"
        }`}
      />
      <h3
        className={`text-4xl font-bold mb-1 transition-colors duration-300 ${
          hoveredStat === index ? "text-[#00baba]" : ""
        }`}
      >
        {displayValue}
        {stat.suffix}
      </h3>
      <p className="text-gray-500 text-sm">{stat.label}</p>
    </div>
  );
};

export default StatCard;
