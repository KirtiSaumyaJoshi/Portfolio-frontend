"use client";

import { useState, useRef, useEffect, ReactNode } from "react";
import { Button } from "@mantine/core";

interface RollingButtonProps {
  frontContent: ReactNode;
  backContent: ReactNode;
  href?: string;
  download?: boolean | string;
  padding?: string;
  className?: string;
}

export default function RollingButton({
  frontContent,
  backContent,
  href = "#",
  download = false,
  padding = "6px 20px",
  className = "",
}: RollingButtonProps) {
  const [hovered, setHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  // Re-measure height if content changes
  useEffect(() => {
    if (containerRef.current) {
      setHeight(containerRef.current.offsetHeight);
    }
  }, [frontContent, backContent]);

  const halfHeight = height / 2;

  return (
    <Button
      component="a"
      href={href}
      download={download}
      unstyled
      className={`inline-block ${className}`}
      style={{ perspective: "1000px" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        ref={containerRef}
        className="relative transition-transform duration-500 ease-in-out"
        style={{
          transformStyle: "preserve-3d",
          transform: hovered ? "rotateX(-90deg)" : "rotateX(0deg)",
        }}
      >

        <div
          className="invisible whitespace-nowrap border-[3px] text-xl font-medium flex items-center gap-2"
          style={{ padding }}
        >
          {frontContent}
          <div className="w-0 overflow-hidden flex items-center gap-2">{backContent}</div>
        </div>

        <span
          className="absolute inset-0 flex items-center justify-center gap-2 border-[3px] border-gray-600 bg-[#ABE2FF] text-xl text-[#1B1B1B] font-medium"
          style={{
            backfaceVisibility: "hidden",
            transform: `rotateX(0deg) translateZ(${halfHeight}px)`,
          }}
        >
          {frontContent}
        </span>

        <span
          className="absolute inset-0 flex items-center justify-center gap-2 bg-gray-600 text-xl text-[#ABE2FF] font-medium"
          style={{
            backfaceVisibility: "hidden",
            transform: `rotateX(90deg) translateZ(${halfHeight}px)`,
          }}
        >
          {backContent}
        </span>
      </div>
    </Button>
  );
}