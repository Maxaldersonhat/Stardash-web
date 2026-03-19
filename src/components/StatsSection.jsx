import React, { useState, useEffect, useRef } from 'react';

const stats = [
  { label: 'Happy Clients',     value: 500,    suffix: '+' },
  { label: 'Years Experience',  value: 3,      suffix: ''  },
  { label: 'Cleaning Sessions', value: 10000,  suffix: '+', separator: true },
  { label: 'Satisfaction Rate', value: 98,     suffix: '%' },
];

function useCountUp(target, duration = 1800, triggered) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!triggered) return;

    let startTime = null;
    const start = 0;

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // Ease out: fast start, slow end
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * (target - start) + start));
      if (progress < 1) requestAnimationFrame(step);
      else setCount(target);
    };

    requestAnimationFrame(step);
  }, [triggered, target, duration]);

  return count;
}

function StatItem({ label, value, suffix, separator, triggered }) {
  const count = useCountUp(value, 1800, triggered);
  const display = separator ? count.toLocaleString() : count;

  return (
    <div>
      <div className="text-3xl font-bold text-blue-600">
        {display}{suffix}
      </div>
      <div className="mt-1 text-gray-600">{label}</div>
    </div>
  );
}

export default function StatsSection() {
  const [triggered, setTriggered] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTriggered(true);
          observer.disconnect(); // only animate once
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
        {stats.map((stat) => (
          <StatItem key={stat.label} {...stat} triggered={triggered} />
        ))}
      </div>
    </section>
  );
}