import React, { useState, useEffect, useRef } from 'react';

interface AnimatedCounterProps {
  end: number;
  duration?: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  label: string;
  sublabel?: string;
  icon?: React.ReactNode;
}

export default function AnimatedCounter({
  end,
  duration = 2000,
  decimals = 0,
  prefix = '',
  suffix = '',
  label,
  sublabel,
  icon,
}: AnimatedCounterProps) {
  const [count, setCount] = useState<number>(0);
  const [hasAnimated, setHasAnimated] = useState<boolean>(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.3 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  useEffect(() => {
    if (!hasAnimated) return;

    let startTime: number | null = null;
    let animationFrameId: number;

    const easeOutExpo = (x: number): number => {
      return x === 1 ? 1 : 1 - Math.pow(2, -10 * x);
    };

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const easedProgress = easeOutExpo(progress);
      setCount(easedProgress * end);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(step);
      }
    };

    animationFrameId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationFrameId);
  }, [hasAnimated, end, duration]);

  const formattedValue = count.toFixed(decimals);

  return (
    <div
      ref={elementRef}
      tabIndex={0}
      role="region"
      aria-label={`${label}: ${prefix}${formattedValue}${suffix}. ${sublabel || ''}`}
      className="p-6 rounded-2xl bg-[#161115]/90 border border-[#D97706]/20 hover:border-[#D97706]/50 transition-all duration-300 hover:shadow-[0_10px_30px_rgba(217,119,6,0.15)] group flex flex-col items-center text-center relative overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F59E0B]"
    >
      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-[#D97706]/10 to-transparent rounded-bl-full pointer-events-none" />

      {icon && (
        <div className="w-12 h-12 rounded-xl bg-[#2A181E] border border-[#D97706]/30 text-[#F59E0B] flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
          {icon}
        </div>
      )}

      <div className="font-serif font-bold text-3xl sm:text-4xl gold-gradient-text tracking-tight mb-1">
        {prefix}
        {formattedValue}
        {suffix}
      </div>

      <div className="text-sm font-semibold text-[#F3EFEA] tracking-wide">{label}</div>
      {sublabel && <div className="text-xs text-[#B8A89A] mt-0.5">{sublabel}</div>}
    </div>
  );
}
