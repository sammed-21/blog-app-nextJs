import React from "react";
import { cn } from "../lib/cn";
interface GridBackgroundDemoType {
  children: React.ReactNode;
  className: String;
}

export function GridBackgroundDemo({
  children,
  className,
}: GridBackgroundDemoType) {
  return (
    <div
      className={cn(
        "h-[50rem] w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center",
        className
      )}
    >
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      {children}
    </div>
  );
}
