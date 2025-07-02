import { useEffect, useRef, useState } from "react";

export function FadeInOnScroll() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setVisible] = useState(false);

  useEffect(() => {
    // looser threshold on narrow screens
    const smallScreen = window.innerWidth <= 640;
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      {
        threshold: smallScreen ? 0.25 : 0.5,          // 25 % on phones, 50 % elsewhere
        rootMargin: smallScreen ? "0px 0px -5% 0px"
                                : "0px 0px -10% 0px"
      }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return { ref, isVisible };
}