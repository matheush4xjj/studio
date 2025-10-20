'use client';
import React, { useRef, useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

type AnimatedWrapperProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
};

export function AnimatedWrapper({
  children,
  className,
  delay = 0,
}: AnimatedWrapperProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Se não houver delay, a animação é imediata.
    // Isso é útil para os componentes carregados dinamicamente que já estarão visíveis.
    if (delay === 0 && !isVisible) {
      const rect = element.getBoundingClientRect();
      if (rect.top <= window.innerHeight && rect.bottom >= 0) {
        setIsVisible(true);
        return;
      }
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
            if (element) {
                observer.unobserve(element);
            }
          }, delay);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [delay, isVisible]);

  return (
    <div
      ref={ref}
      className={cn(
        'transition-all duration-1000 ease-out',
        isVisible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-8',
        className
      )}
    >
      {children}
    </div>
  );
}
