"use client";

import { ReactNode } from "react";
import { clsx } from "clsx";

export default function GlitchText({ children, className, as: Component = "h2" }: { children: ReactNode, className?: string, as?: any }) {
    return (
        <Component className={clsx("relative inline-block", className)}>
            <span className="relative z-10">{children}</span>
            <span
                className="absolute top-0 left-0 -z-10 w-full h-full text-neon-red opacity-70 animate-glitch"
                style={{ clipPath: 'polygon(0 0, 100% 0, 100% 45%, 0 45%)', transform: 'translate(-2px)' }}
                aria-hidden="true"
            >
                {children}
            </span>
            <span
                className="absolute top-0 left-0 -z-10 w-full h-full text-neon-cyan opacity-70 animate-glitch"
                style={{ clipPath: 'polygon(0 60%, 100% 60%, 100% 100%, 0 100%)', transform: 'translate(2px)', animationDirection: 'reverse' }}
                aria-hidden="true"
            >
                {children}
            </span>
        </Component>
    );
}
