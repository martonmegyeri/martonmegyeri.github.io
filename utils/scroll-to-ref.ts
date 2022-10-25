import { RefObject } from 'react';

export default function scrollToRef<T extends HTMLElement>(ref: RefObject<T>, offset = 0) {
  if (!ref.current) return;

  const y = ref.current.getBoundingClientRect().y + window.scrollY;
  window.scrollTo({ top: y - offset, behavior: 'smooth' });
}
