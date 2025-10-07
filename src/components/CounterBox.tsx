import { useCountUp } from '@/hooks/useCountUp';

interface CounterBoxProps {
  end: number;
  duration?: number;
  suffix?: string;
  title: string;
  delay?: number;
}

export const CounterBox = ({ end, duration = 2000, suffix = '', title, delay = 0 }: CounterBoxProps) => {
  const { ref, count } = useCountUp({ end, duration });

  return (
    <div 
      ref={ref} 
      className="inner wow fadeInLeft transition-all duration-[var(--transition-base)]" 
      data-wow-delay={`${delay}ms`}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="count-outer count-box">
        <span className="count-text text-[color:var(--color-primary)] font-bold text-[length:var(--font-size-h1)]">{count}</span>
        <span className="text-[color:var(--color-primary)] font-bold text-[length:var(--font-size-h2)]">{suffix}</span>
        <div className="counter-title text-[color:var(--color-text-primary)] text-[length:var(--font-size-base)] mt-[var(--spacing-sm)]">{title}</div>
      </div>
    </div>
  );
};
