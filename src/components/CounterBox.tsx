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
      className="inner wow fadeInLeft" 
      data-wow-delay={`${delay}ms`}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="count-outer count-box">
        <span className="count-text">{count}</span>{suffix}
        <div className="counter-title">{title}</div>
      </div>
    </div>
  );
};
