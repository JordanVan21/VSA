import { useEffect, useRef, useState } from "react";

export function FadeInOnScroll() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      {
        threshold: 0.5, // 50 % must be on-screen
        rootMargin: "0px 0px -10% 0px", // and keep it alive a bit longer
      }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return { ref, isVisible };
}
