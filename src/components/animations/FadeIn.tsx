
import React, { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  once?: boolean;
}

const FadeIn = ({
  children,
  delay = 0,
  duration = 500,
  className = '',
  direction = 'up',
  once = true,
}: FadeInProps) => {
  const getAnimationClass = () => {
    switch (direction) {
      case 'up':
        return 'animate-fade-in';
      case 'down':
        return 'animate-fade-in';
      case 'left':
        return 'animate-slide-in-left';
      case 'right':
        return 'animate-slide-in-right';
      default:
        return 'animate-fade-in';
    }
  };

  const style = {
    animationDuration: `${duration}ms`,
    animationDelay: `${delay}ms`,
    animationFillMode: 'forwards',
    opacity: 0,
  } as React.CSSProperties;

  return (
    <div
      className={cn('will-change-transform', getAnimationClass(), className)}
      style={style}
    >
      {children}
    </div>
  );
};

export default FadeIn;
