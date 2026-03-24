import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const easeInOutCubic = (t: number) =>
  t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

export function smoothScrollToId(idOrHash: string, options?: { offset?: number; duration?: number }) {
  if (typeof window === 'undefined') return;

  const id = idOrHash.startsWith('#') ? idOrHash.slice(1) : idOrHash;
  const target = document.getElementById(id);
  if (!target) return;

  const offset = options?.offset ?? 84;
  const duration = options?.duration ?? 600;
  const startY = window.scrollY;
  const targetY = Math.max(0, target.getBoundingClientRect().top + startY - offset);
  const distance = targetY - startY;

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion || Math.abs(distance) < 2) {
    window.scrollTo({ top: targetY });
    return;
  }

  const startTime = performance.now();

  const step = (now: number) => {
    const elapsed = now - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const eased = easeInOutCubic(progress);
    window.scrollTo({ top: startY + distance * eased });
    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  };

  window.requestAnimationFrame(step);
}
