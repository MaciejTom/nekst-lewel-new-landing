"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface ShineBorderProps extends React.HTMLAttributes<HTMLDivElement> {
  borderWidth?: number;
  duration?: number;
  shineColor?: string | string[];
  outside?: boolean;
}

export function ShineBorder({
  borderWidth = 2,
  duration = 14,
  shineColor = "#000000",
  outside = false,
  className,
  style,
  ...props
}: ShineBorderProps) {
  const offset = outside ? `-${borderWidth}px` : "0";

  return (
    <div
      style={
        {
          "--border-width": `${borderWidth}px`,
          "--duration": `${duration}s`,
          top: offset,
          left: offset,
          right: offset,
          bottom: offset,
          backgroundImage: `radial-gradient(transparent,transparent, ${
            Array.isArray(shineColor) ? shineColor.join(",") : shineColor
          },transparent,transparent)`,
          backgroundSize: "300% 300%",
          mask: `linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)`,
          WebkitMask: `linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)`,
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
          padding: "var(--border-width)",
          ...style,
        } as React.CSSProperties
      }
      className={cn(
        "pointer-events-none absolute rounded-[inherit] will-change-[background-position] animate-shine",
        !outside && "inset-0 size-full",
        className
      )}
      {...props}
    />
  );
}
