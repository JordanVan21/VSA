import React from "react";
import { FadeInOnScroll } from "./FadeInOnScroll";

interface FadeInSectionProps {
  children: React.ReactNode;
  baseClassName?: string;
  fadeAnimateClassName?: string;
}

const FadeInSection = ({
  children,
  baseClassName = "fade-in-section",
  fadeAnimateClassName,
}: FadeInSectionProps) => {
  const { ref, isVisible } = FadeInOnScroll();

  return (
    <div
      ref={ref}
      className={`${baseClassName} ${isVisible ? fadeAnimateClassName : ""}`}
    >
      {children}
    </div>
  );
};

export default FadeInSection;
